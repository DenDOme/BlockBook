import { useDispatch, useSelector } from "react-redux"
import { changeTab, removeTab } from "../store/slices/tabSlice";
import closeTab from '../assets/imgs/icons/X.svg';

function TabsList(){
    const tabs = useSelector((state) => state.tab.tabs)
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.tab.activeTab)

    const handleChangeActiveTab = (id) => {
        console.log("arg id",id);
        console.log("tabs",tabs);
        console.log("active tab id",activeTab);
        dispatch(changeTab({id}));
    }

    const handleDeleteTab = (id) => {
        dispatch(removeTab(id));
    }

    return(
        <div className="ml-[5px] flex gap-[5px]">

            {tabs.map((element, index) => {
                const isActive = activeTab === element.id;
                return (
                    <div key={index} className={`mt-[12px] h-[30px] flex items-center justify-between w-[200px] px-5 rounded-tl-[20px] rounded-tr-[20px] ${isActive ? 'bg-darkGray' : ''}`}>
                        <button
                            onClick={() => { handleChangeActiveTab(element.id) }}
                            className={`w-[140px] text-start`}
                        >
                            {element.name}
                        </button>
                        <button 
                            onClick={() => { handleDeleteTab(element.id) }} 
                            className={`${isActive ? 'block' : 'hidden'}`}
                        >
                            <img src={closeTab} alt="close tab icon" />
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default TabsList