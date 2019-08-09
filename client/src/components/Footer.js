import React , { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
        }
    
    render() {
        return (
            <footer>
                <ul className="footer-links">
                    <li>
                        &copy; {this.state.year} Crystal inc.
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;