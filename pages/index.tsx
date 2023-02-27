import Head from "next/head"
import { useEffect } from "react"
import { useTodos } from "../Store/zus"
import { shallow } from "zustand/shallow"
export default function Home() {
  const todos = useTodos((state: any) => state.todos)
  const addTodo = useTodos((state: any) => state.addTodo)
  console.log(todos)
  

  return (
    <>
      <Head>
        <title>Next.Js</title>
      </Head>

      <main>
        <h1>start</h1>
        {todos?.map((el: any) => (
          <div key={el.id}> {el.title}</div>
        ))}
        <button onClick={() => addTodo("three")}>add</button>
        <div></div>
      </main>
    </>
  )
}
