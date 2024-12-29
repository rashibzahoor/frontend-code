import logo from './logo.svg';
import './App.css';

function App() {
const [color,setcolor]=useState("olive")
function colorchange(){
  setcolor(color)
}

  return (
<div>
  <h1>A background Color Changer</h1>
  <button onClick={()=>colorchange('red')}>Red</button>
  <button onClick={()=>colorchange('green')}>Green</button>

</div>
  );
}

export default App;
