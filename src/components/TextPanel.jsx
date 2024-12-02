import { useSelector } from "react-redux"


function TextPanel(){
    const tabs = useSelector((state) => state.tab.tabs);

    return(
        <div className={`flex flex-grow bg-darkGray w-[80vw] h-full ${tabs.length > 0 ? '' : 'absolute top-[42px] h-[calc(100vh-42px)]'}`}>

        </div>
    )
}

export default TextPanel