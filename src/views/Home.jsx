import { useEffect } from "react";
import FileList from "../components/fileList";
import TabsList from "../components/TabsList";
import TextPanel from "../components/TextPanel";
import { useDispatch, useSelector } from "react-redux";
import { setRepo } from "../store/slices/repoSlice";
import { setfiles } from "../store/slices/fileSlice";

function Home(){
    const repository = useSelector((state) => state.repo.repository);
    const userToken = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRepository = async () => {
            try {
                const backendUrl = import.meta.env.VITE_BACKEND_URL;
                const token = userToken;

                const response = await fetch(`${backendUrl}/getVaultRepository?token=${token}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch repository: ${response.statusText}`);
                }

                const data = await response.json();
                dispatch(setRepo(data.repo)); 
            } catch (error) {
                console.error("Error fetching vault repository: ", error);
            }
        };

        if (userToken) {
            fetchRepository(); 
        }
    }, [userToken, dispatch]);

    useEffect(() => {
        const fetchFiles = async () => {
            if (!repository || !repository.owner) {
                console.warn("Skipping fetchFiles due to missing repository data.");
                return; 
            }

            try {
                const backendUrl = import.meta.env.VITE_BACKEND_URL;
                const owner = repository.owner.login;
                const repo = repository.name;
                const token = userToken;

                console.log(owner, repo, token);

                const response = await fetch(
                    `${backendUrl}/getAllFiles?owner=${owner}&repo=${repo}&token=${token}`
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch files: ${response.statusText}`);
                }

                const data = await response.json();
                dispatch(setfiles(data));
                console.log(data);
            } catch (error) {
                console.error("Error fetching repository files: ", error);
            }
        };

        fetchFiles();
    }, [repository, userToken]);

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