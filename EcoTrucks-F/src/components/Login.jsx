
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

function Login() {
    const [login, setLogin] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const HandleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await UserService.loginUser(login.email, login.password);
            localStorage.setItem('userToken', res.token);
            localStorage.setItem('userId', res.id);
            navigate(`/user/${res.id}`);
        } catch {
            setError('Credenciales incorrectas o error de conexión');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-green-700">Iniciar sesión</h1>
                <form onSubmit={HandleLogin} className="flex flex-col gap-4">
                    <input type="email" placeholder="Correo electrónico" required className="border px-4 py-2 rounded" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                    <input type="password" placeholder="Contraseña" required className="border px-4 py-2 rounded" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-2xl font-semibold hover:bg-green-700 transition">Iniciar sesión</button>
                </form>
                {error && <div className="text-red-500 mt-4">{error}</div>}
                <button onClick={() => navigate(-1)} className="mt-6 text-green-700 hover:underline">← Volver</button>
            </div>
        </div>
    );
}

export default Login;