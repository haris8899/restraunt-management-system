import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToOrder,removeFromOrder } from '../actions/orderactions';
import MessageBox from '../components/messagebox';

function Orderpage(props) {
   const removeFromOrderHandler = (Id) => {
    dispatch(removeFromOrder(Id));
    };
    const {id,qty} = useParams();
    const history=useNavigate();
    const order = useSelector((state) => state.order);
  const { orderItems } = order;
    const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(addToOrder(id, qty));
    }
  }, [dispatch, id, qty]);
  

  const confirmOrderHandler = () => {
    history('/signin?redirect=OrderFinish');
  };
    return (
      <div className="row top">
      <div className="col-2">
        <h1>Order</h1>
        {orderItems.length === 0 ? (
          <MessageBox>
            Yet to Order. <Link to="/Menu">Order from Menu</Link>
          </MessageBox>
        ) : (
          <ul>
            {orderItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/Rs {item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToOrder(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div> Rs {item.price}</div>
                  <div>
                  <ul><button onClick={() =>removeFromOrderHandler(item.product)} className="button order">Delete</button></ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({orderItems.reduce((a, c) => a + c.qty, 0)} items) : Rs 
                {orderItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={confirmOrderHandler}
                className="button order"
                disabled={orderItems.length === 0}
              >
                Finish Order
              </button>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
  export default Orderpage