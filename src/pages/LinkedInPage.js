import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";   // your banner image
import avatar from "../assets/avatar.jpg";
function LinkedInPage({ close, minimize }) {
  // const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    // reset animation each time component mounts
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 50); // small delay so transition triggers
    return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className={`flex flex-col bg-black/80 rounded-xl transform transition-all w-full h-full duration-1000 origin-bottom 
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
    >
      {/* Top bar with close/minimize */}
      <div className="flex items-center justify-between bg-gray-900 rounded-t-xl h-10 px-3 flex-shrink-0">
        <div className="flex gap-2">
          <span
            onClick={close}
            className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Main LinkedIn Content */}
      <div className="flex-1 w-full h-full overflow-y-auto rounded-b-xl bg-white text-black p-6">
        {/* Banner */}
        <div className="relative">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover rounded-t-lg"
          />

          {/* Avatar */}
          <img
            src={avatar}
            alt="Nikhil Kashyap"
            className="absolute -bottom-12 left-6 w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>


        <div className="container mt-16 space-y-6 p-10">
          {/* Header */}
          <div className="header">
            <h1 className="text-2xl font-bold">Nikhil Kashyap</h1>
            <p className="text-gray-700">
              Backend Developer | Node.js | Express.js | AWS | Azure DevOps | REST APIs | Microservices
            </p>
            <p className="text-sm text-gray-600">
              Bhopal, M.P. · nikhilkashyap.may021@gmail.com · 9584680898
            </p>
            <p className="text-sm text-blue-600 underline cursor-pointer">LinkedIn | GitHub</p>
          </div>

          {/* Summary */}
          <div className="card bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p>
              Backend Developer with expertise in Express.js, Node.js, database management, cloud technologies (AWS, Azure DevOps),
              and payment gateway REST APIs. Proficient in building scalable and secure backend solutions, implementing unit testing,
              and integrating cloud services.
            </p>
          </div>

          {/* Work Experience */}
          <div className="card bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
            <div className="item mb-4">
              <h3 className="font-bold">Node.js Developer — Limbic Technologies</h3>
              <p className="text-sm text-gray-600">May 2024 – Present</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>1+ year of experience in software development and deployment.</li>
                <li>Integrated AWS Rekognition and Liveness Detection for authentication and matching.</li>
                <li>Designed and implemented payment gateway solutions with REST API integration.</li>
                <li>Skilled in server deployment on AWS and GoDaddy using Nginx and Gunicorn.</li>
                <li>Implemented SSL certificates and AWS Route 53 for domain management and routing.</li>
              </ul>
            </div>
            <div className="item">
              <h3 className="font-bold">Intern — Limbic Technologies</h3>
              <p className="text-sm text-gray-600">Mar 2024 – May 2024</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Developed RESTful APIs using Node.js and Express.js.</li>
                <li>Wrote unit test cases to ensure reliability and maintainability.</li>
                <li>Created DFDs to visualize the system architecture.</li>
                <li>Deployed applications on AWS EC2, managing pipelines and deployments.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="card bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript (ES6+)", "C++", "SQL", "Node.js", "Express.js", "REST API", "Microservices", "Git", "JIRA",
                "Swagger", "Postman", "MySQL", "MongoDB", "SQL Server", "AWS", "Azure DevOps", "Docker", "Terraform (Basic)",
                "Nginx", "Gunicorn", "Kafka", "Event-driven Architecture", "Pub/Sub", "HLD/LLD", "SOLID Principles", "Design Patterns"
              ].map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="card bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="item mb-4">
              <h3 className="font-bold">File Storage & Management Web Application</h3>
              <p>
                Developed a web-based file storage system that allows users to store, delete, and share files with URL sharing and
                enhanced user privacy using AWS SDK and S3.
              </p>
            </div>
            <div className="item">
              <h3 className="font-bold">TaskControl Hub – A Role-Based Task Management System</h3>
              <p>
                Designed to streamline task handling and team coordination through a role-based structure. Features include task creation,
                updates, and progress tracking.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="card bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="item mb-4">
              <h3 className="font-bold">B.Tech in Computer Science — Technocrats Institute of Technology Excellence, Bhopal</h3>
              <p className="text-sm text-gray-600">2020 – 2024 · CGPA: 8.46/10</p>
            </div>
            <div className="item mb-4">
              <h3 className="font-bold">12th — Renn Vidya Peeth Hr. Sec. School, Bhopal</h3>
              <p className="text-sm text-gray-600">2019 – 2020 · Score: 76.8%</p>
            </div>
            <div className="item">
              <h3 className="font-bold">10th — Govt. Subhash H.S. School for Excellence, Bhopal</h3>
              <p className="text-sm text-gray-600">2017 – 2018 · Score: 88.4%</p>
            </div>
          </div>

          <footer className="text-center text-gray-600 mt-8">
            LinkedIn Profile Clone of <b>Nikhil Kashyap</b>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LinkedInPage;