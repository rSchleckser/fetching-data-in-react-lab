import './StarshipSearch.scss';
import { useState } from 'react';

const StarshipSearch = (props) => {
  const [ship, setShip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchData(ship);
    setShip('');
  };

  return (
    <>
      <h1 className='secondaryHeader'>
        {' '}
        <span className='header'>Star Wars </span>API
      </h1>
      <h2 className='search'>Search Star Ships</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='search'
          placeholder='Search for Star Ship'
          id='ship'
          value={ship}
          type='text'
          onChange={(e) => setShip(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </>
  );
};

export default StarshipSearch;
