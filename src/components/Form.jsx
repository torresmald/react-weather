import { useState } from 'react';
import useClima from '../hooks/useClima';
function Form() {
    const { busqueda, buscador, consultarClima } = useClima();
    const { ciudad, pais } = busqueda;
    const [alerta, setAlerta] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son Obligatorios');
            return
        }
        consultarClima(busqueda);
        setAlerta('');
    }
    return (
        <div className="contenedor">
            {alerta && <p>{alerta}</p>}
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad" >Ciudad</label>
                    <input type="text" id="ciudad" name="ciudad" onChange={buscador} value={ciudad} />
                </div>
                <div className="campo">
                    <label htmlFor="pais" >Pais</label>
                    <select id="pais" name="pais" onChange={buscador} value={pais}>
                        <option value="">--Selecciona tu País</option>
                        <option value="ES">Spain</option>
                        <option value="US">USA</option>
                        <option value="FR">France</option>
                        <option value="PT">Portugal</option>
                        <option value="GB">United Kingdom</option>
                        <option value="IT">Italy</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <input type="submit" value='Clima' />
            </form>
        </div>
    );
}

export default Form;