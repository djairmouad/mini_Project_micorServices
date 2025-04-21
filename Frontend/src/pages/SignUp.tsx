import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import image from "../assets/undraw_off-road_34hg.svg";
import { redirect, useNavigate, useSubmit } from "react-router-dom";
import getToken from "../util/getToken";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const submit = useSubmit();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    function handleLogIn() {
        navigate("/");
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSignUp(e: React.FormEvent) {
        e.preventDefault();
        submit(formData, { method: "post" });
    }

    return (
        <div className="flex flex-row gap-9 max-sm:gap-0 max-sm:flex-col w-full h-full bg-[#efefef] justify-center items-center absolute">
            <motion.div
                className="w-[40%] max-sm:w-[70%] flex items-end justify-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.1 }}
            >
                <img src={image} alt="Task list illustration" />
            </motion.div>

            <motion.form
                onSubmit={handleSignUp}
                className="w-[40%] max-sm:w-[80%] px-10 h-[70%] max-sm:h-[45%] flex flex-col items-center justify-around border border-white bg-[#f3f3f3] rounded-3xl pt-4"
                style={{ boxShadow: "7px 9px 26px 4px darkgray" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
            >
                <h1 className="text-xl font-bold w-[90%] text-center">
                    Create Your Account
                </h1>
                <input
                    className="w-[90%] border outline-none h-[12%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]"
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    className="w-[90%] border outline-none h-[12%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    className="w-[90%] border outline-none h-[12%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <div className="w-[90%] flex flex-row justify-between items-start h-[15%]">
                    <Button
                        borderColor=""
                        content="Sign Up"
                        buttonColor="#0284c7"
                        width="35%"
                        type="submit"
                        textColor="white"
                        hoverColor="#0369a1"
                    />
                    <Button
                        content="Sign In"
                        buttonColor="transparent"
                        width="35%"
                        onClick={handleLogIn}
                        textColor="#0891b2"
                        borderColor="#0891b2"
                        hoverColor="transparent"
                        type="button"
                    />
                </div>
            </motion.form>
        </div>
    );
};

export default SignUp;

export async function SignUpAction({ request }: { request: Request }) {
  try {
      const formData = await request.formData();
      const data = {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          password: formData.get('password') as string
      };

      // Validate required fields
      if (!data.name || !data.email || !data.password) {
          throw new Error("All fields are required");
      }

      const token = await getToken();
      const url = "http://localhost:3000/api/user/Create";
      const response = await fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "authorization": "Bearer " + token
          },
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Sign up failed");
      }

      const result = await response.json();
      return redirect("/");

  } catch (err: any) {
      console.error("Sign up error:", err);
      return { error: err.message };
  }
}