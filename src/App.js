import React, { Fragment, useState } from "react";

function App() {
  var data = [
    {
      Username: "booker12",
      Identifier: "9012",
      "First Name": "Rachel",
      "Last Name": "Booker",
    },
    {
      Username: "grey07",
      Identifier: "2070",
      "First Name": "Laura",
      "Last Name": "Grey",
    },
    {
      Username: "johnson81",
      Identifier: "4081",
      "First Name": "Craig",
      "Last Name": "Johnson",
    },
    {
      Username: "jenkins46",
      Identifier: "9346",
      "First Name": "Mary",
      "Last Name": "Jenkins",
    },
    {
      Username: "smith79",
      Identifier: "5079",
      "First Name": "Jamie",
      "Last Name": "Smith",
      VIP: "true",
    },
  ];

  const [dataUpdate, setDataUpdate] = useState(data);
  const [order, setOrder] = useState("ascending");

  const isSorted = (header) => {
    if (order === "ascending") {
      const isSorted = []
        // using concatination
        .concat(data)
        .sort((a, b) => (a[header] > b[header] ? 1 : -1));
      setDataUpdate(isSorted);
      setOrder("descending");
    }
    if (order === "descending") {
      // using spread operation
      const isSorted = [...data].sort((a, b) =>
        a[header] < b[header] ? 1 : -1
      );
      setDataUpdate(isSorted);
      setOrder("ascending");
    }
  };
  const renderData = (data, index) => {
    return (
      <tr>
        <td></td>
      </tr>
    );
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => isSorted("Username")}>Username</th>
            <th onClick={() => isSorted("Identifier")}>Identifier</th>
            <th onClick={() => isSorted("First Name")}>First Name</th>
            <th onClick={() => isSorted("Last Name")}>Last Name</th>
            <th onClick={() => isSorted("VIP")}>VIP</th>
          </tr>
        </thead>
        <tbody>
          {dataUpdate.map((data, index) => (
            <Fragment key={index.id}>
              <tr>
                <td>{data.Username}</td>
                <td>{data.Identifier}</td>
                <td>{data["First Name"]}</td>
                <td>{data["Last Name"]}</td>
                <td>{data.VIP}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
