import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux-toolkit/userSliceReducer";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AdminComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let data2 = useSelector((state) => state.users);

  const [data3, setData] = useState();
  useEffect(() => {
    setData(data2);
    console.log("data3changed");
  }, [data2]);

  async function deleteFun(id) {
    try {
      let res = await axios.delete(`http://localhost:4000/user/${id}`);
      if (res.status == 200) {
        dispatch(deleteUser(res?.data?.allData));
        setData(res?.data.allData);
        // navigate("/admin");
        // setData(res?.data?.allData);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Welcome Admin</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data3?.map((item, ind) => {
            return (
              <tr key={ind}>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  <button onClick={() => deleteFun(item?.id)}>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminComponent;
