import axios from 'axios';


export const axiosFetcher = async (url) => {
  return await axios.get(url)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status !== 409) {
        throw error;
        // return {TEST:"TEST"};
      } 
    });
};

export const appendKeyFireData = (fireData) => {
  let res = [];
  const keys = Object.keys(fireData ?? []);
  keys.forEach((key) => {
    res.push({
      id: key,
      ...fireData[key]
    });
  });
  return res;
};