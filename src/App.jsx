import Header from './components/Header'
import Menu from './components/Menu'

function App() {
   return (
      <>
         <Header />
         <hr className="h-4 bg-[#FC819E]" />
         <Menu />
         <button
            onClick={() => {
               localStorage.clear()
               window.location.reload()
            }}
         >
            Reset App Storage
         </button>
      </>
   )
}

export default App
