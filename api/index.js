import axios from "axios";

export const miserver = ({method, url, data,}) => {
  return axios({
    method,
    baseURL: 'http://18.206.223.131/api',
    url,
    data,
  })
}