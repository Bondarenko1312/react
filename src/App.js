import './App.css';
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

function App() {
    return (
        <>
            <div className="App">
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </>
    );
}

export default App;
