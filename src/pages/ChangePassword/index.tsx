import React from "react";
import { LockReset, Logout, AccountBox, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import Title from '@Components/Title';
import Menu, { OptionMenuType } from '@Components/Menu';

import './style.sass';

const ChangePassword = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }

    return (
        <div id='change-password-page-main'>
            <div id='change-password-page-header'>
                <Title
                    title='Mudar senha'
                    subTitle='Preencha o formulário para definir uma nova senha'
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
            <form id='password-form-content' onSubmit={() => {}}>

            </form>
        </div>
    )
}

export default ChangePassword;