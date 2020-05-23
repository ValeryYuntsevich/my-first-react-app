
const API = 'https://reactjs-cdp.herokuapp.com/movies';

export const getMovies = async () => {
  try {
    const response = await fetch(API);
    const json = await response.json();
    return json;
  } catch (error) {
      return 'Server error';
  }
}

export const getMovieByID = async (id: any) => {
  try {
    const response = await fetch(`${API}/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return 'Server error';
  }
}
