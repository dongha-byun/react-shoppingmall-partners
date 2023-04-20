import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderWrapper = styled.div`
    margin-bottom: 25px;
`;

const StyledH3 = styled.h3`
    display: inline;
`;

export default function PartnersMainHeader() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("partner-token");
        navigate("/");
    }

    return (
        <StyledHeaderWrapper>
            <StyledH3>덩라의 쇼핑몰 Partners 페이지</StyledH3>
            <Button 
                style={{
                    float: "right"
                }} 
                variant="outline-primary" 
                onClick={logout}>
            로그아웃</Button>
        </StyledHeaderWrapper>
    );
}