import "./Payment.css"
import Movieone from "../imgs/Movieone.png"
import { useSelector } from "react-redux";
import Timer from '../components/Timer';

const Payment=()=>{
    const seatdata = useSelector((state)=>{ return state.seatline.Selectedseats })
    const ticketscount=seatdata.length;
const seatpricedata=useSelector((state)=>{ return state.seatline.Seatprice })
const Premimumseats=seatpricedata.filter((each)=>{ return each>75}).length
const secondclassSeats=seatpricedata.filter((each)=>{ return each<100}).length
const totalAmount=seatpricedata.reduce((pre,current)=>{ return pre+current},0)




return(
  <main>
    <main className="timeclock">
    <Timer/>
    </main>
      <main className="payDetails">
        
        <main className="movieandSeat">
        <img src={Movieone} alt="movieposter" className="movieimg"></img>
        <main>
        <h2>Intersteller</h2>
        <main className="movietype">
        <button>ENGLISH</button>
        <button>2D</button>
        </main>
       <main className="movietime">
        <h4>Sat,04 Feb,11:00 PM</h4>
        <h4>{seatdata}</h4>
       </main>
        </main>
        
        </main>
        <main className="Payment"   >
            <h3>Booking Summary</h3>
            <main className="ticketcount">
            <h4>Tickets Booked</h4>
            <h4>{ticketscount}</h4>
            </main>
           <main className="Aticketcount">
            <h4>Premimum Seats</h4>
            <h4>{Premimumseats}</h4>
           </main>
           <main className="Bticketcount">
            <h4>Secondclass Seats</h4>
            <h4>{secondclassSeats}</h4>
           </main>
          
           <main className="Totalprice">
             <h2>Total</h2>
            <h2>{totalAmount}</h2>
           </main>
          <button className="paybutton">Proceed to Pay</button>
        </main>
    </main>
    </main>
)



}

export default Payment;
