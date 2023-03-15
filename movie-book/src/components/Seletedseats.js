
import "./selectedseats.css"
import {useSelector} from "react-redux"
import { useEffect } from "react"
import { useHistory,} from "react-router-dom"
const Selectedseats=()=>{
//  const selectedSeats=useSelector((state)=> {return state.seatline.Selectedseats})
//  const selectedSeatsCount=useSelector((state)=> {return state.seatline.Selectedseats.length})

const history= useHistory()
const selectedSeats=useSelector((state)=>{ return state.seatline.Selectedseats})
 const SeatsPrices=useSelector((state)=>{ return state.seatline.Seatprice})
 useEffect((()=>{
  console.log(selectedSeats)
 }),)


 const FinalAmount = SeatsPrices.reduce((prev, curr)=>{
  return  prev+curr
 },0)
 
function paymentpageHandler(event){
  event.preventDefault() 
  history.push("/payment")

}

return (
      <main >
      <main className="selected">
    
      <h2 className="finalamount">Rs/-{FinalAmount}</h2>
      <strong className="seatnames">{FinalAmount<=0 ?"Seat Numbers":selectedSeats}</strong>
      {/* <button className="pay"><Link to="/payment">PAY</Link></button> */}
      <button onClick={paymentpageHandler}   className="pay">PAY</button>
      </main>
    
     
    </main>
)

}
export default Selectedseats;