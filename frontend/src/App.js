import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Fooddetails from './screens/Foodpage';
import Menu from './screens/menu';
import Homescreen from './screens/home';
import Orderpage from './screens/orderpage';
import SigninPage from './screens/SigninPage';
import Fooditems from './components/Fooditems';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
function App() {
  return (
     <Router>
    <div className="grid-container">
    <header className="row">
          <div>
              <a className="logotext" href="/">Hazara Restaurant</a>
            </div>
          <div>
            <a href="/">Home</a>
            <a href="/Menu">Menu</a>
            <a href="/orders/:id?">Orders</a>
           
              <a href="/signin">Sign In</a>
          </div>
    </header>
     <main>
       <Routes>
            <Route path="/orders/:pathParam1/:pathparam2" element={<Orderpage />}></Route>
            <Route path="/orders/:pathParam" element={<Orderpage />}></Route>
            <Route path="/orders" element={<Orderpage />}></Route>
            <Route path="/" element={<Homescreen />}></Route>
            <Route path="/Menu" element={<Menu />}></Route>
            <Route path="/fooditems/:id" element={<Fooddetails />}></Route>
            <Route path='/signin' element={<SigninPage />}></Route>
       </Routes>
     </main>
    <footer className="row center">
        <p>This Website has been developed by: 19F-0267 Haris Raza 19F-0213 Hassan Tanveer</p>
    </footer>
</div>
</Router>
  );
}

export default App;
