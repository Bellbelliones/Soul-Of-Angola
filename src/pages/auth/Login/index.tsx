import { useState } from 'react';
import { InputFloating } from '../../../components/Inputs/InputFloating';
import { LoginWith } from '../../../components/LoginWith';
import { ButtonConfirm } from '../../../components/Buttons/ButtonConfirm';
import {  useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import { useUser } from '../../../hooks/useUser';

export default function Login()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { setUser } = useUser()

    async function handleLogin()
    {
        setLoading(true)

        const {data, error} = await supabase
        .from("userprofile")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single()

        if(error)
        {
            console.log("Login Invalido")
            setLoading(false)
            return
        }
        else
        {
            console.log("Login Efectuado!")
            navigate("/", {replace: true})
        }
        //Guardar sessão simples
        localStorage.setItem("user", JSON.stringify(data))
        setUser(data)

        setLoading(false)

    }

    
    return (
        <>
            <section className="br-[#FAFAFA] h-screen w-full flex items-center justify-center px-4">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
                    <div className='flex flex-row items-center justify-center'>
                        <img src="/logo2.png" alt="" className='w-10'/>
                        <img src="/logo.png" alt="" className='w-15'/>
                    </div>
                    <h2 className="mb-10 text-2xl font-bold text-center text-gray-700 ">LOGIN</h2>
                    <form  className="mb-10 ">
                        
                        <InputFloating label='E-mail' type='email' value={email} onChange={setEmail}/>
                        
                        <InputFloating label='Password' type='password' value={password} onChange={setPassword}/>

                        <ButtonConfirm name={loading ? "Verifying" : "SEND"} onClick={handleLogin} disable={loading}/>
                     </form>
                    <LoginWith></LoginWith>
                    <p className='mb-20'></p>
                    <div className='flex flex-row items-center justify-center mb-5'>
                        <button onClick={() => navigate(("/signup"))} className="border-r border-r-black pr-1.5 text-blue-500 text-sm text-center mt-4 hover:underline cursor-pointer" >Don't have an account?</button>
                        <button onClick={() => navigate(("/getemail"))} className="border-l border-l-black pl-1.5 text-blue-500 text-sm text-center mt-4 hover:underline cursor-pointer">Forgot your password?</button>
                    </div>
                </div>
            </section>
        </>
    )
}