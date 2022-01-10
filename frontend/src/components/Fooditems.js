import {Link} from "react-router-dom"
function Fooditems(sr){
    const {fooditems}=sr
return(
    <div key={fooditems._id} className="card">
            <Link to={`/fooditems/${fooditems._id}`}>
                <img className="medium" src={fooditems.image} alt={fooditems.name} />
            </Link>
            <div className="card-body">
                <Link to={`/fooditems/${fooditems._id}`}>
                    <h2>{fooditems.name}</h2>
                </Link>
                <div className="price">
                    Rs {fooditems.price}
                </div>
            </div>
        </div>
)
}
export default Fooditems