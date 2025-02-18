export const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const getPlayer = async (url, apiKey) => {
  try {
    const response = await fetch(url, { headers: { Authorization: apiKey } });
    if (response.ok) return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

