import React from 'react'
import { Link } from "react-router"

class Life extends React.Component{
    render() {
        return (
        	<div>生活
		        <ul>
		          <li><Link to="/life/gg/lifeOne">lifeOne</Link></li>
		          <li><Link to="/life/lifeTwo/ee">lifeTwo</Link></li>
		        </ul>
		        {this.props.children}        	
        	</div>
        )
    }
}
export default Life;