
const parent  = React.createElement('div', {id: 'parent'}, 
        [React.createElement('div', {id: 'child-one'}, 
        [React.createElement('h1', {id: 'heading'}, 'I am Heading-1 Tag'), React.createElement('h1', {id: 'heading'}, 'I am another Heading-1 Tag')]), 
        React.createElement('div', {id: 'child-one'}, 
        [React.createElement('h1', {id: 'heading'}, 'I am Heading-1 Tag in child container'), React.createElement('h1', {id: 'heading'}, 'I am another Heading-1 Tag in child container')]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)