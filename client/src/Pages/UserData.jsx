import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./userData.css";

import { addUserData } from "../redux-toolkit/userSliceReducer.js";
import { NavLink } from "react-router-dom";

const UserData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getAllData();
  }, []);
  const dispatch = useDispatch();
  const getAllData = async () => {
    const res = await axios.get("http://localhost:4000/alluser");
    try {
      if (res?.status == 200) {
        dispatch(addUserData(res?.data?.allData));
        setData(res?.data?.allData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {}, [data]);
  return (
    <div>
      <NavLink to="/admin">ADMIN PAGE</NavLink>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, ind) => {
            return (
              <tr key={ind}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
