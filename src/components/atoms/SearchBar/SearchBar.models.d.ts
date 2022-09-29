import { ButtonProps } from 'components/atoms/Button';

export type SearchBarType = {
    button?: ButtonProps;
    searchInputValue:string;
    setSearchInputValue?: (e) => void;
    searchDebts?: (e) => void;
}
