import { useState } from 'react';
import { InputFloating } from '../../../components/Inputs/InputFloating';
import { LoginWith } from '../../../components/LoginWith';
import { ButtonConfirm } from '../../../components/Buttons/ButtonConfirm';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Login()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <section className="br-[#FAFAFA] h-screen w-full flex items-center justify-center px-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                    <div className='flex justify-center items-center flex-row'>
                        <img src="/logo2.png" alt="" className='w-10'/>
                        <img src="/logo.png" alt="" className='w-15'/>
                    </div>
                    <h2 className="mb-10  text-2xl font-bold text-center mb-6 text-gray-700 ">LOGIN</h2>
                    <form action="" className=" mb-10">
                        
                        <InputFloating label='E-mail' type='email'/>
                        
                        <InputFloating label='Password' type='password'/>

                        <ButtonConfirm name="SEND" onClick={() => navigate("/")}/>
                     </form>
                    <LoginWith></LoginWith>
                    <p className='mb-20'></p>
                    <div className='mb-5 flex justify-center items-center flex-row'>
                        <button onClick={() => navigate(("/signup"))} className="border-r border-r-black pr-1.5 text-blue-500 text-sm text-center mt-4 hover:underline cursor-pointer" >Don't have an account?</button>
                        <button onClick={() => navigate(("/getemail"))} className="border-l border-l-black pl-1.5 text-blue-500 text-sm text-center mt-4 hover:underline cursor-pointer">Forgot your password?</button>
                    </div>
                </div>
            </section>
        </>
    )
}