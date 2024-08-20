import React, { useState, useEffect } from "react";
import { PersonOutline, LockOpen } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

import { LoginRequest } from "@Api/services/auth";
import { Auth } from "@Models/user";

import Loading from "@Components/Loading";
import Notification, { NotificationType } from "@Components/Notification";

import "./style.sass";

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<NotificationType>({
        show: false,
        message: "",
        type: "success"
    });
    const [user, setUser] = useState<Auth>({
        username: "",
        password: ""
    });

    const changeUserArgs = (value : string, key : string) => {
        setUser(prevState => ({
            ...prevState,
            [key] : value
        }));
    }

    async function userRequest() {
        const data = await LoginRequest(user);

        if(data.error) {
            setError({
                show: true,
                message: `${data.response.response.data.detail}`,
                type: "error"
            });
            setLoading(false);
        } else {
            localStorage.setItem("token", data.response.token);
            navigate("/");
        }
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
        setLoading(true);
        userRequest();
    }

    return (
        <div id="login-page-main">
            <Notification 
                note={error}
                setNote={setError}
            />
            {
                loading && <Loading/>
            }
            <form onSubmit={handleSubmit}>
                <img src="../../../public/beer.svg" alt="beer" />
                <div id="input-content-login">
                    <PersonOutline/>
                    <input 
                        type="text" 
                        placeholder="Nome do usuário"
                        value={user.username}
                        onChange={(element) => changeUserArgs(element.target.value, "username")}
                    />
                </div>
                <div id="input-content-login">
                    <LockOpen/>
                    <input
                        type="password" 
                        placeholder="Senha"
                        value={user.password}
                        onChange={(element) => changeUserArgs(element.target.value, "password")}
                    />
                </div>
                <button type="submit">
                    Entrar
                </button>
            </form>
        </div>
    )
}

export default Login;