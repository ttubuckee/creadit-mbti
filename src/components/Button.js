import React from 'react';
import classNames from 'classnames';
import AppContext from '../contexts/AppContext';
const Button = (props) => {
    const { screenWidth } = React.useContext(AppContext);
    /* const [isHovered, setIsHovered] = React.useState(false);
    const [initCount, setInitCount] = React.useState(0);
    const initMouseOut = () => {
        setInitCount(initCount+1);
        return initCount === 1;
    } */
    const { text, type, onHover } = props; // props(read-only)
    const mbtiController = props.onPress;
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('button-wrapper', props.className)} style={props.style}>
        <div className={classNames('button-text')} style={props.textStyle} onClick={() => {
            screenWidth >= 769 && props.onMouseEnter !== undefined && props.onMouseEnter()
            props.onPress(type)}}
            onMouseEnter={screenWidth >= 769 && props.onMouseEnter !== undefined ? ()=>props.onMouseEnter() : null} onMouseOut={props.onMouseOut !== undefined ?()=>props.onMouseOut() : null}>{text}</div>
    </div>)
}

export default Button;