import axios from "axios";

const UserService = {
    async registerUser(name, email, password) {
        try {
            const res = await axios.post("https://api.ecotrucks.com/user/register", { name, email, password });
            return res.data;
        } catch {
            throw new Error("Registro de usuario fallido");
        }
    },
    async loginUser(email, password) {
        try {
            const res = await axios.post("https://api.ecotrucks.com/user/login", { email, password });
            return res.data;
        } catch {
            throw new Error("Login usuario fallido");
        }
    },

    async getUserProfile(id) {
        try {
            const res = await axios.get(`https://api.ecotrucks.com/user/${id}`);
            return res.data;
        } catch {
            throw new Error("Usuario no encontrado");
        }
    },

    async updateUserLocation(id, latitude, longitude) {
        try {
            const res = await axios.put(`https://api.ecotrucks.com/user/${id}/location`, { latitude, longitude });
            return res.data;
        } catch {
            throw new Error("Actualización de ubicación fallida");
        }
    }
};

export default UserService;
