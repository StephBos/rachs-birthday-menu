export default function Item({
   item,
   selected,
   onSelect,
   setFood,
   soldOut,
   setOpen,
    onDetails,
}) {
   const isActive = selected === item.id

   function handleSelect() {
      onSelect(item.id)
      setFood(item)
   }

   return (
      <label
         className={`
    w-full flex justify-between p-3 mb-3 rounded-xl cursor-pointer 
    shadow-sm transition-all
    ${
       soldOut
          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
          : isActive
          ? 'bg-[#F7418F] text-white'
          : 'bg-[#FEC7B4] text-[#F7418F]'
    }
  `}
      >
         <div className="flex items-center gap-3">
            <input
               type="radio"
               name="menu"
               checked={isActive}
               disabled={soldOut}
               onChange={handleSelect}
               className="accent-[#FEC7B4] w-5 h-5"
            />

            <div className="flex flex-col leading-tight">
               <span className="text-xl font-yesteryear">{item.name}</span>

               {soldOut ? (
                  <span className="text-sm font-semibold text-red-600">
                     Out of Stock
                  </span>
               ) : (
                  <span className="text-base opacity-80">{item.price}</span>
               )}
            </div>
         </div>

         <div className="flex flex-col justify-end">
            <button
               onClick={() => {
                  onDetails(item.id)
               }}
               className="
        bg-[#FFF3C7] text-[#F7418F]
        px-3 py-1 rounded-lg text-sm
        self-end
      "
            >
               Details
            </button>
         </div>
      </label>
   )
}
