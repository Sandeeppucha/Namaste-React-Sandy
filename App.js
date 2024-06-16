import React from 'react'
import ReactDOM from 'react-dom/client'

const Heading = () => <h1>This is a Functional Arrow Component</h1>

const Heading2 = () => (
    <div>
        <Heading />
        <h1>This is a return FC</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Heading2/>);