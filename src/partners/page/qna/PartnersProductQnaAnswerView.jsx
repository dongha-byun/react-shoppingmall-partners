import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
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

export default function PartnersProductQnaAnswerView() {
    const {state} = useLocation();
    const [answer, setAnswer] = useState({
        "answerDate" : "",
        "content": ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        let productId = state.productId;
        let qnaId = state.id;
        ProductQnaAnswerService.getAnswer(productId, qnaId).then(result => {
            setAnswer({
                "answerDate": result.answer.answerDate,
                "content": result.answer.answer
            });
        });
    }, []);

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
                        <td>{state.writerLoginId}</td>
                    </tr>
                    <tr>
                        <th>문의 내용</th>
                        <ContentTd>
                            {state.content}
                        </ContentTd>
                    </tr>
                    <tr>
                        <th>답변 일자</th>
                        <td>{answer.answerDate}</td>
                    </tr>
                    <tr>
                        <th>답변 내용</th>
                        <ContentTd>
                            {answer.content}
                        </ContentTd>
                    </tr>
                </tbody>
            </Table>
            <ButtonWrapper>
                <Button className="mx-1" variant="outline-danger" onClick={() => {
                    navigate(-1);
                }}>취소</Button>
            </ButtonWrapper>
        </AnswerFormWrapper>
    );
}