// A mock function to mimic making an async request for data
const todos = [
    { title: "g", done: true },
    { title: "be", done: false },
    { title: "ct", done: true }
]

export function fetchTodos(amount = todos) {
    return new Promise<{ data: { title: string, done: boolean }[] }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  