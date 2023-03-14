import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';


export default function WrapComponent() {
    return (
        <div id='wrap'>
                <TopModalComponent/>
                <HeaderComponent/>
                <SignUpComponent/>
                <FooterComponent/>                
        </div>
    );
};