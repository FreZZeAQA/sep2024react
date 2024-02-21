import { useNavigate } from "react-router-dom";
import css from './Episode.module.css'

const Episode = ({ episodeProps }) => {
    const { id, name, episode } = episodeProps;
    const navigate = useNavigate();

    const navigateToCharacters = (episodeId) => {
        navigate(`/characters/${episodeId}`);
    };

    return (
        <div className={css.Block} onClick={() => navigateToCharacters(id)}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {episode}</div>
        </div>
    );
};

export { Episode };
