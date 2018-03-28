import React from 'react';
import Tree from 'react-d3-tree';
import MyTree from './myTree'
//import json from './json';
const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        children: [
          {
            name: 'Level 3: A',
            attributes: {
              keyA: 'val A',
              keyB: 'val B',
              keyC: 'val C',
            },
          },
          {
            name: 'Level 2: B',
          },
        ],
      },
      {
        name: 'Level 2: B',
      },

    ],
  },
];
 
class App extends React.Component {
  render() {
    return (
     
      <div id="treeWrapper" style={{padding:'100px', width: '50em', height: '20em'}}>
 
        <Tree data={myTreeData} />

        <MyTree  treeData={myTreeData} />
 
      </div>
    );
  }
}
export default App;