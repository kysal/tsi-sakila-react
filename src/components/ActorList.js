import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function ActorList(props) {

    const [actorList, setActorList] = useState([]);
    useEffect(() => {
        fetchActorsInFilm(props.filmId)
    }, [])

    const fetchActorsInFilm = (filmId) => {
        axios.get('http://localhost:8080/film/' + filmId + '/actors')
        .then((res) => {
            setActorList(res.data);
        }) 
    }

    return (
        <div>
            {actorList.map(actor => (
                <Link to={'/actor/' + actor.actorId} key={actor.actorId}>
                    <div>{actor.firstName + " " + actor.lastName}</div>
                </Link>
            ))}
        </div>
    )

}

export default ActorList