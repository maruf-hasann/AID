import React, { useContext } from 'react';
import animation from '../../assets/Lottie/animation_lkc0uk54.json'
import Lottie from "lottie-react";
import { useForm } from 'react-hook-form';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const { user,login } = useContext(authContext)
    console.log(user.email);
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => { 
        login(data.email, data.password)
            .then(result => {
               
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Done",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                navigate("/dashboard/employee");
            })
        .catch(err => console.log(err))

    }

    return (
        <div className="w-[1000px] mx-auto mt-16">
            <h3 className='mx-auto text-4xl font-bold text-center'>Login</h3>
        <div className="flex items-center">
          <div className='w-1/2'>
            <Lottie className='w-[400px]' animationData={animation} loop={true} />;
          </div>
                <div className='w-1/2'>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                            className="border border-[#a4d151] py-1 px-2 rounded-lg "
                        placeholder='Email'
                {...register("email", { required: true, maxLength: 20 })}
              /> <br/>
              <input
                className="border border-[#a4d151] py-1 px-2 rounded-lg my-3 "
                            type="password"
                        placeholder='Password'
                {...register("password", { min: 5, max: 99 })}
                        />{" "} <br/>
                        <h3><Link to='/register'>Or Register</Link></h3>
              <br />
              <input
                type="submit"
                value="Login"
                className="border border-[#a4d151] py-2 px-4 rounded-lg  font-semibold text-xl "
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;