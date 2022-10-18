import axios from 'axios';


export const axiosFetcher = async (url) => {
  return await axios.get(url)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};