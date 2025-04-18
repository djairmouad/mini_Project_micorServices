import { motion } from "framer-motion";
import Button from "../UI/Button";

export default function CreateTask() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto p-6"
    >
      <form className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Create New Task
        </h2>
        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Task Name
          </label>
          <input
            type="text"
            placeholder="Enter task name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all outline-none"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter task description"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all outline-none"
          />
        </div>
        
        <div className="flex justify-end gap-3">
          <Button
            content="Create"
            buttonColor="bg-blue-500"
            textColor="text-white"
            className="hover:bg-blue-600 px-4 py-2"
          />
        </div>
      </form>
    </motion.div>)
}