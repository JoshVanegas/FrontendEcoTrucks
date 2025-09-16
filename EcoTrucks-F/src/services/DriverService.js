import axios from "axios";

const DriverService = {
    async loginDriver(email, password) {
        try {
            const res = await axios.post("https://api.ecotrucks.com/driver/login", { email, password });
            return res.data;
        } catch {
            throw new Error("Login conductor fallido");
        }
    },

    async getDriverProfile(id) {
        try {
            const res = await axios.get(`https://api.ecotrucks.com/driver/${id}`);
            return res.data;
        } catch {
            throw new Error("Conductor no encontrado");
        }
    }
};

export default DriverService;
