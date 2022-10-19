import React,{useState} from 'react';


const AppOne = () => {
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        setCount(count + 1);
    }
    return ( 
        <button type='button' onClick={handleClick}>
            count: {count}
        </button>
     );
}
 
export default AppOne;