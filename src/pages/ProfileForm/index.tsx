import React, { useState, useEffect } from "react";
import { LockReset, Logout, AccountBox, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import Title from '@Components/Title';
import Menu, { OptionMenuType } from '@Components/Menu';

import { User } from "@Models/user";

import './style.sass';

const ProfileForm = () => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState<User>({
        idUsuario: null,
        email: "",
        is_admin: false,
        senha: "",
        username: ""
    });

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }

    return (
        <div id='profile-form-page-main'>
            <div id='profile-form-page-header'>
                <Title
                    title='Editar perfil'
                    subTitle='Edite as informações do seu perfil'
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
            <form id="profile-form-container">

            </form>
        </div>
    )
}

export default ProfileForm;