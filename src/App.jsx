import Counter from './components/Counter'
import TodoList from './components/TodoList'
import UserList from './components/UserList'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* Header */}
      <header className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Experiment
        </h1>

        <p className="text-gray-400">
          Exploring React useState and useEffect.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        <Counter />
        <TodoList />
        <UserList />
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-12">
        React Experiment © 2026
      </footer>

    </div>
  )
}

export default App