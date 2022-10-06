import * as React from 'react';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { TextField,Button } from '@mui/material';


export default function SignUpPage(props) {
  const [name, setName] = React.useState("");
  const [userID, setUserID] = React.useState("");
  const [userIDCheck, setUserIDCheck] = React.useState(false);
  const [userPassword, setUserPassword] = React.useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = React.useState("");
  const [msg, setMSG] = React.useState("");
  const [isUserPasswordSame,setIsUserPasswordSame] = React.useState(false);
  const [value, setValue] = React.useState('1');
  const [userEmail,setUserEmail] = React.useState("");
  const [serverCheckNumber, setServerCheckNumber] = React.useState("");
  const [checkNumber, setCheckNumber] = React.useState("");
  const [checkConfim, setCheckConfirm] = React.useState(0);
  const [nameMessage, setNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [userIdConfirm, setUserIdConfirm] = React.useState(false);
  const [checkUserPasswordConfirm, setCheckUserPasswordConfirm] = React.useState(false);
  const [checkID, setCheckID] = React.useState("중복확인");
  const [checktPassword, setCheckPassword] = React.useState(false);
  const [checkEmailText, setCheckEmailText] = React.useState("");
  const [time, setTime] = React.useState(299);

  const checkNumberBox = useRef(null);
  const checkUserId = useRef(null);
  const userIdImage = useRef(null);
  const userIdTextField = useRef(null);
  const checkIdConfirm = useRef(null);
  const checkPasswordConfirm = useRef(null);

  
  const styles = {
    dimmed_layer_wrapper : {
      top:80,
      right:0,
      bottom:0,
      left:0,
    },

    prodct_content : {
      border: "1px solid black",
      width: "600px",
      height: "800px",
      margin: "auto",
      marginTop: "100px",
      textAlign: "center",
    },

  };

  React.useEffect(() => {
    // init
  }, []);
  
  const navigate = useNavigate();

  const OnClickSignUp = async () => {

    if ( checkConfim == 0 ) {
        alert("아이디 중복확인을 해주세요.");
        return;
    } 
    else if ( userIdConfirm == false ) {
      alert("올바른 아이디 형식을 입력해주세요.");
      return;
    }
    else if (checkUserPasswordConfirm == false ) {
      alert("올바른 비밀번호 형식을 입력해주세요.");
      return;
    }
    
    else if ( PasswordConfirm == false ) {
      alert("똑같은 비밀번호를 입력해주세요.");
      return;
    }

  let formData = null;
    formData = {
	    userId: userID,
      userPassword: userPassword,
      nickName: name,
      userEmail: userEmail,
      contentType: "application/json; UTF-8;", // 한국어도 깨짐없이 전송하는 방법.
    }

    await axios.post("/api/signUpUser", formData)
    .then( res => { 
      console.log(res);
    })
    .catch( err => {
      alert( err.response.data.errorMessage );
    })
  }
 
  const UserIdCodition = (e) => {
    setUserID(e.target.value);

    checkUserId.current.disabled = false;
    setCheckID("중복확인");

    if (e.target.value.length < 2 || e.target.value.length > 8) {
      setNameMessage("아이디는 2글자이상 8글자미만으로 입력해주세요.");
      checkIdConfirm.current.style.color = "#ff2727";
      setUserIdConfirm(false);
    } else {
      setNameMessage("올바른 형식입니다.");
      checkIdConfirm.current.style.color = "#8f8c8b";
      setUserIdConfirm(true);
    }
  }

  const OnChangeUserPassword = (val) => {
    setUserPassword(val);

    PasswordConfirm(userPasswordConfirm, val);
    
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

    if (!passwordRegex.test(val)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      checkPasswordConfirm.current.style.left = "60px"
      checkPasswordConfirm.current.style.color = "#ff2727";
      setCheckUserPasswordConfirm(false);
    } else {
      setPasswordMessage("올바른 형식입니다.");
      checkPasswordConfirm.current.style.left = "-80px"
      checkPasswordConfirm.current.style.color = "#8f8c8b"
      setCheckUserPasswordConfirm(true);
    }
  }

  const PasswordConfirm = (confirm, password) => {
    setUserPasswordConfirm(confirm);

    if (password === confirm) {
      setIsUserPasswordSame(true);
    }
    else {
      setIsUserPasswordSame(false);
    }
  }
  
  const handleChange = (event, newValue) => {// 판매자 구매자 나눌때 쓰는 것
    setValue(newValue);
  };

  const onClickSendMail = () => {

    const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    if ( !emailRegex.test(userEmail) ) {
      alert( "이메일형식이 틀렸습니다.");
    } else {
      alert("인증번호가 전송되었습니다.");
      checkNumberBox.current.style.display = "inline-flex";

      axios.post("/api/sendEmail", {email: userEmail})
      .then(res => {
        const body = res.data;
      })
      .catch( err => console.log(err))
    }
  }

  const onClickCheckNumber = () => {
    
    axios.get("/api/checkAuthCode", {params: { 
      requestCode :checkNumber,
      email: userEmail } })
    .then( res => {
      console.log(res.data.message);
      setCheckEmailText("인증 완료되었습니다.");
      checkNumberBox.current.style.display ="none";
    })
    .catch( err => {
      alert( err.response.data.errorMessage );
    })
  }



  const UserIdConfirm = () => {

    if ( userIdConfirm == false ) {
      alert("올바른 아이디 형식을 입력해주세요.");
      return;
    }

    axios.get("/api/UserIdConfirm", {params: {userId: userID}})
    .then( res => {
      alert(res.data.message);
      setCheckConfirm(1);
      checkUserId.current.disabled = true;
      setCheckID("인증완료");
    })
    .catch( err => {
      alert(err.response.data.errorMessage);
      console.log(err);
    })

  }

  const UserCheckSignUpData = () => {
    if (userID === "") return false;
    else if (userPassword === "") return false;
    else if (name === "") return false;
    return true;
  }
  
  return (
    <div style={styles.dimmed_layer_wrapper}>
      <div style={styles.prodct_content}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="구매자" value="1" />
              </TabList>
            </Box>
              <TabPanel value="1">
                  <Box>
                    <img ref={userIdImage} src='./Image/ID.png' alt='' style={{width: 35, height: 35, marginTop: 10, marginRight: 13, marginLeft: -10}}/>
                    <TextField ref={userIdTextField} value={userID} placeholder='아이디' onChange={e => {setUserID(e.target.value); UserIdCodition(e); setUserIDCheck(false);}}/>
                    <Button ref={checkUserId} variant="contained" onClick={()=> UserIdConfirm()} style={{marginLeft: 20, marginTop: -25}}> { checkID } </Button>
                  </Box>
                  <div ref={checkIdConfirm} style={{width: "360px", height: "24px",marginLeft: "130px", textAlign: "left", color: "red"}}> { nameMessage } </div>
                  <div style={{ width: "300px", height: "200px", position: "relative", left: "65px",top: "10px"}}>
                    <img src='./Image/Password.png' alt='' style={{width: 40, height: 40}}/>
                    <TextField value={userPassword} placeholder='패스워드' style={{ marginBottom: "10px",marginLeft: 15}} onChange={e => OnChangeUserPassword(e.target.value)} type="password"/>
                    <div ref={checkPasswordConfirm} style={{ width: "430px", height: "24px" ,position: "relative", top: -5, left: 60}}> {passwordMessage} </div>
                    <img src='./Image/Password.png' alt='' style={{width: 40, height: 40, marginTop: "10px"}}/>
                    <TextField value={userPasswordConfirm} placeholder='패스워드확인' style={{marginLeft: 15}} onChange={(e) => PasswordConfirm(e.target.value, userPassword)} type="password"/>
                    { isUserPasswordSame ? <div style={{marginLeft: 10, marginTop: 5, color: "#8f8c8b"}}>비밀번호가 일치합니다.</div> : <div style={{marginLeft: 60, marginTop: 5, color: "#ff2727"}}>비밀번호가 일치하지 않습니다. </div> }
                  </div>
                  <TextField placeholder='이메일' style={{marginTop: 10, marginLeft: 60}} onChange={e => setUserEmail(e.target.value)}/>
                  <Button type="submit" variant="contained" style={{ marginTop: 20, marginLeft: 20 }} onClick={() => onClickSendMail()}>이메일 인증</Button>
                  <br/>
                  <div ref={checkNumberBox} style={{display: "none"}}>
                    <TextField placeholder='인증번호를 입력하세요' style={{marginTop: 10, marginLeft: 78}} onChange={e => setCheckNumber(e.target.value)}/>
                    <Button type="submit" variant="contained" style={{ marginTop: 20, marginLeft: 22, width: "125px", height: "35px" }} onClick={() => onClickCheckNumber()}>인증번호 확인</Button>
                  </div>
                  
                  <div style={{ marginLeft: "-135px",marginTop: "5px"}}>
                    {checkEmailText}
                  </div>
                  <TextField placeholder='닉네임' style={{marginTop: 10, marginLeft: -68}} onChange={e => setName(e.target.value)}/>
                  <br/>
                  <Button type = "submit" variant="contained" onClick={() => OnClickSignUp()} style={{marginTop: 10, marginLeft: -60}}
                  disabled={!UserCheckSignUpData()}> 회원가입 </Button>
                  <div> {msg} </div>
              </TabPanel>
          </TabContext>
        </Box>
      </div>   
    </div>
  );
}