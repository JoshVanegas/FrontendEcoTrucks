
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await UserService.registerUser(form.name, form.email, form.password);
      localStorage.setItem('userToken', res.token);
      localStorage.setItem('userId', res.id);
      navigate(`/user/${res.id}`);
    } catch {
      setError('Error al registrar o conexión fallida');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-green-700">Registrarse</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" required className="border px-4 py-2 rounded" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Correo electrónico" required className="border px-4 py-2 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" placeholder="Contraseña" required className="border px-4 py-2 rounded" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-2xl font-semibold hover:bg-green-700 transition">Registrarse</button>
        </form>
        {error && <div className="text-red-500 mt-4">{error}</div>}
        <button onClick={() => navigate(-1)} className="mt-6 text-green-700 hover:underline">← Volver</button>
      </div>
    </div>
  );
}

export default Register;
