import Nav from "./components/Nav.jsx";
import PlayerList from "./components/PlayerList.jsx";
// import {Routes, Route} from "react-router-dom";
// import PlayerPage from "./components/PlayerPage.jsx";
// import AddPlayer from "./components/AddPlayer.jsx";
import {useGetPlayersQuery} from "./redux/api/api.js";
import {Route, Routes} from "react-router-dom";
import PlayerPage from "./components/PlayerPage.jsx";
import AddPlayer from "./components/AddPlayer.jsx";


function App() {

    const {isLoading} = useGetPlayersQuery();

    return (
        //   <> empty elements you wont see
        <>
            {isLoading ?
                <h1>IsLoading</h1> :
                <>
                    <Nav/>
                    <Routes>
                        <Route index element={<PlayerList/>}/>
                        <Route path={"/players/:id"} element={<PlayerPage/>}/>
                        <Route path={"addPlayer"} element={<AddPlayer/>}/>
                    </Routes>
                </>}

        </>

    )
}

export default App
