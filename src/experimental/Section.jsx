import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles';
import { compose } from 'recompose';

// const withCustomStyles = styles => Tag => {

//     class StyledTag {

//         render(){
//             return
//              <Tag styles={styles}/>
//         }
//     }

//     return compose(
//         withStyles
//     )(StyledTag);
// }

// const StyledTag = ({styles, parts}) => {


// }

const Section = ({parts}) => {
    // console.log('parts: ', parts)
    return parts.map( (element, index) => {
        const Tag = element.tag
        const props = {element};
        // const { className } = element;
        // console.log('className:', className)
        // console.log('element props:', props)
        console.log('Tag:', Tag)
        console.log('element.parts', element.parts)
        console.log('full element', element);
// const theParts = element.parts;
        return (
            element.parts ?
                <Section key={index} parts={element.parts || {}} >...props</Section> :
                <Tag key={index} {...props}>{element.text}</Tag>
        )
    })
}

export default Section;
// export { withCustomStyles }