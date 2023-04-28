import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { imgUrl } from "../../js/axios";

const StyledTh = styled.th`
    text-align: center;
`;

const StyledTd = styled.td`
    vertical-align: middle;
    text-align: center;
`;

export default function PartnersProductQnaList(props) {
    const { qnaList } = props;

    return (
        <Table bordered hover size="sm" >
            <colgroup>
                <col width={200}></col>
                <col width={150}></col>
                <col width={150}></col>
                <col width={150}></col>
                <col width={200}></col>
                <col width={150}></col>
            </colgroup>
            <thead>
                <tr>
                    <StyledTh>문의일자</StyledTh>
                    <StyledTh>문의자</StyledTh>
                    <StyledTh>상품이미지</StyledTh>
                    <StyledTh>상품명</StyledTh>
                    <StyledTh>문의내용</StyledTh>
                    <StyledTh>답변여부</StyledTh>
                </tr>
            </thead>
            <tbody>
                {qnaList.map((qna) => {
                    return (
                        <tr key={qna.id}>
                            <StyledTd>{qna.writeDate}</StyledTd>
                            <StyledTd>{qna.writerName}</StyledTd>
                            <StyledTd>
                                <img src={imgUrl + qna.imgFileName} width={100} alt="" />
                            </StyledTd>
                            <StyledTd>{qna.productName}</StyledTd>
                            <StyledTd>{qna.content}</StyledTd>
                            <StyledTd>{qna.answered ? "답변 완료" : "답변 미등록"}</StyledTd>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}