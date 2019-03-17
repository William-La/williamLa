import React from "react";
import resume from "../assets/pdf/La-William.pdf"
import Route from "react-router"


export default () => {

    return (
        <Route path='resume' component={() => { window.location = 'https://drive.google.com/file/d/1vvc8YrWYwDYKehwFZxrndCssV4Bp4NLQ/view?usp=sharing'; return null;} }/>
    );
}