import useClima from "../hooks/useClima";
import Loading from "./Loading";
function Resultado() {
    const { resultado, cargando, error } = useClima();
    const { name, main } = resultado.data;
    const kelvin = 273.15;
    return (
        <>
            {cargando ? <Loading /> : error ? <p>No existe esa Ciudad</p> : null}
            <div className="contenedor clima">
                <h2>El clima de {name} es: </h2>
                <p> {parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>
                <div className="temp-min-max">
                    <p>Mínima:  {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span></p>
                    <p>Máxima: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></p>
                </div>
            </div>
        </>

    );
}

export default Resultado;