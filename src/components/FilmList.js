import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import './FilmList.css';

function FilmList() {

    const [page, setPage] = useState(0);
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

        if (searchParams.get('search') === null || searchParams.get('search') === "") {
            axios.get('http://localhost:8080/film/page/' + pageNum)
            .then((res) => {
                setFilmList(res.data.content);
            })
        } else {
            axios.get('http://localhost:8080/film/page/' + pageNum + '/search/' + searchParams.get('search'))
            .then((res) => {
                setFilmList(res.data.content);
            })
        }

        setPage(pageNum);
        setSearchParams({page: pageNum + 1})
    }

    const search = (searchTerm) => {
        setSearchParams({
            page: 0,
            search: searchTerm
        });
        fetchFilmList();
    }

    return (
            <div>
            <div className="search">
                <form>
                    <input id="search" name="search" type="text"/>
                    <button className="button-primary" type="button" onClick={() => search("test")}>Search</button>
                </form>
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