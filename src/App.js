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

const StyledMainWrapper = styled.div`
  margin: 0 auto;
  padding: 0 50px;
`;

function App() {
  return (
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
          </Route>
        </Routes>
      </StyledMainWrapper>
    </BrowserRouter>
  );
}

export default App;
