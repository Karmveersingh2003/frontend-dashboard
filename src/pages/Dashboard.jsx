import React, { useState, useEffect } from "react";
import "./busroutetable.css";

const BusRouteTable = () => {
  const [tablesData, setTablesData] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/bus-routes"); // Replace with your API endpoint
        const data = await response.json();
        setTablesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  /* api data should be in this format */
  // [
  //   {
  //     "title": "Route Details",
  //     "routes": [
  //       { "pickupPoint": "RAM MOHALLA", "time": "7:15" },
  //       { "pickupPoint": "NAGORIGATE", "time": "7:18" },
  //       { "pickupPoint": "SHIP HOUSE", "time": "7:20" },
  //       { "pickupPoint": "JIET", "time": "7:50" }
  //     ]
  //   },
  //   {
  //     "title": "Another Route Details",
  //     "routes": [
  //       { "pickupPoint": "SOMEWHERE", "time": "8:15" },
  //       { "pickupPoint": "NOWHERE", "time": "8:18" }
  //     ]
  //   }
  // ]
  
  return (
    <div className="table-route-container">
      <h1>route</h1>
      {tablesData.map((table, index) => (
        <table key={index}>
          <thead>
            <tr className="full-row-one-route ">
              <td colSpan="3">BUS ROUTE INFORMATION</td>
            </tr>
            <tr className="full-row-route">
              <td colSpan="3">Table {index + 1}: {table.title}</td>
            </tr>
            <tr>
              <th>S.NO</th>
              <th>PICK UP POINT</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {table.routes.map((route, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{route.pickupPoint}</td>
                <td>{route.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default BusRouteTable;
