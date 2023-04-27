import { createContext, useState } from "react";
import axios from 'axios';
const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    });
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const buscador = (event) => {
        setBusqueda({
            ...busqueda,
            [event.target.name]: event.target.value
        })
    };

    const consultarClima = async (busqueda) => {
        setCargando(true);
        setError(false);
        try {
            const appId = import.meta.env.VITE_API;
            const { ciudad, pais } = busqueda;
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=3&appid=${appId}`;
            const { data } = await axios.get(url)
            const { lat, lon } = data[0];
            const peticion = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const resultado = await axios.get(peticion);
            setResultado(resultado);
            setCargando(false);
        } catch (error) {
            setCargando(false);
            setError(true)
        }
    }
    return (
        <ClimaContext.Provider value={{
            buscador, busqueda, consultarClima, resultado, cargando, error
        }}>
            {children}
        </ClimaContext.Provider>
    )
}
export { ClimaProvider }
export default ClimaContext;