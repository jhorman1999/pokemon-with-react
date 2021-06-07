import datos from '../data/data.json'
import './listaPokemons.css'

const TargetasPokemon = datos.map((datos) => (
    <div className="targetaPokemon">
        <div className="datos">{datos['#']}  {datos['Name']}</div>
        <img className='imagenLista' src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + datos['#'] + ".png"}></img>
        <div className="type">
            <div className={datos['Type 1']}>
                {datos['Type 1']}
            </div>
            <div className={datos['Type 2']}>
                {datos['Type 2']}
            </div>
            
        </div>
    </div>

))



export default TargetasPokemon