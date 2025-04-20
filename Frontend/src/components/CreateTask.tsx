import { motion } from "framer-motion";
import Button from "../UI/Button";
import { Form, redirect } from "react-router-dom";
import getToken from "../util/getToken";
import { useState } from "react";

export default function CreateTask() {
  const [taskType, setTaskType] = useState<string>("Start");

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto p-6"
    >
      <Form method="POST" action="." className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Create New Task
        </h2>
        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Task Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter task name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all outline-none"
          />
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Description
          </label>
          <textarea
            name="desc"
            placeholder="Enter task description"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all outline-none"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Status
          </label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="Start"
                checked={taskType === "Start"}
                onChange={() => setTaskType("Start")}
                className="text-blue-500 focus:ring-blue-200"
              />
              <span className="ml-2">Start</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="Progress"
                checked={taskType === "Progress"}
                onChange={() => setTaskType("Progress")}
                className="text-blue-500 focus:ring-blue-200"
              />
              <span className="ml-2">Progress</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="Completed"
                checked={taskType === "Completed"}
                onChange={() => setTaskType("Completed")}
                className="text-blue-500 focus:ring-blue-200"
              />
              <span className="ml-2">Completed</span>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <Button
            content="Create"
            buttonColor="bg-blue-500"
            textColor="text-white"
          />
        </div>
      </Form>
    </motion.div>
  )
}

export async function actionCreate({ request }: { request: Request }) {
  try {
    // Parse form data
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    // Prepare data for the API
    const fd = {
      name: data.name,
      desc: data.desc,
      type: data.type as string
    };

    // Fetch token and make API request
    const token = await getToken();
    const url = "http://localhost:3001/api/task/CreateTask";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer " + token
      },
      body: JSON.stringify(fd)
    });

    // Handle non-OK responses
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Fetching tasks failed");
    }

    // Parse response data
    const result = await response.json();
    return redirect("/task/AllTasks");

  } catch (err: any) {
    console.error("Fetch tasks error:", err);
    return { error: err.message };
  }
}