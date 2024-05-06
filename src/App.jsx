import { useState } from "react"

function App() { 
const [value, setValue] = useState("")


  return (
    <div className="bg-[#8ecae6] h-screen flex justify-center">
    <div className="my-[5rem] bg-[#219ebc] rounded-lg drop-shadow-lg w-[20rem] border-2 border-[#d0f4de] border-dotted">
      <div className="flex justify-center my-[2rem]"><input type="text" value={value} placeholder="Adebisi calculator" className="outline-none text-center text-blue-800 rounded-lg p-2 w-[16rem]"/></div>
      <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-5 w-[17rem] text-center">
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={9} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={8} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={7} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={6} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={5} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={4} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={3} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={2} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={1} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={0} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={"+"} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={"-"} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={"/"} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={"*"} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={"="} onClick={e=> setValue(eval(value))} />
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={"Del"} onClick={e => setValue(value.slice(0,-1))}/>
      <input type="button" className="bg-[#0077b6] p-2 fonts-bold text-2xl text-[#ffffff] rounded-lg cursor-pointer hover:bg-[#48cae4]" value={"Ac"} onClick={e => setValue("")} />
      </div>
      </div>
      <div className="flex justify-center">
        <div className="fonts-bold text-[#d0f4de] border-2 border-[#3a0ca3] p-2 rounded-lg my-[2rem] border-dotted animate-bounce"> we offer you the best</div>
      </div>
    </div>
    </div>
  )
}

export default App
