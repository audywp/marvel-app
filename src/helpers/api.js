const request = async (endpoint, method = "GET", options = {}) => {
  let results = {};

  try {
    const baseUrl = process.env.REACT_APP_MARVEL_BASE_URL;

    const url = `${baseUrl}${endpoint}`;

    const req = await fetch(url, {
      method,
      body: options.body,
      headers: options.headers,
    });
    const res = await req.json();

    results = { ...res, complete: true };

    return results;
  } catch (error) {
    results = {
      error,
      complete: false,
    };
    console.log(error);
    return results;
  }
};

export default request;
