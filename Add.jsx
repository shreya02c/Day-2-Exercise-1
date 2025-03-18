import React from 'react';

function Summary({ text }) {
    return null;
  }
  
  function App() {
    return (
      <div id="app" data-testid="app">
        <Summary text="Fragments help you avoid unnecessary HTML elements." />
      </div>
    );
  }
  
  export default App;
  