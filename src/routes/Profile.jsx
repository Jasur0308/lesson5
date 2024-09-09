import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found, please login.');
      navigate('/login');
    } else {
      
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      
      if (username && password) {
        
        const userProfile = {
          username,
          email: `${username}@example.com`
        };
        setProfile(userProfile);
      } else {
        setError('Failed to load profile data');
      }
    }
  }, [navigate]);

  if (error) return <div>{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">{profile.username}</h2>
        <p className="text-gray-700"><strong>Email:</strong> {profile.email}</p>
      </div>
    </div>
  );
};

export default Profile;