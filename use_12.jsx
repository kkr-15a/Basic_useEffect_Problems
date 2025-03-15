import React, { useState, useEffect } from "react";

function PageSearching() {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(`Page ${pageNumber}`);
    setData([`Results ${pageNumber}`]);
  }, [pageNumber]);

  return (
    <div>
      <h3>{data}</h3>
      <button onClick={() => setPageNumber(pageNumber + 1)}>Change Page</button>
    </div>
  );
}

export default PageSearching;
