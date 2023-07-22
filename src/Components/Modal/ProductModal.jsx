import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ProductModal = ({refetch}) => {

    const { register, handleSubmit,reset } = useForm();
  const onSubmit = async (data) => { 
    const productsData = {
      productName: data.name,
      price: data.price,
      weight: data.weight,
      image : data.image
    }
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productsData),
    });
    if (res.status == 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product added Done",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      refetch()
    }
   
    
    // console.log(productsData)

  }
    return (
      <div>
        <dialog id="my_modal_3" className="modal">
          <div method="dialog" className="modal-box">
            <button className=" pe-4 btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              Press ESC
            </button>
            <form
              onSubmit={handleSubmit(onSubmit)}
             
              // className="modal-box w-11/12 max-w-[600px]"
            >
              <input
                placeholder="Product name "
                className=" me-4 border border-[#a4d151] my-4 py-1 px-2 rounded-lg "
                {...register("name")}
              />{" "}
              <input
                type="number"
                placeholder="Product Price "
                className="border border-[#a4d151] my-4 py-1 px-2 rounded-lg "
                {...register("price")}
              />  <input
              
                placeholder="Product Weight "
                className=" me-4 border border-[#a4d151] my-4 py-1 px-2 rounded-lg "
                {...register("weight")}
              />
             
              <input
                type="url"
                placeholder="Product Image "
                className="border border-[#a4d151] my-4 py-1 px-2 rounded-lg "
                {...register("image")}
              />{" "}
              <br />
              <input
                className="px-4 py-2 bg-[#9eb448] font-semibold text-white rounded-md mt-5"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </dialog>
      </div>
    );
};

export default ProductModal;