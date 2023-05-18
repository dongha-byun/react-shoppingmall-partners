import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { aMonthTime } from "../../js/utils/DateFormat";
import format from "date-fns/format";
import styled from "styled-components";
import OrderDateForm from "./OrderDateForm";
import OrderStatusSelectForm from "./OrderStatusSelectForm";
import OrderService from "../../js/order";
import PartnersOrderReadyList from "./ready/PartnersOrderReadyList";
import PartnersOrderDeliveryList from "./delivery/PartnersOrderDeliveryList";
import PartnersOrderEndList from "./end/PartnersOrderEndList";
import PartnersOrderCancelList from "./cancel/PartnersOrderCancelList";

const PartnersOrderPageWrapper = styled.div`
    padding: 20px;
`;

const PartnersOrderTableWrapper = styled.div`
    margin-top: 20px;
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
                {
                    orderStatus === "READY" && 
                    <PartnersOrderReadyList orderList={orderList} />
                }
                {
                    orderStatus === "DELIVERY" &&
                    <PartnersOrderDeliveryList orderList={orderList} />
                }
                {
                    orderStatus === "END" &&
                    <PartnersOrderEndList orderList={orderList} />
                }
                {
                    orderStatus === "STOP" && 
                    <PartnersOrderCancelList orderList={orderList} />
                }
            </PartnersOrderTableWrapper>
        </PartnersOrderPageWrapper>
    );
}