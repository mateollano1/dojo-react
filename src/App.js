import React from 'react';
import Layout from './containers/Layout/layout'
import Cards from './components/Cards/Cards'
import Task from './containers/Tasks/task'

function App() {
  return (
    <div>
      <Layout>
        <Task />
      </Layout>
    </div>
  );
}

export default App;
