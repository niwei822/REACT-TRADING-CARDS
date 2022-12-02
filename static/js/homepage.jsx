'use strict';

function Homepage() {
  return <div>
    <p><h2>Hello! Welcome to trading cards!</h2></p>
    <a href="/cards">Click me to see all the cards</a>
    <img src="/static/img/balloonicorn.jpg" />
  </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
