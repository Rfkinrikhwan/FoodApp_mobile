import {useEffect, useState} from 'react';
import Yelp from '../Api/Yelp';

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await Yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResult(response.data.businesses);
      setIsLoading(false);
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  };

  useEffect(() => {
    searchApi('burger');
  }, []);

  return [searchApi, result, errorMessage, isLoading];
};
