import { Menu } from '../../components/Buttons/Menu/index';
import { VideoShowFront } from '../../components/VideoShowFront/index';
import "../../styles/global.css"
import {  Camera, Car, Clock, GemIcon, Hotel, Languages, LayoutDashboard, Mail, Map, MapPin, Palette, ScrollText, UserCircle } from 'lucide-react';
import { NormalCard } from '../../components/NormalCard';
import { BloxCounters } from '../../components/BloxCounters';
import { Reveal } from '../../components/Reveal/Reveal';
import { InputNormal2 } from '../../components/Inputs/InputNormal2';
import { useState } from 'react';
import { Maps } from '../../components/Maps';

//Footer
import { Footer } from "../../components/Footer/";


//Parceiros
import { PartnersMarquee } from "../../components/PartnersMarquee";

const partners = [
  { id: "1", logo: "/logos/3.png", name: "Hotel President" },
  { id: "2", logo: "/logos.png", name: "Google" },
  { id: "3", logo: "/logos/2.png", name: "Microsoft" },
  { id: "4", logo: "/logos.png", name: "Heetch" },
  { id: "5", logo: "/logos/3.png", name: "Yango" },
  { id: "6", logo: "/logos/3.png", name: "Epic Sana" },
  { id: "7", logo: "/logos/3.png", name: "Fortaleza" },
];


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
                {/*Secção de conteúdo */}
                <section>
                    <div className="w-full">
                        <Reveal>
                            <div className='flex flex-col items-center justify-center mt-10 mb-10 '>
                                <h2 className='text-2xl  text-center text-[#F7C600] font-bold'>About Us</h2>
                                <div className='border-b border-b-[#F7C600] w-10 text-center mb-3'></div>
                                <span className='text-center w-[70%]'>
                                    We connect the world to Angola.

                                    Our platform brings together culture, tourism, transportation, and local insights in one place — making it easier to explore, understand, and experience Angola with confidence.
                                    </span>
                            </div>
                        </Reveal>
                        <Reveal>
                            {/* Cards */}
                            <div className="grid grid-cols-1 gap-6 px-4 mt-12 mb-12 sm:grid-cols-2 lg:grid-cols-3">
                            <NormalCard 
                                image='' 
                                icone={<ScrollText className="w-6 h-6 text-[#F7C600]" />} 
                                title='History' 
                                text='Explore Angola’s history through key events, traditions, and heritage that shaped the nation. Understand the roots of its identity and how the past connects to the present.'
                            />

                            <NormalCard 
                                image='/miradourodalua.png' 
                                icone={<GemIcon className="w-6 h-6 text-[#F7C600]" />} 
                                title='Resources' 
                                text='Discover Angola’s natural and economic resources, from oil and diamonds to emerging opportunities. Access structured insights that highlight the country’s potential.'
                            />

                            <NormalCard 
                                image='' 
                                icone={<Palette className="w-6 h-6 text-[#F7C600]" />} 
                                title='Culture' 
                                text='Experience Angola’s culture through music, dance, art, and traditions. Get closer to the lifestyle and identity that define its people.'
                            />
                            </div>
                        </Reveal>
                        <Reveal>
                            {/* Discover Angola Section */}
                            <div
                            className="relative w-full p-4 overflow-hidden bg-center bg-cover rounded-2xl"
                            style={{ backgroundImage: "url('/miradourodalua.png')" }}
                            >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/70"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center">

                                {/* Header */}
                                <h2 className="text-2xl font-semibold font-title">
                                Discover Angola
                                </h2>

                                <p className="text-center w-[80%] text-gray-300 mt-2">
                                Explore Angola through its provinces, culture, tourism and natural resources in an interactive experience.
                                </p>

                                {/* Content Grid */}
                                <div className="grid items-center w-full grid-cols-1 gap-8 mt-10 lg:grid-cols-2">

                                {/* LEFT: Counters / Quick Info */}
                                <div className="flex flex-row flex-wrap items-center justify-center gap-6">
                                    
                                    <BloxCounters 
                                    icone={<Map className="w-7 text-[#F7C600]" />} 
                                    number={21} 
                                    text="Provinces"
                                    locate={false}
                                    />

                                    <BloxCounters 
                                    icone={<Palette className="w-7 text-[#F7C600]" />} 
                                    number={100} 
                                    text="Culture"
                                    locate={true}
                                    />

                                    <BloxCounters 
                                    icone={<Camera className="w-7 text-[#F7C600]" />} 
                                    number={7} 
                                    text="Attractions"
                                    locate={false}
                                    />

                                    <BloxCounters 
                                    icone={<GemIcon className="w-7 text-[#F7C600]" />} 
                                    number={1/0} 
                                    text="Resources"
                                    locate={true}
                                    />

                                </div>

                                {/* RIGHT: MAP AREA (RESERVED SPACE) */}
                                <div className="w-full">

                                    <div className="mb-4 text-center lg:text-left">
                                    <h3 className="text-lg font-semibold">
                                        Interactive Map
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Click on provinces to explore details
                                    </p>
                                    </div>

                                    {/* MAP CONTAINER */}
                                    <div className="
                                    w-full 
                                    h-145 
                                    rounded-2xl 
                                    border border-[#262626]
                                    bg-[#0F0F0F]
                                    relative
                                    overflow-hidden
                                    ">

                                    {/* 🔥 Aqui vai o teu mapa clicável depois */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Maps />
                                    </div>
                                    </div>

                                </div>
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
                                        <div className="w-full px-4 sm:px-6 lg:px-10">
                                            <div className="
                                                max-w-6xl mx-auto
                                                grid 
                                                grid-cols-1 
                                                sm:grid-cols-2 
                                                lg:grid-cols-3 
                                                gap-6 sm:gap-8 lg:gap-10
                                            ">

                                                {/* CARD */}
                                                <div className="flex items-start gap-4 p-4 rounded-xl 
                                                transition-all duration-300 
                                                hover:scale-[1.03] 
                                                hover:bg-[#1f1f1f] 
                                                cursor-pointer">

                                                <Car className="w-7 h-7 text-[#F7C600] shrink-0" />

                                                <div>
                                                    <h2 className="mb-2 font-semibold text-base sm:text-lg">
                                                    Transportation
                                                    </h2>

                                                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                                    Move across Angola with confidence. Access routes, transport options,
                                                    and travel insights instantly.
                                                    </p>
                                                </div>
                                                </div>

                                                {/* CARD */}
                                                <div className="flex items-start gap-4 p-4 rounded-xl 
                                                transition-all duration-300 
                                                hover:scale-[1.03] 
                                                hover:bg-[#1f1f1f] 
                                                cursor-pointer">

                                                <Hotel className="w-7 h-7 text-[#F7C600] shrink-0" />

                                                <div>
                                                    <h2 className="mb-2 font-semibold text-base sm:text-lg">
                                                    Accommodation
                                                    </h2>

                                                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                                    Find safe and comfortable places to stay with curated options
                                                    tailored to your journey.
                                                    </p>
                                                </div>
                                                </div>

                                                {/* CARD */}
                                                <div className="flex items-start gap-4 p-4 rounded-xl 
                                                transition-all duration-300 
                                                hover:scale-[1.03] 
                                                hover:bg-[#1f1f1f] 
                                                cursor-pointer">

                                                <MapPin className="w-7 h-7 text-[#F7C600] shrink-0" />

                                                <div>
                                                    <h2 className="mb-2 font-semibold text-base sm:text-lg">
                                                    Tourism
                                                    </h2>

                                                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                                    Discover top attractions and explore the best destinations Angola
                                                    has to offer.
                                                    </p>
                                                </div>
                                                </div>

                                                {/* CARD */}
                                                <div className="flex items-start gap-4 p-4 rounded-xl 
                                                transition-all duration-300 
                                                hover:scale-[1.03] 
                                                hover:bg-[#1f1f1f] 
                                                cursor-pointer">

                                                <Clock className="w-7 h-7 text-[#F7C600] shrink-0" />

                                                <div>
                                                    <h2 className="mb-2 font-semibold text-base sm:text-lg">
                                                    Time Efficiency
                                                    </h2>

                                                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                                    Access everything you need in one place and reduce time spent
                                                    searching for information.
                                                    </p>
                                                </div>
                                                </div>

                                                {/* CARD */}
                                                <div className="flex items-start gap-4 p-4 rounded-xl 
                                                transition-all duration-300 
                                                hover:scale-[1.03] 
                                                hover:bg-[#1f1f1f] 
                                                cursor-pointer">

                                                <LayoutDashboard className="w-7 h-7 text-[#F7C600] shrink-0" />

                                                <div>
                                                    <h2 className="mb-2 font-semibold text-base sm:text-lg">
                                                    Complete System
                                                    </h2>

                                                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                                    A unified platform combining culture, services, history, and
                                                    essential resources.
                                                    </p>
                                                </div>
                                                </div>

                                                {/* CARD */}
                                                <div className="flex items-start gap-4 p-4 rounded-xl 
                                                transition-all duration-300 
                                                hover:scale-[1.03] 
                                                hover:bg-[#1f1f1f] 
                                                cursor-pointer">

                                                <Languages className="w-7 h-7 text-[#F7C600] shrink-0" />

                                                <div>
                                                    <h2 className="mb-2 font-semibold text-base sm:text-lg">
                                                    Translation & Guides
                                                    </h2>

                                                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                                    Multilingual support and guided assistance for a seamless
                                                    international experience.
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
                                className="w-full bg-center bg-cover relative overflow-hidden p-6 sm:p-10"
                                style={{ backgroundImage: "url('/callback.png')" }}
                            >
                                {/* overlay */}
                                <div className="absolute inset-0 bg-black/70"></div>

                                <Reveal>
                                <div className="relative z-10 flex flex-col items-center justify-center text-center">

                                    {/* TITLE */}
                                    <h3 className="font-title font-semibold text-[#F7C600] text-2xl sm:text-3xl">
                                    Contact Us
                                    </h3>

                                    {/* TEXT */}
                                    <p className="mt-4 mb-6 w-full sm:w-2/3 text-sm sm:text-base text-gray-200 leading-relaxed">
                                    We’d love to hear from you. Whether you have questions, suggestions,
                                    or want to learn more about Angola, feel free to reach out. Our team
                                    is ready to assist you.
                                    </p>

                                    {/* FORM */}
                                    <form className="w-full flex flex-col items-center gap-4">

                                    {/* INPUTS */}
                                    <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <InputNormal2
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        icone={<UserCircle className="w-6 text-[#F7C600]" />}
                                        onChange={setName}
                                        />

                                        <InputNormal2
                                        type="email"
                                        placeholder="E-mail"
                                        value={email}
                                        icone={<Mail className="w-6 text-[#F7C600]" />}
                                        onChange={setEmail}
                                        />
                                    </div>

                                    {/* TEXTAREA */}
                                    <textarea
                                        name="description"
                                        id="description"
                                        rows={6}
                                        placeholder="Write what you need to know..."
                                        className="
                                        w-full sm:w-2/3
                                        rounded-2xl
                                        bg-[#1A1A1A]/90
                                        p-4
                                        outline-none
                                        border border-[#F7C600]/30
                                        focus:border-[#F7C600]
                                        transition-all
                                        resize-none
                                        text-white
                                        "
                                    />

                                    {/* BUTTON */}
                                    <button
                                        className="
                                        w-full sm:w-2/3
                                        py-3
                                        bg-[#F7C600]
                                        text-black
                                        font-title
                                        font-bold
                                        rounded-md
                                        transition-all
                                        hover:scale-[1.02]
                                        hover:bg-yellow-400
                                        active:scale-95
                                        "
                                    >
                                        SEND
                                    </button>

                                    </form>
                                </div>
                                </Reveal>
                            </div>
                            </section>

                            {/*Secção dos parceiros*/}
                            <Reveal>
                                <div className="p-1 bg-black">
                                    <PartnersMarquee partners={partners} speed={0.7} />
                                </div>
                            </Reveal>

                    </div>
                    
                </section>
                    

            </main>

            {/*Rodapé */}
            <Footer />

            
        </nav>
        </>
    );
}