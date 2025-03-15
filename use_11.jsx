import React, { useState, useEffect } from "react";

function DataFetching() {
  const [user, setUser] = useState(null);
  const [fetchD, setFetch] = useState(false);

  useEffect(() => {
    if (fetchD) {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, [fetchD]);

  return (
    <div>
      <button onClick={() => setFetch(true)}>Get the user in response</button>
      {user && <h3>{user.name}</h3>}
    </div>
  );
}

export default DataFetching;
