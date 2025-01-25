import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';

const projectDescriptions = [
  {
    title: "Project 1",
    description: "This project involved developing a web application that helps users track their daily tasks. The application was built using React and Node.js, allowing for a seamless user experience and efficient data management.",
    color: "bg-red-100"
  },
  {
    title: "Project 2",
    description: "In this project, we created a mobile app for fitness tracking. The app integrates with various health APIs to provide users with real-time data on their workouts and health metrics, promoting a healthier lifestyle.",
    color: "bg-blue-100"
  },
  {
    title: "Project 3",
    description: "This project focused on building an e-commerce platform. We implemented features such as user authentication, product management, and payment processing, ensuring a secure and user-friendly shopping experience.",
    color: "bg-green-100"
  },
  {
    title: "Project 4",
    description: "We developed a social media application that allows users to connect and share content. The project emphasized real-time data updates and user engagement, utilizing WebSockets for instant communication.",
    color: "bg-yellow-100"
  },
  {
    title: "Project 5",
    description: "This project was about creating a data visualization tool that helps businesses analyze their performance metrics. We used D3.js to create interactive charts and graphs, making data insights accessible and understandable.",
    color: "bg-purple-100"
  },
  {
    title: "Project 6",
    description: "In this project, we built a content management system (CMS) for a local news website. The CMS allows editors to create, edit, and publish articles easily, with a focus on user-friendly design and functionality.",
    color: "bg-pink-100"
  },
  {
    title: "Project 7",
    description: "This project involved developing a machine learning model to predict customer behavior. We used Python and various libraries to analyze data and create predictive algorithms, helping businesses make informed decisions.",
    color: "bg-teal-100"
  },
  {
    title: "Project 8",
    description: "We created a travel planning application that helps users find and book trips. The app integrates with various travel APIs to provide users with options for flights, hotels, and activities, all in one place.",
    color: "bg-orange-100"
  },
  {
    title: "Project 9",
    description: "This project focused on building a real-time chat application. We utilized Firebase for backend services, allowing users to communicate instantly and share files securely, enhancing collaboration.",
    color: "bg-indigo-100"
  },
  {
    title: "Project 10",
    description: "In this project, we developed a personal finance management tool. The application helps users track their expenses and savings, providing insights and tips for better financial health through data analysis.",
    color: "bg-gray-200"
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div 
      className="p-6 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUW8erihlLFCPzDM2iKSNi97sc2oGEroBVw&s)' }} // Replace with your background image URL
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectDescriptions.map((project, index) => (
          <div
            key={index}
            className={`p-4 shadow-lg rounded-lg transform hover:scale-105 hover:shadow-xl ${project.color}`}
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href="#"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
