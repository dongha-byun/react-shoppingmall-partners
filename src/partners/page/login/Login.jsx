import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button, Nav } from "react-bootstrap";
import { partnersLoginApi } from "../../js/login";

const StyledLoginWrapper = styled.div`
    padding-top: 200px;
    margin: 0 auto;
    width: 360px;
`;

export default function Login() {
    const [loginParam, setLoginParam] = useState({
        "loginId": "",
        "password": ""
    });

    const onChange = (event) => {
        setLoginParam({
            ...loginParam,
            [event.target.id]: event.target.value
        });
    }

    const login = () => {
        partnersLoginApi(loginParam);
    }

    return (
        <StyledLoginWrapper>
            <h3 className="text-center">덩하의 쇼핑몰 Partners 페이지</h3>
            <Form>
                <Form.Group className="mb-3" controlId="loginId">
                    <Form.Control
                        type="text"
                        placeholder="아이디"
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="비밀번호"
                        onChange={onChange}
                        onKeyDown={(event) => {
                            if(event.code === "Enter") {
                                login();
                            }
                        }}
                    />
                </Form.Group>
                <div className="d-grid mb-3">
                    <Button onClick={login} variant="primary" size="md">
                        로그인
                    </Button>
                </div>
            </Form>
            <Nav className="justify-content-center" navbar={false}>
                <Nav.Item>
                    <Nav.Link href="/providers/find-id">아이디찾기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/providers/find-pw">비밀번호찾기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/register">판매 자격 신청</Nav.Link>
                </Nav.Item>
            </Nav>
        </StyledLoginWrapper>
    );
}