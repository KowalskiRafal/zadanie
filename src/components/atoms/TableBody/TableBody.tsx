import React from 'react';
import { DebtsListProps } from 'components/molecules/DebtsList/DebtsList.models';
import { getFormatedDate } from 'utils/getFormatedDate';

const TableBody = ({ debts }: DebtsListProps) => (
    <tbody>
    {debts.map(({
      Name, NIP, Value, Date, Id,
    }) => (
        <tr className='debts-list__debts' key={Id}>
          <td>{Name}</td>
          <td>{NIP}</td>
          <td>{Value}</td>
          <td>{getFormatedDate(Date!)}</td>
        </tr>
    ))}
        </tbody>
);

export default TableBody;
