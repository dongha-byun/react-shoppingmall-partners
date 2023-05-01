import React from "react";
import { useState } from "react";
import { Form, Table } from "react-bootstrap";
import { aMonthTime } from "../../js/utils/DateFormat";
import format from "date-fns/format";
import styled from "styled-components";
import OrderDateForm from "./OrderDateForm";
import OrderStatusSelectForm from "./OrderStatusSelectForm";
import OrderService from "../../js/order";
import PartnersOrderLineItem from "./PartnersOrderLineItem";

const PartnersOrderPageWrapper = styled.div`
    padding: 20px;
`;

const PartnersOrderTableWrapper = styled.div`
    margin-top: 20px;
`;

const StyledTh = styled.th`
    text-align: center;
`;

export default function PartnersOrderPage() {
    const [startDate, setStartDate] = useState(format(new Date(new Date().getTime() - 3 * aMonthTime), "yyy-MM-dd"));
    const [endDate, setEndDate] = useState(format(new Date(), "yyy-MM-dd"));
    const [orderStatus, setOrderStatus] = useState("READY");
    const [orderList, setOrderList] = useState([]);

    useState(() => {
        OrderService.findPartnersOrder(orderStatus, startDate, endDate).then(result => {
            setOrderList(result.data);
        });
    }, []);

    const onChangeOrderStatus = (event) => {
        setOrderStatus(event.target.value);
        onSearch(startDate, endDate, event.target.value);
    }

    const changeDateInfo = (startDate, endDate) => {
        onSearch(startDate, endDate, orderStatus);
    }

    const onSearch = (startDate, endDate, orderStatus) => {
        OrderService.findPartnersOrder(orderStatus, startDate, endDate).then(result => {
            setOrderList(result.data);
        });
    }

    return (
        <PartnersOrderPageWrapper>
            <Form>
                <OrderDateForm startDate={startDate} setStartDate={setStartDate} 
                    endDate={endDate} setEndDate={setEndDate} changeDateInfo={changeDateInfo} />
                <OrderStatusSelectForm onChangeOrderStatus={onChangeOrderStatus} />
            </Form>
            
            <PartnersOrderTableWrapper>
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
            </PartnersOrderTableWrapper>
        </PartnersOrderPageWrapper>
    );
}