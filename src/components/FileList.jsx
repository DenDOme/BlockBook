import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addfiles, removefiles} from "../store/slices/fileSlice";
import { addTab } from "../store/slices/tabSlice";
import { clearToken } from "../store/slices/authSlice";
import addItemIcon from '../assets/imgs/icons/add-item.svg'

function FileList(){
    const files = useSelector((state) => state.file.files)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearToken());
    }

    const addFile = (item) => {
        dispatch(addfiles({id : Date.now(), name: 'new file'}));
    }

    const removeFile = (item) => {
        dispatch(removefiles({ id: 0 }));
    }

    const handleAddTab = (element) => {
        dispatch(addTab(element));
    };

    return(
        <div className="max-w-[20vw] w-[100%] h-[100vh] flex flex-col">
            <header>
                <nav className="flex justify-between items-center">
                    <Link className="text-2xl mx-[10px] my-[5px]" to="/">BlockBook</Link>
                    <button className="mr-4 text-base" onClick={() => {handleLogout()}}>Logout</button>
                </nav>
            </header>
            <div className="bg-gray flex-grow">
                <div className="flex justify-center items-center gap-2 border-b-[2px] border-darkGray">
                    <button className="p-3" onClick={() => {addFile()}}><img src={addItemIcon} alt="" /></button>
                </div>
                <div className="flex flex-col justify-start items-start">
                    {files.map((element, index) => {
                        return <button onClick={() => handleAddTab(element)} key={index}>{element.name}</button>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FileList