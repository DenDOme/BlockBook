import { useSelector } from "react-redux"


function TextPanel() {
    const tabs = useSelector((state) => state.tab.tabs);
    const activeTab = useSelector((state) => state.tab.activeTab);

    const currentTab = tabs.find((tab) => tab.id === activeTab);

    return (
        <>
            <div
                className={`flex flex-grow bg-darkGray w-[80vw] ${
                    tabs.length > 0 ? '' : 'absolute top-[42px] h-[calc(100vh-42px)]'
                }`}
            >
                {currentTab ? currentTab.content : "No file selected."}
            </div>
        </>
    );
}

export default TextPanel