import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getStorageItem, removeStorageItem } from "../js/headers";

const StyledHeaderWrapper = styled.div`
    margin-bottom: 25px;
`;

const StyledH3 = styled.h3`
    display: inline;
`;

const RightDiv = styled.div`
    float: right;
`;

const HelloSpan = styled.span`
    margin-right: 20px;
`;

export default function PartnersMainHeader() {
    const navigate = useNavigate();
    const [name, setName] = useState(getStorageItem("partner-name"));

    const logout = () => {
        removeStorageItem("partner-token");
        removeStorageItem("partner-name");
        navigate("/");
    }

    return (
        <StyledHeaderWrapper>
            <StyledH3>덩라의 쇼핑몰 Partners 페이지</StyledH3>
            <RightDiv>
                <HelloSpan>환영합니다! <strong>{name}</strong> 파트너님!</HelloSpan>
                <Button variant="outline-primary" onClick={logout}>
                    로그아웃
                </Button>
            </RightDiv>
        </StyledHeaderWrapper>
    );
}