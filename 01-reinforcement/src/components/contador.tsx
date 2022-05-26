import { useState } from "react"

const Contador = () => {

    const [value, setValue] = useState(0)

    const accumulate = (number: number) => {
        setValue(value + 1)
    }

  return (
      <>
        <h3>Contador: <small>{value}</small></h3>
        <button 
        onClick={() => accumulate(1)}
        className="btn btn-primary"
        >
            +1
        </button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={() => accumulate(-1)}
        >
            -1
        </button>
      
      </>
  )
}

export default Contador