import axios from "axios";

export const apiRequest = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
