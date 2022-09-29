import React from 'react';
import { DebtsColumnProps } from 'components/molecules/DebtsList/DebtsList.data';

export interface ButtonProps extends
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
Partial<DebtsColumnProps> {
    className?: string;
}
