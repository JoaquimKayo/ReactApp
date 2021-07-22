const urlbase = "http://localhost:8080/usuario";
const urluser = "http://localhost:8080/usuario/all";
const axios = require("axios");

class UserService {

    getUser() {
        return axios.get(urluser);
    }
    
    getUserById(id){
        return axios.get(urlbase+"/locate_user/"+id);
    }

    newUser(usuario) {
        return axios.post(urlbase + "/adduser", usuario);
    }

    updateUser(usuario) {
        return axios.put(urlbase + "/user/" + usuario.id_usuario, usuario);
    }

    deleteUser(id) {
        return axios.delete(urlbase + "/delete_user/" + id);
    }
}

export default new UserService();