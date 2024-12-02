import github from '../assets/imgs/github-mark-white.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/slices/authSlice';

function Login(){
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        const token = "example-access-token"; 
        dispatch(setToken(token));
        navigate(from, { replace: true });
    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[400px] h-[400px] bg-darkGray mx-auto'>
                <h1 className='text-2xl p-[10px]'>BlockBook</h1>
                <img className='mx-auto mt-10' src={github} alt="github logo" />
                <button onClick={() => {handleLogin()}} className='block w-[200px] h-[35px] border border-lightGray bg-darkGray rounded-[30px] mx-auto mt-8'>Login with Github</button>
                <p className='text-center text-white font-light px-8 mt-8'>* BlockBook uses github repository to save files and settings, for further usage please log in with your GitHub</p>
            </div>
        </div>
    )
}

export default Login