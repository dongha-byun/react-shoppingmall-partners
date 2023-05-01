import React from "react";
import { Table } from "react-bootstrap";
import PartnersOrderLineItem from "./PartnersOrderLineItem";
import styled from "styled-components";

const StyledTh = styled.th`
    text-align: center;
`;

export default function PartnersOrderReadyList(props) {
    const {orderList} = props;

    return(
        <Table bordered responsive>
            <thead>
                <tr>
                    <StyledTh>주문번호</StyledTh>
                    <StyledTh>주문일자</StyledTh>
                    <StyledTh>상품코드</StyledTh>
                    <StyledTh>상품명</StyledTh>
                    <StyledTh>수량</StyledTh>
                    <StyledTh>구매자</StyledTh>
                    <StyledTh>수령인</StyledTh>
                    <StyledTh>배송지 주소</StyledTh>
                    <StyledTh>배송 요청사항</StyledTh>
                    <StyledTh></StyledTh>
                </tr>
            </thead>
            <tbody>
                {orderList.map((order) => {
                    return (
                        <PartnersOrderLineItem key={order.id} order={order} />
                    );
                })}
            </tbody>
        </Table>
    );
}