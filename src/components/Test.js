import React from 'react';

const Test = (props) => {
    const [ test, setTest ] = React.useState(false);
    const { testParams } = props;
    console.log('test', test);
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return (
    <a href={testParams.testLink}>
        {testParams.testText}    
    </a>)
}

export default Test;