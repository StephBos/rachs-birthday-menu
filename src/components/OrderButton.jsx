

export default function OrderButton({ submitOrder }) {
   return (
      <button className="relative px-5 py-2 rounded-md border border-[#FC819E] text-[#FC819E] uppercase tracking-wider font-semibold bg-transparent overflow-hidden transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_5px_rgba(0,142,236,0.8)] active:shadow-none shine-btn" onClick={submitOrder}>
         Submit Order
      </button>
   )
}
