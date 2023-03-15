

import "./Seat.css"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { seatslineActions } from "../store/reduxstore"
import { useSelector } from "react-redux"
const Seat=(props)=>{
const [seatBooked,SetseatBooked]=useState(false)
 const intialSeatprice =    useSelector((state)=>{ return state.seatline.Seatprice})
const dispatch=useDispatch();

const seatLine=props.line.toString()
const seatNum=props.seatnum.toString()
const seatname= `${seatLine} ${seatNum} `
const seatprice=props.price
const UAseat=seatLine ==="U/A"
const seatproperties={seatAdress:seatname,seatPrices:seatprice}

const seatSelectHandler=(event)=>{
    event.preventDefault()

SetseatBooked((prevstae)=>{
    
    return !prevstae
 })
}

const update=()=>{
   
    if(seatBooked){
        
        dispatch(seatslineActions.seleted({seatDetailes:seatproperties}))
        // SetseatDetailes({seatAdress:seatname,seatPrices:seatprice}) 
       
    }
   }
  const deselcetion=()=>{
      if(!seatBooked&&intialSeatprice.length>0){
        dispatch(seatslineActions.deselecet({seatDetailes:seatproperties}))
         
      }
  } 

useEffect(() => {
    update();
    deselcetion()
  }, [seatBooked])

return(
  <main>
    {UAseat?<button  onClick={seatSelectHandler} className={"UnavialableSeat"} disabled={UAseat}>X</button>:
    <button  onClick={seatSelectHandler} className={!seatBooked?"Bseat":"selectedseat"} disabled={UAseat}> </button>
  }

  </main>
  

)

}
export default  Seat;


{/* <button  onClick={seatSelectHandler} className={!seatBooked?"Bseat":"selectedseat"} > </button> */}




















































