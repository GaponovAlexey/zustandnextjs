import { create } from "zustand"
// import { devtools, persist, immer } from "zustand/middleware"

interface User {
  id: number
  title: string
}

interface UserState {
  users: User[]
  count: number
  addUser: any
  fetchUsers: any
}

// export const useUsersStore = create<UserState>()(
//   persist(
//     devtools(
//       immer((set) => ({
//         users: [],
//         count: 100,
//         addUser: (user: string) =>
//           set((state: any) => {
//             state.users.push({ id: 66, username: user })
//           }),
//         fetchUsers: async () => {
//           const res = await fetch(
//             "https://jsonplaceholder.typicode.com/users?_limit=5"
//           )
//           const json = await res.json()
//           set({ users: json })
//         },
//       }))
//     )
//   )
// )

export const useTodos = create((set) => ({
  todos: [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
  ],
  addTodo: (title: string) =>
    set((state: any) => {
      const newTodo = { id: state.todos.length + 1, title: title }
      return { todos: [...state.todos, newTodo] }
    }),
}))

// start
export const useBearStore = create((set: any) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
