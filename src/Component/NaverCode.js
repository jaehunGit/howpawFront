import React, { useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';


export default function GoogleCode () {

    const location = useLocation();
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");

    const navigate = useNavigate();

    const NaverApi = () => {

        axios.post("/api/NaverLogin", { code: code})
        .then( res => {
            let userId = res.data.id;

            let userNickName = res.data.nickName;

            window.sessionStorage.setItem("userId", userId);
            window.sessionStorage.setItem("nickName", userNickName);


            setTimeout(() => {
                window.location.href="../../../MainPage";
            }, 100);
        })
        .catch( err => {
            console.log(err);
        })
    }

    useEffect( () => {
        NaverApi();
    },[])

    return (
        <div>잠시만 기다려주세요.</div>
    );
}