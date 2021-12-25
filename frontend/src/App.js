import { BrowserRouter as Router,Routes, Route,useParams } from 'react-router-dom';
import Fooddetails from './screens/Foodpage';
import Homepage from './screens/home';
function App() {
  return (
     <Router>
    <div className="grid-container">
    <header className="row">
          <div>
              <a className="logotext" href="/">Hazara Restaurant</a>
            </div>
          <div>
            <a href="/orders">Orders</a>
            <a href="/signin">Sign In</a>
          </div>
    </header>
     <main>
       <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="fooditems/:id" element={<Fooddetails />}></Route>
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
