import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import Fooddetails from './screens/Foodpage';
import Menu from './screens/menu';
import Homescreen from './screens/home';
import Orderpage from './screens/orderpage';
import SigninPage from './screens/SigninPage';
import Fooditems from './components/Fooditems';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
     <Router>
    <div className="grid-container">
    <header className="row">
          <div>
              <Link className="logotext" to="/">Hazara Restaurant</Link>
            </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/orders">Orders</Link>
           
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
    </header>
     <main>
       <Routes>
            <Route path="/orders/:id/:qty" element={<Orderpage />}></Route>
            <Route path="/orders/:id" element={<Orderpage />}></Route>
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
