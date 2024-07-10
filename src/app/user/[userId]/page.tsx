'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
  followers: number;
  editPermissions: boolean;
  biography: string;
  creationDate: string;
  email: string;
  image: string;
}

const UsersPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [changePasswordMode, setChangePasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = '66686cd7c6b895b683eae568'; // Reemplaza con la lógica para obtener el ID del usuario logueado
        const response = await axios.get(`/api/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    if (user?.editPermissions) {
      setEditMode(true);
    }
  };

  const handleSaveClick = async () => {
    setEditMode(false);
    setChangePasswordMode(false);
    try {
      const response = await axios.put(`/api/user/${user?._id}`, {
        ...user,
        password: newPassword,
      });
      if (response.status === 200) {
        setUser(response.data);
        alert('Perfil actualizado con éxito');
      } else {
        alert('Error al actualizar el perfil');
      }
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Error al actualizar el perfil');
    }
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && user) {
          setUser(prevState => ({
            ...prevState!,
            image: event.target.result as string,
          }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handlePasswordChangeClick = () => {
    setChangePasswordMode(true);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-20 p-6 shadow-lg text-center text-gray-600">
      <div className="top-nav flex justify-between items-center py-4 px-8 text-gray-800">
        <span className="profile-tag bg-green-500 text-white py-1 px-3 rounded-full">Developer</span>
        <span className="user-num font-bold">{user.followers}</span>
      </div>
      <div className="user-content relative p-10">
        <div className="user-pro-edit relative mx-auto mb-8 w-36 h-36 rounded-full shadow-lg bg-cover bg-center" style={{ backgroundImage: `url(${user.image})` }}>
          {user.editPermissions && editMode && (
            <input
              type="file"
              onChange={handleProfilePictureChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          )}
        </div>
        {editMode ? (
          <div>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} className="block mx-auto mb-2 p-1 border border-gray-300 rounded" />
            <input type="email" name="email" value={user.email} onChange={handleInputChange} className="block mx-auto mb-2 p-1 border border-gray-300 rounded" />
            <textarea name="biography" value={user.biography} onChange={handleInputChange} className="block mx-auto mb-2 p-1 border border-gray-300 rounded"></textarea>
            {changePasswordMode && (
              <input type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Nueva Contraseña" className="block mx-auto mb-2 p-1 border border-gray-300 rounded" />
            )}
            {!changePasswordMode && (
              <button onClick={handlePasswordChangeClick} className="bg-blue-500 text-white py-2 px-4 rounded">Cambiar Contraseña</button>
            )}
          </div>
        ) : (
          <div>
            <div className="user-name font-bold text-xl">{user.name}</div>
            <div className="user-job-profile text-sm">{user.email}</div>
            <div className="user-biography mt-4">{user.biography}</div>
          </div>
        )}
        {user.editPermissions && (
          <div className="mt-4">
            {editMode ? (
              <button onClick={handleSaveClick} className="bg-blue-500 text-white py-2 px-4 rounded">Guardar Cambios</button>
            ) : (
              <button onClick={handleEditClick} className="bg-blue-500 text-white py-2 px-4 rounded">Editar Perfil</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
