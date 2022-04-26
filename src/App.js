import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes } from 'react-router-dom';
import Homes from './Components/Pages/Home/Homes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Components/Pages/Header/Header';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import BookingList from './Components/Pages/BoolingList/BookingList';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import ResetPass from './Components/Pages/ResetPass/ResetPass';
import NotFound from './Components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
    
     <Routes>
       <Route path='/' element={<Homes></Homes>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/resetpass' element={<ResetPass></ResetPass>}></Route>
       <Route path='/bookinglist' element={
         <RequireAuth>
           <BookingList></BookingList>
         </RequireAuth>
       }></Route>
           <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
