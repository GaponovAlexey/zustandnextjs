import { useTodos } from "../Store/zus"
// import { shallow } from "zustand/shallow"
export default function Home() {
  const { todos, addTodo } = useTodos((state: any) => state)

  console.log(todos)

  return (
    <>
      <main>
        <h1>start</h1>
        <div>
          {todos?.map((el: any) => (
            <div key={el.id}>{el.title}</div>
          ))}
        </div>
        <button onClick={() => addTodo("three")}>add</button>
      </main>
    </>
  )
}
