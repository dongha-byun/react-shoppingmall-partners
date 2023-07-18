import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import UserCouponService from "../../js/userCoupon";
import { Table, Button } from "react-bootstrap";

const StyledListWrapper = styled.div`
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

export default function CouponReceivedUserListPage() {
    const navigate = useNavigate();
    const { couponId } = useParams();
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        UserCouponService.getUserListOfCouponReceived(couponId).then((data) => {
            setUserList(data);
        });
    }, []);

    return (
        <StyledListWrapper>
            <StyledTableHeader>
                <StyledH4>쿠폰 발급대상자 목록</StyledH4>
                <Button 
                    style={{
                        float: "right"
                    }}
                    variant="outline-secondary"
                    onClick={()=>navigate(-1)}
                >뒤로</Button>
            </StyledTableHeader>
            <Table>
                <thead>
                    <tr>
                        <StyledTh>회원명</StyledTh>
                        <StyledTh>회원등급</StyledTh>
                        <StyledTh>쿠폰사용일자</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => {
                        return (
                            <tr key={user.userId}>
                                <StyledTd>{user.userName}</StyledTd>
                                <StyledTd>{user.userGrade}</StyledTd>
                                <StyledTd>{user.usingDate}</StyledTd>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </StyledListWrapper>
    );
}