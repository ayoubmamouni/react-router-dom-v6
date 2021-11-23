import React from 'react';
import { useNavigate } from 'react-router-dom';
function Profile() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is a profile page</h1>
      <button onClick={() => navigate('/about')}>Go about page</button>
    </div>
  );
}
export default Profile;
