import { useState } from "react"

export default function Form() {
    const [ input, setInput ]  = useState("") 
    const [ valid, setValid ]  = useState(null) 
    const [ showButton, setShowButton ]  = useState(null) 

    
    const handleChange = (evt) => {
        evt.preventDefault()
        setInput(evt.target.value)
    }

    const validateCard = (ccNumber) => {
        let newNum = ccNumber
        .toString()
        .split("")
        for (let i = newNum.length-2; i >=0; i= i-2){
            newNum[i] *=2
            if (newNum[i] >= 10){
            newNum[i] -= 9
            }
        }
        let sum = newNum.reduce((a,b) => parseInt(a)+parseInt(b), 0)
        // evt.target.value=""
        return sum % 10 == 0
        
        }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setValid(validateCard(input))
        evt.target.value = ""
    }


    return (
        <div className="container">
        <h1>Credit Card Validation Form</h1>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
        <input 
        type="number"
        maxLength= "16"
        value = {input}
        onChange = {handleChange}
        placeholder = "Enter CC Number"
        />
        <button className="btn" typeof="submit">Submit</button>
        {input? (<h3>Verification Failed</h3> ): ("")}
        {valid && !this.onSubmit? (
            <h1>yay</h1> ) : <h1>Boooo</h1>}

        </form>
        </div>
    </div>)
}

// if (input === true && (!handleSubmit() || valid === false)){
//     (
//         <h1>CC Verification Failed</h1>
//     )
// } else if(input === true && valid === true){
//     (
//         <h1>CC Verification Success</h1>
//     )
// } else 
//     (
//         ""
//     )