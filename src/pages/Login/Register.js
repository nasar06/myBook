import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const { signUp, UpdateProfileName, loginWithGoogle } = useContext(AuthContext)
    


    

    //signUp with email and password
    const handelSignUp = async (data) => {

        try {

            //signUp
            const user = await signUp(data.email, data.password);

            
             //update name
             const info = { displayName: data.name }
             await UpdateProfileName(info);
            

        }
        catch (error) {
            console.log(error)
        }

    }



    //login with google
    const handelGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                // toast.success('successfully login')
                
            })
            .catch(err => console.log(err))
    }

    

    return (
        <div className='flex items-center justify-center'>
            <div className='w-96 p-7 bg-white rounded'>
                <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handelSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input bg-sky-100 py-2 rounded pl-2 input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs my-5">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input bg-sky-100 py-2 rounded pl-2 input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input bg-sky-100 py-2 rounded pl-2 input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                    </div>
                    <input className='btn bg-blue-400 rounded py-2 my-5 text-white font-bold w-full' value="Sign Up" type="submit" />
                    
                </form>
                <p>You have an account <Link className='text-blue-500' to="/login">Please login</Link></p>
                
                <button onClick={handelGoogleLogin} className='btn mt-5 btn-outline text-white py-2 rounded w-full bg-black'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;