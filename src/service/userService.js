const urlbase = "http://localhost:8080/usuario";
const urluser = "http://localhost:8080/usuario/all";
const axios = require("axios");

class UserService{
    
    getUser(){
        return axios.get(urluser);
    }
}

export default new UserService();