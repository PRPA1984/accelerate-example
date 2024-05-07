# Ejemplo de despliegue

Accelerate genera automáticamente una serie de archivos para el aprovisionamiento y el despliegue de un cluster de GKE.

## Pasos de despliegue
### Google Kubernetes Engine
Primero, debemos crear un cluster de GKE con los siguientes comandos

```bash
cd Deployment\ Config\ -\ Environment
terraform init
terraform apply
```

### Github Actions - Docker build and push
Luego, para cada microservicio, creamos un repositorio de Github y lo subimos a la web.

Al hacer esto, automáticamente tendríamos dos imágenes Docker disponibles en docker.io

### Despliegue con manifiestos de Kubernetes
Una vez que realizamos los pasos previos, aplicamos los manifiestos de Kubernetes

```bash
 cd ../Kubernetes\ Config\ -\ Microservices/  
 kubectl apply -f . --recursive
 ```