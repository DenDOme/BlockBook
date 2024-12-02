import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addfiles, removefiles, getfiles, clearfiles  } from "../store/slices/fileSlice";


function FileList(){
    const files = useSelector((state) => state.file.files)
    const dispatch = useDispatch();

    const addFile = (item) => {
        dispatch(addfiles({id : Date.now(), name: 'new file'}));
    }

    const removeFile = (item) => {
        dispatch(removefiles({ id: 0 }));
    }


    return(
        <div>
            <header>
                <nav>
                    <Link className="text-2xl m-[10px]" to="/">BlockBook</Link>
                    <button className="text-base">Logout</button>
                </nav>
            </header>
            <div className="">
                <div className="top">
                    <button onClick={() => {addFile()}}>add file</button>
                    <button onClick={() => {}}></button>
                </div>
                <div className="bottom">
                    {files.map((element, index) => {
                        return <div key={index}>{element.name}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FileList