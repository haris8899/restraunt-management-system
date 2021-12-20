function Fooditems(sr){
    const {fooditems}=sr
return(
    <div key={fooditems._id} className="card">
            <a href={`/fooditems/${fooditems._id}`}>
                <img className="medium" src={fooditems.image} alt={fooditems.name} />
            </a>
            <div className="card-body">
                <a href={`/fooditems/${fooditems._id}`}>
                    <h2>{fooditems.name}</h2>
                </a>
                <div className="price">
                    Rs {fooditems.price}
                </div>
            </div>
        </div>
)
}
export default Fooditems