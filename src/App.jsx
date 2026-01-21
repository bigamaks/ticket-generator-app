// import './App.css'
import { useState } from 'react'
import TicketForm from './components/TicketForm'
import GenerateTicket from './components/GenerateTicket'
import { useEffect } from 'react'

function App() {
    const [ticket, setTicket] = useState(null)

      useEffect(() => {
    const savedTicket = localStorage.getItem("ticket");
    if (savedTicket) {
      setTicket(JSON.parse(savedTicket));
    }
  }, []);

  
  function handleGenerateTicket(data){
    setTicket(data)
        localStorage.setItem("ticket", JSON.stringify(data));
  }

    function handleReset() {
    localStorage.removeItem("ticket");
    setTicket(null);
  }


  return (
    <>
    {!ticket ? ( // If no ticket yet → show form
        <TicketForm onGenerateTicket={handleGenerateTicket} />
      ) : (
        // If ticket exists → show ticket details
        <GenerateTicket ticket={ticket} onReset={handleReset} />
      )}
    </>
  )
}

export default App
