export default function AppHeader() {

  // logic
  const logo = "Task Manager"

  // markup (JSX)
  return (
    <header>
      <div className="container">
        <h1>{logo}</h1>
      </div>
    </header>
  )
}