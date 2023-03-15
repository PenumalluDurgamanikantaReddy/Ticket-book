
import {configureStore, createSlice} from "@reduxjs/toolkit";

const seatsData={Selectedseats:[],Seatprice:[]}

const seatstoreReducer= createSlice({
    name:"seatsdata",
    initialState:seatsData,
    reducers:{
        seleted(state,action){ 
            state.Selectedseats.push(action.payload.seatDetailes.seatAdress)
            state.Seatprice.push(action.payload.seatDetailes.seatPrices)
           
           },
          deselecet(state,action){
        //   const newdata= state.Selectedseats.filter((eachaddress)=>{return eachaddress !== action.payload.seatDetailes.seatAdress})
        //   state.Selectedseats=newdata;
          const seatAdress = action.payload.seatDetailes.seatAdress;
          const seatIndex = state.Selectedseats.findIndex(eachaddress => eachaddress === seatAdress);
          if (seatIndex >= 0) {
            state.Selectedseats.splice(seatIndex, 1);
            state.Seatprice.splice(seatIndex, 1);
          }
        }
          
          }
    }
      
)

const seatStore=configureStore({reducer:{
    seatline:seatstoreReducer.reducer
},})

export  const seatslineActions=seatstoreReducer.actions
export default seatStore;







// deselected(state, action){
//     const seatIndex = state.Selectedseats.indexOf(`${action.payload.seatLine}-${action.payload.seatNum}`);
//     state.Selectedseats.splice(seatIndex, 1);
//     state.Seatprice.splice(seatIndex, 1);
// }
































































