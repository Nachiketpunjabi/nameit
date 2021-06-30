import React from 'react'
import './Results.css'
import NameCard from '../NameCard/NameCard'
const Results = (props) => {

    const suggestNameJSX=props.suggestedNames.map(suggestedName=>{
        return <NameCard suggestedName={suggestedName} key={suggestedName}/>
    })

    return (
        <div className="result-container">
        
            <p>{suggestNameJSX}</p>
        </div>
    )
}

export default Results
