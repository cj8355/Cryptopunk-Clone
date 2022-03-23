import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xB6183ec9664feD2901B2D17c30ac324Fe8e63192&order_direction=asc&offset=0&limit=20'
      )
        console.log(openSeaData.data.assets)
        setPunkListData(openSeaData.data.assets)
    }

    return getMyNfts();
  }, [])


  return (
    <div className='app'> 
      <Header />
      {/* <CollectionCard id={0} name={'Bandana punk'} traits={[{'value': 7}]} image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'/>  */}
      {
        punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
        )
      }
      
    </div>
    
  );
}

export default App;
