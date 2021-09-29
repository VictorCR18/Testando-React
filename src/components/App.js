import React from 'react';
import Post from './Post';
import Routes from './routes';

export default class app extends React.Component {
    render() {
        return (
        <div>
            <Routes/>
            <h1>Hello World</h1> 
            <Post title="Aprendendo React JS"/>
            <Post title="Testando"/>
            <Post title="Aaaaaaaaaaaaaaaaaa"/>
        </div>
        );
    }
}