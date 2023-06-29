import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState('')
  return (
    <div>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>

        <input type="number" 
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button onClick={() => setCount(amount)}>Set</button>
    </div>
  )
}
