
import './App.css';

import {BrowserRouter,Route,Redirect} from "react-router-dom"
import SeatsLayoutPage from './pages/SeatsLayoutPage';
import Payment from './components/Payment';
import Ui from './components/UI';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="*">
   <Redirect  to="/Uipage" />
      </Route>
      <Route path="/Uipage">
        <Ui/>
      </Route>
    <Route path="/bookticket">
    <SeatsLayoutPage/>
    </Route>

<Route path="/payment">
<Payment/>
</Route>
    
     
    
    </div>
    </BrowserRouter>
  );
}

export default App;
