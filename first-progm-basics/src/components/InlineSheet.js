import React from 'react'

const head={
    fontSize: '80px',
    color: 'green'
}
function InlineSheet() {
    return (
        <div>
        <h1 className='error'>Error</h1>
            <h1 style={head}>Inline stylesheets</h1>
        </div>
    )
}

export default InlineSheet
