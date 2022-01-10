import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fooditems from '../components/Fooditems';
import { createMenu,listMenu } from '../actions/menuactions';
import MessageBox from '../components/messagebox';
import { useNavigate } from 'react-router-dom';
import {MENU_CREATE_RESET} from '../constants/menuconstants';

function Menuadminpage(props) {
  const menuList = useSelector((state) => state.menuList);
  const { loading, error, fooditems } = menuList;
  const menuCreate = useSelector((state) => state.menuCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdmenu,
  } = menuCreate;
  const history=useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
        dispatch({ type: MENU_CREATE_RESET });
         history(`/fooditems/${createdmenu._id}/edit`);
      }
    dispatch(listMenu());
}, [createdmenu, dispatch, history, successCreate]);
  const deleteHandler = () => {
    /// TODO: dispatch delete action
  };
  const createHandler = () => {
    dispatch(createMenu());
  };
  return (
    <div>
      <div className="row">
        <h1>Menu</h1>
        <ul><button onClick={()=>createHandler} className="orderbutton">Add Dish</button></ul>
      </div>
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {fooditems.map((fooditems) => (
              <tr key={fooditems._id}>
                <td>{fooditems.name}</td>
                <td>{fooditems.price}</td>
                <td>{fooditems.category}</td>
                <td>
                  <ul><button onClick={()=>history(`/fooditems/${fooditems._id}/edit`)} className="orderbutton">Edit</button></ul>
                  <ul><button onClick={()=>deleteHandler(fooditems)} className="orderbutton">Delete</button></ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Menuadminpage;