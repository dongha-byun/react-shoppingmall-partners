import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";

const StyledTh = styled.th`
    text-align: center;
`;

const StyledTd = styled.td`
    text-align: center;
`;

export default function PartnersOrderCancelList(props) {
    const {orderList} = props;

    return (
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
                    <StyledTh>주문취소일자</StyledTh>
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
                            <StyledTd></StyledTd>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}