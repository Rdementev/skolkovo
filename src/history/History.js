import React from 'react'
import GifElement from "./GifElement";



const History = (props) => {
    debugger
   let gifElements = props.history.map(g =><GifElement key={g.id} img={g.history} DeleteCurrentMedia={props.DeleteCurrentMedia}/>);
    return (<>
            {gifElements}
            </>)
};

export default History;