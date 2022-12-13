import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import './Film.css';
import axios from 'axios'

// class Film extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             film: {
//                 title: "",
//                 releaseYear: "",
//                 description: "",
//                 runlength: ""
//             }
//         }
//     }

//     async getFilm() {
//         const [searchParams] = useSearchParams();
//         const filmId = searchParams.get("filmid"); 

//         if (filmId != undefined) {
//             let response = await fetch("http://localhost:8080/film/" + filmId);
//             let film = await response.json();

//             this.setState({film: film})
//         }
//     }


//     render() {
//         <div class="main-content">

//             <table><tr>
//                 <td>
//                     <h2>
//                         <span id="film-title">...</span>
//                         <span id="release-year" className="release-year">...</span>
//                         <br />
//                         <small><span id="run-length" className="release-year">...</span></small>
//                     </h2>
//                     <br/> <br/>
//                     <blockquote id="description">...</blockquote>

//                     <h3>Actors</h3>
//                     <div id="actor-list">

//                     </div>
//                 </td>
//                 <td>
//                     <div className="rating-side-bar">
//                     <h3>Aggregate Rating</h3>
//                     <p id="score">...</p>
            
//                     <h3>Your Rating</h3>
//                     <a href="login.html">
//                         <button className="button-primary">Log In</button>
//                     </a>
//                     </div>
//                 </td>
//             </tr></table>
//         </div>

//     }
// }


function Film() {
    const params = useParams()
    const filmId = params.filmid;

    const [film, setFilm] = useState({});
    useEffect(() => {
        fetchFilm();
    }, [])

    const fetchFilm = () => {
        axios.get('http://localhost:8080/film/' + filmId)
        .then((res) => {
            setFilm(res.data);
        })
    }

    return (
        <div className="main-content">
        
        <table><tbody><tr>
            <td>
                <h2>
                    <span id="film-title">{film.title}</span>
                    <span id="release-year" className="release-year"> ({film.releaseYear})</span>
                    <br />
                    <small><span id="run-length" className="release-year">{film.length}mins</span></small>
                </h2>
                <blockquote id="description">{film.description}</blockquote>

                <h3>Actors</h3>
                <div id="actor-list">

                </div>
            </td>
            <td>
                <div className="rating-side-bar">
                <h3>Aggregate Rating</h3>
                <p id="score">...</p>
        
                <h3>Your Rating</h3>
                <a href="login.html">
                    <button className="button-primary">Log In</button>
                </a>
                </div>
            </td>
        </tr></tbody></table>
    </div>
    )

}

export default Film;