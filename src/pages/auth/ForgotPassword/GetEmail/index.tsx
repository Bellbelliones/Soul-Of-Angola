import { useState } from 'react';
import { InputFloating } from '../../../../components/Inputs/InputFloating';
import { LoginWith } from '../../../../components/LoginWith';
import { ButtonConfirm } from '../../../../components/Buttons/ButtonConfirm';
import { Navigate, useNavigate } from 'react-router-dom';
export default function GetEmail()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
   
    return (
        <>
            <section className="br-[#FAFAFA] h-screen w-full flex items-center justify-center px-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                    <div className='flex justify-center items-center flex-row'>
                        <img src="/logo2.png" alt="" className='w-10'/>
                        <img src="/logo.png" alt="" className='w-15'/>
                    </div>
                    <h2 className="mb-3  text-2xl font-bold text-center mb-6 text-gray-700 ">RESET PASSWORD</h2>
                    <form action="" className=" mb-10">
                        
                        <p className='mb-10'>To reset your password, enter the email address registered to your account and we will send you a reset code.</p>

                        <InputFloating label='E-mail' type='text'/>

                        <br />

                        <ButtonConfirm name="SEND" onClick={() => navigate("/getcode")}/>
                     </form>
                   
                </div>
            </section>
        </>
    )
}