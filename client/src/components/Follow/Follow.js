import React, { Component } from 'react';
import './Follow.scss';


class Follow extends Component {
    render() {
        return (
            <div className="Follow">
                <h1>Who To Follow</h1>
                <h1>Joe</h1>
                <input type="submit" placeholder="Follow" name="button-name" className="button-follow" />
                <h1>Alex</h1>
                <input type="submit" placeholder="Follow" name="button-name" className="button-follow" />
                <h1>Gabrielle</h1>
                <input type="submit" placeholder="Follow" name="button-name" className="button-follow" />
                <p>View All</p>
            </div >

        );
    }
}

export default Follow;