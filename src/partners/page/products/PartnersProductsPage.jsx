import React, {useState} from "react";
import styled from "styled-components";
import { Button, Table, Form, Pagination} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CategorySelect from "./CategorySelect";
import { useEffect } from "react";
import ProductService from "../../js/product";

const StyledTableHeader = styled.div`
    margin-bottom: 25px;
`;

const StyledListWrapper = styled.div`
    padding: 20px;
`;

const StyledH4 = styled.h4`
    display: inline;
`;

function PartnersProductsPage(){
    const [categoryId, setCategoryId] = useState();
    const [subCategoryId, setSubCategoryId] = useState();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [items, setItems] = useState([]);
    const [active, setActive] = useState(1);
    const navigate = useNavigate();

    useEffect(()=>{
        if(categoryId && subCategoryId){
            ProductService.getProducts(categoryId, subCategoryId, "RECENT", limit, offset).then(result => {
                setProducts(result.data);
                let pageItems = [];
                setItems(pageItems);

                for(let number = 1; number <= result.totalCount / limit ; number++) {
                    pageItems.push(
                        <Pagination.Item key={number} active={number === active} onClick={() => {
                            onSearch(number);
                        }}>
                            {number}
                        </Pagination.Item>,
                    );
                }
                setItems(pageItems);
            });    
        }
    }, [categoryId, subCategoryId, offset]);

    const onSearch = (offset) => {
        setOffset((offset-1) * limit);
        setActive(offset);
    }

    return (
        <StyledListWrapper>
            <StyledTableHeader>
                <StyledH4>상품 관리</StyledH4>
                <Button 
                    style={{
                        float: "right"
                    }}
                    variant="outline-primary"
                    onClick={()=>navigate("/partners/products/add/")}
                >상품 등록</Button>
            </StyledTableHeader>
            <Form>
                <CategorySelect categoryId={categoryId} subCategoryId={subCategoryId} setCategoryId={setCategoryId} setSubCategoryId={setSubCategoryId}/>
            </Form>
            <Table bordered hover size="sm">
                <colgroup>
                    <col width={200}></col>
                    <col width={400}></col>
                    <col width={150}></col>
                    <col width={250}></col>
                    <col width={100}></col>
                    <col width={150}></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>상품 대표이미지</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>세부 카테고리</th>
                        <th>재고</th>
                        <th>미응답 문의 수</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={product.id}>
                                <td className="text-center">
                                    <img src="/images/pot.jpeg" width={100} alt="" />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}원</td>
                                <td>주방 &gt; 냄비</td>
                                <td>{product.count} 개</td>
                                <td>2건</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <div className="text-center">
                <Pagination>{items}</Pagination>
            </div>
            
        </StyledListWrapper>
    );
    
}

export default PartnersProductsPage;