function Homescreen()
{
  return(
         <div>
             <div className="row">
            <div className="col-1">
                <div className="row">
                    <ul>
                       <li><h1>Welcome to Hazara Restaurant</h1></li>
                       <li><p>A great Place to Eat</p></li>
                       <li>Lets Get Ordering <a className="lbutton" href="/Menu"><button className="orderbutton">Go to Menu</button></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1">
                <img className="large" src="/images/fi1.jpg" alt="Sample-img"/>
            </div>
            <div className="col-1">
                <div className="row"><h1>Contact Us: (Yet to be added)</h1></div>
            </div>
            </div>
         </div>
  );
}
export default Homescreen