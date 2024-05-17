import {useGetPlayerQuery} from "../redux/api/api.js";
import {useParams, Link} from "react-router-dom";
import Player from "./Player.jsx";
import {useDeletePlayerMutation} from "../redux/api/api.js";

function PlayerPage(){

    const params = useParams();
    const id =  params.id;
    const {isLoading, data}=useGetPlayerQuery(id);
    console.log(!isLoading&&data.data.player)
    const [deletePlayer]= useDeletePlayerMutation();

    return(
        <div>
            {isLoading?<h1>Loading...</h1>:<h1><Player data={data.data.player}/></h1>}
            <button onClick={()=>deletePlayer(id)}>Delete</button>
            <Link to={"/"}><button>Return to Players</button></Link>
        </div>
    )
}

export default PlayerPage;