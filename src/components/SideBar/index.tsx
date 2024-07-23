import { Liquor, AddCircleOutline, Logout, People, Assessment } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom';

import './style.sass';

const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <aside id='side-bar'>
            <h1>Páginas</h1>
            <label>Menu</label>
            <ul>
                <li 
                    onClick={() => navigate('/')}
                    id={`${location.pathname === '/' ? 'select-side-bar' : ''}`}
                >
                    <Assessment /> 
                    Visão Geral
                </li>
                <li 
                    onClick={() => navigate('/product-list')}
                    id={`${location.pathname === '/product-list' ? 'select-side-bar' : ''}`}
                >
                    <Liquor /> 
                    Lista de produtos
                </li>
                <li 
                    onClick={() => navigate('/product-form')}
                    id={`${location.pathname === '/product-form' ? 'select-side-bar' : ''}`}
                > 
                    <AddCircleOutline/>
                    Cadastro de produto
                </li>
                <li 
                    onClick={() => navigate('/user-list')}
                    id={`${location.pathname === '/user-list' ? 'select-side-bar' : ''}`}
                > 
                    <People/>
                    Lista de usuários
                </li>
            </ul>
            <button>
                <Logout/>
                Sair
            </button>
        </aside>
    );
}

export default SideBar;