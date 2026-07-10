import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h2>{user.name}</h2>

              <p>
                <strong>Username:</strong> {user.username}
              </p>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>Website:</strong> {user.website}
              </p>

              <p>
                <strong>Company:</strong> {user.company.name}
              </p>

              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;