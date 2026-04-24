import { ButtonConfirm } from '../../../../components/Buttons/ButtonConfirm';
import InputVerification from '../../../../components/Inputs/InputVerification';
import { useNavigate } from 'react-router-dom';
export default function ChangePassword()
{
    const navigate = useNavigate();
   
    return (
        <>
            <section className="br-[#FAFAFA] h-screen w-full flex items-center justify-center px-4">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
                    <div className='flex flex-row items-center justify-center'>
                        <img src="/logo2.png" alt="" className='w-10'/>
                        <img src="/logo.png" alt="" className='w-15'/>
                    </div>
                    <h2 className="mb-6 text-2xl font-bold text-center text-gray-700 ">RESET PASSWORD</h2>
                    <form action="" className="mb-10 ">
                        
                        <p className='mb-10 text-center'>Enter your new password, taking into account the imposed creation conditions.</p>

                        <InputVerification />

                        <br />

                        <ButtonConfirm disable={false} name="SEND" onClick={() => navigate("/login")} />
                     </form>
                   
                </div>
            </section>
        </>
    )
}