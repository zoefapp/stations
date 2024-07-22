import * as React from 'react'
import ReactDOM from 'react-dom/client';

import {get} from 'stations-data/web'

// App Component
const App = () => (<div>
  <h1>Hello, ESBUILD!</h1>
  <Panel />
  <Panel />
</div>)

// Panel Component
const Panel = () => <h2>I'm a Panel</h2>

console.log(get())

// Mount component 
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);