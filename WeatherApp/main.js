const getWeatherData = async () => {
  const API_KEY = "b982314ad4124c6ea4e75219241912";
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Dubai`;

  try {
    const response = await fetch(API_URL);
    if (!response) {
      return null;
    }

    const data = await response.json();

    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

getWeatherData();
