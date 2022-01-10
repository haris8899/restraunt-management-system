import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/userActions';
import MessageBox from '../components/messagebox';
import { useNavigate,useSearchParams,useParams,Link } from 'react-router-dom';

function SignupPage(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history=useNavigate();
  const[searchParams,setSearchParams]=useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect=searchParams.get('redirect')||'/'

  const userSignup = useSelector((state) => state.userSignup);
  const { userInfo, loading, error } = userSignup;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password should be same');
    } else {
      dispatch(signup(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Account</h1>
        </div>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="button order" type="submit">
            Sign Up
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;