import React from 'react';
import ProductModal from '../../../Components/Modal/ProductModal';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BsThreeDotsVertical } from "react-icons/bs";

const AllProduct = () => {
     const { data: products = [], refetch } = useQuery(["products"], async () => {
       const res = await axios.get("http://localhost:3000/products-show");
       return res.data;
     });
  
    return (
      <div className="w-[1092px]">
        <h1 className="font-bold ms-24 text-3xl text-[#975efe] mb-5">
          All Products
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
              onClick={() => window.my_modal_3.showModal()}
              className="bg-[#9155fd] text-white btn font-semibold px-4 py-2 rounded-md"
            >
              ADD NEW PRODUCT
            </button>
            <ProductModal refetch={refetch} />
          </div>
        </div>
        <div className="mt-5">
          <table className="table ms-16">
            {/* head */}
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT NAME</th>
                <th>WEIGHT</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td>
                    <img src={p.image} className="w-[40px] h-[50px]" />
                  </td>
                  <td>
                    <h3>{p.productName}</h3>
                  </td>
                  <td>
                    <h3>{p.weight}</h3>
                  </td>
                  <td>
                    <h3>{p.price}</h3>
                  </td>
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

export default AllProduct;