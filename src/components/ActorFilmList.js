import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function ActorFilmList(props) {

    const [filmList, setFilmList] = useState([]);
    useEffect(() => {
        fetchFilmsInActor(props.actorId)
    }, []);

    const fetchFilmsInActor = (actorId) => {
        axios.get('http://localhost:8080/actor/' + actorId + '/films')
        .then((res) => {
            setFilmList(res.data);
        })
    }

    return (
        
        <div>{filmList.map(film => (
            <Link to={'/film/' + film.filmId} key={film.filmId}>
                <div>{film.title}</div>
            </Link>
        ))}</div>
        
    )
}

export default ActorFilmList