import React, { useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


export default function GoogleCode () {

    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");

    const navigate = useNavigate();

    const GoogleApi = () => {
        axios.post("/api/GoogleLogin",  { code: code })
        .then( res => { 
            const body = res.data;
            console.log(body);
            
            window.sessionStorage.setItem("userId", res.data.id);
            window.sessionStorage.setItem("nickName", res.data.nickName);

            setTimeout(() => {
                window.location.href="../../../MainPage";
            }, 100);
         })
        .catch( err => { console.log("2"); })
    }

    useEffect( () => {
        GoogleApi();
    },[])

    return (
        <div>잠시만 기다려주세요.</div>
    );
}