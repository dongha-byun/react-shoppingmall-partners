import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

const StyledTh = styled.th`
    text-align: center;
`;

export default function PartnersOrderDeliveryList(props) {
    const { orderList } = props;
    return (
        <Table>
            <thead>
                <StyledTh>주문번호</StyledTh>
                <StyledTh>주문일자</StyledTh>
                <StyledTh>상품코드</StyledTh>
                <StyledTh>상품명</StyledTh>
                <StyledTh>수량</StyledTh>
                <StyledTh>구매자</StyledTh>
                <StyledTh>수령인</StyledTh>
                <StyledTh>배송지 주소</StyledTh>
                <StyledTh>배송 요청사항</StyledTh>
            </thead>
            <tbody>
                {orderList.map((order) => {
                    return (
                        <tr key={order.id}>
                            <td>{order.orderCode}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.productCode}</td>
                            <td>{order.productName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.orderUserName}</td>
                            <td>{order.receiverName}</td>
                            <td>
                                {order.address} <br/>
                                {order.detailAddress}
                            </td>
                            <td>{order.requestMessage}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}