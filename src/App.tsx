import Button from "./components/button"

const App = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen"> 
      <Button theme="dark" onClick={() => alert('Clicked!!!!')}>Click me</Button>
    </div>
  );
}

export default App;