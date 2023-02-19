import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/Authprovider';

const Login = () => {
    const [signUpError,setSignUpError] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'


    const {login, googleLogin} = useContext(authContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        setSignUpError('')

        login(data.email, data.password)
        .then(result =>{
            toast.success('You Successfully Log In')
            navigate(from,{replace:true})

            console.log(result)
        })
        .catch(error=>{
            setSignUpError(error.message)
        })
    }

    const handleGoogleLogin = () =>{
        console.log('clicked')
                googleLogin()
                .then(result=>{
                    const user = result.user
                    navigate(from,{replace:true})

                    console.log(user)
                })
                .catch(err =>{
                    console.log('err',err)
                })
            }


    return (



       
        
        
      


      

            <div className="mx-auto my-5 justify-center w-full max-w-md p-4 rounded-md shadow sm:p-8 light:bg-gray-900 light:text-gray-100 lg:justify-center">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center">Don't have account?
                    <Link className='text-green-400 underline' to={'/signup'}> Sign up here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p onClick={handleGoogleLogin}>Login with Google</p>
                    </button>
                  
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid" on onSubmit={handleSubmit(onSubmit)}> 
                    <div className="space-y-4">
                        <div className="space-y-2">
                      
                            <label for="email"  className="block text-sm">Email address</label>
                            <input type="email" {...register("email")}  id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="password"  className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password"   {...register("password", { required: 'Password Must Be Set' })} id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}

                        </div>
                    </div>
                    <input type="submit" value={'Login'} className="btn w-full px-8 py-3 font-semibold hover:bg-violet-300 rounded-md dark:bg-violet-400 dark:text-gray-900" />
                {signUpError && <p className='text-red-500'>{signUpError}</p>}



                    {/* <input type="submit" value={'Sign Up'} className='btn btn-accent w-full  mt-5 mb-5' /> */}
                </form>
            </div>
           
            
        
    );
};

export default Login;