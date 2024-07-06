import React from 'react';

import Title from '@Components/Title';

import './style.sass';

const HomePage = () => {
    return (
        <div id='overview-page-main'>
            <div id='overview-page-header'>
                <Title
                    title='Visão geral'
                    subTitle='Vaje estatísticas com relação ao seu comércio'
                />
            </div>
        </div>
    )
}

export default HomePage;