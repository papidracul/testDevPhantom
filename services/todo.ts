export const getTodos = async (): Promise<TodoType[]> => {
    console.log("getTodos");

    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: "GET",
      // cache: "no-store",
      // next: { revalidate: 20 },
    });
    // console.log("response", res);
    return res.json();
  };
  
  export const getTodo = async (todoId:string): Promise<TodoType> => {
    console.log("getTodo");

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
      method: "GET",
      // cache: "no-store",
      // next: { revalidate: 20 },
    });
    // console.log("response", res);
    return res.json();
  };