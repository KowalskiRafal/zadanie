import React from 'react';

import DebtsSearch from 'components/molecules/DebtsSearch';
import { HeaderProps } from './Header.models.d';

const Header = ({ header: { label }, setDebts, baseDebts }: HeaderProps) => (
    <header className='header'>
        <div className='header__wrapper'>
        <h1 className='header__heading'>{label}</h1>
<DebtsSearch setDebts={setDebts} baseDebts={baseDebts}/>
        </div>
    </header>

);
export default Header;
