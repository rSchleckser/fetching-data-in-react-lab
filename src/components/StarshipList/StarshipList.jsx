import StarshipCard from '../StarshipCard/StarshipCard';
import './StarShipList.css';

const StarshipList = (props) => {
  return (
    <>
      <h2>StarShips</h2>
      <p>Number of results: {props.starShips.length}</p>
      <div className='container'>
        {props.starShips.map((starShip, index) => (
          <StarshipCard key={index} starShip={starShip} />
        ))}
      </div>
    </>
  );
};

export default StarshipList;
