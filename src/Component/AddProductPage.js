import React from 'react';
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { Box, display, style } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import { categoryEnum } from './const';

export default function AddProductPage(props) {
    const styles = {
        
        add_product_bigbox: {
            margin: "auto",
            marginTop: "100px",
            width: "1200px",
            height: "1500px",
            textAlign: "left",
            overfloewY: "auto"
        },
        hide_input : {
            display: "none"
        },
        add_product_text : {
            marginLeft: "100px",
            color: "#233756"
        },
        add_proudct_sec : {
            width: "1000px",
            height: "850px",
            margin:"auto"
        },
        first_table_sec : {
            width: "auto",
            height: "50px"
        },
        first_explanation_sec : {
            textAlign: "center",
            width: "150px",
            height: "60px",
            lineHeight: "60px",
            backgroundColor: "#f0f7ff",
            color: "#233756",
            display: "inline-block",
            borderBottom: "1px solid #5e6c81"
        },
        input_textfield_sec : {
            display: "inline-block",
            width: "350px",
            position: "relative",
            top: "-6px"
        },
        second_table_sec : {
            width: "1000px",
            height: "500px",
            marginTop: "-255px"
        },
        second_explanation_sec : {
            textAlign: "center",
            width: "150px",
            height: "500px",
            lineHeight: "500px",
            backgroundColor: "#f0f7ff",
            color: "#233756",
            display: "inline-block",
            borderBottom: "1px solid #5e6c81"
        },
        second_input_table_sec : {
            width: "350px",
            height: "500px",
            display: "inline-block",
            position: "relative",
            top: "266px"
        },
        input_image_sec : {
            width: "350px",
            height: "500px",
            objectFit: "cover",
            borderBottom: "1px solid #5e6c81"
        },
        product_image_upload_button : {
            marginTop: "-550px",
            marginLeft: "85px"
        },
        product_image_delete_button : {
            display: "none",
            backgroundColor: "white",
            color: "#5e6c81",
            top: "-490px",
            left: "280px",
            borderRadius: "100px",
            marginTop: "-11px"
        },
        third_table_sec : {
            width: "1000px",
            height: "322px",
            marginTop: "210px"
        },
        third_explanation_sec : {
            textAlign: "center",
            width: "150px",
            height: "357px",
            lineHeight: "322px",
            backgroundColor: "#f0f7ff",
            color: "#233756",
            display: "inline-block",
            borderBottom: "1px solid #5e6c81"
        },
        input_review_info_sec : {
            width: "350px",
            height: "322px",
            display: "inline-block",
            position: "relative",
            top: "69px",
            marginLeft: "0px"
        },
        review_rating : {
            marginLeft: "100px"
        },
        input_review_image_sec : {
            width: "350px",
            height:"150px",
            objectFit: "cover",
            borderBottom: "1px solid #5e6c81"
        },
        review_image_upload_button : {
            marginTop:"-200px",
            marginLeft: "65px"
        },
        review_image_delete_button : {
            display: "none",
            backgroundColor: "white",
            color: "#5e6c81",
            top: "-130px",
            left: "280px",
            borderRadius: "100px",
            marginTop: "-20px"
        },
        submit_button : {
            top: "380px",
            left: "980px"
        }
    };

    const [productName, inputProductName] = React.useState(null);
    const [productPrice, inputProductPrice] = React.useState(null);
    const [brandName, inputBrandName] = React.useState(null);
    const [origin, inputOrigin] = React.useState(null);
    const [weight, inputWeight] = React.useState(null);
    const [productLink, inputProductLink] = React.useState(null);
    const [bestReview, inputBestReview] = React.useState(null);
    const [worstReview, inputWorstReview] = React.useState(null);
    const [mainImg, inputMainImg] = React.useState("./Image/InputImageDefault.png");
    const [detailImg, inputDetailImg] = React.useState("./Image/InputImageDefault.png");
    const [bestReviewImg, inputBestReviewImg] = React.useState("./Image/InputImageDefault.png");
    const [worstReviewImg, inputWorstReviewImg] = React.useState("./Image/InputImageDefault.png");
    const [bestValue, bestSetValue] = React.useState(null);
    const [worstValue, worstSetValue] = React.useState(null);
    const [kind, inputKind] = React.useState("dog");
    const [type, inputType] = React.useState(null);
    const [mainImageForm, getMainImageForm] = React.useState(null);
    const [detailImageForm, getDetailImageForm] = React.useState(null);
    const [bestReviewImageForm, getbestReviewImageForm] = React.useState(null);
    const [worstReviewImageForm, getworstReviewImageForm] = React.useState(null);
    const [imageFilePath, setImageFilePath] = React.useState([]);
    
    const mainImgInput = useRef(null);
    const detailImgInput = useRef(null);
    const bestReviewImgInput = useRef(null);
    const worstReivewImgInput = useRef(null);
    const mainImgUploadButton =useRef(null);
    const mainImgDeleteButton = useRef(null);
    const detailImgUploadButton = useRef(null);
    const detailImgDeleteButton = useRef(null);
    const bestReviewImgUploadButton = useRef(null);
    const bestReviewImgDeleteButton = useRef(null);
    const worstReviewImgUploadButton = useRef(null);
    const worstReviewImgDeleteButton = useRef(null);
    const mainImgBox = useRef(null);
    const detailImgBox =useRef(null);

    const mainImageFormData = new FormData();

    const navigate = useNavigate();

    React.useEffect(() => {
        // init
    }, []);

    const onChangeInputKind = (e) => {
        inputKind(e.target.value);
    }

    const onChangeProductType =(e) => {
        inputType(e.target.value);
    }

    const onClickMainImgUpload = (e) => {
        mainImgInput.current.click();
    }

    const onClickDetailImgUpload = (e) => {
        detailImgInput.current.click();
    }

    const onClickBestReviewImgUpload = (e) => {
        bestReviewImgInput.current.click();
    }

    const onClickWorstReviewImgUpload = (e) => {
        worstReivewImgInput.current.click();
    }

    const onChangeMainImage = () => {
        const file = mainImgInput.current.files[0];
        const imageUrl = URL.createObjectURL(file);

        getMainImageForm(file);
        inputMainImg(imageUrl);
        
        mainImgUploadButton.current.style.display = "none";
        mainImgDeleteButton.current.style.display = "inline-flex";
    }

    const onClickMainImgDelete = (e) => {
        inputMainImg("./Image/InputImageDefault.png");
        
        mainImgUploadButton.current.style.display = "inline-flex";
        mainImgDeleteButton.current.style.display = "none";
    }

    const onChangeDetailImage = () => {
        const file = detailImgInput.current.files[0];
        const imageUrl = URL.createObjectURL(file);

        getDetailImageForm(file);
        inputDetailImg(imageUrl);
    
        detailImgUploadButton.current.style.display = "none";
        detailImgDeleteButton.current.style.display = "inline-flex";
    }

    const onClickDetailImgDelete = () => {
        inputDetailImg("./Image/InputImageDefault.png");

        detailImgUploadButton.current.style.display = "inline-flex";
        detailImgDeleteButton.current.style.display = "none";
    }

    const onChangeBestReviewImage = () => {
        const file = bestReviewImgInput.current.files[0];
        const imageUrl = URL.createObjectURL(file);

        getbestReviewImageForm(file);
        inputBestReviewImg(imageUrl);

        bestReviewImgUploadButton.current.style.display = "none";
        bestReviewImgDeleteButton.current.style.display = "inline-flex";
    }

    const onClickBestReviewImgDelete = () => {
        inputBestReviewImg("./Image/InputImageDefault.png");

        bestReviewImgUploadButton.current.style.display = "inline-flex";
        bestReviewImgDeleteButton.current.style.display = "none";
    }

    const onChangeWorstReviewImage = () => {
        const file = worstReivewImgInput.current.files[0];
        const imageUrl = URL.createObjectURL(file);
        
        getworstReviewImageForm(file);
        inputWorstReviewImg(imageUrl);

        worstReviewImgUploadButton.current.style.display = "none";
        worstReviewImgDeleteButton.current.style.display = "inline-flex";
    }

    const onClickWorstReviewImgDelete = () => {
        inputWorstReviewImg("./Image/InputImageDefault.png");

        worstReviewImgUploadButton.current.style.display = "inline-flex";
        worstReviewImgDeleteButton.current.style.display = "none";
    }

    const onChangeProductName = (e) => {
        inputProductName(e.target.value);
        const productNameLength = e.target.value.length;

        if (productNameLength > 50) {
            alert("?????? ?????? 50?????? ???????????? ????????????.");
        }
    }

    const onChangeProductPrice = (e) => {
        inputProductPrice(e.target.value);
    }

    const onChangeBrandName = (e) => {
        inputBrandName(e.target.value);
    }
    
    const onChangeOrigin = (e) => {
        inputOrigin(e.target.value);
    }

    const onChangeBestReview = (e) => {
        inputBestReview(e.target.value);
    }

    const onChangeWorstReview = (e) => {
        inputWorstReview(e.target.value);
    }

    const onChangeWeight = (e) => {
        inputWeight(e.target.value);
    }
    const onChangeLink = (e) => {
        inputProductLink(e.target.value);
    }

    const submitHander = async (e) => {

        if ( type == null ) {
            alert("??????????????? ??????????????????.");
        } else if (productName == null) {
            alert("???????????? ??????????????????.");
        } else if (productPrice == null ) {
            alert("?????? ????????? ??????????????????.");
        } else if ( brandName == null ) {
            alert("??????????????? ??????????????????.");
        } else if ( origin == null ) {
            alert("???????????? ??????????????????.");
        } else if ( weight == null ) {
            alert("????????? ????????? ??????????????????.");
        } else if ( productLink == null ) {
            alert("????????? ????????? ????????? ??????????????????.");
        } else if ( bestReview == null || worstReview == null ) {
            alert("????????? ????????? ??????????????????.");
        } else if ( bestValue == null || worstValue == null ) {
            alert("????????? ????????? ??????????????????.");
        } else if (mainImageForm == null || detailImageForm == null || bestReviewImageForm == null || worstReviewImageForm == null ) {
            alert("?????? ???????????? 4??? ?????? ???????????? ?????????.");
        } else {
            
            e.preventDefault();
    
            let postType = "";
            
            mainImageFormData.append('mainImageFile', mainImageForm);
            mainImageFormData.append('detailImageFile', detailImageForm);
            mainImageFormData.append('bestReviewImageFile', bestReviewImageForm);
            mainImageFormData.append('worstReviewImageFile', worstReviewImageForm);

            if (type < 10) {
                postType = String(categoryEnum.FOOD + "," + type); 
            }
            else if(type>10) {
                postType = categoryEnum.SNACKS + "," + type; 
            }

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            
            await axios.post("/api/SaveImage", mainImageFormData, config)
            .then(res => {
                console.log(res.data);
                axios.post("/api/AddProduct",{
                    productName: productName,
                    productPrice: productPrice,
                    brandName: brandName,
                    origin: origin,
                    bestRating: bestValue,
                    worstRating: worstValue,
                    bestReviewText: bestReview,
                    worstReviewText: worstReview,
                    productWeight: weight,
                    productLink: productLink,
                    kind: kind,
                    productType: postType,
                    mainImageRoute: res.data[0],
                    detailImageRoute: res.data[1],
                    bestImageRoute: res.data[2],
                    worstImageRoute: res.data[3]
                })
                .then( res => { 
                    alert("?????? ?????? ??????");
                    navigate("/mainPage");
                })
                .catch( err => { 
                    console.log(err); }) 
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <Box style={styles.add_product_bigbox}>
            <h3 style={styles.add_product_text}>[?????? ??????]</h3>
            <form method="post">
                <div style={styles.add_proudct_sec}>
                    <div style={{width: "1000px", height: "150px"  }}>
                        <div style={{ width: "150px", height: "150px", display: "inline-block", position: "relative", top: "0px", borderBottom: "1px solid #5e6c81", lineHeight: "150px", textAlign: "center", backgroundColor: "#f0f7ff", color: "#233756",}}>
                            ?????? ??????
                        </div>
                        <div style={{width:"350px",display: "inline-block", position: "relative", top: "-24px", left: "0px", borderBottom: "1px solid #5e6c81"}}>
                            <RadioGroup 
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="dog"
                                name="radio-buttons-group"
                                style={{ marginLeft: "20px"}}
                            >
                                <FormControlLabel value="dog" onChange={(e)=> onChangeInputKind(e)} control={<Radio />} label="?????????" />
                                <FormControlLabel value="cat" onChange={(e)=> onChangeInputKind(e)} control={<Radio />} label="?????????" />
                                <FormControlLabel value="other" onChange={(e)=> onChangeInputKind(e)} control={<Radio />} label="??????" />
                            </RadioGroup>
                        </div>
                        <div style={{ width: "150px", height: "150px", display: "inline-block", position: "relative", borderBottom: "1px solid #5e6c81", lineHeight: "150px", textAlign: "center", backgroundColor: "#f0f7ff", color: "#233756", }}>
                            ?????? ??????
                        </div>
                        <div style={{width:"350px",height: "150px",display: "inline-block", position: "relative", top: "-63px", left: "0px", borderBottom: "1px solid #5e6c81"}}>
                            <FormControl sx={{ m: 1, minWidth: 120, marginTop: "50px" }}>
                                <InputLabel htmlFor="grouped-select">????????????</InputLabel>
                                <Select defaultValue="" id="grouped-select" label="???????????? ??????" onChange={(e) => onChangeProductType(e)}>
                                    <ListSubheader value="feedType" style={{ fontWeight: "bold", color: "black"}}>??????</ListSubheader>
                                    <MenuItem value={categoryEnum.DRY_FOOD}>????????????</MenuItem>
                                    <MenuItem value={categoryEnum.WET_FOOD}>????????????</MenuItem>
                                    <MenuItem value={categoryEnum.BOIL_FOOD}>????????????</MenuItem>
                                    <MenuItem value={categoryEnum.OTHER_FOOD}>??????</MenuItem>
                                    <ListSubheader value="snackType" style={{ fontWeight: "bold", color: "black"}}>??????</ListSubheader>
                                    <MenuItem value={categoryEnum.FROZEN_SNACKS}>?????? ??????</MenuItem>
                                    <MenuItem value={categoryEnum.BONE_SNACKS}>??? ??????</MenuItem>
                                    <MenuItem value={categoryEnum.CHURU_SNACKS}>?????? ??????</MenuItem>
                                    <MenuItem value={categoryEnum.TREATS_SNACKS}>?????? ??????</MenuItem>
                                    <MenuItem value={categoryEnum.OTEHR_SANCKS}>??????</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div style={styles.first_table_sec}>
                        <div style={styles.first_explanation_sec}>?????????</div>
                        <div style={styles.input_textfield_sec}>
                            <TextField id="standard-basic" label="?????????" variant="standard" fullWidth onChange={(e) => onChangeProductName(e)}/>
                        </div>
                        <div style={styles.first_explanation_sec}>????????????</div>
                        <div style={styles.input_textfield_sec}>
                            <TextField id="standard-basic" label="????????????" variant="standard" fullWidth type="number" onChange={(e) => onChangeProductPrice(e)} />
                        </div>
                    </div>
                    <div style={{ width: "auto", height: "50px", marginTop: "11px"}}>
                        <div style={styles.first_explanation_sec}>????????????</div>
                        <div style={styles.input_textfield_sec}>
                            <TextField id="standard-basic" label="????????????" variant="standard" fullWidth onChange={(e) => onChangeBrandName(e)}/>
                        </div>
                        <div style={styles.first_explanation_sec}>?????????</div>
                        <div style={styles.input_textfield_sec}>
                            <TextField id="standard-basic" label="?????????" variant="standard" fullWidth onChange={(e) => onChangeOrigin(e)} />
                        </div>
                    </div>
                    <div style={{ width: "auto", height: "50px", marginTop: "11px"}}>
                        <div style={styles.first_explanation_sec}>??????</div>
                        <div style={styles.input_textfield_sec}>
                            <TextField id="standard-basic" label="??????" variant="standard" fullWidth onChange={(e) => onChangeWeight(e)}/>
                        </div>
                        <div style={styles.first_explanation_sec}>??????</div>
                        <div style={styles.input_textfield_sec}>
                            <TextField id="standard-basic" label="??????" variant="standard" fullWidth onChange={(e) => onChangeLink(e)} />
                        </div>
                    </div>
                    <div style={styles.second_table_sec}>
                        <div style={styles.second_explanation_sec}>?????? ?????????</div>
                        <div style={styles.second_input_table_sec}> 
                            <img src={mainImg} ref={mainImgBox} style={styles.input_image_sec}></img>
                            <input type="file" accept="img/*" ref={mainImgInput} onChange={() => onChangeMainImage()}  style={styles.hide_input} />
                            <Button variant="contained" ref={mainImgUploadButton} onClick={() => onClickMainImgUpload()} style={styles.product_image_upload_button}>?????? ????????? ????????????</Button>
                            <Button variant="contained" ref={mainImgDeleteButton} onClick={() => onClickMainImgDelete()} style={styles.product_image_delete_button}> X </Button>
                        </div>
                        <div style={styles.second_explanation_sec}>?????? ?????????</div>
                        <div style={styles.second_input_table_sec}> 
                            <img src={detailImg} ref={detailImgBox}  style={styles.input_image_sec}></img>
                            <input type="file" accept="img/*" ref={detailImgInput} onChange={() => onChangeDetailImage()} style={styles.hide_input} />
                            <Button variant="contained" ref={detailImgUploadButton} onClick={() => onClickDetailImgUpload()} style={styles.product_image_upload_button}>?????? ????????? ????????????</Button>
                            <Button variant="contained" ref={detailImgDeleteButton} onClick={() => onClickDetailImgDelete()} style={styles.product_image_delete_button}> X </Button>
                        </div>
                    </div>
                    <div style={styles.third_table_sec}>
                        <div style={styles.third_explanation_sec}>best ??????</div>
                        <div style={styles.input_review_info_sec}>        
                            <Rating name="no-value" value={bestValue} onChange={(event, newValue) => {bestSetValue(newValue)}} style={styles.review_rating}/>
                            <img src={bestReviewImg} style={styles.input_review_image_sec}></img>
                            <input type="file" accept="img/*" ref={bestReviewImgInput} onChange={() => onChangeBestReviewImage()} style={styles.hide_input} />
                            <Button variant="contained" ref={bestReviewImgUploadButton} onClick={() => onClickBestReviewImgUpload()} style={styles.review_image_upload_button}>best ??????????????? ????????????</Button>
                            <Button variant="contained" ref={bestReviewImgDeleteButton} onClick={() => onClickBestReviewImgDelete()} style={styles.review_image_delete_button}> X </Button>
                            <TextField
                            id="standard-multiline-static"
                            label="best??????"
                            multiline
                            rows={5}
                            defaultValue="????????? ??????????????????."
                            variant="standard"
                            fullWidth
                            onChange={(e) => onChangeBestReview(e)}
                            />
                        </div>
                        <div style={styles.third_explanation_sec}>worst ??????</div>
                        <div style={styles.input_review_info_sec}>
                            <Rating name="no-value" value={worstValue} onChange={(event, newValue) => {worstSetValue(newValue)}} style={styles.review_rating}/>
                            <img src={worstReviewImg} style={styles.input_review_image_sec}></img>
                            <input type="file" accept="img/*" ref={worstReivewImgInput} onChange={() => onChangeWorstReviewImage()} style={styles.hide_input} />
                            <Button variant="contained" ref={worstReviewImgUploadButton} onClick={() => onClickWorstReviewImgUpload()} style={styles.review_image_upload_button}>worst ??????????????? ????????????</Button>
                            <Button variant="contained" ref={worstReviewImgDeleteButton} onClick={() => onClickWorstReviewImgDelete()} style={styles.review_image_delete_button}> X </Button>
                            <TextField
                            id="standard-multiline-static"
                            label="worst??????"
                            multiline
                            rows={5}
                            defaultValue="????????? ??????????????????."
                            variant="standard"
                            fullWidth
                            onChange={(e) => onChangeWorstReview(e)}
                            />
                        </div>
                    </div>
                </div>
                <Button onClick={(e) => submitHander(e)} variant="contained" style={styles.submit_button}>?????? ????????????</Button>
            </form>
        </Box>
    );
}