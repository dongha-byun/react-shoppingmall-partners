import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledTd = styled.td`
    text-align: center;
    vertical-align: middle;
`;

export default function PartnersOrderOutingLineItem(props) {
    const {order} = props;

    return (
        <tr>
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
}