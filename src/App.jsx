import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
import * as starshipService from './services/starshipService';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipService.search('fighter');
      const newStarships = data.results.map((data) => ({
        name: data.name,
        class: data.starship_class,
        manufacturer: data.manufacturer,
        model: data.model,
      }));
      setStarShips(newStarships);
    };
    fetchDefaultData();
  }, []);

  return (
    <>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starShips={starShips} />
    </>
  );
};

export default App;
