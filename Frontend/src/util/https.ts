import { QueryClient } from "@tanstack/react-query";
import getToken from "./getToken";
const queryClient=new QueryClient();
export default queryClient
export async function loginFunc({ email, password }: { email: string; password: string }) {
    try {
        const url = "http://localhost:3000/api/user/SignIn";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed");
        }

        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error("Login error:", error);
        return { error: error.message };
    }
}



export async function fetchAllTasks() {
    try {
        const token = await getToken(); // assuming getToken is async
        const url = "http://localhost:3001/api/task/FetchAllTasks";

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Fetching tasks failed");
        }

        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error("Fetch tasks error:", error);
        return { error: error.message };
    }
}

export async function CreateTask({ name, desc, type, token }: { name: string, desc: string, type: string, token: string }) {
    console.log('CreateTask received data:', { name, desc, type, token });
  
    try {
      const url = "http://localhost:3001/api/task/CreateTask";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ name, desc, type }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Fetching tasks failed");
      }
  
      const data = await response.json();
      console.log("Task created:", data);
      return data;
    } catch (err: any) {
      console.error("Error in CreateTask:", err);
      throw err; // Re-throw to propagate error back to actionCreate
    }
  }
  


  export async function deleteTask({ id }: { id: number }) {
    try {
      const url = `http://localhost:3001/api/task/DeleteTask/${id}`;
      const token = await getToken();
  
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        let errorMessage = "Deleting task failed";
  
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          const text = await response.text(); // Could log or display this HTML for debugging
          console.warn("Received non-JSON error response:", text);
        }
  
        throw new Error(errorMessage);
      }
  
      const data = await response.json().catch(() => null);
      return data || { success: true };
    } catch (err) {
      console.error("Delete task error:", err);
      throw err;
    }
  }
  
  export async function UpdateTask({ id,name,desc,type }) {
    try {
      const url = `http://localhost:3001/api/task/UpdateTask/${id}`;
      const token = await getToken();
  
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body:JSON.stringify({name,desc,type})
      });
  
      if (!response.ok) {
        let errorMessage = "Update Task is failed";
  
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          const text = await response.text(); // Could log or display this HTML for debugging
          console.warn("Received non-JSON error response:", text);
        }
  
        throw new Error(errorMessage);
      }
  
      const data = await response.json().catch(() => null);
      return data || { success: true };
    } catch (err) {
      console.error("Delete task error:", err);
      throw err;
    }
  }
  
  
  
  

