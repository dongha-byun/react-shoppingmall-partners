import React from "react";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";
import PartnersOrderOutingLineItem from "./PartnersOrderOutingLineItem";

const StyledTh=styled.th`
    text-align: center;
`;

const StyledTd = styled.td`
    text-align: center;
    vertical-align: middle;
`;

export default function PartnersOrderOutingList(props) {
    const {orderList} = props;

    return (
        <Table>
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
                    <StyledTh>송장번호</StyledTh>
                    <StyledTh></StyledTh>
                </tr>
            </thead>
            <tbody>
                {orderList.map((order) => {
                    return (
                        <PartnersOrderOutingLineItem key={order.id} order={order} />
                    );
                })}
            </tbody>
        </Table>
    );
}