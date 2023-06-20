import React from 'react';
import ListGroup from './ListGroup';

function App() {
  let items = ['Cairo', 'Abuja', 'Newyork', 'Mecca'];
  const handleSelectItem = ({item: string}) => console.log(item);

  return (
    <div>
      <ListGroup items={items} heading={'cities'} onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
