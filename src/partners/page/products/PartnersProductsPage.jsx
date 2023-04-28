import React, {useState} from "react";
import styled from "styled-components";
import { Button, Form, Pagination} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CategorySelect from "./CategorySelect";
import { useEffect } from "react";
import ProductService from "../../js/product";
import PartnersProductList from "./PartnersProductList";

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
    const [categoryName, setCategoryName] = useState('');
    const [subCategoryName, setSubCategoryName] = useState('');

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [items, setItems] = useState([]);
    const [active, setActive] = useState(1);
    const navigate = useNavigate();

    useEffect(()=>{
        if(categoryId && subCategoryId){
            ProductService.getProducts(categoryId, subCategoryId, limit, offset).then(result => {
                setProducts(result.data);
                setCategoryName(result.categoryName);
                setSubCategoryName(result.subCategoryName);

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
                <CategorySelect 
                    categoryId={categoryId} subCategoryId={subCategoryId} 
                    setCategoryId={setCategoryId} setSubCategoryId={setSubCategoryId}
                    />
            </Form>

            <PartnersProductList products={products} categoryName={categoryName} subCategoryName={subCategoryName}/>

            <div className="text-center">
                <Pagination>{items}</Pagination>
            </div>
            
        </StyledListWrapper>
    );
    
}

export default PartnersProductsPage;