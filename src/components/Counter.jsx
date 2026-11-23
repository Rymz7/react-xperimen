import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  // Menjalankan effect ketika count berubah
  useEffect(() => {
    console.log("Counter berubah:", count)
  }, [count])

  return (
    <div className="bg-slate-800 text-white p-8 m-4 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">
        My Counter
      </h2>

      <h1 className="text-4xl mb-4">
        {count}
      </h1>

      <button
        className="bg-red-500 px-4 py-2 rounded mr-2"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>

      <button
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <button
        className="bg-gray-500 px-4 py-2 rounded ml-2"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter
