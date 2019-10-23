import React from 'react';

const List = ({ list, onDelete }) => {

  const items = list.map(value => (
    (<li key={value.id}>
        {value.title}
        <button type="button" onClick={onDelete(value.id)}>
          X
        </button>
    </li>)
  ));

  return <ul>{items}</ul>;
};

export default List
