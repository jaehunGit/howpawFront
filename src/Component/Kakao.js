import { LocationOn } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate  } from 'react-router-dom';

export default function Kakao(props) {

    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");

    const navigate = useNavigate();

    useEffect( () => {
        console.log(params);
        console.log(code);
        kakaoToken();
    },[])

    // 코드까지만 프론트에서 받고 코드 백으로 넘겨주고 하고잇엇어요!

    const kakaoToken = () => {
        axios.get("/api/getKakaoToken", {params: { code: code }})
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

    return (
        <div>잠시만 기다려주세요.</div>
    )

}
