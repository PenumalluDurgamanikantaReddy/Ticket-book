import "./Ui.css"

import { useHistory } from "react-router-dom"
import user from "../imgs/user.png"
import moviepos from "../imgs/moviepos.jpg"
import matt from "../cast/matt.png"
import anna from "../cast/anna.png"
import jessica from "../cast/jessica.png"
import caine from "../cast/caine.png"
import nolan from "../cast/nolan.png"
import matthew from "../cast/matthew.png"

const Ui=()=>{
const history=useHistory()
const selectshowHandler=()=>{
    history.push("/bookticket")
}

    return (
        <main>
       <main className="navbar">
        <button className="user">Hello User</button>
         <img src={user} className="userimg" alt="logo"></img>
      </main>
          <img src={moviepos} alt={"movieposter"}  className="movieposter"></img>
         <main className="openshow"></main>
         <main className="openshowdeatils">
        <button className="openshowbtn">Sep-04</button>
        <hr ></hr> 
       
         <main className="theatrename"> 

         <h2 >INOX SRMT MALL,KAKINADA</h2>
        <main className="showtimes">
        <button className="fullshow">10:30 AM</button> 
        <button className="fullshow">02:30 PM</button>
        <button className="fullshow">06:30 PM</button>  
        <button onClick={selectshowHandler}  className="freeshow">11:00 PM</button> 
        </main>
       
        </main>  
        <hr className="castline"></hr> 
        
        <h2 className="title">Instersteller Cast</h2>

      <main className="castimgs">
            <img src={matthew} alt={"Mattew"}   className="castimg" ></img>
            <img src={anna}   alt={"Anna-Hathway"}    className="castimg"   ></img>
            <img src={jessica} alt={"Jessica"}  className="castimg"  ></img>
            <img src={caine}   alt={"Michel Caine"}   className="castimg"  ></img>
            <img src={nolan}  alt={"Nolan"}   className="castimg" ></img>
            <img src={matt}   alt={"Matt Dameon"}   className="castimg" ></img>
      </main>
          
</main>
         </main>
      
    )
}
export default Ui;