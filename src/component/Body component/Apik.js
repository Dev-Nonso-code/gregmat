import React from 'react'
import axios from 'axios';
import { useState } from "react"
const Apik = () => {
    const [isloading, setisloading] = useState(false);
    const [data, setDatas] = useState([]);
    // const endpoint = "https://public-api.solscan.io/chaininfo/"
    const endpoint = "https://public-api.solscan.io/"
    let token = localStorage.token

    const getDat = () => {
        // console.log(getDat);
        setisloading(true)
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Token": "Token"
            }
        };
        axios.get(endpoint, config)
            .then((Response) => {
                setDatas(Response.data)
                console.log(Response.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setisloading(false); // Set loading state to false after the request completes.
            });
    }
    return (
        <>
            <button onClick={getDat}>Get Item</button>
            {isloading ? (
                <h1>Loading please wait...</h1>
            ) : (
                data.map((item, id) => (
                    <div id="body" className="text-light text-center border border-2 border-primary m-2" key={id}>
                        {/* Make sure that 'item' has the properties 'data' and 'error_message' */}
                        <h2>{item.error_message}</h2>
                        <h2>{item.data}</h2> {/* Replace 'item.data' with 'item.content' or the correct property */}
                    </div>
                ))
            )}
        </>
    )
}

export default Apik
