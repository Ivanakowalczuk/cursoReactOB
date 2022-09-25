import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetinF = (props) => {
    
    const [age, setage] = useState(39);

    const birthday= () =>{
        setage(age + 1);
    }

    return (
        <div>
            <h1>¡Hola {props.name} desde componente funcional!</h1>
            <h2>Tu edad es de: {age}</h2>
            <div>
                <button onClick={birthday}>
                        Cumplir años
                </button>
            </div> 

        </div>
    );
};


GreetinF.propTypes = {
name: PropTypes.string
};


export default GreetinF;