import React from 'react';
import './Bar.css';

export default class Bar extends React.Component {
    render() {
        return (
            <div className="bar">
                {this.props.bar}
            </div>
        );
    }
};