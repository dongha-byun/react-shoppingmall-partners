import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { numberCommaFormat } from "../../../js/utils/NumberUtils";

const StyledTh = styled.th`
    text-align: center;
    vertical-align: middle;
`;

const StyledTd = styled.td`
    text-align: center;
    vertical-align: middle;
`;

export default function PartnersOrderCancelList(props) {
    const {orderList} = props;

    return (
        <Table bordered responsive>
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
                    <StyledTh>구분 및 일자</StyledTh>
                    <StyledTh>현재상태</StyledTh>
                </tr>
            </thead>
            <tbody>
                {orderList.map((order) => {
                    return (
                        <tr key={order.id}>
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
                                010-1234-1234
                            </StyledTd>
                            <StyledTd>
                                {order.receiverName}<br/>
                                010-1234-1234
                            </StyledTd>
                            <td>
                                {order.address} <br/>
                                {order.detailAddress} <br/>
                                ({order.requestMessage})
                            </td>
                            <StyledTd>
                                {order.cancelDate}
                            </StyledTd>
                            <StyledTd></StyledTd>
                        </tr>
                    );
                })}
                {
                    orderList.length == 0 && 
                    <tr>
                        <StyledTd colSpan={10}>
                            주문 내역이 존재하지 않습니다.
                        </StyledTd>
                    </tr>
                }
            </tbody>
        </Table>
    );
}