import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Fooditems';
import Loadingcircle from '../components/loadingcircle';
import MessageBox from '../components/messagebox';
import Fooditems from '../components/Fooditems';

function Menu() {
  const [fooditems, setfooditems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fecthData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/fooditems');
        setLoading(false);
        setfooditems(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fecthData();
  }, []);
  return (
    <div>
     {loading ? (
       <div>Loading...</div>
      ) :
       error ? (
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
export default Menu