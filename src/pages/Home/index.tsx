import React from 'react';
import { LockReset, Logout, AccountBox, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import Title from '@Components/Title';
import Menu, { OptionMenuType } from '@Components/Menu';

import './style.sass';

const HomePage = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }

    return (
        <div id='overview-page-main'>
            <div id='overview-page-header'>
                <Title
                    title='Visão geral'
                    subTitle='Vaje estatísticas com relação ao seu comércio'
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
    )
}

export default HomePage;