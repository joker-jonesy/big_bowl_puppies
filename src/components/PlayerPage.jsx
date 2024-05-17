import {useGetPlayerQuery} from "../redux/api/api.js";
import {useParams, Link} from "react-router-dom";
import Player from "./Player.jsx";
import {useDeletePlayerMutation} from "../redux/api/api.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

function PlayerPage(){

    const params = useParams();
    const id =  params.id;
    const {isLoading, data}=useGetPlayerQuery(id);
    console.log(!isLoading&&data.data.player)
    const [deletePlayer]= useDeletePlayerMutation();

    return(
        <div>
            {isLoading?<h1>Loading...</h1>:<h1><Player data={data.data.player}/></h1>}
            <FontAwesomeIcon style={{color:"red", fontSize:"60px"}} onClick={()=>deletePlayer(id)} icon={faTrash} spin/>
            <Link to={"/"}><button>Return to Players</button></Link>
        </div>
    )
}

export default PlayerPage;