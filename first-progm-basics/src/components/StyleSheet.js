import React from 'react'
import './Style.css'
function StyleSheet(props) {
var className= props.primary? 'primary':''
    return (
        <div className={`${className} font-size`}>
            <h1>My Stylesheets</h1>
        </div>
    )
}

export default StyleSheet
