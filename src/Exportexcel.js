import React from "react";
import { CSVLink } from "react-csv";
import { useState } from "react";
import "./App.css";

const ExportExcel = (obj) => {
  const [data, setData] = useState(obj);
  const [checked, setChecked] = useState([]);
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);

  const allKeys = Object.keys(data.obj[0]);

  const handleChange = (key) => {
    setVisible(false);
    const newChecked = [...checked];
    const index = newChecked.indexOf(key);
    if (index === -1) {
      newChecked.push(key);
    } else {
      newChecked.splice(index, 1);
    }
    setChecked(newChecked);
  };

  const sendForPrint = () => {
    const finalObj = [];
    data.obj.forEach((user) => {
      const tempObj = {};
      for (let key in user) {
        if (checked.includes(key)) {
          tempObj[key] = user[key];
        }
      }
      finalObj.push(tempObj);
    });
    setList(finalObj);
    setVisible(true);
    // console.log(list);
  };

  return (
    <>
      <h1>Excel downloader</h1>
      <h4>Select Columns to print</h4>

      <ul>
        {allKeys.map((key) => (
          <li key={key}>
            <label>
              <input
                type="checkbox"
                checked={checked.includes(key)}
                onChange={() => handleChange(key)}
              />
              {key}
            </label>
          </li>
        ))}
      </ul>
      <hr></hr>
      {checked.map((p, id) => {
        return <p key={id}>{p}</p>;
      })}

      <button onClick={() => sendForPrint()}>Selected Print</button>
        {visible ? 
            <CSVLink data={list} className="btn btn-success">
              Download csv
            </CSVLink>:
          (<p>Please select the columns to print in excel</p>)
        }
    </>
  );
};
export default ExportExcel;
