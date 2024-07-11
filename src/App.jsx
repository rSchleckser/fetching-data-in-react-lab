import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
import * as starshipService from './services/starshipService';
import { useState } from 'react';

const App = () => {
  const [starShips, setStarShips] = useState([]);

  const fetchData = async (ship) => {
    const data = await starshipService.search(ship);
    if (data.results) {
      const newStarships = data.results.map((ship) => ({
        name: ship.name,
        class: ship.starship_class,
        manufacturer: ship.manufacturer,
        model: ship.model,
      }));
      setStarShips(newStarships);
    }
  };

  return (
    <>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starShips={starShips} />
    </>
  );
};

export default App;
