import React from 'react'


function DropdownItem({ name, handleOrder }) {

    return (
        <li >
            <div >
                <span onClick={() => handleOrder({ name })}>{name}</span>
            </div>

        </li >
    )
}
export default DropdownItem