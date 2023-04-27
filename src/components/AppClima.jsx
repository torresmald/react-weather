import Form from "./Form";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
function AppClima() {
    const { resultado } = useClima();
    return (
        <main className="dos-columnas">
            <Form />
            {resultado?.data?.name && <Resultado />}

        </main>
    );
}

export default AppClima;