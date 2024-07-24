import React, { useState } from 'react';
import Store from './Store';
import { Address, Restaurant } from './restaurant';
import BestMenu from './BestMenu';

let data: Restaurant = {
  name: '누나네 식당',
  category: 'western',
  address: {
    city: 'incheon',
    detail: 'somewhere',
    zipCode: 1234,
  },
  menu: [
    { name: 'rose pasta', price: 20000, category: 'PASTA' },
    { name: 'garlic pasta', price: 15000, category: 'PASTA' },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };
  const showBestMenuName = (name: string) => {
    return name;
  };
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu
        name="peperoniPizza"
        category="pizza"
        
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
