import Form from "./Pages/Form";
import Home from "./Pages/Home";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from "./Pages/Success";
import {BrowserRouter,Switch ,Route, useRouteMatch,} from "react-router-dom";

function App() {
  return (
  <>
    <BrowserRouter>
  <ToastContainer/>
  <Switch>
   <Route exact path='/'> <Home/></Route>
   <Route exact path='/form'> <Form/> </Route>
   <Route exact path='/success'> <Success/> </Route>



  </Switch>

  </BrowserRouter>
 
  </>
  );
}

export default App;
