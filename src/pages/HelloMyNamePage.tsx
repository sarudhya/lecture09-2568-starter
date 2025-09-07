import { useState } from "react";

export default function HelloMyNamePage() {
  const [name,setName] =  useState("");
  const [result,setResult] = useState("Please insert your name");
  const [isGreet,setIsGreet] = useState(false);

  const nameInput = (event:any) => {
    setName(event.target.value); //เอาไว้เก็บ event ที่เกิดขึ้นที่เราพิมพ์
  }
  const greetBtn = () => {
    if(name == "") {
      setResult("Please insert your name");
      setIsGreet(false);
    }else{
      setResult(`OMG!!!! ${name} ADAdasdarsadasHIIIIIIIII !!!`)
      setIsGreet(true);
    }
    ;
  }
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input  
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput} // มีการเปลี่ยนแปลงที่มีการใส่ชื่อในช่อง
        // value={name} //สำหรับรับค่า มีไม่มีก็ได้
      />
      <button className="btn btn-primary" onClick={greetBtn}>Greet Me</button>
      {/* Result Text */}
      <p className={isGreet? "" : "text-danger" }>{result}</p>
       <div /*ตรวจสอบการกด ถ้ากดตอนที่ช่องเปล่าให้ทำข้อความอันตรายหรือเป็นสีแดง*//>
    </div>
  );
}
