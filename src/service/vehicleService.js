const urlbase = "http://localhost:8080/veiculo";
const urlvehicle = "http://localhost:8080/veiculo/all";
const axios = require("axios");

class VehicleService{
    
    getVehicle(){
        return axios.get(urlvehicle);
    }
}

export default new VehicleService();