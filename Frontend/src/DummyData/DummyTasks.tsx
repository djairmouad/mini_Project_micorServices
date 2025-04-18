const Tasks = [
    {
      type: "Start",
      children: [
        {
          id: 1,
          name: "Set up project repo",
          desc: "Create a new GitHub repository, initialize it with a README file, and clone it locally to prepare the environment for development."
        },
        {
          id: 2,
          name: "Install dependencies",
          desc: "Install all necessary packages including React, Tailwind CSS, React Router, and other tools to kickstart the project setup."
        },
        {
          id: 3,
          name: "Create project plan",
          desc: "Define a clear roadmap for the project, assign roles and responsibilities to team members, and prepare a timeline for each milestone."
        },
      ],
    },
    {
      type: "Progress",
      children: [
        {
          id: 4,
          name: "Develop authentication",
          desc: "Build secure user authentication with login, register, and password reset functionalities, including form validation and backend integration."
        },
        {
          id: 5,
          name: "Design landing page",
          desc: "Create a visually appealing and fully responsive homepage that introduces the product, highlights key features, and includes call-to-action buttons."
        },
      ],
    },
    {
      type: "Completed",
      children: [
        {
          id: 7,
          name: "Set up database",
          desc: "Configured MongoDB database, created data models using Mongoose, and established a secure connection with the Node.js server."
        },
      ],
    },
  ];
  
  export default Tasks;
  