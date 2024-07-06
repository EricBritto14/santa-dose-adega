import React, {useState, useEffect} from "react";

import Title from "@Components/Title";
import Search from "@Components/Search";

import './style.sass';

const UserList = () => {
    const [search, setSearch] = useState<string>('');

    return (
        <div id='user-list-main'>
            <div id='home-page-header'>
                <Title
                    title="Lista de usuários"
                    subTitle="Veja a lista de todos os usuários cadastrados no sistema"
                />
                <Search
                    placeholder="Pesquisa por um usuário"
                    value={search}
                    setValue={setSearch}
                />
            </div>
        </div>
    )
}

export default UserList;