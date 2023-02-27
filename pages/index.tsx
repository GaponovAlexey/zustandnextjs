import { useEffect, useLayoutEffect, useState } from "react"
import { useTodos } from "../Store/zus"
import { shallow } from "zustand/shallow"
export default function Home() {
  // let tod = null
  const todos = useTodos((state: any) => state.todos, shallow)
  const addTodo = useTodos((state: any) => state.addTodo, shallow)
  const [tod, settod] = useState()
  useLayoutEffect(() => {
    settod(todos)
  }, [todos])
  console.log(tod)
  
  return (
    <>
      <main>
        <h1>start</h1>
        <div>
          {tod?.map((el: any) => (
            <div key={el.id}>{el.title}</div>
          ))}
        </div>
        <button onClick={() => addTodo("three")}>add</button>
      </main>
    </>
  )
}
