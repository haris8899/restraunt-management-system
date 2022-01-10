import { useParams } from "react-router-dom";

function Orderpage(props) {
    const {id,qty} = useParams();
    return (
      <div>
        <h1>Order Screen</h1>
        <p>
          Order : ProductID: {id} Qty: {qty}
        </p>
      </div>
    );
  }
  export default Orderpage