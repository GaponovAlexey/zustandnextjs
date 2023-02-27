import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"

// interface User {
//   id: number
//   title: string
// }

// interface UserState {
//   users: User[]
//   count: number
//   addUser: any
//   fetchUsers: any
// }

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

export const useTodos = create(
  devtools(
    persist(
      (set, get: any) => ({
        todos: [
          { id: 1, title: "one" },
          { id: 2, title: "two" },
        ],
        addTodo: (title: any) => {
          set({
            todos: [...get().todos, { id: get().todos.length + 1, title }],
          })
        },
      }),
      {
        name: "dada", // unique name
      }
    )
  )
)


// start
export const useBearStore = create((set: any) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
