import './StarshipCard.scss';

const StarshipCard = (props) => {
  return (
    <>
      <div className='card'>
        <h3 className='title'>{props.starShip.name}</h3>
        <p>Class: {props.starShip.class}</p>
        <p>Manufacturer: {props.starShip.manufacturer}</p>
        <p>Model: {props.starShip.model}</p>
      </div>
    </>
  );
};

export default StarshipCard;
