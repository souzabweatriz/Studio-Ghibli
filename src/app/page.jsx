import './globals.css';
import Image from 'next/image';

export default function Home() {
  return(
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className='bg-white rounded-lg shadow-md p-6 max-w-2xl min-h-[30rem] min-w-[60%] flex flex-col items-center'>
        <Image 
        className="rounded-full mb-6 p-2 shadow-xl border-2 border-green-100" 
        src="/images/profile.jpg" 
        alt="Profile Picture" 
        width={150} 
        height={150} 
        />
        <h1 className='text-2xl font-semibold mb-2'>Ana Beatriz de Souza de Oliveira</h1>
        <p className='text-gray-700'>2TDS1</p>
        <p className='text-gray-700'>Escola SENAI de Valinhos</p>
        <p className='text-gray-700'></p>
      </div>
    </div>
  )
}