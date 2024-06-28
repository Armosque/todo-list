
import './App.css'
import {Day} from './components/Day'
import {Form} from './components/Form'
import {Header} from './components/Header'
import {ListTasks} from './components/ListTasks'
import {useState} from 'react'
import {Week} from './components/Week'
import {Month} from './components/Month'
import {Year} from './components/Year'
import {useEffect} from 'react'


function App() {
  
  const data = JSON.parse(localStorage.getItem("tasks"))

  const [tab, setTab] = useState("day")
  const [dateM, setDateM] = useState(new Date())
  const [tasks, setTasks] = useState(data || [])
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const resetApp = () => {
    localStorage.clear(); // Limpia todos los datos de localStorage
    window.location.reload(); // Recarga la página para reiniciar la aplicación
    setTab("reset")
    
  };
  return (
    <>
      
      <main>
        
        <div className="bg-gray03 text-white rounded max-w-[60%] m-auto">
          <Header tab={tab} setTab={setTab} resetApp={resetApp}/>
          {tab === "day" && <>
              <Day dateM={dateM} setDateM={setDateM} /> 
              <Form dateM={dateM} tasks={tasks} setTasks={setTasks}/>
              <ListTasks dateM ={dateM} tasks ={tasks} setTasks={setTasks}/>
            </>
          }
        {tab === "week" && <Week tasks={tasks} />}
        {tab === "month" && <Month tasks={tasks}/>}
        {tab === "year" && <Year tasks={tasks}/>}
        </div>

      </main>
    </>
  )
}

export default App
