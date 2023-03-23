import React, { useState } from 'react'

function Counter_object() {
    // call an hook function 
    const [name, setCount] = useState({ firstname: '', lastname: '' });
    return (
        <div>
            <form>
                <input type='text' value={name.firstname} onChange={e => setCount({ ...name, firstname: e.target.value })} />
                <input type='text' value={name.lastname} onChange={e => setCount({ ...name, lastname: e.target.value })} />
                <h1> Your First Name is - {name.firstname}</h1>
                <h1>Your Last Name is - {name.lastname}</h1>
            </form>

        </div>
    )
}

export default Counter_object
