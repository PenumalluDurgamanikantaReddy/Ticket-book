import "./Navigation.css"



const Navigation=()=>{

return(


    <main className="navgation">
    <main className="date">
    <strong id="day">Sat</strong>
    <strong  id="dates"  >04 Feb</strong>
    </main>
    <main className="timeandlangue">
    <strong id="time">11:00 PM</strong>
    <strong  id="lang"  >04 Feb</strong>
    </main>
    <main className="seatinfo">

        <main className="seats">
        <main className="seat"></main> 
        <strong>AVAILABLE</strong>
        </main>

       
          <main className="seats">
          <main className="seatbooked"></main>
          <strong>BOOOOKED</strong> 
          </main>

          <main className="seats">
          <main className="seat">X</main>
          <strong>UNAVAILABLE</strong> 
          </main>
           
    </main>
    </main>

)

}
export default Navigation;