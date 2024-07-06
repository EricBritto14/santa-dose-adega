import { FileDownload } from '@mui/icons-material';
import './style.sass';

const Table = ({ children } : { children : any }) => {
    return (
        <div id='table-component-main'>
            <div id='table-title' >
                <h2>Lista de produtos</h2>
                <button>
                    Exportar Lista
                    <FileDownload/>
                </button>
            </div>
            <div id='table-header' >
                <ul>
                    <li style={{ width: "100%" }} >Nome</li>
                    <li>Categoria</li>
                    <li>Quantidade</li>
                    <li>Preço</li>
                    <li style={{ justifyContent: "center", paddingLeft: "0px" }} >Opções</li>
                </ul>
            </div>
            <div id="table-content">
                {children}
            </div>
        </div>
    )
}

export default Table;