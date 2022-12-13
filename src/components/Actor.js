import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ActorCostarList from "./ActorCostarList";
import ActorFilmList from "./ActorFilmList";

function Actor() {
    const params = useParams()
    const actorId = params.actorid;
    let currentHeight = null;

    const [isLoading, setLoading] = useState(true)
    const [actor, setActor] = useState({});
    useEffect(() => {
        fetchActor();
    }, [actorId])

    const fetchActor = () => {
        setLoading(true)
        axios.get('http://localhost:8080/actor/' + actorId)
        .then((res) => {
            
            setActor(res.data);
            setLoading(false);
        })
    }

    if (isLoading) return (<div className={"main-content"}></div>)

    return (
    <div className="main-content" id='content'>
        <h1>{actor.firstName + " " + actor.lastName}</h1>
        <h2>Films</h2>
        <ActorFilmList actorId={actor.actorId} />
        <h2>Frequently Co-stars With: </h2>
        <ActorCostarList actorId={actor.actorId} limit={5} />
    </div>
    )
}

export default Actor