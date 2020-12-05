import React from 'react';
import classNames from 'classnames';
import '../css/result.css';

const Result = (props) => {
    const { text } = props; // props(read-only)
    React.useEffect(() => {
        //setTest(true);
    }, [])

    return ( <
        div className = { "div-result-wrapper" } >
        <
        div className = { "div-project-title" } > < /div> <
        div className = { "div-result-type" } > < /div> <
        img className = { "img-result-type" } > < /img> <
        div className = { "div-result-des-wrapper" } >
        <
        p className = { "p-result-des" } > < /p> <
        /div> <
        div className = { "div-combinations-wrapper" } >
        <
        div className = { "div-best-combi-wrapper" } >
        <
        span > 최고조합 < /span> <
        img className = { "img-best-combi" } > < /img> <
        span > 유형이름 < /span> <
        /div> <
        div className = { "div-worst-combi-wrapper" } >
        <
        span > 최악조합 < /span> <
        img className = { "img-worst-combi" } > < /img> <
        span > 유형이름 < /span> <
        /div> <
        /div> <
        div className = { "div-share" } > < /div> <
        button className = { "btn-retry" } > < /button> <
        img className = { "img-banner" } > < /img> <
        div className = { "div-notion-link" } > < /div> <
        /div>
    )
}

export default Result;