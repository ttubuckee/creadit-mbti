import React from 'react';
import classNames from 'classnames';
import Button from './Button';
import ProgressBar from './ProgressBar';
import { getMBTIOptions } from '../modules/GeneralFunction';

const QuestionBody = (props) => {
    //const { options } = props; // props(read-only)
    const LAST_PAGE_IDX = props.lastPageIdx;
    const [hoveredIdx, setHoveredIdx] = React.useState(undefined);
    const [buttonClass, setButtonClass] = React.useState(undefined);
    const options = getMBTIOptions()[props.pageIdx-1];
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    const bottom_wrapper_style = {
        'width':"100%",
        'display':'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
    }
    const wrapperStyle = {
        "width": "100%",
        "height": "8px",
        "margin": "10px auto",
        "padding": "0px",
        "backgroundColor": "#EAEAEA",
    }
    return(
    <div className={classNames("bottom-wrapper")} style={bottom_wrapper_style}>
        <div className={classNames('question-body-wrapper')} style={props.pageIdx > 0 && props.pageIdx <= LAST_PAGE_IDX-2 ? {height: 291.4} : {}}>
            {options.map((option, idx) => 
                <Button
                    className={idx === hoveredIdx && classNames(buttonClass)}
                    key={idx} 
                    type={option.type} 
                    text={option.text} 
                    onPress={type => props.onPress(type)}
                    onMouseEnter={()=>{ 
                        setButtonClass('question-button-selected') 
                        setHoveredIdx(idx)
                    }}
                    textStyle={{fontSize: 13.3}}
                    onMouseOut={()=> setButtonClass('question-button-deselected')}
                    style={{marginTop:15, marginBottom:15, height:50, padding: '0px 10px'}}/>)}
        </div>
        <span style={{fontSize:"18px",fontWeight:"bold", textAlign:"right", display:"block", marginTop:"56px", marginRight:"10px", alignSelf:'flex-end'}}>{props.pageIdx}/{13}</span>
        <ProgressBar wrapperStyle={wrapperStyle} progress={props.pageIdx} questions_len={13}/>
    </div>
    )
}

export default QuestionBody;