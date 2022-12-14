import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import './FilmList.css';

function FilmList() {

    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [filmList, setFilmList] = useState([]);
    useEffect(() => {
        fetchFilmList(0)
    }, [])

    
    
    const [pageInit, setPageInit] = useState(false);


    const fetchFilmList = (pageNum) => {

        if (pageNum < 0) return;

        if (!pageInit) {
            let tempPage = Number(searchParams.get('page')-1);
            if (tempPage === null) {
                pageNum = 0;
            }  else {
                pageNum = tempPage;
            }
            setPageInit(true);
        }

        if (searchTerm === "") {
            axios.get('http://localhost:8080/film/page/' + pageNum)
            .then((res) => {
                setFilmList(res.data.content);
            })
        } else {
            axios.get('http://localhost:8080/film/page/' + pageNum + '/search/' + searchTerm)
            .then((res) => {
                setFilmList(res.data.content);
            })
        }

        setPage(pageNum);
        setSearchParams({page: pageNum + 1, search: (searchTerm === "" ? null : searchTerm)})
    }

    const search = (searchTerm) => {
        setSearchParams({
            search: searchTerm
        });
        fetchFilmList(0);
    }

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    }

    return (
            <div>
            <div className="search">

                <input id="search" name="search" onChange={handleSearchChange} type="text"/>
                <button className="button-primary" type="button" onClick={() => fetchFilmList(0)}>Search</button>

                <button className="button-primary" onClick={() => fetchFilmList(page-1)}>{"<-"}</button>
                <span> {page+1} </span>
                <button className="button-primary" onClick={() => fetchFilmList(page+1)}>{"->"}</button>

            </div>
            <div id="film-list">
                {filmList.map(film => (<Link to={"/film/" + film.filmId} key={film.filmId}><div className="film-list-item">{film.title}</div></Link>))}
            </div>
            </div>
    )
}

export default FilmList;