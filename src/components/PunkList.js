import React from 'react';
import CollectionCard from '../components/CollectionCard';
import './PunkList.css';

const PunkList = ({ punkListData, setSelectedPunk }) => {
    
  return (
    <div className='punkList'>
        {punkListData.map(punk => (
            <div onClick={() => setSelectedPunk(punk.token_id)  } key={punk.token_id}>
                {console.log(punk)}
                {console.log(punk.token_id)}
                <CollectionCard 
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_preview_url}
                />
                </div>
        ))}

    </div>
  )
}

export default PunkList;