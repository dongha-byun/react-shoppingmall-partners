import React from "react";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";

const StyledTh=styled.th`
    text-align: center;
`;

const StyledTd = styled.td`
    text-align: center;
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
                        <tr key={order.id}>
                            <StyledTd>{order.orderCode}</StyledTd>
                            <StyledTd>{order.orderDate}</StyledTd>
                            <StyledTd>{order.productCode}</StyledTd>
                            <StyledTd>{order.productName}</StyledTd>
                            <StyledTd>{order.quantity}</StyledTd>
                            <StyledTd>{order.orderUserName}</StyledTd>
                            <StyledTd>{order.receiverName}</StyledTd>
                            <td>
                                {order.address} <br/>
                                {order.detailAddress}
                            </td>
                            <StyledTd>{order.requestMessage}</StyledTd>
                            <StyledTd>{order.invoiceNumber}</StyledTd>
                            <StyledTd>
                                <Button size="sm" onClick={() => {
                                    alert(order.id);
                                }}>
                                    배송 시작 처리
                                </Button>
                            </StyledTd>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}