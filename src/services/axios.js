import axios from 'axios';

export default axios.create({
  baseURL: 'https://optical-manager-backend.herokuapp.com',
});
