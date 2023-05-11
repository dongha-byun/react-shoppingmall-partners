import React from "react";
import { Row, Col, Form } from "react-bootstrap";

export default function OrderStatusSelectForm(props) {
    const {onChangeOrderStatus} = props;

    return (
        <Form.Group as={Row}>
            <Form.Label column sm={2}>주문 상태</Form.Label>
            <Col>
                <Form.Select onChange={onChangeOrderStatus}>
                    <option value="READY" defaultChecked>준비중</option>
                    <option value="DELIVERY">배송중</option>
                    <option value="END">배송완료</option>
                    <option value="STOP">취소/교환/환불</option>
                </Form.Select>
            </Col>
        </Form.Group>
    );
}