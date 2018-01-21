import React, { Component } from 'react';
import BaseLayout from '../BaseLayout';
import ParentComponent from '../ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout >
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
