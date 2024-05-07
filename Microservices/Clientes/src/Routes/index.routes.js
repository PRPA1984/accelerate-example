
//Entity Routes
import CityRoute from "./entityRoutes/CityRoute.js";
import ClientRoute from "./entityRoutes/ClientRoute.js";

//v1 Routes
import loginRoute from "./v1Routes/loginRoute.js";
import logoutRoute from "./v1Routes/logoutRoute.js";



export default {
	entityRoutes: [CityRoute,ClientRoute],
	v1Routes:[loginRoute,logoutRoute],

	
}
