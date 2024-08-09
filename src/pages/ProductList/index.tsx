import { useState, useEffect } from 'react';
import { Clear, Edit, ReportGmailerrorred } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

import Title from '@Components/Title';
import Table from '@Components/Table';
import Search from '@Components/Search';
import Modal from '@Components/Modal';
import Loading from '@Components/Loading';
import Notification, { NotificationType } from '@Components/Notification';

import { listProducts, deleteProduct } from '@Api/services/products';

import { Product } from '@Models/product';
import formatPrice from '@Utils/formatPrice';
import { mockProducts } from '@Utils/mock';

import './style.sass';

const HomePage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>('');
  const [startPage, setStartPage] = useState<number>(0);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const [loading, setLoading] = useState<boolean>(false);
  const [note, setNote] = useState<NotificationType>({
    message: "",
    show: false,
    type: "success"
  });

  const [results, setResults] = useState<Product[]>();
  const [productList, setProductList] = useState<Product[]>([]);
  const [dataProduct, setDataProduct] = useState<Product[]>([]);

  const setRangeList = (start : number, amount : number) => {
    let rangeList : Product[] = [];
    let dataBase = search && results ? results : dataProduct;

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

  async function delProduct(id : number) {
    setLoading(true);
    const deleteResponse = await deleteProduct(id);

    if (deleteResponse.error) {
      setNote({
        show: true,
        message: `${deleteResponse.response.response.data.detail}`,
        type: "error"
      });
      setTimeout(() => setNote(prevState => ({
        ...prevState,
        show : false,
      })), 3000);
    } else {
      setOpenModal(false);
      getAllProducts();
    }

    setLoading(false);
  }

  async function getAllProducts() {
    setLoading(true);
    const data = await listProducts();

    if (data.error) {
      if(data.response.response.status === 401) navigate("/login");

      setNote({
        show: true,
        message: `${data.response.response.data.detail}`,
        type: "warning"
      });
      setTimeout(() => setNote(prevState => ({
          ...prevState,
          show : false,
      })), 3000);

    } else {
      setProductList(data[1]);
      setDataProduct(data[1]);
      setRangeList(0, 10);
    }

    setLoading(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if(!search) {
      setResults(dataProduct);
    } else {
      let searchResult : Product[] = dataProduct.filter((element) => 
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
                <Clear 
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedProduct(product);
                  }} 
                />
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
            onClick={() => {
              if(selectedProduct) delProduct(selectedProduct.idProduto)
            }} 
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
      {
        loading && <Loading/>
      }
      <Notification note={note}/>
    </div>
  )
}

export default HomePage;
