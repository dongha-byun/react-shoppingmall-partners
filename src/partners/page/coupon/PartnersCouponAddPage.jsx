import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CouponService from "../../js/coupon";

const StyledAddPageWrapper = styled.div`
    padding: 20px;
`;

const StyledH4 = styled.h4`
    margin-bottom: 15px;
`;

export default function PartnersCouponAddPage() {
    const navigate = useNavigate();
    const [couponParam, setCouponParam] = useState({
        "name": "",
        "fromDate": "",
        "toDate": "",
        "userGrade": "NORMAL",
        "discountRate": ""
    });

    const changeValue = (event) => {
        setCouponParam({
            ...couponParam,
            [event.target.id]: event.target.value
        });
    }

    const cancel = () => {
        navigate(-1);
    }

    const confirm = () =>{
        CouponService.makeCoupon(couponParam).then(() => {
            alert("쿠폰을 발급했습니다.");
            navigate("/partners/coupons");
        }).catch((error) => {
            alert("쿠폰생성에 실패했습니다. " + error);
        });
    }

    return(
        <StyledAddPageWrapper>
            <StyledH4>쿠폰 등록</StyledH4>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>쿠폰 명</Form.Label>                
                    <Form.Control onChange={changeValue} />
                </Form.Group>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="fromDate">
                        <Form.Label>언제부터</Form.Label>                
                        <Form.Control type="date" onChange={changeValue}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="toDate">
                        <Form.Label>언제까지</Form.Label>                
                        <Form.Control type="date" onChange={changeValue}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="userGrade">
                        <Form.Label>지급대상</Form.Label>                
                        <Form.Select onChange={changeValue}>
                            <option value="NORMAL" selected>일반회원</option>
                            <option value="REGULAR">단골회원</option>
                            <option value="VIP">VIP</option>
                            <option value="VVIP">VVIP</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="discountRate">
                        <Form.Label>할인율</Form.Label>                
                        <Form.Control type="number" onChange={changeValue}/>
                    </Form.Group>
                </Row>
            </Form>
            <Button size="lg" variant="outline-danger" className="w-50" onClick={cancel}>취소</Button>
            <Button size="lg" className="w-50" onClick={confirm}>쿠폰 등록</Button>
        </StyledAddPageWrapper>
    );
}