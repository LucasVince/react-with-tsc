import { FunctionComponent } from "react"

interface counterProps {
    count:number
}

const Counter: FunctionComponent<counterProps> = ({ count }) => {
    return(
        <div>
            <p>{count}</p>
        </div>
    );
}

export default Counter;