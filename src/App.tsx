import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div className="App">
            <AppTitle />
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed ={false}/>
            <Rating value={4}/>
        </div>
    );
}
const AppTitle = () => {
    return <>This is APP component</>
}

export default App;
