import { apiRequest } from "./apiClient";

export function getLocalTime(region) {
    return apiRequest(region)
} 

export function getWeather(city, forecast) {
    const config = {"method": "GET"}
    if(forecast) {
        return apiRequest(city, config, forecast)
    } else {
        return apiRequest(city, config)
    }
}