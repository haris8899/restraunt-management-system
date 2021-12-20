import data from './data';

function App() {
  return (
    <div class="grid-container">
    <header class="row">
          <div>
              <a class="logotext" href="/">Hazara Restaurant</a>
            </div>
          <div>
            <a href="/orders">Orders</a>
            <a href="/signin">Sign In</a>
          </div>
    </header>
     <main>
        <div class="row center">
          {
            data.fooditems.map(fooditems =>( 
            <div key={fooditems._id} class="card">
            <a href={`/fooditems/${fooditems._id}`}>
                <img class="medium" src={fooditems.image} alt={fooditems.name} />
            </a>
            <div class="card-body">
                <a href={`/fooditems/${fooditems._id}`}>
                    <h2>{fooditems.name}</h2>
                </a>
                <div class="price">
                    Rs {fooditems.price}
                </div>
            </div>
        </div>
              
            ))
          }
           
        </div>
     </main>
    <footer class="row center">
        <p>This Website has been developed by: 19F-0267 Haris Raza 19F-0213 Hassan Tanveer</p>
    </footer>
</div>
  );
}

export default App;
