import React, { useState, useEffect } from "react";

import "./App.css";

const url = "https://www.live-rates.com/rates?key=44008999cd";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [updateHourly, setUpdateHourly] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(url);
      const json = await response.json();
      setUpdateHourly(json);
    }
    fetchMyAPI();
  }, []);
  if (isLoading) {
    setIsLoading(false);
    return <div>Loading...</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">Rate</th>
          <th scope="col">Bid</th>
          <th scope="col">Ask</th>
          <th scope="col">High</th>
          <th scope="col">Open</th>
          <th scope="col">Low</th>
          <th scope="col">Close</th>
          <th scope="col">Time Stamp</th>
        </tr>
      </thead>
      {updateHourly.map((t, i) => (
        <tbody key={i}>
          <tr>
            <td>{t.currency}</td>
            <td>{t.rate}</td>
            <td>{t.bid}</td>
            <td>{t.ask}</td>
            <td>{t.high}</td>
            <td>{t.low}</td>
            <td> {t.open}</td>
            <td> {t.close}</td>
            <td>{t.timestamp}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default App;
