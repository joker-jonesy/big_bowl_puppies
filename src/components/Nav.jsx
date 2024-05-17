import {Link} from "react-router-dom";

function Nav(){

    return (
        <nav>
            <Link to={"/"}>Players</Link>
            <Link to={"/addPlayer"}>Add Player</Link>
        </nav>
    )
}

export default Nav;