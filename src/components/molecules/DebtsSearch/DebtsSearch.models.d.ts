import React from 'react';
import { DebtsType } from '../DebtsList';

export type DebtsSearchProps = {
    setDebts: React.Dispatch<React.SetStateAction<DebtsType[]>>
    baseDebts: DebtsType[];
}
