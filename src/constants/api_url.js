const location = "Bogota,co";
const unit = "metric";
const api_key = "97df9b4aba405f11005dc6f873df7030";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
