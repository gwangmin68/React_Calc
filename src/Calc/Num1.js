import React from 'react';

const Num1 = (props) => (
    <div>
        <input value={props.num1} onChange={props.handle}/>
    </div>
);

export default Num1;