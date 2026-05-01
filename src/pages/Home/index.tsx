import { Menu } from '../../components/Buttons/Menu/index';
import { VideoShowFront } from '../../components/VideoShowFront/index';
import "../../styles/global.css"
import {  Camera, GemIcon, Map, Palette, ScrollText } from 'lucide-react';
import { NormalCard } from '../../components/NormalCard';
import { BloxCounters } from '../../components/BloxCounters';
import { Reveal } from '../../components/Reveal/Reveal';

export default function Home()
{
    
    //Fim da conexão
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
                        <div className='w-full bg-center bg-cover relative overflow-hidden bg-linear-[1A1A1A] p-6'
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

                    </div>
                    
                </section>
                    

            </main>
            <footer>
            </footer>
            

            
        </nav>
        </>
    );
}