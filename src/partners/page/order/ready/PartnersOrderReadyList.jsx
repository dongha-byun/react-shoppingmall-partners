import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import OrderService from "../../../js/order";
import { numberCommaFormat } from "../../../js/utils/NumberUtils";

const StyledTh = styled.th`
    text-align: center;
    vertical-align: middle;
`;
const StyledTd = styled.td`
    text-align: center;
    vertical-align: middle;
`;

export default function PartnersOrderReadyList(props) {
    const {orderList} = props;

    const outing = (orderId, orderItemId) => {
        OrderService.outing(orderId, orderItemId).then(result => {
            alert("송장번호가 발급되어 해당 주문은 출고중 처리가 됩니다. 상품을 준비해주세요.");
        }).catch(() => {
            alert("송장번호 발급 중에 오류가 발생했습니다. 잠시 뒤에 다시 시도해주세요.");
        });
    }

    return(
        <Table bordered responsive style={{
            minWidth: "1300px"
        }}>
            <thead>
                <tr>
                    <StyledTh>
                        주문일자<br/>
                        (주문번호)
                    </StyledTh>
                    <StyledTh>
                        상품명<br/>
                        (상품코드)
                    </StyledTh>
                    <StyledTh>구매수량</StyledTh>
                    <StyledTh>결제금액</StyledTh>
                    <StyledTh>구매자 정보</StyledTh>
                    <StyledTh>수령자 정보</StyledTh>
                    <StyledTh>
                        배송지 주소<br/>
                        (요청사항)
                    </StyledTh>
                    <StyledTh>송장번호</StyledTh>
                    <StyledTh>주문상태</StyledTh>
                </tr>
            </thead>
            <tbody>
                {orderList.map((order) => {
                    return (
                        <tr key={order.orderItemId}>
                            <StyledTd>
                                {order.orderDate}<br/>
                                ({order.orderCode})
                            </StyledTd>
                            <StyledTd>
                                {order.productName}<br/>
                                ({order.productCode})
                            </StyledTd>
                            <StyledTd>{order.quantity} ea</StyledTd>
                            <StyledTd>{numberCommaFormat(order.totalPrice)}원</StyledTd>
                            <StyledTd>
                                {order.userName}<br/>
                                {order.userTelNo}
                            </StyledTd>
                            <StyledTd>
                                {order.receiverName}<br/>
                                {order.receiverPhoneNumber}
                            </StyledTd>
                            <td>
                                {order.address} <br/>
                                {order.detailAddress} <br/>
                                ({order.requestMessage})
                            </td>
                            <StyledTd>
                                {
                                    order.invoiceNumber || 
                                    <Button variant="outline-primary"
                                        size="sm" onClick={() => {
                                        outing(order.orderId, order.orderItemId);
                                    }}>송장 출력</Button>
                                }
                            </StyledTd>
                            <StyledTd>
                                {order.orderStatusName}
                            </StyledTd>
                        </tr>
                    );
                })}
                {
                    orderList.length == 0 && 
                    <tr>
                        <StyledTd colSpan={12}>
                            주문 내역이 존재하지 않습니다.
                        </StyledTd>
                    </tr>
                }
            </tbody>
        </Table>
    );
}