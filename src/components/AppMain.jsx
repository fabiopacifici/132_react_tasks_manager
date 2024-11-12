import tasks from '../data/tasks.js'
export default function AppMain() {

  // logic
  //console.log(tasks);

  // filter the list of tasks by state
  const backlog = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");
  console.log(backlog);

  const completed = tasks.filter(task => task.state === "completed");
  console.log(completed);

  // markup

  return (
    <main>

      <div className="container">


        <section className="backlog">
          <h3>Backlog ({backlog.length})</h3>
          <ul>
            {backlog.map((task, index) =>
              <li key={task.id}>
                <p>
                  <strong>
                    {task.title}
                    <span className="badge">{task.state}</span>
                  </strong>
                </p>

                <div>
                  <span>Prioriry:</span>
                  <span>{task.priority}</span>
                </div>
                <div>
                  <span>Est. time:</span>
                  <span>{task.estimatedTime}</span>
                </div>
              </li>
            )}
          </ul>
        </section>

        <hr />

        <section className="completed">
          <h3>Completed ({completed.length})</h3>
          <ul>
            {completed.map((task, index) =>
              <li key={task.id}>
                <p>
                  <strong>
                    {task.title}
                    <span className="badge">{task.state}</span>
                  </strong>
                </p>

                <div>
                  <span>Prioriry:</span>
                  <span>{task.priority}</span>
                </div>
                <div>
                  <span>Est. time:</span>
                  <span>{task.estimatedTime}</span>
                </div>


              </li>
            )}
          </ul>
        </section>

      </div>



    </main>
  )

}