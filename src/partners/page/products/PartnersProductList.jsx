import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { numberCommaFormat } from "../../js/utils/NumberUtils";
import { imgUrl } from "../../js/axios";

const StyledTh = styled.th`
    text-align: center;
`;

const StyledTd = styled.td`
    vertical-align: middle;
    text-align: center;
`;

export default function PartnersProductList(props) {
    const { products, categoryName, subCategoryName } = props;

    return (
        <Table bordered hover size="sm">
            <colgroup>
                <col width={200}></col>
                <col width={250}></col>
                <col width={200}></col>
                <col width={300}></col>
                <col width={150}></col>
            </colgroup>
            <thead>
                <tr>
                    <StyledTh>상품 대표이미지</StyledTh>
                    <StyledTh>상품명</StyledTh>
                    <StyledTh>가격</StyledTh>
                    <StyledTh>세부 카테고리</StyledTh>
                    <StyledTh>재고</StyledTh>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <StyledTd className="text-center">
                                <img src={imgUrl + product.thumbnail} width={100} alt="" />
                            </StyledTd>
                            <StyledTd>{product.name}</StyledTd>
                            <StyledTd>{ numberCommaFormat(product.price)}원</StyledTd>
                            <StyledTd>{`${categoryName} > ${subCategoryName}`} </StyledTd>
                            <StyledTd>{ numberCommaFormat(product.count)} 개</StyledTd>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}