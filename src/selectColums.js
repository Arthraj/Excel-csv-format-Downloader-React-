import React from "react";
import { useState } from "react";
import { CSVLink } from "react-csv";

function Columns(rawData) {
  const [data, setData] = useState(rawData);
  const handleExcelExport = () => {};

  const tableRows = data.rawData.map((element,id) => {
    return (
      <tr key={id}>
        <td>{element.id}</td>
        <td>{element.userId}</td>
        <td>{element.title}</td>
        <td>{element.body}</td>
      </tr>
    );
  });

  return (
    <div className="App">

        <CSVLink data={data.rawData} className="btn btn-primary">Download csv</CSVLink>

      <table>
        <thead>
          <tr>
            <th> Name</th>
            <th>email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>

    </div>
  );
}

export default Columns;
