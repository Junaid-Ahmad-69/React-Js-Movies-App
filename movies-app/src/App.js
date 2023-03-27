import React, {useEffect} from 'react'
import {fetchApiData} from "./utils/api";

const App = () => {
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetchApiData("/movie/popular").then((res) => {
            console.log(res)
        }).then((data)=>{
            console.log(data)
        })
    }


    return (
        <div>
            Hallo
        </div>
    )
}

export default App
