import React, { useEffect, useState } from "react";

const Profile = ({ token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Token:", token);
        const response = await fetch("http://localhost:6969/api/v1/user/IAM", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the header
          },
        });

        const data = await response.json();
        console.log("Response:", data); // Debugging
        if (data.success) {
          setUser(data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
