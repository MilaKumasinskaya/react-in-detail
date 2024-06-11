import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import OnOff from "./components/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffChange, setOnOffChange] = useState<boolean>(false)
    return (
        <div className="App">
            {/*<AppTitle />*/}
            {/*<UncontrolledRating />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed ={false}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<OnOff on={onOffChange} onChange={()=>{setOnOffChange(!onOffChange)}}/>*/}
            <OnOff on={onOffChange} onChange={setOnOffChange}/>
            {/*<UncontrolledOnOff />*/}
        </div>
    );
}

const AppTitle = () => {
    return <>This is APP component</>
}

export default App;
