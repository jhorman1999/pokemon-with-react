import { useParams} from 'react-router-dom';

const InfoPokemon = () => {
    const namePokemon = useParams().name;
    
    return (
        <div>{namePokemon }</div>
    )

}



export default InfoPokemon