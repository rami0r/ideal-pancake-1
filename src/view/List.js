import React from 'react';

const List = ({ list, onDelete }) => {

  const items = list.map(value => (
    (<li key={value.id} className="list-item">
        {value.title}
        <button type="button" onClick={onDelete(value.id)}>
          x
        </button>
    </li>)
  ));

  return <ul>{items}</ul>;
};

export default List
