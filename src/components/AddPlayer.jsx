import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAddPlayerMutation} from "../redux/api/api.js";

function AddPlayer(){
    const [form, setForm] = useState({
        name:"riptor",
        breed:"dinosaur"
    });

    const navigate=useNavigate();

    const [addPlayer]=useAddPlayerMutation()

    const submit = async (event) => {
        event.preventDefault()
        await addPlayer(form)
        navigate("/")
    }

    const setChange = (event)=>{
        const newObj = {...form};
        newObj[event.target.name] = event.target.value;
        setForm(newObj)
    }

    return(
        <form onSubmit={submit}>
            <input type="text" name={"name"} value={form.name} onChange={setChange} placeholder={"name..."}/>
            <input type="text" name={"breed"} value={form.breed} onChange={setChange} placeholder={"breed..."}/>
            <input id={"submit"} type="submit" value={"Submit"}/>
        </form>
    )
}

export default AddPlayer