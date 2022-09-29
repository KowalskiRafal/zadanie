import React, { useState, useEffect } from 'react';
import Button from 'components/atoms/Button';
import TableBody from 'components/atoms/TableBody/TableBody';
import { DebtsType, DebtsListProps } from './DebtsList.models.d';
import { DebtsListData, COLUMNS_LABELS } from './DebtsList.data';

const DebtsList = ({ debts, error: err }: DebtsListProps) => {
  const [isSorted, setIsSorted] = useState(false);
  const [sortedList, setSortedList] = useState<DebtsType[]>(debts);
  const { columns } = DebtsListData;

  useEffect(() => {
    setSortedList(debts);
  }, [debts]);

  const sorting = (sortField: keyof DebtsType) => {
    const sorted = sortedList.sort((a: DebtsType, b: DebtsType) => {
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      if (a[sortField] > b[sortField]) {
        return 1;
      }
      return 0;
    });

    setIsSorted(true);
    if (sorted === sortedList && isSorted === true) {
      sorted.sort((a: DebtsType, b: DebtsType) => {
        if (a[sortField] < b[sortField]) {
          return 1;
        }
        if (a[sortField] > b[sortField]) {
          return -1;
        }
        return 0;
      });
      setIsSorted(false);
      setSortedList([...sorted]);
    }
  };

  const handleSort = (label: COLUMNS_LABELS) => {
    if (label === COLUMNS_LABELS.DLUZNIK) {
      sorting('Name');
    }
    if (label === COLUMNS_LABELS.NIP) {
      sorting('NIP');
    }
    if (label === COLUMNS_LABELS.KWOTA) {
      sorting('Value');
    }
    if (label === COLUMNS_LABELS.DATA) {
      sorting('Date');
    }
  };

  return (
    <table className='debts-list' >
      <thead className='debts-list__body'>
        <tr className='debts-list__buttons'>
          {columns?.map(({ label, variant }) => <td key={label}>
            <Button {...{ label, variant }} key={label} onClick={() => handleSort(label as COLUMNS_LABELS)}/>
          </td>)}
        </tr>
        </thead>
            { sortedList ? <TableBody debts={sortedList} error={err}/> : null}
    </table>
  );
};

export default DebtsList;
