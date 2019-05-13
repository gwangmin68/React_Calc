import React from 'react';

const Num2 = (props) => (
    <div>
        <input value={props.num2} onChange={props.handle}/>
    </div>
);

export default Num2;