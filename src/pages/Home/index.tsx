import { Menu } from '../../components/Buttons/Menu/index';
import { VideoShowFront } from '../../components/VideoShowFront/index';
import "../../styles/global.css"
import {  Camera, Car, Clock, GemIcon, Hotel, Languages, LayoutDashboard, Mail, Map, MapPin, Palette, ScrollText, UserCircle } from 'lucide-react';
import { NormalCard } from '../../components/NormalCard';
import { BloxCounters } from '../../components/BloxCounters';
import { Reveal } from '../../components/Reveal/Reveal';
import { InputNormal2 } from '../../components/Inputs/InputNormal2';
import { useState } from 'react';

export default function Home()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>

        <nav className="bg-[#0F0F0F] text-white h-full">

            <header>
                <Menu />
            </header>
            <main>
                <section>
                    <VideoShowFront />
                </section>
                <section>
                    <div className="w-full">
                    <Reveal>
                        <div className='flex flex-col items-center justify-center mt-10 mb-10 '>
                            <h2 className='text-2xl  text-center text-[#F7C600] font-bold'>About Us</h2>
                            <div className='border-b border-b-[#F7C600] w-10 text-center mb-3'></div>
                            <span className='text-center w-[70%]'>
                                We are a platform dedicated to bringing the richness of Angolan culture to the world, a country marked by deep history, cultural diversity, and a unique identity. Angola possesses vast natural resources and valuable spaces — from breathtaking landscapes to traditions passed down through generations — that reflect its true essence. Our role is to connect the world to this reality, giving visibility to the authenticity and greatness of Angola.
                                </span>
                        </div>
                    </Reveal>
                    <Reveal>
                        {/* Cards */}
                        <div className='flex flex-row flex-wrap items-center justify-center mt-10 mb-10 '>
                            <NormalCard 
                                image='' 
                                icone={<ScrollText className="w-90 text-[#F7C600] mb-3" />} 
                                title='History' 
                                text='Angola has a rich and proud history, built on courage, culture, and resilience. It is a heritage that inspires and keeps the identity of its people alive.'
                            />
                           
                            <NormalCard 
                                image='/miradourodalua.png' 
                                icone={<GemIcon className="w-90 text-[#F7C600] mb-3" />} 
                                title='Resources' 
                                text='Angola has vast natural resources such as oil, diamonds, and minerals, which drive its economy and reflect its great potential.It is a natural heritage that sets Angola apart on the African and world stage.'
                            />
                            <NormalCard 
                                image='' 
                                icone={<Palette className="w-90 text-[#F7C600] mb-3" />} 
                                title='Culture' 
                                text='Angolan culture is a rich mix of traditions, music, dance, and art that reflects its people’s identity and unity. It is a vibrant heritage that keeps its spirit alive.'
                            />
                            
                        </div>
                    </Reveal>
                    <Reveal>
                        {/* Blocos Contadores */}
                        <div className='w-full bg-center bg-cover relative overflow-hidden bg-linear-[1A1A1A] p-6 '
                        style={{backgroundImage: "url('/miradourodalua.png')"}}
                        >
                            <div className='absolute inset-0 bg-black/60'></div>
                            <div className='relative z-10 flex flex-col items-center justify-center'>
                                <h2 className='text-2xl font-semibold font-title'>Discover Angola</h2>
                                <span className='text-center w-[80%]'>Discover the cultures, provinces, resources and attractions of Angola, which reveal its diversity, heritage and natural beauty.</span>
                                <div className='flex flex-row flex-wrap items-center justify-around mt-10 w-[95%]'>
                                    <BloxCounters 
                                        icone={<Map className="w-7 text-[#F7C600]" />} 
                                        number={21} 
                                        text='Provinces'
                                        locate ={false}
                                        />
                                    <BloxCounters 
                                        icone={<Palette className="w-7 text-[#F7C600]" />} 
                                        number={100} 
                                        text='Culture'
                                        locate ={true}
                                        />
                                    <BloxCounters 
                                        icone={<Camera className="w-7 text-[#F7C600]" />} 
                                        number={7} 
                                        text='Attractions'
                                        locate ={false}
                                        />
                                    <BloxCounters 
                                        icone={<GemIcon className="w-7 text-[#F7C600]" />} 
                                        number={1/0} 
                                        text='Resources'
                                        locate ={true}
                                        />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/*Beneficios */}
                    <div className=' bg-[#1A1A1A]'>
                        <Reveal>
                            <div className='flex flex-col items-center justify-center pt-10 bg-[#1A1A1A]'>
                                <div className='flex flex-col items-center mb-10'>
                                    <h3 className='font-semibold text-center font-title text-[#F7C600] text-2xl'>Our Services</h3>
                                </div>
                                <div className='flex flex-col items-center justify-center w-full mb-10'>
                                    <div className='w-[90%]'>
                                        
                                        <div className='flex flex-row flex-wrap items-center justify-center'>
                                            <div className='flex flex-row justify-center p-3 w-80'>
                                                <div className='p-4'>
                                                    <Car className="w-7 text-[#F7C600]" />
                                                </div>
                                                <div>
                                                    <h2 className='mb-3 font-bold font-title'>Transportation</h2>
                                                    <p>
                                                        Provides easy access to mobility information, routes, and travel between provinces and key locations. 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row justify-center p-3 w-80'>
                                                <div className='p-4'>
                                                    <Hotel className="w-7 text-[#F7C600]" />
                                                </div>
                                                <div>
                                                    <h2 className='mb-3 font-bold font-title'>Accommodation</h2>
                                                    <p>
                                                        Helps users find suitable places to stay, ensuring comfort and safety during their visit. 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row justify-center p-3 w-80'>
                                                <div className='p-4'>
                                                    <MapPin className="w-7 text-[#F7C600]" />
                                                </div>
                                                <div>
                                                    <h2 className='mb-3 font-bold font-title'>Tourism</h2>
                                                    <p>
                                                        Showcases major attractions, allowing users to explore the best of Angola. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-row flex-wrap items-center justify-center'>
                                            <div className='flex flex-row justify-center p-3 w-80'>
                                                <div className='p-4'>
                                                    <Clock className="w-7 text-[#F7C600]" />
                                                </div>
                                                <div>
                                                    <h2 className='mb-3 font-bold font-title'>Time Efficiency</h2>
                                                    <p>
                                                        Centralizes essential information in one place, reducing time spent searching. 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row justify-center p-3 w-80'>
                                                <div className='p-4'>
                                                    <LayoutDashboard className="w-7 text-[#F7C600]" />
                                                </div>
                                                <div>
                                                    <h2 className='mb-3 font-bold font-title'>Complete System</h2>
                                                    <p>
                                                        Brings together culture, history, resources, and services in one modern platform. 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row justify-center p-3 w-80'>
                                                <div className='p-4'>
                                                    <Languages className="w-7 text-[#F7C600]" />
                                                </div>
                                                <div>
                                                    <h2 className='mb-3 font-bold font-title'>Translation & Guides</h2>
                                                    <p>
                                                        Offers multilingual support and practical guidance, enhancing the experience for international users. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    
                    {/* Call Back*/}
                    <section>
                        <div 
                            className='w-full bg-center bg-cover  relative overflow-hidden bg-linear-[1A1A1A] p-6 shadow shadow-amber-50'
                            style={{backgroundImage: "url('/callback.png')"}}
                        >
                                <div className='absolute inset-0 bg-black/60'></div>

                                <Reveal>
                                    <div className='relative z-10 flex flex-col items-center justify-center'>
                                        <h3 className='font-title font-semibold text-[#F7C600] text-2xl '>Contact Us</h3>
                                        <p className='w-[70%] mt-5 mb-5'>We’d love to hear from you. Whether you have questions, suggestions, or want to learn more about Angola, feel free to reach out. Our team is ready to assist you and provide the information you need.</p>
                                        <form className="flex flex-col items-center" >
                                            <div className='flex flex-row flex-wrap items-center justify-center'>
                                                <InputNormal2 
                                                    type="text"
                                                    placeholder='Name' 
                                                    value={name} 
                                                    icone={<UserCircle className="w-7 text-[#F7C600]" />} 
                                                    onChange={setName}
                                                />
                                                <InputNormal2 
                                                    type="email"
                                                    placeholder='E-mail' 
                                                    value={email} 
                                                    icone={<Mail className="w-7 text-[#F7C600]" />} 
                                                    onChange={setEmail}
                                                />

                                            </div>

                                            <textarea 
                                                name="descripton" 
                                                id="descripton" 
                                                className="w-[70%] rounded-2xl bg-[#1A1A1A] p-2 outline-none shadow shadow-[#F7C600] m-2" 
                                                rows={10} 
                                                placeholder='Write what you need to know...'></textarea>
                                                <button className="w-70 py-2 bg-[#F7C600] font-title font-bold rounded-md flex justify-center gap-2" >
                                                    SEND
                                                </button>
                                        </form>
                                    </div>
                                </Reveal>
                            </div>
                    </section>

                    </div>
                    
                </section>
                    

            </main>
            <footer>
                <div className="w-full h-10"></div>
            </footer>
            

            
        </nav>
        </>
    );
}