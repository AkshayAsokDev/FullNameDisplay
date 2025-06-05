import { useState } from "react";



// form component
function NameForm({name, setName}) {



  return (
    <form name="name" 
    onSubmit={(e) => {
      e.preventDefault();
      // console.log("submit event obj >> ",e);
      setName({
        firstName : e.target.elements.first.value,
        lastName : e.target.elements.last.value
      })
    }}
    >
      <div>
        <label for="first">First Name:</label>
        <input name="first" id="first" required />
      </div>
      
      <div>
        <label for="last" id="first">Last Name:</label>
        <input name="last" required />
      </div>

      <button type="submit" >Submit</button>
    </form>
  )
}



function App() {

  const [name, setName] = useState({
    firstName : "",
    lastName : ""
  })


  return (
    <div className="App">
      <h1>Full Name Display</h1>
      
      <NameForm name={name} setName={setName} />
      
      {
        (name.firstName.length>0 && name.lastName.length>0) && (<h4>{`Full Name: ${name.firstName} ${name.lastName}`}</h4>)
      }
    </div>
  );
}

export default App;
