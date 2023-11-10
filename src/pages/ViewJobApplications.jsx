import React from 'react';
import styles from './styles/ViewJobApplications.module.css';
import AppliedJobs from '../components/employee/AppliedJobs';

const ViewJobApplications = () => {

    const jobItems = [
        {
          jobName: "Junior Web Dev",
          company: "MS",
          location: "Cape Town",
          locationType: "On-site",
          jobIcon: "https://assets.stickpng.com/images/58480fd7cef1014c0b5e4943.png",
          salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "Senior Web Dev",
          company: "Netflix",
          location: "WFH",
          locationType: "Remote",
          jobIcon: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
          salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "Intern",
          company: "VIT",
          location: "Vellore",
          locationType: "On-site",
          jobIcon: "https://findlogovector.com/wp-content/uploads/2022/05/vellore-institute-of-technology-vit-logo-vector-2022.png",
          salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "CEO",
          company: "Netflix",
          location: "New York",
          locationType: "On-site",
          jobIcon: "/logo192.png",
          salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "CEO",
          company: "Netflix",
          location: "New York",
          locationType: "On-site",
          jobIcon: "/logo192.png", salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "CEO",
          company: "Netflix",
          location: "New York",
          locationType: "On-site",
          jobIcon: "/logo192.png", salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "CEO",
          company: "Netflix",
          location: "New York",
          locationType: "On-site",
          jobIcon: "/logo192.png", salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "CEO",
          company: "Netflix",
          location: "New York",
          locationType: "On-site",
          jobIcon: "/logo192.png", salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "CEO",
          company: "Netflix",
          location: "New York",
          locationType: "On-site",
          jobIcon: "/logo192.png", salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
        {
          jobName: "CEO",
          company: "Netflix",
          location: "New York",
          locationType: "On-site",
          jobIcon: "/logo192.png", salary: "20000 $",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ab neque corporis aliquam? Ab harum blanditiis quae, voluptatibus iusto reiciendis exercitationem, ducimus reprehenderit quos repellat, delectus neque amet quia."
        },
      ];




  return (
    <div>
      <center>
      <h1>Applied Jobs</h1>
      <AppliedJobs jobItems={jobItems} />
      </center>
    </div>
  
  )
}

export default ViewJobApplications
