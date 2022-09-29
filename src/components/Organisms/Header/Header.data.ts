import { COLUMNS_LABELS } from 'components/molecules/DebtsList/DebtsList.data';
import { HeaderProps } from './Header.models.d';

export const headerData: Omit<HeaderProps, 'setDebts' | 'baseDebts'> = {
  searchBtn: {
    label: COLUMNS_LABELS.SZUKAJ,
    variant: 'search',
  },
  header: {
    label: 'PODAJ NIP LUB NAZWĘ DŁUŻNIKA',
  },
};
