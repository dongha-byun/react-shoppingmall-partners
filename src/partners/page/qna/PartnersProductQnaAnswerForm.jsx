import React, { useState } from "react";
import { Button, Form, Row, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductQnaAnswerService from "../../js/productQnaAnswer";

const AnswerFormWrapper = styled.div`
    padding: 30px;
`;
const ButtonWrapper = styled.div`
    margin-top: 10px;
    float: right;
`;
const ContentTd = styled.td`
    white-space: pre-wrap;
`;

export default function PartnersProductQnaAnswerForm() {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [answerParam, setAnswerParam] = useState({
        "content" : ""
    });

    const saveAnswer = () => {
        let productId = state.productId;
        let qnaId = state.id;
        ProductQnaAnswerService.saveAnswer(productId, qnaId, answerParam).then(result => {
            alert("답변 등록이 완료 되었습니다.");
            navigate("/partners/qnas");
        });
    }

    return (
        <AnswerFormWrapper>
            <Table>
                <colgroup>
                    <col width={150}></col>
                    <col></col>
                </colgroup>
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>{state.productName}</td>
                    </tr>
                    <tr>
                        <th>문의일자</th>
                        <td>{state.writeDate}</td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>{state.writerName}</td>
                    </tr>
                    <tr>
                        <th>문의 내용</th>
                        <ContentTd>
                            {state.content}
                        </ContentTd>
                    </tr>
                </tbody>
            </Table>
            <Form className="my-4">
                <Form.Group as={Row}>
                    <Form.Control as="textarea" rows={5} 
                        placeholder="답변을 입력해주세요."
                        onChange={(event) => {
                            setAnswerParam({
                                "content" : event.target.value
                            });
                        }}/>
                </Form.Group>
            </Form>
            <ButtonWrapper>
                <Button className="mx-1" variant="outline-danger" onClick={() => {
                    navigate(-1);
                }}>취소</Button>
                <Button onClick={saveAnswer}>답변 등록</Button>
            </ButtonWrapper>
        </AnswerFormWrapper>
    );
}