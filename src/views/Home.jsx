import FileList from "../components/fileList";
import TabsList from "../components/TabsList";
import TextPanel from "../components/TextPanel";

function Home(){


    return (
        <div className="flex w-[100vw] h-[100vh]">
            <FileList />
            <div className="flex flex-col w-[100%] h-[100vh]">
                <TabsList />
                <TextPanel />
            </div>
        </div>
    )
}

export default Home;