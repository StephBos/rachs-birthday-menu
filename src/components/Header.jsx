import flowers from '../assets/flowersforheading.jpg'

export default function Header() {
   return (
      <div className="w-full h-full flex justify-center items-center">
         <img src={flowers} alt="flowers for heading" />
         <h1 className="text-4xl text-[#FFF3C7] font-yesteryear text-shadow-lg absolute top-20 z-10">
            Rach's Birthday Menu
         </h1>
         <div className='bg-[#F7418F] h-[50px] w-full top-20 absolute'>
         </div>
      </div>
   )
}
