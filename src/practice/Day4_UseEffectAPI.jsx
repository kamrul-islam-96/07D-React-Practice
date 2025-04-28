const Day4 = () => {
    return (
      <div>
        <UseEffectAPI />
      </div>
    )
  }
  
export default Day4;



import React, { useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      const data = await response.json();
      if (data.users && data.users.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.users.length);
        setUser(data.users[randomIndex]);
      } else {
        setError("No user found");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "red" }}>Error: {error}</h2>
      <button onClick={fetchUser}>Reload User</button>
    </div>
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Random User</h1>
      {user && (
        <div>
          <img
            src={user.image}
            alt="User"
            style={{ borderRadius: "50%", marginBottom: "10px", width: "150px" }}
          />
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
        </div>
      )}
      <button onClick={fetchUser} style={{ marginTop: "20px" }}>
        🔄 Reload User
      </button>
    </div>
  );
};






