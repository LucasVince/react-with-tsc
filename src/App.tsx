import { useState } from "react";
import Button from "./components/Button"
import Counter from "./components/Counter"

const App = () => {
  const [count, setCount] = useState<number>(0);

  const btnOnclickCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-screen h-screen">
      <Counter count={count}/>  
      <Button theme="dark" onClick={btnOnclickCount}>Click me</Button>
    </div>
  );
}

export default App;