import { useState } from 'react';
import { InputFloating } from '../../../components/Inputs/InputFloating';
import { LoginWith } from '../../../components/LoginWith';
import { ButtonConfirm } from '../../../components/Buttons/ButtonConfirm';
import { Navigate, useNavigate } from 'react-router-dom';
export default function SignUp()
{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    return (
        <>
            <section className="br-[#FAFAFA] h-screen w-full flex items-center justify-center px-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                    <div className='flex justify-center items-center flex-row'>
                        <img src="/logo2.png" alt="" className='w-10'/>
                        <img src="/logo.png" alt="" className='w-15'/>
                    </div>
                    <h2 className="mb-3  text-2xl font-bold text-center mb-6 text-gray-700 ">SignUP</h2>
                    <form action="" className=" mb-10">
                        
                        <InputFloating label='Name' type='text'/>

                        <InputFloating label='E-mail' type='email'/>

                        <InputFloating label='Password' type='password'/>
                        
                        <InputFloating label='Confirm Password' type='password'/>

                        <ButtonConfirm name="SEND" onClick={() => navigate("/login")}/>
                     </form>
                    <LoginWith></LoginWith>
                    <p className='mb-10'></p>
                    <div className='mb-5 flex justify-end items-center flex-row'>
                        <button className="pr-1.5 text-blue-500 text-sm text-center mt-4 hover:underline cursor-pointer" onClick={() => navigate("/login")}>Do you already have an account?</button>
                    </div>
                </div>
            </section>
        </>
    )
}