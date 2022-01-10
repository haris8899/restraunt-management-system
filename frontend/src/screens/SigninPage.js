import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import MessageBox from '../components/messagebox';
import { useNavigate,useSearchParams,useParams,Link } from 'react-router-dom';

function SigninPage(props) {
  const [email, setEmail] = useState('');
  const[searchParams,setSearchParams]=useSearchParams();
  const history=useNavigate();
  const redirect=searchParams.get('redirect')||'/'
  const [password, setPassword] = useState('');
  //const {redirect} =useParams();// props.location.search
   // ? props.location.search.split('=')[1]
   // : '/';
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SigninPage