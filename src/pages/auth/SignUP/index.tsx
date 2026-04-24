import { useState } from 'react';
import { InputFloating } from '../../../components/Inputs/InputFloating';
import { LoginWith } from '../../../components/LoginWith';
import { ButtonConfirm } from '../../../components/Buttons/ButtonConfirm';
import {  useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';

export default function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [loading, setLoading] = useState(false);

 async function handleSignUp()
    {
        setLoading(true);
        const {data, error} = await supabase
        .from("userprofile")
        .insert([{
            name,
            email,
            password,
        }])
        if(!data)
        {
            console.log("Conta Criada");
            navigate("/login")
        }
        if(!error)
        {
            console.log("Erro ao tentar criar a conta");
        }
        setName("")
        setEmail("")
        setPassword("")
        setLoading(false);

    }

    return (
        <>
            <section className="br-[#FAFAFA] h-screen w-full flex items-center justify-center px-4">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
                    <div className='flex flex-row items-center justify-center'>
                        <img src="/logo2.png" alt="" className='w-10' />
                        <img src="/logo.png" alt="" className='w-15' />
                    </div>
                    <h2 className="mb-6 text-2xl font-bold text-center text-gray-700 ">SignUP</h2>
                    <form action="" className="mb-10 ">

                        <InputFloating label='Name' type='text' value={name} onChange={setName} />

                        <InputFloating label='E-mail' type='email' value={email} onChange={setEmail} />

                        <InputFloating label='Password' type='password' value={password} onChange={setPassword} />

                        <ButtonConfirm name={loading ? "Criando..." : "SEND"} onClick={handleSignUp} disable={loading} />
                    </form>
                    <LoginWith></LoginWith>
                    <p className='mb-10'></p>
                    <div className='flex flex-row items-center justify-end mb-5'>
                        <button className="pr-1.5 text-blue-500 text-sm text-center mt-4 hover:underline cursor-pointer" onClick={() => navigate("/login")}>Do you already have an account?</button>
                    </div>
                </div>
            </section>
        </>
    )
}