function CardUI(props){
    return (
        <div class="card text-center mb-3" style={{width:'250'}}>
            <img src="man.jpeg" width={200} style={{border:'2px solid blue', borderRadius:'100px'}}/>
            <h3>{props.fromArray}</h3>
            <p>{props.program.desc}</p>
            <p>{props.program.year}</p>
            <p>{props.program.branch}</p>
            <button type="button" class="btn btn-outline-primary">Connect</button>
        </div>
    );
}
export default CardUI;