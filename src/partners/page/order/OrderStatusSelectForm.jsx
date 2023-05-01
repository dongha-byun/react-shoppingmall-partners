import React from "react";
import { Row, Col, Form } from "react-bootstrap";

export default function OrderStatusSelectForm(props) {
    const {onChangeOrderStatus} = props;

    return (
        <Form.Group as={Row}>
            <Form.Label column sm={2}>주문 상태</Form.Label>
            <Col>
                <Form.Select onChange={onChangeOrderStatus}>
                    <option value="READY" defaultChecked>상품 준비중</option>
                    <option value="CANCEL">주문 취소</option>
                    <option value="OUTING">상품 출고</option>
                    <option value="DELIVERY">배송중</option>
                    <option value="DELIVERY_END">배송완료</option>
                    <option value="REFUND">환불 요청</option>
                    <option value="REFUND_END">환불 완료</option>
                    <option value="EXCHANGE">교환 요청</option>
                    <option value="CHECKING">상품 검수중</option>
                    <option value="FINISH">구매확정</option>
                </Form.Select>
            </Col>
        </Form.Group>
    );
}