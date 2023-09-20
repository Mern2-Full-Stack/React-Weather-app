import axios from 'axios'
import React,{useMemo,useState} from 'react';
import {useQuery} from 'react-query'

const WeatherComponent = () => {
    const [cityName,setcityName]=useState('')
    const [WeatherData,setWeatherData]=useState({})
    const [latitude,setLatitude]=useState(0)
    const [longitude,setLongitude]=useState(0)

    const API_KEY = '7803430f2596470aa0c124448231209'


    const getCurrentWeather = async({queryKey}) => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key`)
        console.log(response.data)
    }
}
export default WeatherComponent