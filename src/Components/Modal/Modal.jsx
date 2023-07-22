import React from 'react';
import { useForm } from 'react-hook-form';
import './Modal.css'
import Swal from 'sweetalert2';
const Modal = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = async(data) => {

        const employee = {
          name: data.name,
            userName: data.userName,
            email: data.email,
            plan: data.plan,
            role: data.role,
            status: data.status
          
        };

        const res = await fetch("http://localhost:3000/employee", {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(employee)
        });
        if (res.status == 200) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "New Employee added Done",
              showConfirmButton: false,
              timer: 1500,
            });
            reset()
       }
    };
    return (
      <div>
        <dialog id="my_modal_4" className="modal">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="modal-box w-11/12 max-w-[600px]"
          >
            <div>
              <input
                className="border border-[#a4d151] py-1 px-2 rounded-lg me-4 "
                placeholder="Name"
                {...register("name", { maxLength: 20 })}
              />{" "}
              <input
                placeholder="User Name "
                className="border border-[#a4d151] my-4 py-1 px-2 rounded-lg "
                {...register("userName", { pattern: /^[A-Za-z]+$/i })}
              />
            </div>
            <div>
              <input
                className="border border-[#a4d151] py-1 px-2 rounded-lg "
                placeholder="Email"
                type="email"
                {...register("email")}
              />
              <input
                className="input"
                type="text"
                placeholder="Plan"
                {...register("plan")}
              />
            </div>
            <div>
              <input
                className="input mt-4"
                type="text"
                placeholder="Role"
                {...register("role")}
              />{" "}
              <input
                className="input mt-4"
                type="text"
                placeholder="Status"
                {...register("status")}
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 bg-[#9eb448] font-semibold text-white rounded-md mt-10"
            />
            <div >
              {/* if there is a button, it will close the modal */}
              <h3 className='mt-3 ' >Press ESE to remove Modal</h3>
                    </div>
                    
          </form>
         
        </dialog>
      </div>
    );
};

export default Modal;