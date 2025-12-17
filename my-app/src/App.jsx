import TreeCanvas from './Components/TreeCanvas'
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <ReactFlowProvider>
      <TreeCanvas />
    </ReactFlowProvider>
    
    
  )
}

export default App;
