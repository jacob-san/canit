import axios from 'axios';
import { SET_AUTH } from './types';
import config from '../utils/config';

export const login = ({ userName, password }) => async dispatch => {
  const res = await axios.post(`${config.API_URL}/api/login`, {
    userName,
    password
  });
  console.log({ res });
  dispatch({ type: SET_AUTH, payload: res.data });
  return res.data;
};
