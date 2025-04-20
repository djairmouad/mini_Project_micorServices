import getToken from "./getToken";

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

export async function CreateTask({name,desc,type}) {
    try{
        const token=await getToken();
        const url="http://localhost:3001/api/task/CreateTask";
        const response=await fetch(url,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":"Bearer "+token
                },
                body:JSON.stringify({name,desc,type})
            }
        )
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || "Fetching tasks failed");
        }
        const data=await response.json();
        return data;
    }catch(err:any){
    console.error("Fetch tasks error:",err)
    return {error:err.message};
    };
    
    }

