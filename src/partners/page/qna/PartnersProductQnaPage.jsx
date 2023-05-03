import React, { useEffect, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import ProductQnaService from "../../js/productQna";
import PartnersProductQnaList from "./PartnersProductQnaList";

const StyledQnaWrapper = styled.div`
    padding: 20px;
`;

const StyledTableHeader = styled.div`
    margin-bottom: 25px;
`;

export default function PartnersProductQnaPage() {
    const [isAnswered, setIsAnswered] = useState("N");
    const [writeName, setWriterName] = useState("");
    const [qnaList, setQnaList] = useState([]);

    useEffect(() => {
        ProductQnaService.getPartnersProductQnaList(isAnswered).then(result => {
            setQnaList(result.data);
        });
    }, [isAnswered]);

    const onSearch = () => {
        console.log(writeName);
    }

    const onChangeWriteName = (event) => {
        setWriterName(event.target.value);
    }

    const onChangeIsAnswered = (event) => {
        setIsAnswered(event.target.value);
    }

    return (
        <StyledQnaWrapper>
            <StyledTableHeader>
                <Form>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label column sm={2}>답변 등록여부</Form.Label>
                        <Col sm={10}>
                            <Form.Select onChange={onChangeIsAnswered}>
                                <option value="N" defaultChecked>미완료</option>
                                <option value="Y">완료</option>
                                <option value="ALL">전체</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="writerName">
                        <Form.Label column sm={2}>문의자</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" onChange={onChangeWriteName} />
                        </Col>
                        <Col>
                            <Button onClick={onSearch}>검색</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </StyledTableHeader>
            <PartnersProductQnaList qnaList={qnaList} />
        </StyledQnaWrapper>
    );
}