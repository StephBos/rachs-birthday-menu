import { useEffect, useState } from 'react'
import { MENU_ITEMS } from '../consts'
import Item from './Item'
import OrderButton from './OrderButton'
import emailjs from '@emailjs/browser'

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

   function sendEmail(order) {
      const serviceID = 'service_8ffkwwg'
      const templateID = 'template_kwnrjkv'
      const userID = 'nu5G4dlf5p3Kw9xNl'

      emailjs.send(serviceID, templateID, {order_item: order, date: today}, userID)
         .then((response) => {
            console.log('Email sent successfully!', response.status, response.text)
         })
         .catch((err) => {
            console.error('Failed to send email. Error: ', err)
         })
   }

   function handleSubmit() {
      console.log('Order Submitted: ', food)

      if (food) {
         setOrdered(true)
         markSoldOut(food.id)
         localStorage.setItem('orderedDate', today)
         sendEmail(food.name)
         alert(`You have ordered: ${food.name} come back tomorrow for more!`)
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
            <h2 className="text-3xl text-[#333333] mt-10 text-center">
               Thank you for your order! ❤️ Come back tomorrow for more!
            </h2>
         )}
      </div>
   )
}
