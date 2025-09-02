import './globals.css';
import Image from 'next/image';

export default function Home() {
  return(
    <div className="min-h-screen flex items-center justify-center p-8">
  <div className='bg-white rounded-lg shadow-2xl shadow-black/40 p-6 max-w-2xl min-h-[25rem] min-w-[40%] flex flex-col items-center border-4 border-[#E36A97] mt-8'>
        <Image 
  className="rounded-full mb-6 mt-6 p-2 shadow-xl border-2 border-green-100" 
        src="/images/profile.png" 
        alt="Profile Picture" 
        width={130} 
        height={150} 
        />
        <h1 className="text-xl md:text-2xl font-bold mb-3 mt-8 text-black tracking-wide text-center w-full">
          Ana Beatriz de Souza de Oliveira
        </h1>
  <div className="flex flex-col items-center w-full mb-6 gap-1">
          <span className="text-base md:text-lg font-semibold text-black bg-[#D1F8E6] rounded-full px-6 py-2 tracking-wider shadow-sm text-center">2TDS1</span>
          <span className="text-sm md:text-base font-medium text-black bg-[#F9F3B7] rounded-full px-6 py-2 shadow-sm tracking-wide text-center">Escola SENAI de Valinhos</span>
        </div>
  <blockquote className="italic text-black bg-[#FFDD6] rounded-xl px-6 py-4 mt-3 shadow-inner border-l-4 border-[#E36A97] font-serif text-base md:text-lg max-w-lg w-full mx-auto text-center flex justify-center">
          <span className="inline-block w-full text-center break-words">
            “Se você iluminar apenas as suas imperfeições, todas as suas qualidades ficarão na sombra”
          </span>
        </blockquote>
      </div>
    </div>
  )
}