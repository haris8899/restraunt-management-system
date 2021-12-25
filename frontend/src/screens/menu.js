import Fooditems from '../components/Fooditems';
import data from '../data';

function Menu() {
  return (
    <div>
      <div className="row center">
        {data.fooditems.map((fooditems) => (
          <Fooditems key={fooditems._id} fooditems={fooditems}></Fooditems>
        ))}
      </div>
    </div>
  );
}
export default Menu