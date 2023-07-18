import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// == pages == //
import PartnersManagePage from './partners/page/PartnersManagePage';
import PartnersProductsPage from './partners/page/products/PartnersProductsPage';
import Login from './partners/page/login/Login';
import PartnersProductsAddPage from './partners/page/products/PartnersProductsAddPage';
import styled from 'styled-components';
import PartnersOrderPage from './partners/page/order/PartnersOrderPage';
import PartnersProductQnaPage from './partners/page/qna/PartnersProductQnaPage';
import PartnersIncomePage from './partners/page/income/PartnersIncomePage';
import PartnersProductQnaAnswerForm from './partners/page/qna/PartnersProductQnaAnswerForm';
import PartnersProductQnaAnswerView from './partners/page/qna/PartnersProductQnaAnswerView';
import { Col, Container, Row } from 'react-bootstrap';
import PartnersCouponPage from './partners/page/coupon/PartnersCouponPage';
import PartnersCouponAddPage from './partners/page/coupon/PartnersCouponAddPage';
import CouponReceivedUserListPage from './partners/page/coupon/CouponReceivedUserListPage';

const StyledMainWrapper = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <BrowserRouter>
            <StyledMainWrapper>
              <Routes>
                <Route index path="/" element={<Login/>}></Route> 
                <Route path="/partners" element={<PartnersManagePage/>}>
                  <Route path="products" element={<PartnersProductsPage/>}></Route>
                  <Route path="products/add" element={<PartnersProductsAddPage/>}></Route>
                  
                  <Route path="incomes" element={<PartnersIncomePage/>}></Route>

                  <Route path="orders" element={<PartnersOrderPage/>}></Route>

                  <Route path="qnas" element={<PartnersProductQnaPage/>}></Route>
                  <Route path="qnas/answer" element={<PartnersProductQnaAnswerForm/>}></Route>
                  <Route path="qnas/answer/view" element={<PartnersProductQnaAnswerView/>}></Route>

                  <Route path="coupons" element={<PartnersCouponPage />}></Route>
                  <Route path="coupons/add" element={<PartnersCouponAddPage />}></Route>
                  <Route path="coupons/:couponId/users" element={<CouponReceivedUserListPage />}></Route>
                </Route>
              </Routes>
            </StyledMainWrapper>
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
