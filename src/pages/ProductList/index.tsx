import { useState, useEffect } from 'react';
import { Clear, Edit, ReportGmailerrorred } from '@mui/icons-material';

import Title from '@Components/Title';
import Table from '@Components/Table';
import Search from '@Components/Search';
import Modal from '@Components/Modal';

import { Product } from '@Models/product';
import formatPrice from '@Utils/formatPrice';
import { mockProducts } from '@Utils/mock';

import './style.sass';

const HomePage = () => {
  const [search, setSearch] = useState<string>('');
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [productList, setProductList] = useState<Product[]>(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const setRangeList = (start : number, amount : number) => {
    console.log(mockProducts);
    let selectedProducts = [];
    if (start <= mockProducts.length) {
      for (var index = 0; index < (mockProducts.length - start); index++) {
        if (start + index) {
          var product = mockProducts[start + index];
          console.log(product);
        }
      }
    }
  }

  useEffect(() => {
    if(!search) {
      setProductList(mockProducts);
    } else {
      let results : Product[] = mockProducts.filter((element) => 
        element.name.toLowerCase().indexOf(search.toLowerCase()) != -1 ||
        element.category.toLowerCase().indexOf(search.toLowerCase()) != -1 ||
        element.price.toString().indexOf(search.toLowerCase()) != -1 ||
        element.amount.toString().indexOf(search.toLowerCase()) != -1
      );
      setProductList(results);
    }
  }, [search]);

  const selectDeleteProduct = (product : Product) => {
    setOpenModal(true);
    setSelectedProduct(product);
  }

  return (
    <div id="product-list-main" >
      <div id='product-list-header' >
        <Title
          title='Lista de produtos'
          subTitle='Veja a lista de produtos cadastrados no sistema'
        />
        <Search
          placeholder='Pesquise por um produto'
          value={search}
          setValue={setSearch}
        />
      </div>
      <Table>
        {
          productList.map((product, index) => (
            <ul key={index}>
              <li style={{ width: "100%", justifyContent: "left", paddingLeft: "20px" }}>{product.name}</li>
              <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{product.category}</li>
              <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{product.amount}</li>
              <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{formatPrice(product.price)}</li>
              <li id="product-list-options" style={{ minWidth: "180px" }} >
                <Edit/>
                <Clear onClick={() => selectDeleteProduct(product)} />
              </li>
            </ul>
          ))
        }
      </Table>

      <Modal isOpen={isOpenModal} setOpen={setOpenModal}>
        <ReportGmailerrorred style={{ color: "#E11D48", width: '55px', height: "55px", backgroundColor: '#e11d4732', padding: '8px', borderRadius: '50%' }} />
        <h2>{selectedProduct?.name}</h2>
        <p>Tem certeza que deseja deletar este item? Ao fazer isso todos os registros relacionados a ele serão deletados também!</p>
        <div style={{ width: '100%' }} >
          <button  
            onClick={() => {}} 
            style={{ backgroundColor: "#E11D48", color: "#FFF" }}
          >
            Deletar
          </button>
          <button
            onClick={() => setOpenModal(false)} 
            style={{ border: '1px solid #828080', backgroundColor: "#FFF" }}
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default HomePage;
