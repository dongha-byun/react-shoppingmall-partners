import React from "react";
import { Col, Row, Form } from "react-bootstrap";

export default function OrderDateForm(props) {
    const {startDate, setStartDate, endDate, setEndDate, changeDateInfo} = props;

    return (
        <Form.Group as={Row}>
            <Col sm="2">
                <Form.Label>구매일자 검색기간</Form.Label>
            </Col>
            <Col>
                <Form.Group className="mb-3">
                    <Form.Control type="date" value={startDate} 
                        onChange={(event) => {
                            setStartDate(event.target.value);
                            changeDateInfo(event.target.value, endDate);
                        }}
                    />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3">
                    <Form.Control type="date" value={endDate} 
                        onChange={(event) => {
                            setEndDate(event.target.value);
                            changeDateInfo(startDate, event.target.value);
                        }}
                    />
                </Form.Group>
            </Col>
        </Form.Group>
    );
}