import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Actor() {
    const params = useParams()
    const actorId = params.actorid;

    const [isLoading, setLoading] = useState(true)
    const [actor, setActor] = useState({});
    useEffect(() => {
        fetchActor();
    }, [])

    const fetchActor = () => {
        axios.get('http://localhost:8080/actor/' + actorId)
        .then((res) => {
            setActor(res.data);
            setLoading(false);
        })
    }

    if (isLoading) return (<div className="main-content"></div>)

    return (
    <div className="main-content">
        <h1>{actor.firstName + " " + actor.lastName}</h1>
        <h2>Films</h2>
        <div></div>

        <h2>Frequently Co-stars With: </h2>
        <div></div>
    </div>
    )
}

export default Actor