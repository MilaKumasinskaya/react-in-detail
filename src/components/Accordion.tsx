// @flow
import * as React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
};
export const Accordion = (props: AccordionPropsType) => {
    if (props.collapsed){
        return (<>
                <AccordionTitle title={props.titleValue}/>
            </>
        )
    }
    else {
        return (<>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody />
            </>
        )
    }

};
type AccordionTitlePropsType = {
    title:string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
            <h3>{props.title}</h3>
    );
};
type AccordionBodyPropsType = {

}
const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    );
};