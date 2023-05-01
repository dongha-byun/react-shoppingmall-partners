import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import OrderService from "../../js/order";

const StyledTd = styled.td`
    text-align: center;
`;

export default function PartnersOrderLineItem(props) {
    const { order } = props;

    const doDelivery = (orderId) => {
        OrderService.outing(orderId).then(result => {
            console.log("송장번호가 발급되어 해당 주문은 출고중 처리가 됩니다. 상품을 준비해주세요.");
        });
    }

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
            <StyledTd>
                <Button size="sm" onClick={() => {
                    doDelivery(order.id);
                }}>송장번호 발급</Button>
            </StyledTd>
        </tr>
    );
}