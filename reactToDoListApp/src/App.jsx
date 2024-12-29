import './App.css';

function MyComponent() {
  return <h1>Hello!</h1>
}

function App() {
  const handleClick= () => {
    alert('Hello!');
    console.log(e);
  }

  return (
    <div>
      <button onClick={handleClick}>我是按鈕</button>
      <MyComponent/>
    </div>
  )
}

export default App
