import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsItem } from '../actions/menuactions';
import MessageBox from '../components/messagebox';
import { useNavigate, useParams } from "react-router-dom";

function Fooddetails(props) 
{
  const dispatch = useDispatch();
  const {id} = useParams();
  const history=useNavigate();
  const itemDetails = useSelector((state) => state.itemdetail);
  const { loading, error, item } = itemDetails;
  const [qty, setQty] = useState(1);
  const OrderHandler = () => {
    history(`/orders/${id}/${qty}`);
  };
  useEffect(() => {
    dispatch(detailsItem(id));
  }, [dispatch,id]);
  return (
    <div>
      {loading ? (
      <div>loading...</div>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div className="row top">
        <div className="col-2">
        <img className="large" src={item.image} alt={item.name} />
        </div>
        <div className="col-1">
             <div className="row">
                <ul>
                  <li><h1>{item.name}</h1></li>
                  <li>
                      <h2>Description:</h2>
                      <p>{item.description}</p>
                   </li>
                </ul>
             </div>
        </div>
        <div className="col-1">
                <div className="card card-body">
                  <div className="row">
                   <ul>
                     <li><div className="pricebox">Price: Rs {item.price}</div></li>
                     <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(10).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <ul><button onClick={OrderHandler} className="button order">Order</button></ul>
                   </ul>
                </div>
             </div>
        </div>
      </div>
    )}
    </div>
  );
}
export default Fooddetails