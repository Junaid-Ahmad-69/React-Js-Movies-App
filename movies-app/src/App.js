import React, {useEffect} from 'react'
import {fetchApiData} from "./utils/api";
import {useSelector, useDispatch} from "react-redux";
import {getApiConfiguration} from "./store/homeSlice";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Components/header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";


const App = () => {
    const dispatch = useDispatch();
    const {url} = useSelector((state) => state.home);
    useEffect(() => {
        fetchApiConfiguration();
    }, []);

    const fetchApiConfiguration = async () => {
        try {
            const data = await fetchApiData('/movie/popular');
            dispatch(getApiConfiguration(data))
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <BrowserRouter>
                {/*<Header/>*/}
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path="/:mediaType/:id" element={<Details/>}/>
                    <Route path="/search/:query" element={<SearchResult/>}/>
                    <Route path="/explore/:mediaType" element={<Explore/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
                {/*<Footer/>*/}
            </BrowserRouter>
        </>
    )
}

export default App
