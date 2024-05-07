provider "google" {
  version = "~> 4.41.0"
}
module "gke_auth" {
  source = "terraform-google-modules/kubernetes-engine/google//modules/auth"
  depends_on   = [module.gke] 
  project_id   = var.project_id
  location     = module.gke.location
  cluster_name = module.gke.name
}
resource "local_file" "kubeconfig" {
  content  = module.gke_auth.kubeconfig_raw
  filename = "kubeconfig-${var.env_name}"
}
module "gcp-network" {
  source       = "terraform-google-modules/network/google"
  project_id   = var.project_id
  network_name = "${var.network}-${var.cluster_name}-${var.env_name}"
  subnets = [
    {
      subnet_name   = "${var.subnetwork}-${var.cluster_name}-${var.env_name}"
      subnet_ip     = "10.10.0.0/16"
      subnet_region = "southamerica-west1"
    },
  ]
  secondary_ranges = {
    "${var.subnetwork}-${var.cluster_name}-${var.env_name}" = [
      {
        range_name    = var.ip_range_pods_name
        ip_cidr_range = "10.20.0.0/16"
      },
      {
        range_name    = var.ip_range_services_name
        ip_cidr_range = "10.30.0.0/16"
      },
    ]
  }
}
module "gke" {
  source                 = "terraform-google-modules/kubernetes-engine/google//modules/private-cluster"
  project_id             = var.project_id
  name                   = "${var.cluster_name}-${var.env_name}"
  region                 = "southamerica-west1"
  zones                  = ["southamerica-west1-a"]
  network                = module.gcp-network.network_name
  subnetwork             = module.gcp-network.subnets_names[0]
  ip_range_pods          = var.ip_range_pods_name
  ip_range_services      = var.ip_range_services_name
  regional               = true
  node_pools = [ 
    {
      name                      = "default-pool"
      machine_type              = "e2-medium"
      node_locations            = "southamerica-west1-a"
      min_count                 = 3
      initial_node_count        = 3
      max_count                 = 4
      disk_size_gb              = 10
    },
  ]
}
