// {data} is a deconstruction of props
function Player({data}){

    // const data = props.data;

    return(
        <div className="character">
            <h1>{data.name}</h1>
            {data.imageUrl &&<img src={data.imageUrl} alt={data.name}/>}
        </div>
    )
}

export default Player;