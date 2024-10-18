import Carro from './Carro';

function Garagem() {

    const carro = [
        { id: 1, marca: "BMW" },
        { id: 2, marca: "Porsche" },
        { id: 3, marca: "Lamborguini" },
        { id: 4, marca: "Ferrari" },
    ];

    return (
        <>
            <h1>
                Os carros que tenho na minha garagem são: 
                
            </h1>
                <ul>
                    {carro.map((carro) => (
                        <Carro key={carro.id} marca={carro.marca} />
                    ))}
                </ul>
''
        </>
    )
}

export default Garagem;
