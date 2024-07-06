import React, { useState, useEffect } from "react";

import Title from "@Components/Title";
import Input from "@Components/Input";
import Select from '@Components/Select';
import SelectNumber from "@Components/SelectNumber";

import { category_select } from "@Utils/selects.const";
import { Product } from "@Models/product";

import './style.sass';

const ProductForm = () => { 
    const [product, setProduct] = useState<Product>({
        id: null,
        name: '',
        amount: 1,
        category: '',
        price: 0,
        purchase_price: 0,
    });

    const changeProduct = (key : string, value : string | number) => {
        setProduct(prevState => ({...prevState, [key] : value}));
    }

    return(
        <div id='product-form-page-main'>
            <div id='product-form-header'>
                <Title
                    title="Cadastro de produto"
                    subTitle="Cadastre um produto no sistema preenchendo o formulário"
                />
            </div>
            <form id='product-form-content'>
                <Input
                    title="Nome"
                    value={product.name}
                    setValue={(value : string | number) => changeProduct('name', value)}
                />
                <div id='product-form-container'>
                    <Input
                        title="Preço pago para o fornecedor pelo produto (unidade)"
                        value={product.purchase_price}
                        setValue={(value : string | number) => changeProduct('purchase_price', value)}
                        width="45%"
                    />
                    <Input
                        title="Preço de venda"
                        value={product.price}
                        setValue={(value : string | number) => changeProduct('price', value)}
                        width="45%"
                    />
                </div>
                <div id='product-form-container'>
                    <SelectNumber
                        width="45%"
                        title="Quantidade"
                        value={product.amount}
                        setValue={(value : string | number) => changeProduct('amount', value)}
                    />
                    <Select
                        title="Categoria"
                        value={product.category}
                        setValue={(value : string | number) => changeProduct('category', value)}
                        selectList={category_select}
                        width="45%"
                    />
                </div>
                <button type="submit">
                    Salvar
                </button>
            </form>
        </div>
    );
}

export default ProductForm;