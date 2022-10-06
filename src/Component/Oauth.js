const KAKAO_CLIENT_ID = "0647469b8a94c9ade88ef28aafddec73";
const REDIRECT_URI =  "http://localhost:3000/kakaoCode";

const GOOGLE_CLIENT_ID = "564148449868-pcan78kdgjib2rcu67173qiaa8ov6u8a.apps.googleusercontent.com";

const NAVER_CLIENT_ID = "xyGdQbw5wmMiIquTq6jP";

const OAUTH_REDIRECT_URI = "http://localhost:3000/login/oauth2/code/";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URI}kakao&response_type=code&scope=account_email,profile_nickname`

export const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth?client_id='+ GOOGLE_CLIENT_ID + '&response_type=code&redirect_uri='+ OAUTH_REDIRECT_URI +'google&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/plus.me+https://www.googleapis.com/auth/userinfo.profile';

export const NAVER_AUTH_URL =  "https://nid.naver.com/oauth2.0/authorize?client_id=" + NAVER_CLIENT_ID + "&redirect_uri=" + OAUTH_REDIRECT_URI + "naver&response_type=code&state=state";