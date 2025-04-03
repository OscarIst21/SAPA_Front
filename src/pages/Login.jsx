import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { user, password });
    
    try {
      console.log('Sending request to API...');
      const response = await fetch('http://localhost/sapaCecyte/public/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo_Usuario: user,
          password: password
        })
      });

      const data = await response.json();
      console.log('API Response:', data);
      console.log('Response status:', response.status);
      
      if (response.ok) {
        console.log('Login successful, setting token...');
        login(data.token);
        console.log('Token stored, attempting navigation...');
        navigate("/inicio", { replace: true });
        console.log('Navigation triggered');
      } else {
        console.log('Login failed:', data.message);
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Error de conexión al servidor');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h2>Iniciar Sesión</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleLogin} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minWidth: '300px'
      }}>
        <input 
          type="email"
          placeholder="Correo electrónico" 
          value={user} 
          onChange={(e) => setUser(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '16px'
          }}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '16px'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
