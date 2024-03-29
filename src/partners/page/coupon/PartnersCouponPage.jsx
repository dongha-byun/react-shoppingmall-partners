import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Table } from "react-bootstrap";
import CouponService from "../../js/coupon";

const StyledCouponPageWrapper = styled.div`
    padding: 20px;
`;

const StyledTableHeader = styled.div`
    margin-bottom: 25px;
`;

const StyledH4 = styled.h4`
    display: inline;
`;

const StyledTh = styled.th`
    text-align: center;
    vertical-align: middle;
`;
const StyledTd = styled.td`
    text-align: center;
    vertical-align: middle;
`;

export default function PartnersCouponPage() {
    const navigate = useNavigate();
    const [couponList, setCouponList] = useState([]);

    useEffect(() => {
        CouponService.getCoupons().then((data) => {
            setCouponList(data);
        });
    }, []);

    const viewUserList = (couponId) => {
        navigate("/partners/coupons/"+couponId+"/users");
    }

    return(
        <StyledCouponPageWrapper>
            <StyledTableHeader>
                <StyledH4>쿠폰 관리</StyledH4>
                <Button 
                    style={{
                        float: "right"
                    }}
                    variant="outline-primary"
                    onClick={()=>navigate("/partners/coupons/add/")}
                >쿠폰 등록</Button>
            </StyledTableHeader>

            <Table>
                <thead>
                    <tr>
                        <StyledTh>쿠폰명</StyledTh>
                        <StyledTh>유효기간 시작</StyledTh>
                        <StyledTh>유효기간 끝</StyledTh>
                        <StyledTh>할인율</StyledTh>
                        <StyledTh>대상자 조회</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {couponList.map((coupon) => {
                        return(
                            <tr key={coupon.id}>
                                <StyledTd>{coupon.name}</StyledTd>
                                <StyledTd>{coupon.fromDate}</StyledTd>
                                <StyledTd>{coupon.toDate}</StyledTd>
                                <StyledTd>{coupon.discountRate}%</StyledTd>
                                <StyledTd>
                                    <Button variant="outline-secondary" size="sm"
                                        onClick={() => viewUserList(coupon.id)}
                                    >조회</Button>
                                </StyledTd>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </StyledCouponPageWrapper>
    );
} 