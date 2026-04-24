
import { InputFloating } from '../../../../components/Inputs/InputFloating';
import { ButtonConfirm } from '../../../../components/Buttons/ButtonConfirm';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function GetEmail()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    return (
        <>
            <section className="br-[#FAFAFA] h-screen w-full flex items-center justify-center px-4">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
                    <div className='flex flex-row items-center justify-center'>
                        <img src="/logo2.png" alt="" className='w-10'/>
                        <img src="/logo.png" alt="" className='w-15'/>
                    </div>
                    <h2 className="mb-3 mb-6 text-2xl font-bold text-center text-gray-700 ">RESET PASSWORD</h2>
                    <form action="" className="mb-10 ">
                        
                        <p className='mb-10'>To reset your password, enter the email address registered to your account and we will send you a reset code.</p>

                        <InputFloating value={email} onChange={setEmail} label='E-mail' type='text'/>

                        <br />

                        <ButtonConfirm disable={false} name="SEND" onClick={() => navigate("/getcode")}/>
                     </form>
                   
                </div>
            </section>
        </>
    )
}