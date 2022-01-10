import { finishorder} from "../actions/userActions";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
function Orderfinish()
{
    const dispatch = useDispatch();
    const history=useNavigate();
    const deleteordersHandler = () => {
        dispatch(finishorder());
        history('/')
        };
    return(
    <div>
       Thank you for your Order
       <ul><button onClick={()=>deleteordersHandler()} className="orderbutton">Continue</button></ul>
    </div>
    );
}
export default Orderfinish