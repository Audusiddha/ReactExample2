import React, { useContext } from 'react';

// Step 1: Create a context
const MyContext = React.createContext();

// Step 2: Provide a Context Value
function App1() {
  return (
    <MyContext.Provider value="Hello from Context!">
      <ComponentA />
    </MyContext.Provider>
  );
}

// Step 3: Consume the Context Value
function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  const contextValue = useContext(MyContext);
  return (
    <div>
      <h3>Component B</h3>
      <p>Context Value: {contextValue}</p>
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  const contextValue = useContext(MyContext);
  return (
    <div>
      <h4>Component C</h4>
      <p>Context Value: {contextValue}</p>
    </div>
  );
}

export default App1;
