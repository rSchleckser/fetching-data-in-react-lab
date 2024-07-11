import StarshipCard from '../StarshipCard/StarshipCard';
import './StarShipList.scss';

const StarshipList = (props) => {
  return (
    <div className='list'>
      <h1>StarShips</h1>
      <h2>Number of results: {props.starShips.length}</h2>
      <div className='container'>
        {props.starShips.map((starShip, index) => (
          <StarshipCard key={index} starShip={starShip} />
        ))}
      </div>
    </div>
  );
};

export default StarshipList;
