import { useDispatch, useSelector } from "react-redux";
import { changeTabContent } from "../store/slices/tabSlice";

function TextPanel() {
    const tabs = useSelector((state) => state.tab.tabs);
    const activeTab = useSelector((state) => state.tab.activeTab);
    const dispatch = useDispatch();

    const currentTab = tabs.find((tab) => tab.id === activeTab);

    const textareaValue = currentTab ? currentTab.content : currentTab;

    const handleChange = (event) => {
        const updatedContent = event.target.value;
        dispatch(changeTabContent({ id: currentTab.id, content: updatedContent }));
    };

    const updateLineCount = (text) => {
        if (typeof text !== 'string') return [];

        const lines = text.split("\n");
        return lines.map((_, index) => index);
    };

    const lineNumbers = updateLineCount(textareaValue);

    return (
        <>
            <div
                className={`flex flex-grow bg-darkGray w-[80vw] ${
                    tabs.length > 0 ? "" : "absolute top-[42px] h-[calc(100vh-42px)]"
                }`}
            >
                <div className="flex w-full h-full pl-1 py-2 overflow-x-auto">
                    <div className="flex flex-col text-center text-gray-500 px-3">
                        {lineNumbers.map((lineNumber) => (
                            <div key={lineNumber} className="text-sm font-normal">
                                {lineNumber}
                            </div>
                        ))}
                    </div>
    
                    <textarea
                        className="bg-transparent flex-1 h-full whitespace-nowrap focus:border-transparent focus:outline-none text-sm font-normal pl-2 box-border"
                        value={textareaValue}
                        onChange={handleChange}
                        disabled={tabs.length <= 0}
                    ></textarea>
                </div>
            </div>
        </>
    );    
}

export default TextPanel;