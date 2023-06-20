//ListGroup Function

import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"

interface Props {
  items: string[];
  heading: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      {items.length === 0 ? <h1>No list item</h1> : <h1>{heading}</h1>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={()=>{setSelectedItem(index); onSelectItem(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
