import React, { useState, useEffect } from "react";
import { PersonOutline, LockOpen } from "@mui/icons-material";

import { LoginRequest } from "@Api/services/auth";
import { User } from "@Models/user";

import "./style.sass";

const Login = () => {
    const [ user, setUser ] = useState<User>({
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
        const response = await LoginRequest(user);

        console.log("RESPONSE: ", response);
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
        userRequest();
    }

    return (
        <div id="login-page-main">
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