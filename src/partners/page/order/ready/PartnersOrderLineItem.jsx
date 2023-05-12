import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import OrderService from "../../../js/order";
import { numberCommaFormat } from "../../../js/utils/NumberUtils";

const StyledTd = styled.td`
    text-align: center;
    vertical-align: middle;
`;

export default function PartnersOrderLineItem(props) {
    const { order } = props;

    const outing = (orderId) => {
        OrderService.outing(orderId).then(result => {
            alert("송장번호가 발급되어 해당 주문은 출고중 처리가 됩니다. 상품을 준비해주세요.");
        });
    }

    return (
        <tr>
            <StyledTd>{order.orderCode}</StyledTd>
            <StyledTd>{order.orderDate}</StyledTd>
            <StyledTd>{order.productCode}</StyledTd>
            <StyledTd>{order.productName}</StyledTd>
            <StyledTd>{order.quantity}</StyledTd>
            <StyledTd>{numberCommaFormat(order.totalPrice)}원</StyledTd>
            <StyledTd>{order.userName}</StyledTd>
            <StyledTd>010-1234-1234</StyledTd>
            <StyledTd>{order.receiverName}</StyledTd>
            <td>
                {order.address} <br/>
                {order.detailAddress}
            </td>
            <StyledTd>{order.requestMessage}</StyledTd>
            <StyledTd>
                <Button size="sm" onClick={() => {
                    outing(order.id);
                }}>송장번호 발급</Button>
            </StyledTd>
        </tr>
    );
}