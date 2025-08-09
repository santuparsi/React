import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Role: {user.role}</h3>
    </div>
  );
}

export default Profile;
