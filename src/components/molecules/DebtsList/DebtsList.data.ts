export enum COLUMNS_LABELS {
  DLUZNIK = 'DŁUŻNIK',
  NIP = 'NIP',
  KWOTA = 'KWOTA ZADŁUŻENIA',
  DATA = 'DATA POWSTANIA ZADŁUŻENIA',
  SZUKAJ = 'SZUKAJ'
}

export interface DebtsColumnProps {
 label: COLUMNS_LABELS | string;
 variant: 'search' | 'sort';
}

interface ColumnProps {
  columns: DebtsColumnProps[];
}

export const DebtsListData: ColumnProps = {
  columns: [
    {
      label: COLUMNS_LABELS.DLUZNIK,
      variant: 'sort',
    },
    {
      label: COLUMNS_LABELS.NIP,
      variant: 'sort',
    },
    {
      label: COLUMNS_LABELS.KWOTA,
      variant: 'sort',
    },
    {
      label: COLUMNS_LABELS.DATA,
      variant: 'sort',
    },
  ],
};
