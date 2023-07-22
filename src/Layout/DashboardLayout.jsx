import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Employee from '../Page/Admin/Employee/Employee';
import icon from '../assets/Logo/Vector.png'
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
const DashboardLayout = () => {
  const [open, setOpen] = useState(false)
  // console.log(open);
    return (
      <div className="my_container ">
        <div className="flex gap-5 mt-10">
          <div>
            <div className="flex gap-10">
              <div>
                <h2 className="text-3xl font-semibold mb-5">
                  <Link to="/">Home</Link>
                </h2>
              </div>
              <div>
                <img
                  src={icon}
                  className="block mt-2"
                  onClick={() => setOpen(!open)}
                />
              </div>
            </div>
            <ul className="font-semibold">
              {open ? (
                <div>
                  <li className="mb-3">
                    <AiOutlineUser size={25} />
                  </li>
                  <li>
                    <MdOutlineContentCopy size={25} />
                  </li>
                </div>
              ) : (
                <div>
                  {" "}
                  <li>
                    <Link to="employee" className="flex items-center mb-3 gap-2">
                      {" "}
                      <AiOutlineUser size={25} />
                      ALL Employee
                    </Link>
                  </li>
                  <li>
                    <Link to="all-product" className=" gap-2 flex items-center mb-3">
                      <MdOutlineContentCopy size={25} />
                      All Product
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashboardLayout;