import { useEffect, useState } from "react"
import User from "./user";
import "./styles.css";



export default function GithubProfileFinder() {
    const [username, setUsername] = useState('sangammukherjee');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    function handleSubmit() {
        fetchGithubUserData();
    }

    async function fetchGithubUserData() {
        // console.log("Fetching ", username);
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);

        const data = await res.json();
        if(data) {
            setUserData(data);
            setLoading(false);
            setUsername('')
        }

    }

    useEffect(() => {
        fetchGithubUserData();
    },[])

    console.log(userData);
    
    if(loading) {
        return <h1>Loading Data!</h1>
    }

    return (
        <div className="github-profile-container">
        <div className="input-wrapper">
            <input type="text" name="search-by-username" placeholder="Search GutHub Username.." value={username} onChange={(event)=>setUsername(event.target.value)}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData}/>
            : null
        }
    </div>
    );
}