import { Link, useParams } from "react-router-dom";
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
      <div className="row">
        <div className="col-lg-5 col-md-8 col-sm-12">
        <img className="large" src={fitems.image} alt={fitems.name} />
        </div>
        <div className="col-lg-3 col-md-5 col-sm-12">
             <div className="details">
                <ul>
                  <li><h1>{fitems.name}</h1></li>
                  <li>
                      <h2>Description:</h2>
                      <p>{fitems.description}</p>
                   </li>
                </ul>
             </div>
        </div>
        <div className="col-lg-3 col-md-5 col-sm-12">
                <div className="card card-body">
                  <div className="orderd">
                   <ul>
                     <li>Price: Rs {fitems.price}</li>
                      <ul><button type="button" class="btn btn-primary">Order</button></ul>
                   </ul>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}
export default Fooddetails