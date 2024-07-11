const BASE_URL = 'https://swapi.dev/api/';

const search = async (ship) => {
  try {
    const res = await fetch(BASE_URL + 'starships/?search=' + ship); 
    const data = await res.json();
    console.log('Data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { search };
