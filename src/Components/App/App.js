import React from 'react'
import './App.css'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Results/Results';

const name=require('@rstacruz/startup-name-generator')

class App extends React.Component{

    state={
        headerText:"Name it",
        headerExpanded:true,
        suggestedNames:[]
    };

    handleInputChange = (InputText) => {
        // this.setState({s})
        
        this.setState({headerExpanded:InputText.length>0?false:true,  suggestedNames:InputText?name(InputText):[]})
    }
    render(){
        return (
        
            <div>
            <Header headTitle={this.state.headerText} headerExpanded={this.state.headerExpanded}/>
            <SearchBox handleInputChange={this.handleInputChange}/>
            <Results suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
    
}

export default App
