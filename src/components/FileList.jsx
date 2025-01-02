import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addfiles, removefiles} from "../store/slices/fileSlice";
import { addTab } from "../store/slices/tabSlice";
import { clearToken } from "../store/slices/authSlice";
import addItemIcon from '../assets/imgs/icons/add-item.svg'
import { useState } from "react";

function FileList(){
    const files = useSelector((state) => state.file.files);
    const token = useSelector((state) => state.auth.token);
    const repository = useSelector((state) => state.repo.repository);
    const dispatch = useDispatch();
    const [contextElement, setContextElement] = useState(null);
    const [showContext, setShowContext] = useState(false);

    const handleLogout = () => {
        dispatch(clearToken());
    }

    const addFile = async () => {
        const owner = repository.owner.login;
        const repo = repository.name;
        const name = `new-file-${Date.now()}.md`;
        const fileContent = "This is a new file / created using proxy server api";

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/addNewFileToVault?owner=${owner}&repo=${repo}&name=${name}&fileContent=${fileContent}&token=${token}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(`Error: ${error.error}`);
            }

            const data = await response.json();
            dispatch(addfiles({ id: Date.now(), name: data.file.name, path: data.file.path, content: fileContent }));
            console.log(data);
        } catch (error) {
            console.error("Error adding file to vault:", error.message);
        }
    };

    const removeFile = (item) => {
        dispatch(removefiles({ id: 0 }));
    }

    const handleAddTab = (element) => {
        dispatch(addTab(element));
    };

    const handleContextMenu = (e,element) => {
        e.preventDefault();
        setContextElement(element);
    }

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
                <div className="px-7 py-5 flex flex-col justify-start items-start">
                    {files.map((element, index) => {
                        return <button onClick={() => handleAddTab(element)} onContextMenu={(e) => handleContextMenu(e,element)} key={index}>{element.name}</button>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FileList