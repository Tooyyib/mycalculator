import { useState } from "react"






function App() { 
const [value, setValue] = useState("")



  return (
    <div className="bg-[#8ecae6] h-screen flex justify-center">
    <div className="my-[5rem] bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-lg drop-shadow-lg w-[20rem] border-2 border-[#d0f4de] border-dotted">
      <div className="flex justify-center my-[2rem]"><input type="text" value={value} placeholder="Adebisi calculator" className="outline-none text-center text-blue-800 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-lg p-2 w-[16rem]"/></div>
      <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-5 w-[17rem] text-center">
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={9} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={8} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={7} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={6} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={5} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={4} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={3} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={2} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={1} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={0} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={"+"} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={"-"} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={"/"} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={"*"} onClick={e=> setValue(value + e.target.value)} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={"="} onClick={()=> setValue(eval(value))} />
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={"Del"} onClick={() => setValue(value.slice(0,-1))}/>
      <input type="button" className="border-2 border-[#bde0fe] border-dotted bg-gradient-to-r from-fuchsia-500 to-pink-500  p-2 fonts-bold text-2xl text-yellow-100 rounded-lg cursor-pointer hover:text-black hover:opacity-80" value={"Ac"} onClick={() => setValue("")} />
      </div>
      </div>
      <div className="flex justify-center">
        <div className="fonts-bold text-[#d0f4de] bg-gradient-to-r from-slate-900 to-slate-700 border-2 border-white p-2 rounded-lg my-[2rem] border-dotted animate-bounce"> we offers the best</div>
      </div>
    </div>
    </div>
  )
}

export default App