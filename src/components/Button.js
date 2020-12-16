import React from 'react';
import classNames from 'classnames';
const Button = (props) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const { text, type, onHover } = props; // props(read-only)
    const mbtiController = props.onPress;
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('button-wrapper', props.className)} onClick={() => props.onPress(type)} 
            style={props.style} 
            onMouseEnter={props.onMouseEnter !== undefined ? ()=>props.onMouseEnter() : null} 
            onMouseOut={props.onMouseOut !== undefined ?()=>props.onMouseOut() : null}>
        <div className={classNames('button-text')} style={props.textStyle}>{text}</div>
    </div>)
}

export default Button;