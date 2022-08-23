import React, { useEffect, useState } from 'react';

import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import ProductCards from './ProductCards';

export default function MySold() {
    let { ads, setAds, token, user } = useContext(UserContext);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
        async function fetchData() {
            let resp = await fetch("http://localhost:8000/ads/show", { method: "GET", headers: { "Authorization": `Bearer ${token}` } });

            let respData = await resp.json();
            setAds(() => respData.filter((elem) => elem.seller._id === user._id && elem.buyer != null));
            //console.log(ads);
            setLoading(false);
        }
    }, [])

    return (
        <>
            {loading ? <h1>loading...</h1> :
                ads.map((elem, indx) => {
                    return <ProductCards key={indx} product={elem} />
                })
            }
        </>
    )
}
