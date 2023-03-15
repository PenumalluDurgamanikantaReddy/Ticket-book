import Seat from "./Seat";
import "./Seat.css"
import React, {useEffect,useState} from "react";


const SeatsList=()=>{
const [linesRange,SetlinesRange]=useState([])
const [unAviableSeats,SetunAviableSeats]=useState([])
const [secondclass,Setsecondclass]=useState([])
useEffect((
()=>{

    SetlinesRange(Array.from({ length: 20 }, (_, index) => (
                       {line:"A",id:index +1}
                  )))

                  SetunAviableSeats(Array.from({length:20},(_, index)=>(
                            {Line:"U/A",id:index+1}
                  )
                     ))
                     Setsecondclass(Array.from({length:30},(_, index)=>(
                        {line:"B",id:index +1}
                     )))

                 }
              ),[])


const seatslines=linesRange.map((eachseat)=>{

    return <Seat line={eachseat.line} key={eachseat.id} seatnum={eachseat.id} price={100} />
})
const secondclassSeats=secondclass.map((eachseat)=>{
return <Seat line={eachseat.line}  key={eachseat.id} seatnum={eachseat.id} price={75} />
})



const unAvialable=unAviableSeats.map((eachuAseat)=>{
return <Seat line={eachuAseat.Line} key={eachuAseat.id} seatnum={eachuAseat.id} price={0}/>
})

return (
    <div>
    <div className="seatslist"  >
       {seatslines}
       {unAvialable}
       </div>
    <main className="secondclasslist">
    {secondclassSeats}
    </main>
      
    </div> 
  
)


}

export default SeatsList;






//     useEffect((()=>{

//         SetlinesRange(Array.from({ length: 30 }, (_, index) => (
//                {line:"A",id:index +1}
//           )))
//          }
//       ),[])

//       const Lines=  linesRange.map((eachseat)=>{
//         return <Seat key={eachseat.id} seatNum={eachseat.id} line={eachseat.line} price={100}/>
//     }) 


// return(
//     <div className="seatslist">

//        {Lines}

//     </div>
// )


    
// }
