import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';

const ROOT_URL = `http://localhost:8000/products`;

export function fetchProducts() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}