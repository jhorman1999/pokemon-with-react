import datos from '../data/data.json'
import './listaPokemons.css'

const TargetasPokemon =datos.map((datos) => (
    <div className="targetaPokemon">
    <div className="datos">{datos['#']}  {datos['Name']}</div>

    <img className='imagenLista'src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+datos['#']+".png"}></img>
    <br></br>
    </div>
))

export default TargetasPokemon