import github from '../assets/imgs/github-mark-white.svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/slices/authSlice';
import { setRepo } from '../store/slices/repoSlice';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const from = "/";

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get("code");

        if(codeParam && (Cookies.get('token') == null)){
            const backendUrl = import.meta.env.VITE_BACKEND_URL
            async function getAccessToken(){
                await fetch(`${backendUrl}/getAccessToken?code=${codeParam}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json", 
                    },
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    if(data.token){
                        dispatch(setToken(data.token));
                        dispatch(setRepo(data.repo));
                        navigate(from, { replace: true });
                    }
                })
            }

            getAccessToken();
        }
    }, []);

    const handleLogin = () => {
        const clientId = import.meta.env.VITE_CLIENT_ID;
        window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`);
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