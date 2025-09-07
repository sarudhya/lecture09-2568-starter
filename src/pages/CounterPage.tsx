import { useState } from "react";

export default function CounterPage() {

  const [counter,setCounter] = useState(0);
  // let c = 0;
  const addCounter = () => { //function เพื่อให้ด฿การเปลี่ยนแปลง
    setCounter(counter +1);
    // c++; ไม่มีการ update จึงไม่ได้เกิดอะไรขึ้น
  };
  
  return (
          
    <div className="container text-center">
      <h2>Counter Page</h2>
      <p>Counter: {counter}</p>
      <button onClick={addCounter}>Increase</button>
      {/* <button onClick={() => setCounter(counter +1)}>Increase</button> */}
    </div>
         
  );
}
