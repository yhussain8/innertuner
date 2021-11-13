import {Component} from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1>INNERTUNER</h1>
                <h1>HOME PAGE</h1>
                <h3>Logged in as {this.props.user.name}</h3>
                <button onClick={this.props.logOutUser}>LOG OUT</button>
            </div>
        )
    }
}