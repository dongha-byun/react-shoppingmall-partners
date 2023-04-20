import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import CategorySelect from "./CategorySelect";
import ProductService from "../../js/product";
import { useNavigate } from "react-router-dom";

const StyledAddPageWrapper = styled.div`
    padding: 20px;
`;

const StyledH3 = styled.h3`
    margin-bottom: 15px;
`;

export default function PartnersProductsAddPage() {
    const navigate = useNavigate();
    const [categoryId, setCategoryId] = useState();
    const [subCategoryId, setSubCategoryId] = useState();
    const [productAddForm, setProductAddForm] = useState({
        showImgFile: "",
        productName: "",
        detail:"",
        price: 0,
        count: 0,
    });

    const onChange = (event) => {
        setProductAddForm({
            ...productAddForm,
            [event.target.id]: event.target.value
        });
    }

    const confirm = () =>{
        var params = {
            showImgFile: productAddForm.showImgFile,
            name: productAddForm.productName,
            detail: productAddForm.detail,
            price: productAddForm.price,
            count: productAddForm.count,
            categoryId: categoryId,
            subCategoryId: subCategoryId
        }
        ProductService.saveProduct(params);
    }

    const cancel = () => {
        navigate(-1);
    }

    return (
        <StyledAddPageWrapper>
            <StyledH3>상품 등록</StyledH3>
            <Form>
                <CategorySelect 
                    categoryId={categoryId} subCategoryId={subCategoryId}
                    setCategoryId={setCategoryId} setSubCategoryId={setSubCategoryId}
                />
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Label>상품명</Form.Label>
                    <Form.Control onChange={onChange}/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="price">
                        <Form.Label>가격</Form.Label>
                        <Form.Control type="number" onChange={onChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="count">
                        <Form.Label>수량</Form.Label>
                        <Form.Control type="number" onChange={onChange}/>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="showImgFile">
                    <Form.Label>대표 이미지</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="detail">
                    <Form.Label>상품 설명</Form.Label>
                    <Form.Control as="textarea" rows={10} onChange={onChange}/>
                </Form.Group>
            </Form>
            <Button size="lg" variant="outline-danger" className="w-50" onClick={cancel}>취소</Button>
            <Button size="lg" className="w-50" onClick={confirm}>상품 등록</Button>
        </StyledAddPageWrapper>
    );
}