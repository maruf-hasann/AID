import React, { useEffect, useState } from 'react';
import Modal from '../../../Components/Modal/Modal';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BsThreeDotsVertical } from "react-icons/bs";

const Employee =  () => {
  const { data: employee = [], refetch } = useQuery(["products"], async () => {
    const res = await axios.get("http://localhost:3000/show");
    return res.data;
  });
console.log(employee);
    return (
      <div className="w-[1092px]">
        <h1 className="font-bold ms-24 text-3xl text-[#975efe] mb-5">
          All Employee
        </h1>
        <div className="flex justify-between ms-24 ">
          <div className="flex gap-4">
            <button className="border border-[#c4c5c8] px-[22px] font-semibold text-[#8a8d93]">
              PDF
            </button>
            <button className="border border-[#c4c5c8] px-[22px] font-semibold text-[#8a8d93]">
              EXCEL
            </button>
            <button className="border border-[#c4c5c8] px-[22px] font-semibold text-[#8a8d93]">
              PRINT
            </button>
            <button className="border border-[#c4c5c8] px-[22px] font-semibold text-[#8a8d93]">
              SHOW/HIDE COLUMN
            </button>
          </div>
          <div>
            <button
              onClick={() => window.my_modal_4.showModal()}
              className="bg-[#9155fd] text-white btn font-semibold px-4 py-2 rounded-md"
            >
              ADD NEW EMPLOYEE
            </button>
            <Modal />
          </div>
        </div>
        <div className="overflow-x-auto ms-20 mt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>EMPLOYEE NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>PLAN</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((data) => (
                <tr key={data._id}>
                  <td>
                    <h3>{data.name}</h3>
                    <h3>{data.userName}</h3>
                  </td>
                  <td>{data.email}</td>
                  <td>{data.role}</td>
                  <td>{data.plan}</td>
                  <td>{data.status}</td>
                  <td>
                   
                    <BsThreeDotsVertical />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Employee;