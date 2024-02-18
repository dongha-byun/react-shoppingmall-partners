import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledRegisterWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 540px;
    margin : 0 auto;
    padding: 0px 50px;
`;

export function Register() {
    const navigate = useNavigate();
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        ceoName: "",
        crn : "",
        address: "",
        telNo: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const onChangeValue = (event) => {
        setRegisterInfo({
            ...registerInfo,
            [event.target.id] : event.target.value
        });
    }
    const register = () => {
        // post and close modal
        alert("판매승인 요청 완료");
    }
    const goBack = () => {
        navigate(-1);
    }
    
    return (
        <StyledRegisterWrapper>
            <h3>가입정보 입력</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>업체명</Form.Label>
                        <Form.Control type="text" placeholder="업체명" onChange={onChangeValue}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ceoName">
                        <Form.Label>대표자</Form.Label>
                        <Form.Control type="text" placeholder="대표자" onChange={onChangeValue}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="crn">
                        <Form.Label>사업자 번호</Form.Label>
                        <Form.Control type="text" placeholder="- 를 제외한 10자리" onChange={onChangeValue}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>주소</Form.Label>
                        <Form.Control type="text" placeholder="대표 사무실 주소" onChange={onChangeValue}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telNo">
                        <Form.Label>사업자 대표 연락처</Form.Label>
                        <Form.Control type="text" placeholder="000-0000-0000" onChange={onChangeValue}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="text" placeholder="이메일" onChange={onChangeValue}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호" onChange={onChangeValue}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호 확인" onChange={onChangeValue}/>
                    </Form.Group>
                </Form>
                <Button className="float-right" variant="outline-danger" onClick={goBack}>
                    취소
                </Button>
                <Button className="float-right" variant="primary" onClick={register}>
                    가입하기
                </Button>
            </StyledRegisterWrapper>
        );
}