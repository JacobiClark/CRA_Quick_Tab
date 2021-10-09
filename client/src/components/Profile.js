import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, authLoading } = useAuth0();
  const [api, setApi] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((data) => setApi(data));
  }, []);

  if (authLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {api && JSON.stringify(api)}
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
