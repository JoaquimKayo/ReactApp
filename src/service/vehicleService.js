const urlbase = "http://localhost:8080/veiculo";
const urlvehicle = "http://localhost:8080/veiculo/all";
const axios = require("axios");

class VehicleService{
    
    getVehicle(){
        return axios.get(urlvehicle);
    }

    getVehicleById(id){
        return axios.get(urlbase+"/locate_vehicle/"+id);
    }

    updateVehicle(veiculo){
        return axios.put(urlbase + "/vehicle/" + veiculo.id_veiculo, veiculo);
    }

    newVehicle(veiculo){
        return axios.post(urlbase + "/addvehicle", veiculo);
    }

    deleteVehicle(id){
        return axios.delete(urlbase+"/delete_vehicle/"+id);
    }
}

export default new VehicleService();