import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'; 
import { getUserProfileByEmail, createUserProfile } from '../services/userService'; 

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    favoriteGame: '',
  });

  const history = useHistory();

  useEffect(() => {
    // Obtenemos el perfil del usuario actual al cargar la página
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfileByEmail('correo@ejemplo.com'); // Reemplaza con el correo del usuario actual
        if (userProfile) {
          setUserData(userProfile);
        }
      } catch (error) {
        console.error('Error al obtener el perfil de usuario:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserProfile(userData.email, userData); // Actualizamos el perfil del usuario
      alert('Perfil actualizado exitosamente');
      history.push('/'); // Redirige a la página de inicio después de actualizar el perfil
    } catch (error) {
      console.error('Error al actualizar el perfil de usuario:', error);
      alert('Ocurrió un error al actualizar el perfil');
    }
  };

  return (
    <div>
      <Header />
      <h1>Perfil de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="firstName" value={userData.firstName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" name="lastName" value={userData.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} readOnly />
        </div>
        <div>
          <label>Juego favorito:</label>
          <input type="text" name="favoriteGame" value={userData.favoriteGame} onChange={handleInputChange} />
        </div>
        <button type="submit">Actualizar Perfil</button>
      </form>
    </div>
  );
};

export default ProfilePage;