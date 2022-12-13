import React from "react";
import './FilmList.css';

class FilmList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
    }


    async getFilms() {
        const searchTerm = await new URLSearchParams(window.location.search).get("search");
        let films;
        if (searchTerm === null) {
            let response = await fetch("http://localhost:8080/film")
            films = await response.json();
            this.setState({films: films})
        } else {
            let response = await fetch("http://localhost:8080/film/search/" + searchTerm)
            films = await response.json();
            this.setState({films: films})
        }

    }

    componentDidMount() {
        this.getFilms();
    }


    render() {
        return (
            <div>
            <div className="search">
                <form>
                <input id="search" name="search" type="text"/>
                <button className="button-primary" type="submit">Search</button>
                </form>
            </div>
            <div id="film-list">
                {this.state.films.map(film => (<div className="film-list-item" key={film.filmId}>{film.title}</div>))}
            </div>
            </div>
        );
    }

}

export default FilmList;