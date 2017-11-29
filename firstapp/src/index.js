import React from 'react';
import ReactDom from 'react-dom';

class Hello extends React.Component
{
    render()
    {
        return(
            <h1>hello</h1>
        )
    }
}
class Word extends React.Component {
    render() {
        return (
            <h1>hello</h1>
        )
    }
}
class Helloword extends React.Component {
    render() {
        return (
           <section>
               <Hello/>
               <Word/>
           </section>
        )
    }
}
ReactDom.render(<Helloword />, document.getElementById('root'))