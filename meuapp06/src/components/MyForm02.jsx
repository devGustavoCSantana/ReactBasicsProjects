import { useState } from "react";

function MyForm02() {

    const [nome, setNome] = useState("")
    return (
        <>
            <form>
                <label htmlFor="label">
                    Digite seu primeiro nome:
                    <input type="text" nome="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
            </form>
        </>
    );
}
export default MyForm02