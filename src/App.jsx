import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import SecondPracticeCount from './SecondPracticeCount';
import Users from './Users';

function App() {
  function handler () {
    alert('button 1  clicked')
  }

const arrow  = num => {
  alert(num + 20 + num)
};

const markList = () => {
  let math = [89, 38, 68, 74, 34];
  return math;
}

let [a, b, d, e, f] = markList();
  const x = b;
  return (
    <>
      <h2>React core concept</h2>

      <Friends></Friends>

      <Users></Users>

      <SecondPracticeCount></SecondPracticeCount>

      <Counter></Counter>


      {/* type of event handler  */}
      <button onClick={handler}>Button 1</button>

      <button onClick={() => {
        alert('It is button 2')
      }}>Button 1</button>

      <button onClick={()=> arrow(20)}>Paramitter function </button>
    </>
  )
}

export default App
