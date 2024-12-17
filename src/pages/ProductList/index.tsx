import React, { useState, useEffect } from 'react';
import { Clear, Edit, LockReset, Logout, AccountBox, AccountCircle } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

import ButtonValue from '@Components/ButtonValue';
import PopUpOpcoes from '@Components/PopUpOpcoes';
import Title from '@Components/Title';
import Table from '@Components/Table';
import Search from '@Components/Search';
import DeleteModal from '@Components/DeleteModal';
import Loading from '@Components/Loading';
import Menu, { OptionMenuType } from '@Components/Menu';
import Notification, { NotificationType } from '@Components/Notification';

import { listProducts, deleteProduct, getProductByName } from '@Api/services/products';

import { exportExcelProduct } from '@Utils/exportExcel';
import { ProductGet } from '@Models/productsGet';
import formatPrice from '@Utils/formatPrice';
import formatPercent from '@Utils/formatPercent'

import './style.sass';

const HomePage = () => {
  const navigate = useNavigate();

  const [showAllButtons, setShowAllButtons] = useState(true)
  const [showButtonsCerveja, setShowButtonsCerveja] = useState(false)
  const [showButtonsRefrigerante, setShowButtonsRefrigerante] = useState(false)
  const [showButtonsBebidasQuente, setShowButtonsBebidasQuentes] = useState(false)
  const [showButtonsEnergeticos, setShowButtonsEnergeticos] = useState(false)
  const [showButtonsTabacaria, setShowButtonsTabacaria] = useState(false)
  const [showButtonsSalgadinhos, setShowButtonsSalgadinhos] = useState(false)
  const [showButtonsCarvaoGeloDoce, setShowButtonsCarvaoGeloDoce] = useState(false)

  const [search, setSearch] = useState<string>('');
  const [startPage, setStartPage] = useState<number>(0);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductGet>();

  const [loading, setLoading] = useState<boolean>(false);
  const [note, setNote] = useState<NotificationType>({
    message: "",
    show: false,
    type: "info"
  });

  const [results, setResults] = useState<ProductGet[]>();
  const [productList, setProductList] = useState<ProductGet[]>([]);
  const [dataProduct, setDataProduct] = useState<ProductGet[]>([]);

  const handleVoltar = (setButtons : React.Dispatch<React.SetStateAction<boolean>>) => {
    setButtons(false) 
    setDataProduct([]);
    setShowAllButtons(true)
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate('/login');
}
  const handleAllButtonsValue = (button : string) =>{
      setShowAllButtons(false)
      if(button === "Cerveja"){
        setShowButtonsCerveja(true)
      } else if (button === "Refrigerante"){
        setShowButtonsRefrigerante(true)
      } else if (button === "Bebidas Quentes"){
        setShowButtonsBebidasQuentes(true)
      } else if (button === "Energéticos"){
        setShowButtonsEnergeticos(true)
      } else if (button === "Tabacaria"){
        setShowButtonsTabacaria(true)
      } else if (button === "Salgadinhos"){
        setShowButtonsSalgadinhos(true)
      } else if (button === "Carvão" || button === "Gelo" || button === "Doces"){
        setShowButtonsCarvaoGeloDoce(true)
      } else {
        setDataProduct([]);
        getProductsBySpecific(button)
      } 
      console.log("Valor", button)
  }

  const setRangeList = (start : number, amount : number) => {
    let rangeList : ProductGet[] = [];
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
    setOpenModal(false);

    if (deleteResponse.error) {
      setNote({
        show: true,
        message: `${deleteResponse.response.response.data.detail}`,
        type: "error"
      });
    } else {
      getProducts();
    }

    setLoading(false);
  }

  async function getProductsBySpecific(value : string) {
    setLoading(true);
    const data = await getProductByName(value);
    console.log("Resposta da API (getByName):", data);

    if (data.error) {
      if(data.response.response.status === 401) navigate("/login");

      setNote({
        show: true,
        message: `${data.response.response.data.detail}`,
        type: "error"
      });
    }else {
      setDataProduct([data[1]]);
    }

    setLoading(false);
    console.log("Valor para pegar no banco: ", value)
  }
  async function getProducts( ) {
    setLoading(true);
    const data = await listProducts();

    if (data.error) {
      if(data.response.response.status === 401) navigate("/login");

      setNote({
        show: true,
        message: `${data.response.response.data.detail}`,
        type: "error"
      });

    } else {
      setDataProduct(data[1]);
    }

    setLoading(false);
  }

  useEffect(() => {
    if(!search) {
      setResults(dataProduct);
    } else {
      let searchResult : ProductGet[] = dataProduct.filter((element) => 
        element.nome.toLowerCase().indexOf(search.toLowerCase()) != -1 ||
        element.data_validade.toLowerCase().indexOf(search.toLowerCase()) != -1 ||
        element.valor_compra.toString().indexOf(search.toLowerCase()) != -1 ||
        element._valor_venda.toString().indexOf(search.toLowerCase()) != -1 ||
        element.quantidade.toString().indexOf(search.toLowerCase()) != -1
      );
      setResults(searchResult);
    }
  }, [search]);

  useEffect(() => {
    setRangeList(0, 10);
  }, [results]);

  useEffect(() => {
    setProductList(dataProduct);
    setRangeList(0, 10);
  }, [dataProduct]);

  useEffect(() => {
    // getProducts();
    
    if(localStorage.getItem("product-operation")) {
      setNote({
        show: true,
        message: `${localStorage.getItem("product-operation")}`,
        type: "success"
      });
      localStorage.removeItem("product-operation");
    }
  }, []);

  return (
    <div id="product-list-main" >
      <div id='product-list-header' >
        <Title
          title='Lista de produtos'
          subTitle='Veja a lista de produtos cadastrados no sistema'
        />
        <div id='product-list-header-content'>
          <Search
            placeholder='Pesquise por um produto'
            value={search}
            setValue={setSearch}
          />
          <Menu
            icon={<AccountCircle style={{ color: "#9A9494" }}/>}
            options={[
              { label: "Editar perfil", onPress: () => navigate("/profile-form"), icon: <AccountBox/> },
              { label: "Trocar senha", onPress: () => navigate("/change-password"), icon: <LockReset/> },
              { label: "Sair", onPress: () => logout(), icon: <Logout/> }
            ] as OptionMenuType[]}
            style={{
              margin: "0px 10px 0px 20px"
            }}
          />
        </div>
      </div>
        
        <div id='product-list-title'>
            <div id='product-list-title-space'>
                <h1>Selecione a categoria para aparecer os produtos</h1>
            </div>
            <div id='product-list-button'>
                {showAllButtons && (
                  <>
                    <ButtonValue title='Cerveja' valueClick="Cerveja" onClick={() => handleAllButtonsValue("Cerveja")}/>
                    <ButtonValue title='Refrigerante' valueClick="Refrigerante" onClick={() => handleAllButtonsValue("Refrigerante")}/>
                    <ButtonValue title='Bebidas Quentes' valueClick="Bebidas Quentes" onClick={() => handleAllButtonsValue("Bebidas Quentes")}/>
                    <ButtonValue title='Energéticos' valueClick="Energéticos" onClick={() => handleAllButtonsValue("Energéticos")}/>
                    <ButtonValue title='Tabacaria' valueClick="Tabacaria" onClick={() => handleAllButtonsValue("Tabacaria")}/>
                    <ButtonValue title='Carvão' valueClick="Carvão" onClick={() => handleAllButtonsValue("Carvão")}/>
                    <ButtonValue title='Gelo' valueClick="Gelo" onClick={() => handleAllButtonsValue("Gelo")}/>
                    <ButtonValue title='Salgadinhos' valueClick="Salgadinhos" onClick={() => handleAllButtonsValue("Salgadinhos")}/>
                    <ButtonValue title='Doces' valueClick="Doces" onClick={() => handleAllButtonsValue("Doces")}/>
                  </>
                )}

                {showButtonsCerveja &&(
                  <>
                    <ButtonValue title='Barrigudinhas' valueClick="Barrigudinhas" onClick={() => handleAllButtonsValue("Barrigudinhas")}/>
                    <ButtonValue title='Cervejas Alcoólicas' valueClick="Cervejas Alcoólicas" onClick={() => handleAllButtonsValue("Cervejas Alcoólicas")}/>
                    <ButtonValue title='Cervejas Não Alcoólicas' valueClick="Cervejas Não Alcoólicas" onClick={() => handleAllButtonsValue("Cervejas Não Alcoólicas")}/>
                    <ButtonValue title='Voltar' valueClick="Voltar" onClick={() => handleVoltar(setShowButtonsCerveja)}/>
                  </>
                )}

                {showButtonsRefrigerante &&(
                  <>
                    <ButtonValue title='Refrigerante Descartável' valueClick="Refrigerante Descartável" onClick={() => handleAllButtonsValue("Refrigerante Descartável")}/>
                    <ButtonValue title='Refrigerante Retornável' valueClick="Refrigerante Retornável" onClick={() => handleAllButtonsValue("Refrigerante Retornável")}/>
                    <ButtonValue title='Latas' valueClick="Latas" onClick={() => handleAllButtonsValue("Latas")}/>
                    <ButtonValue title='Voltar' valueClick="Voltar" onClick={() => handleVoltar(setShowButtonsRefrigerante)}/>
                  </>
                )}

                {showButtonsBebidasQuente &&(
                  <>
                    <ButtonValue title='Doses' valueClick="Doses" onClick={() => handleAllButtonsValue("Doses")}/>
                    <ButtonValue title='Vinhos' valueClick="Vinhos" onClick={() => handleAllButtonsValue("Vinhos")}/>
                    <ButtonValue title='Voltar' valueClick="Voltar" onClick={() => handleVoltar(setShowButtonsBebidasQuentes)}/>
                  </>
                )}

                {showButtonsEnergeticos &&(
                  <>
                    <ButtonValue title='Energéticos De Lata' valueClick="Energéticos De Lata" onClick={() => handleAllButtonsValue("Energéticos De Lata")}/>
                    <ButtonValue title='Energéticos 2L' valueClick="Energéticos 2L" onClick={() => handleAllButtonsValue("Energéticos 2L")}/>
                    <ButtonValue title='Voltar' valueClick="Voltar" onClick={() => handleVoltar(setShowButtonsEnergeticos)}/>
                  </>
                )}

                {showButtonsTabacaria &&(
                  <>
                    <ButtonValue title='Cigarros' valueClick="Cigarros" onClick={() => handleAllButtonsValue("Cigarros")}/>
                    <ButtonValue title='Palheiros' valueClick="Palheiros" onClick={() => handleAllButtonsValue("Palheiros")}/>
                    <ButtonValue title='Sedas' valueClick="Sedas" onClick={() => handleAllButtonsValue("Sedas")}/>
                    <ButtonValue title='Voltar' valueClick="Voltar" onClick={() => handleVoltar(setShowButtonsTabacaria)}/>
                  </>
                )}
                {showButtonsCarvaoGeloDoce &&(
                  <>
                    <ButtonValue title='Voltar' valueClick="Voltar" onClick={() => handleVoltar(setShowButtonsCarvaoGeloDoce)}/>
                  </>
                )}

                {showButtonsSalgadinhos &&(
                  <>
                    <ButtonValue title='Fabitos' valueClick="Fabitos" onClick={() => handleAllButtonsValue("Fabitos")}/>
                    <ButtonValue title='Batata' valueClick="Batata" onClick={() => handleAllButtonsValue("Batata")}/>
                    <ButtonValue title='Torcida' valueClick="Torcida" onClick={() => handleAllButtonsValue("Torcida")}/>
                    <ButtonValue title='Voltar' valueClick="Voltar" onClick={() => handleVoltar(setShowButtonsSalgadinhos)}/>
                  </>
                )}
            </div>
        </div>

        <Table
          onNextPage={() => setRangeList(startPage + 10, 10)}
          onReturnPage={() => setRangeList(startPage - 10, 10)}
          onExportData={() => exportExcelProduct(dataProduct, "Lista de Produtos")}
          columns={["Nome", "Validade", "Quantidade", "Valor", "% Ganho No Produto"]}
          title="Lista de produtos"
        >
          {
            //  productList?.length > 0 && 
            productList.map((product, index) => (
              <ul key={index}>
                <li style={{ width: "100%", justifyContent: "left", paddingLeft: "20px" }}>{product.nome}</li>
                <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{product.data_validade}</li>
                <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{product.quantidade}</li>
                <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px' }}>{formatPrice(product.valor_compra)}</li>
                <li style={{ paddingLeft: "20px", justifyContent: "left", minWidth: '180px'}}>{formatPercent(product._valor_venda)} </li>
                <li id="product-list-options" style={{ minWidth: "180px" }} >
                  <Edit
                    onClick={() => {
                      navigate(`/product-form/${product.idProduto}`);
                    }}
                  />
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
        

      <DeleteModal
        description='Tem certeza que deseja deletar este item? Ao fazer isso todos os registros relacionados a ele serão deletados também!'
        title={`${selectedProduct?.nome}`}
        open={isOpenModal}
        setOpen={setOpenModal}
        onDelete={() => selectedProduct && selectedProduct.idProduto && delProduct(selectedProduct.idProduto)}
      />
      
      {
        loading && <Loading/>
      }
      <Notification 
        note={note}
        setNote={setNote}
      />
      

    </div>
  )
}

export default HomePage;
