import { useEffect, useState } from "react";
import Button from "./components/Button"
import Counter from "./components/Counter"

const App = () => {
  const [count, setCount] = useState<number>(Number(localStorage.getItem('count')) | 0);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const btnOnclickCountPlus = () => {
    setCount(count + 1);
    localStorage.setItem('count', JSON.stringify(count));
  }

  const btnOnclickCountSub = () => {
    setCount(count - 1);
    localStorage.setItem('count', JSON.stringify(count));
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-screen h-screen">
      <Counter count={count}/>
      <div className="flex gap-5">
        <Button theme="dark" onClick={btnOnclickCountSub}>-</Button>
        <Button theme="dark" onClick={btnOnclickCountPlus}>+</Button>
      </div>  
    </div>
  );
}

export default App;