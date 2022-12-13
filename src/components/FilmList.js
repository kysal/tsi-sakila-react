import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './FilmList.css';

// class FilmList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             films: []
//         }
//     }


//     async getFilms() {
//         const searchTerm = await new URLSearchParams(window.location.search).get("search");
//         let films;
//         if (searchTerm === null) {
//             let response = await fetch("http://localhost:8080/film")
//             films = await response.json();
//             this.setState({films: films})
//         } else {
//             let response = await fetch("http://localhost:8080/film/search/" + searchTerm)
//             films = await response.json();
//             this.setState({films: films})
//         }

//     }

//     componentDidMount() {
//         this.getFilms();
//     }


//     render() {
//         return (
//             <div>
//             <div className="search">
//                 <form>
//                 <input id="search" name="search" type="text"/>
//                 <button className="button-primary" type="submit">Search</button>
//                 </form>
//             </div>
//             <div id="film-list">
//             {this.state.films.map(film => (<Link to={"/film/" + film.filmId} key={film.filmId}><div className="film-list-item">{film.title}</div></Link>))}
//             </div>
//             </div>
//         );
//     }

// }

function FilmList() {

    const [filmList, setFilmList] = useState([]);
    useEffect(() => {
        fetchFilmList()
    }, [])

    const [page, setPage] = useState(1);

    const fetchFilmList = () => {
        axios.get('http://localhost:8080/film/page/' + page)
        .then((res) => {
            setFilmList(res.data.content);
        })
    }

    const changePage = (effect) => {
        if ((page + effect) > 1) {
            setPage(page + effect)
            fetchFilmList();
        }
    }

    return (
            <div>
            <div className="search">
                <form>
                    <input id="search" name="search" type="text"/>
                    <button className="button-primary" type="submit">Search</button>
                </form>
                <button className="button-primary" onClick={() => changePage(-1)}>{"<-"}</button>
                <span> {page} </span>
                <button className="button-primary" onClick={() => changePage(1)}>{"->"}</button>
            </div>
            <div id="film-list">
                {filmList.map(film => (<Link to={"/film/" + film.filmId} key={film.filmId}><div className="film-list-item">{film.title}</div></Link>))}
            </div>
            </div>
    )
}

export default FilmList;