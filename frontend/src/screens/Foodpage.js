import { useParams } from "react-router-dom";
import data from "../data";

function Fooddetails(props) 
{
  const {id}=useParams();
  const fitems=data.fooditems.find((x) => x._id === id);
  if(!fitems)
  {
    return <div>
              Item not Found
           </div>
  }
  return (
    <div>
      <div className="row top">
        <div className="col-2">
        <img className="large" src={fitems.image} alt={fitems.name} />
        </div>
        <div className="col-1">
             <div className="row">
                <ul>
                  <li><h1>{fitems.name}</h1></li>
                  <li>
                      <h2>Description:</h2>
                      <p>{fitems.description}</p>
                   </li>
                </ul>
             </div>
        </div>
        <div className="col-1">
                <div className="card card-body">
                  <div className="row">
                   <ul>
                     <li><div className="pricebox">Price: Rs {fitems.price}</div></li>
                      <ul><button className="button order">Order</button></ul>
                   </ul>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}
export default Fooddetails