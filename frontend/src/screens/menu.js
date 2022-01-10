import React, { useEffect } from 'react';
import Fooditems from '../components/Fooditems';
import Loadingcircle from '../components/loadingcircle';
import MessageBox from '../components/messagebox';
import { useDispatch, useSelector } from 'react-redux';
import { listMenu } from '../actions/menuactions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const menuList = useSelector((state) => state.menuList);
  const { loading, error, fooditems } = menuList;

  useEffect(() => {
    dispatch(listMenu());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
        //<Loadingcircle></Loadingcircle>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
         {fooditems.map((fooditems) => (
          <Fooditems key={fooditems._id} fooditems={fooditems}></Fooditems>
        ))}
        </div>
      )}
    </div>
  );
}
