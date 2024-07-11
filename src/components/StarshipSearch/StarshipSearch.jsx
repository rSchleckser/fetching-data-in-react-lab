import './StarshipSearch.css';
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
      <h1>Star Wars API</h1>
      <h2 className='search'>Search</h2>
      <form onSubmit={handleSubmit}>
        <label className='search' htmlFor='ship'>
          Search Term
        </label>
        <input
          className='search'
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
