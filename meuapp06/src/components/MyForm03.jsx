import { useState } from "react";

function MyForm03() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`O nome digitado foi: ${name}`)
    }
    return (<>

        <form onSubmit={handleSubmit}>
            <label htmlFor="label">
                Insira o seu Nome :
                <input type="text" name="nome" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </>
    )
}
export default MyForm03