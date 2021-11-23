import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Profile() {
  let navigate = useNavigate();
  let { user } = useParams();
  let str = 'This is a profile page';
  return (
    <div>
      {user && (
        <h1>
          {str} &gt; {user}
        </h1>
      )}

      {!user && <h1>{str}</h1>}
      <button onClick={() => navigate('/about')}>Go about page</button>
    </div>
  );
}
export default Profile;
