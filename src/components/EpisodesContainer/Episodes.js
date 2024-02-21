import React, { useEffect, useState } from 'react';
import { rickAndMortyEpisodesService } from "../../services/rickAndMortyEpisodesService";
import { Episode } from "./Episode";
import css from './Episodes.module.css'
import { useSearchParams } from "react-router-dom";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [query,setQuery] = useSearchParams({page:'1'});
    const [prevNext, setPrevNext] = useState({prev:null , next:null})



    useEffect(() => {
        rickAndMortyEpisodesService.getAll({ page: query.get('page') }).then(({ data }) => {
            setEpisodes(data.results);
            setPrevNext({ prev: data.prev, next: data.next });
        });
    }, [query.get('page')]);


    const prev = () => {
      setQuery(prev=>{
          prev.set('page',(+prev.get('page')-1).toString())
          return prev
      })
    }
    
    const next = () => {
        setQuery(prev=>{
            prev.set('page',(+prev.get('page')+1).toString())
            return prev
        })
    }

    return (
        <div className={css.episodesTable}>
            {episodes.map(data => (
                <div className={css.episodeItem} key={data.id}>
                    <Episode episodeProps={data} />
                </div>
            ))}
            <button disabled={!prevNext.prev} onClick={prev}>Previous Page</button>
            <button disabled={!prevNext.next} onClick={next}>Next Page</button>
        </div>
    );
};

export { Episodes };
