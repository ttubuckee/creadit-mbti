import React from 'react';
import classNames from 'classnames';
const Loading = (props) => {
    const { text } = props; // props(read-only)
    const [buttonClass, setButtonClass] = React.useState(undefined);
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('button-wrapper', buttonClass)} onPress={type => props.onPress(type)}
        onClick={props.onPress} style={props.style}>
        <div style={{height: '100%', width: '100%', justifySelf: 'center',}}
            onMouseEnter={()=> setButtonClass('question-button-selected')}
            onMouseOut={()=> setButtonClass('question-button-deselected')}>{text}</div>
    </div>)
}

export default Loading;