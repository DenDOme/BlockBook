import github from '../assets/imgs/github-mark-white.svg'

function Login(){

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[500px] h-[500px] bg-darkGray mx-auto'>
                <h1 className='text-2xl p-[10px]'>BlockBook</h1>
                <img className='mx-auto mt-24' src={github} alt="github logo" />
                <button className='block w-[200px] h-[35px] border border-lightGray bg-darkGray rounded-[30px] mx-auto mt-8'>Login with Github</button>
                <p className='text-center text-white font-light px-8 mt-16'>* BlockBook uses github repository to save files and settings, for further usage please log in with your GitHub</p>
            </div>
        </div>
    )
}

export default Login