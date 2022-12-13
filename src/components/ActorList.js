import axios from "axios";
import { useEffect, useState } from "react";




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
            {actorList.map(actor => (<div key={actor.actorId}>{actor.firstName + " " + actor.lastName}</div>))}
        </div>
    )

}

export default ActorList