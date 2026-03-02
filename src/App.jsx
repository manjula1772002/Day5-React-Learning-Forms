import { useState, useEffect } from "react"

function App() {

  const [formData,setFormData]=useState({
    author:"",quote:""
  });

  const submit =async(e) => {
    e.preventDefault();
    // if(!formData.author||!formData.quote){
    //  alert("Fill the fields");
    //  return;
    // }
    // if(!formData.author ||formData.author.length<2) {
    //   alert("Enter the valid author name");
    //   return;}
    // if(!formData ||formData.quote.length<5){
    //    alert("The author's quote is need mininum 5 characters");
    // return;}
    // reset form 

    await fetch("https://mimic-server-api.vercel.app/quotes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

    setFormData({author:"",quote:""})
    alert("Successfully added ✅")
  }

  return (
    <>
      <section>
        <h1 className="justify-center gap-4 text-3xl mt-3 font-bold flex items-center mb-1"><div className="text-center mt-1 mx-2"><img src="/quote.png" width={"40px"} alt="quotes" /></div><div>Add Your Quote</div></h1>
        <form onSubmit={submit} className="w-[500px] mx-auto my-3 px-5 py-3 rounded-2xl bg-slate-950 text-white space-y-3 hover:scale-110 shadow-2xs">
          <div>
            <label htmlFor="author" className="block font-medium text-lg py-0.5">Author Name</label>
            <input type="text" required placeholder='Enter the author name' id="author" className="h-10 w-full bg-slate-100 rounded py-1 outline-none text-black px-1" 
            value={formData.author} onChange={(e) => setFormData({...formData,author:e.target.value})} />
          </div>
          <div>
            <label htmlFor="quote" className="block font-medium text-lg py-0.5 ">Quote</label>
            <input type="text" required placeholder="Quote of the author" id="quote" name="quote" className=" w-full text-wrap h-20 bg-slate-100 rounded py-1 outline-none text-black px-1" 
            value={formData.quote} onChange={(e) => 
            setFormData({...formData,quote:e.target.value})}/>
          </div>
          <div className=" flex justify-end gap-4">
            <button type="button" className="font-medium px-2 py-1 rounded active:scale-105 hover:bg-red-400"
            onClick={() => setFormData({author:"",quote:""})}>Clear</button>
            <button className={"font-medium px-2 py-1 rounded transform active:scale-105 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-300 bg-slate-600 hover:bg-slate-700"}
            disabled={formData.author.length<2 || formData.quote.length<5} >Add Quote</button></div>
        </form>
        {/* <div className="my-5 mx-auto w-[500px] bg-gray-200 h-40">
        
          My Quote is:{formData.quote} <br />
          Author name is:{formData.author}
      
      </div> */}

      </section>
    </>
  )
}

export default App
