'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
    title: 'Some title',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Jeremy Mark'
    ),
    React.createElement(
        'p',
        null,
        'Age: 34'
    ),
    React.createElement(
        'p',
        null,
        'Location: Dallas'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot)
