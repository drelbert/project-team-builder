import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import TeamBuilder from './containers/TeamBuilder/TeamBuilder';

class App extends Component {
  render() {
   return (
    <div>
      <Layout>
        <TeamBuilder />
      </Layout>
    </div>
  );
 }
}

export default App;
