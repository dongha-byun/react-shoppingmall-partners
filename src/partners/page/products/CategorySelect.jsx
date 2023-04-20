import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import { Form, Row, Col } from "react-bootstrap";
import CategoryService from "../../js/category";
import { getCategory } from "../../js/category";

function CategorySelect(props){
    const {categoryId, subCategoryId, setCategoryId, setSubCategoryId} = props;
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        CategoryService.getCategories().then(result => {
            setCategories(result.data);
        })
    }, []);

    const changeCategory = (event) => {
        setCategoryId(event.target.value);
        categories.map(category => {
            if(event.target.value == category.id){
                setSubCategoryId(category.subCategories[0].id);
            }
        });
    }

    const changeSubCategory = (event) => {
        setSubCategoryId(event.target.value);
    }

    return (
        <Row className="mb-3">
            <Form.Group as={Col} controlId="categoryId">
                <Form.Select onChange={changeCategory}>
                    <option value="">카테고리</option>
                    {categories.map((category) => {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="subCategoryId">
                <Form.Select value={subCategoryId} onChange={changeSubCategory}>
                    <option value="">세부 카테고리</option>
                    {categoryId && getCategory(categories, categoryId).subCategories.map((sub)=>{
                        return (
                            <option key={sub.id} value={sub.id}>{sub.name}</option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
        </Row>
    );
}

export default CategorySelect;