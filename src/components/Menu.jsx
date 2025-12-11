import { useEffect, useState } from 'react'
import { MENU_ITEMS } from '../consts'
import Item from './Item'
import OrderButton from './OrderButton'

export default function Menu() {
   const [selected, setSelected] = useState(null)
   const [food, setFood] = useState(null)
   const [ordered, setOrdered] = useState(false)
   const today = new Date().toLocaleDateString().split('T')[0]

   useEffect(() => {
      console.log('Today is ', today)
      const orderedDate = localStorage.getItem('orderedDate')
      if (orderedDate === today) {
         setOrdered(true)
      }
   }, [])
   
   function loadSoldOutItems() {
      const soldOut = localStorage.getItem('soldOutItems')
      return soldOut ? JSON.parse(soldOut) : []
   }

   let soldOutItems = loadSoldOutItems()

   function markSoldOut(id) {
      if(!soldOutItems.includes(id)) {
         soldOutItems.push(id)
         localStorage.setItem('soldOutItems', JSON.stringify(soldOutItems))
      }
   }

   function handleSubmit() {
      console.log('Order Submitted: ', food)

      if (food) {
         setOrdered(true)
         alert(`You have ordered: ${food.name} come back tomorrow for more!`)
         markSoldOut(food.id)
         localStorage.setItem('orderedDate', today)
      }
   }

   return (
      <div className="w-full min-h-screen flex flex-col items-center gap-4 bg-[#FFF3C7] p-4">
         {!ordered ? (
            <>
               {MENU_ITEMS.map((item) => (
                  <Item
                     key={item.id}
                     item={item}
                     selected={selected}
                     onSelect={setSelected}
                     setFood={setFood}
                     soldOut={soldOutItems.includes(item.id)}
                  />
               ))}
               <OrderButton submitOrder={handleSubmit} />
            </>
         ) : (
            <h2 className="text-3xl font-yesteryear text-[#333333] mt-10">
               Thank you for your order! ❤️ Come back tomorrow for more!
            </h2>
         )}
      </div>
   )
}
