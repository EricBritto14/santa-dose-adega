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
  const [startPage, setStartPage] = useState<number>(0);
  const [results, setResults] = useState<Product[]>();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [productList, setProductList] = useState<Product[]>(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const setRangeList = (start : number, amount : number) => {
    let rangeList : Product[] = [];
    let dataBase = search && results ? results : mockProducts;

    if (start < dataBase.length && start >= 0) {
      for (var index = 0; index < amount; index++) {
        if (start + index < dataBase.length) {
          var product = dataBase[start + index];
          rangeList.push(product);
        }
      }
      setStartPage(start);
      setProductList(rangeList);
    }
  }

  useEffect(() => {
    setRangeList(0, 10);
  }, []);

  useEffect(() => {
    if(!search) {
      setResults(mockProducts);
    } else {
      let searchResult : Product[] = mockProducts.filter((element) => 
        element.nome.toLowerCase().indexOf(search.toLowerCase()) != -1 ||
        element.data_validade.toLowerCase().indexOf(search.toLowerCase()) != -1 ||
        element.valor.toString().indexOf(search.toLowerCase()) != -1 ||
        element.quantidade.toString().indexOf(search.toLowerCase()) != -1
      );
      setResults(searchResult);
    }
  }, [search]);

  useEffect(() => {
    setRangeList(0, 10);
  }, [results]);

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
      <Table
        onNextPage={() => setRangeList(startPage + 10, 10)}
        onReturnPage={() => setRangeList(startPage - 10, 10)}
      >
        {
          productList.map((product, index) => (
            <ul key={index}>
              <li style={{ width: "100%", justifyContent: "left", paddingLeft: "20px" }}>{product.nome}</li>
              <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{product.data_validade}</li>
              <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{product.quantidade}</li>
              <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{formatPrice(product.valor)}</li>
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
        <h2>{selectedProduct?.nome}</h2>
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
