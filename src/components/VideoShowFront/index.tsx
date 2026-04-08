
export const VideoShowFront = () =>{
    return (
        <>
            <div className="relative w-full h-[90vh] z-0 overflow-hidden">
            {/* Vídeo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/angola.mp4" type="video/mp4" />
            </video>

            {/* Overlay escuro (melhora leitura do texto) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

            {/* Conteúdo por cima */}
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <h1 className="text-3xl font-bold"><div className="text-center text-white px-6 max-w-2xl">
  
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Welcome to{" "}
                        <span className="text-[#F7C600] drop-shadow-lg">
                        SOUL OF ANGOLA
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200">
                        Discover stories, culture, and experiences that reveal the true essence of Angola.
                    </p>

                    <p className="mt-2 text-md md:text-lg text-gray-300">
                        Experience the past. Feel the present. Build the future.
                    </p>

                    <div className="mt-8 flex gap-4 justify-center">
                        
                        <button className="bg-[#F7C600] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                        Explore
                        </button>

                        <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                        Learn more
                        </button>

                    </div>

                    </div>
                </h1>
            </div>

            </div>
        </>
    )
}