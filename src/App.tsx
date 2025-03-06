import Button from "./components/button"

const App = () => {
  return (
    <div> 
      <Button theme="dark" onClick={() => alert('bosta')}>Enviar</Button>
    </div>
  );
}

export default App;