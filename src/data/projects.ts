export interface Project {
  id: number;
  company: string;
  projectType: string;
  deadline: string;
  requirement: string;
  budget: string;
  status: "Active" | "Delivered" | "Rejected";
}

export const projects: Project[] = [
  {
    id: 1,
    company: "Google",
    projectType: "Web Application",
    deadline: "Dec 21",
    requirement: "Download",
    budget: "$3K",
    status: "Active",
  },
  {
    id: 2,
    company: "Facebook",
    projectType: "Mobile App",
    deadline: "Dec 25",
    requirement: "Upload",
    budget: "$4K",
    status: "Delivered",
  },
  {
    id: 3,
    company: "Tesla",
    projectType: "Dashboard",
    deadline: "Jan 10",
    requirement: "Review",
    budget: "$8K",
    status: "Rejected",
  },
  {
    id: 4,
    company: "NASA",
    projectType: "Analytics Portal",
    deadline: "Jan 15",
    requirement: "Download",
    budget: "$15K",
    status: "Active",
  },
  {
    id: 5,
    company: "Spotify",
    projectType: "Music Platform",
    deadline: "Jan 20",
    requirement: "Testing",
    budget: "$6K",
    status: "Delivered",
  },
  {
    id: 6,
    company: "OpenAI",
    projectType: "AI Dashboard",
    deadline: "Feb 01",
    requirement: "Review",
    budget: "$20K",
    status: "Active",
  },
];