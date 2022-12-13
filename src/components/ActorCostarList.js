import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function ActorCostarList(props) {

    const [costarList, setCostarList] = useState([]);
    useEffect(() => {
        fetchCostarsInActor(props.actorId)
    }, []);

    const fetchCostarsInActor = (actorId) => {
        axios.get('http://localhost:8080/actor/' + actorId + '/costars')
        .then((res) => {
            setCostarList(res.data.slice(0, props.limit));
        })
    }

    return (
        <div>
            {costarList.map(actor => (
                <Link to={'/actor/' + actor.actorId} key={actor.actorId}>
                    <div>
                        {actor.firstName + ' ' + actor.lastName 
                        + " (" + actor.relations + ' film' + (actor.relations === 1 ? '' : 's') + ')'}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ActorCostarList