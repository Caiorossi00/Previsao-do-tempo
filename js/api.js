const keyAPI = '574EJFWH9L9WS5M5KPQLNWMDG';
const city = 'Guarulhos';
const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${keyAPI}&contentType=json`;

const getWeatherData = async () => fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

// Exemplo de uso
getWeatherData();
