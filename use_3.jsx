import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((j) => setData(j));
  }, []);

  return (
    <div>
      <h3>Data from the API:</h3>
      {data.map((post) => (
        <div>
          <h5>
            {post.id}. {post.title}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default FetchData;
