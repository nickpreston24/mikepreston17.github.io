import React from 'react';
// import withStyles from '@material-ui/core/styles';
// import { compose } from 'recompose';

const Section = ({parts}) => {
    console.log("parts: ", parts);
    return parts.map( (element, index) => {
        const Tag = element.tag
        const props = {element};
        return (
            element.parts ?  <Section key={index} parts={element.parts || {}} >...props</Section>
                : <Tag key={index} {...props}>{element.text}</Tag>
        )
    })
}

export default Section;

const AirtableSection = (props) => {
    console.log('mah porps', props);
    return <div>Blank div is blank</div>
    // return fields.map( (element, index) => {
    //     console.log("element: ", element);
    // });

};

export {
    AirtableSection
}
