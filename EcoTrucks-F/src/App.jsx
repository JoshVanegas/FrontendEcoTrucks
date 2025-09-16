
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import UserView from './views/UserView';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/:id" element={<UserView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
