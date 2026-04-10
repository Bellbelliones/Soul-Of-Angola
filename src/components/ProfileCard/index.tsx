

export const ProfileCard = () => {
  return (
    <div className="w-full overflow-hidden bg-white shadow-lg ">

      {/* 🔵 TOPO COLORIDO */}
      <div className="h-40 bg-gradient-to-r from-[#CC092F] to-[#F7C600]"></div>

      {/* 👤 FOTO */}
      <div className="flex justify-center -mt-20">
        <img
          src="/logo2.png"
          className="object-cover w-40 h-40 bg-white border-4 border-white rounded-full shadow-md"
        />
      </div>

      {/* 📄 INFO */}
      <div className="">
        <div className="p-4 text-center ">
            {/*NAME */}
            <h2 className="text-lg font-bold text-gray-800">
                Rodolfo Guzman
            </h2>

            <div className="mt-3 space-y-1 text-sm text-gray-500">
            {/*Contacts */}
            <div className="flex justify-between px-2 border-b border-gray-200">
                <span>Phone</span>
                <span className="text-black text-bold font-title">(+244) 976829967</span>
            </div>

            <div className="flex justify-between px-2">
                <span>E-mail</span>
                <span className="text-black text-bold font-title">rodolfoguzman0326@gmail.com</span>
            </div>

            </div>

        </div>
      </div>

    </div>
  );
};