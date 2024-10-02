import axios from "axios";

export const useAxios = () => {
  const request = (props) => {
    const { url, body, method = "Get" } = props;

    return axios({
      url: `http://localhost:5000/${url}`,
      method,
      data: body,
    });
  };

  return request;
};
