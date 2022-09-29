import React, { useEffect, useState } from 'react';
import Header from './components/Organisms/Header';
import './styles/style.scss';
import { headerData } from './components/Organisms/Header/Header.data';
import DebtsList from './components/molecules/DebtsList/DebtsList';
import { DebtsType } from './components/molecules/DebtsList';
import DebtsSearch from './components/molecules/DebtsSearch';

const App = () => {
  const [debts, setDebts] = useState<DebtsType[]>([]);
  const [baseDebts, setBaseDebts] = useState<DebtsType[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts')
      .then((response) => response.json())
      .then((response:DebtsType[]) => {
        setDebts(response?.sort((a:DebtsType, b:DebtsType) => a.Name.localeCompare(b.Name)));
        setBaseDebts(response?.sort((a:DebtsType, b:DebtsType) => a.Name.localeCompare(b.Name)));
        setError(null);
      })
      .catch(setError);
  }, []);
  return (
<div>
 <Header {...headerData} setDebts={setDebts} baseDebts={baseDebts}/>
 {debts.length ? <DebtsList {...{ debts, error }} /> : null}
    </div>

  );
};
export default App;
