import React from 'react';
import {withRouter} from "react-router-dom";

const RecursiveColorSwatch = ({match}) => {

    const color = match.params.color;
    const text = match.params.text;

    const style={
        backgroundColor: color,
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        margin:15
    };

    return (
        <div style={style}>
            <h2>{text}</h2>
            <h3>{match.path}</h3>

        </div>
    );

};

export default withRouter(RecursiveColorSwatch);