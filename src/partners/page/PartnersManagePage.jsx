import React, { useState } from "react";
import { Tabs,Tab } from "react-bootstrap";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import PartnersMainHeader from "./PartnersMainHeader";

const StyledManagePageWrapper = styled.div`
    padding: 20px;
`;

function PartnersManagePage(){
    const [key, setKey] = useState("products");
    const navigate = useNavigate();

    const onSelect = (eventKey) => {
        setKey(eventKey);
        navigate(eventKey);
    }

    return(
        <StyledManagePageWrapper>
            <PartnersMainHeader />
            <Tabs
                activeKey={key}
                className="mb-3"
                onSelect={onSelect}
            >
                <Tab eventKey="products" title="상품 관리" />
                <Tab eventKey="incomes" title="매출 관리" />
                <Tab eventKey="orders" title="주문/배송" />
                <Tab eventKey="qnas" title="상품문의" />
                <Tab eventKey="coupons" title="쿠폰 관리" />
            </Tabs>
            <Outlet />
        </StyledManagePageWrapper>
    );
}

export default PartnersManagePage;