console.log('App.js is running');

// JSX - JavaScript XML

var app = {
    title: 'Some title',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two']
}

var template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>    
);

var templateTwo = (
    <div>
        <h1>Jeremy Mark</h1>
        <p>Age: 34</p>
        <p>Location: Dallas</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)
// ReactDOM.render(templateTwo, appRoot)