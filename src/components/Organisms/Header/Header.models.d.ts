import React from 'react';
import { SearchBarType } from 'components/atoms/SearchBar';
import { ButtonProps } from 'components/atoms/Button';
import { DebtsType } from 'components/molecules/DebtsList/DebtsList.models';

export type headerDataType = {
    label: string;
}

export interface HeaderProps {
    baseDebts: DebtsType[];
    searchBtn: ButtonProps;
    header: headerDataType;
    searchBar?: SearchBarType;
    setDebts:React.Dispatch<React.SetStateAction<DebtsType[]>>
}
