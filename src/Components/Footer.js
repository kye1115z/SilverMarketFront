import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { GoHomeFill, GoHeartFill, GoPersonFill } from "react-icons/go";
import { FaBox } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    const [select, setSelect] = useState("home");

    // onpopstate
    window.onpopstate = function(event) {
        alert("location: " + document.location + ", state : " + JSON.stringify(event.state));
    }

    return (
        <>
        <GlobalStyle />
        <Box>
            <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                width: "85%", height: "100%", 
            }}>
                <NavLink to='/home' onClick={() => setSelect("home")}>
                    <GoHomeFill style={{
                        width: "43px", height: "43px",
                        color: "#23AA49"
                    }}/>
                </NavLink>

                <NavLink to='/favo' onClick={() => setSelect("favo")}>
                    <GoHeartFill  style={{
                        width: "43px", height: "43px",
                        color: "#23AA49"
                    }}/>
                </NavLink>

                <NavLink to='/deliver' onClick={() => setSelect("deliver")}>
                    <FaBox  style={{
                        width: "40px", height: "40px",
                        color: "#23AA49"
                    }}/>
                </NavLink>

                <NavLink to='/mypage' onClick={() => setSelect("mypage")}>
                    <GoPersonFill  style={{
                        width: "43px", height: "43px",
                        color: "#23AA49"
                    }}/>
                </NavLink>
            </div>
        </Box>
        </>
    );
}

export default Footer;

const Box = styled.div`
    width: 100%;
    height: 64px;
    background-color: white;
    position: fixed;
    bottom: 0px;
    box-shadow: 0px -5px 37px rgba(0, 0, 0, 0.09);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Btn = styled.button`
    background-color: transparent;
    border: none;
    width: 45px;
    height: 45px;
    display: flex;
`;