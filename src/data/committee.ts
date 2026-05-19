export interface CommitteeMember {
  name: string;
  designation: string;
  affiliation: string;
  role?: string;
  category: "leadership" | "chairs" | "tpc";
  track?: string;
}

export const committeeData: CommitteeMember[] = [
  // LEADERSHIP
  {
    name: "Prof. Dilip Kumar Baidya",
    designation: "Director",
    affiliation: "National Institute of Technology Silchar",
    role: "Patron",
    category: "leadership"
  },
  {
    name: "Prof. Ramjee Prasad",
    designation: "Founder",
    affiliation: "CTIF Global Capsule",
    role: "Honorary Chair",
    category: "leadership"
  },
  {
    name: "Dr. Joshua Lee",
    designation: "Associate Professor",
    affiliation: "University of Technology Sydney, Australia",
    role: "General Chair",
    category: "leadership"
  },
  {
    name: "Prof. Balaji Ramakrishnan",
    designation: "Director",
    affiliation: "National Institute of Ocean Technology, Chennai",
    role: "General Chair",
    category: "leadership"
  },
  {
    name: "Dr. Sudarsan Sahoo",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "General Chair",
    category: "leadership"
  },
  {
    name: "Dr. Anup Kumar Sharma",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "General Chair",
    category: "leadership"
  },
  {
    name: "Dr. Munmun Khanra",
    designation: "Head of Department, EIE",
    affiliation: "National Institute of Technology Silchar",
    role: "Convenor",
    category: "leadership"
  },

  // CHAIRS & SECRETARIES
  {
    name: "Dr. Rajdeep Dasgupta",
    designation: "Associate Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Organizing Chair",
    category: "chairs"
  },
  {
    name: "Dr. Jupitara Hazarika",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Organizing Chair",
    category: "chairs"
  },
  {
    name: "Dr. Shankar K.",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Organizing Secretary",
    category: "chairs"
  },
  {
    name: "Dr. Vipin Chandra Pal",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Organizing Secretary",
    category: "chairs"
  },

  // Technical Program Chairs
  {
    name: "Dr. Koena Mukherjee",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Technical Program Chair",
    track: "Control & Robotics",
    category: "chairs"
  },
  {
    name: "Dr. Arun Kumar Sunaniya",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Technical Program Chair",
    track: "Signal Processing",
    category: "chairs"
  },
  {
    name: "Dr. Ranjay Hazra",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Technical Program Chair",
    track: "Communication Systems",
    category: "chairs"
  },
  {
    name: "Dr. Anup Kumar Sharma",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Technical Program Chair",
    track: "Sensors & Instrumentation",
    category: "chairs"
  },
  {
    name: "Dr. Shivendra Kumar Pandey",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Technical Program Chair",
    track: "MEMS & VLSI",
    category: "chairs"
  },
  {
    name: "Dr. Lalu Seban",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Technical Program Chair",
    track: "AI & Soft Computing",
    category: "chairs"
  },
  {
    name: "Prof. S. H. Laskar",
    designation: "Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Technical Program Chair",
    track: "Energy, Power Systems & Power Electronics",
    category: "chairs"
  },
  {
    name: "Dr. Vipin Chandra Pal",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Technical Program Chair",
    track: "Energy, Power Systems & Power Electronics",
    category: "chairs"
  },

  // Publication Chairs
  {
    name: "Dr. Sudipta Chakraborty",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Publication Chair",
    category: "chairs"
  },
  {
    name: "Dr. Ripon Patgiri",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Publication Chair",
    category: "chairs"
  },
  {
    name: "Dr. Sushant Negi",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Publication Chair",
    category: "chairs"
  },

  // Publicity Chairs
  {
    name: "Dr. R. Murugan",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Publicity Chair",
    category: "chairs"
  },
  {
    name: "Dr. Biplab Das",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Publicity Chair",
    category: "chairs"
  },
  {
    name: "Dr. Manas K. Bera",
    designation: "Associate Professor",
    affiliation: "National Institute of Technology Rourkela",
    role: "Publicity Chair",
    category: "chairs"
  },

  // Hospitality Chairs
  {
    name: "Dr. Ujjal Chakraborty",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Hospitality Chair",
    category: "chairs"
  },
  {
    name: "Dr. Chinmay Kumar Sahoo",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar",
    role: "Hospitality Chair",
    category: "chairs"
  },

  // TECHNICAL PROGRAM COMMITTEE MEMBERS
  { name: "Dr. Ashish Kumar", designation: "TPC Member", affiliation: "NIT Raipur", category: "tpc" },
  { name: "Dr. Risha Mal", designation: "TPC Member", affiliation: "IIT Guwahati", category: "tpc" },
  { name: "Dr. Nikhil Deep Gupta", designation: "TPC Member", affiliation: "VNIT Nagpur", category: "tpc" },
  { name: "Dr. Prabhat Kumar Sharma", designation: "TPC Member", affiliation: "VNIT Nagpur", category: "tpc" },
  { name: "Dr. Shashi Bhushan Singh", designation: "TPC Member", affiliation: "NIT Kurukshetra", category: "tpc" },
  { name: "Dr. Chagan Charan", designation: "TPC Member", affiliation: "NIT Kurukshetra", category: "tpc" },
  { name: "Dr. Pankaj Verma", designation: "TPC Member", affiliation: "NIT Kurukshetra", category: "tpc" },
  { name: "Dr. Gaurav Verma", designation: "TPC Member", affiliation: "NIT Kurukshetra", category: "tpc" },
  { name: "Dr. Shweta Meena", designation: "TPC Member", affiliation: "NIT Kurukshetra", category: "tpc" },
  { name: "Dr. Nitin Singh", designation: "TPC Member", affiliation: "MNNIT Allahabad", category: "tpc" },
  { name: "Dr. Dipayan Guha", designation: "TPC Member", affiliation: "MNNIT Allahabad", category: "tpc" },
  { name: "Dr. Richa Negi", designation: "TPC Member", affiliation: "MNNIT Allahabad", category: "tpc" },
  { name: "Dr. Deepak Kumar", designation: "TPC Member", affiliation: "MNNIT Allahabad", category: "tpc" },
  { name: "Dr. Kapil Chauhan", designation: "TPC Member", affiliation: "MNNIT Allahabad", category: "tpc" },
  { name: "Dr. V. K. Gaur", designation: "TPC Member", affiliation: "MNNIT Allahabad", category: "tpc" },
  { name: "Dr. Omkar Yadav", designation: "TPC Member", affiliation: "NIT Durgapur", category: "tpc" },
  { name: "Dr. Manika Saha", designation: "TPC Member", affiliation: "NIT Durgapur", category: "tpc" },
  { name: "Dr. Vinay Pratap Singh", designation: "TPC Member", affiliation: "MNIT Jaipur", category: "tpc" },
  { name: "Dr. Ritu Sharma", designation: "TPC Member", affiliation: "MNIT Jaipur", category: "tpc" },
  { name: "Dr. Sunanda Sinha", designation: "TPC Member", affiliation: "MNIT Jaipur", category: "tpc" },
  { name: "Dr. Farhad Ilahi Bakhsh", designation: "TPC Member", affiliation: "NIT Srinagar", category: "tpc" },
  { name: "Dr. Amit Kumar", designation: "TPC Member", affiliation: "NIT Srinagar", category: "tpc" },
  { name: "Dr. Om Hari Gupta", designation: "TPC Member", affiliation: "NIT Jamshedpur", category: "tpc" },
  { name: "Dr. Swagatadeb Sahoo", designation: "TPC Member", affiliation: "NIT Jamshedpur", category: "tpc" },
  { name: "Dr. Veer Pratap Meena", designation: "TPC Member", affiliation: "NIT Jamshedpur", category: "tpc" },
  { name: "Dr. Saurabh Kumar Pandey", designation: "TPC Member", affiliation: "IIT Patna", category: "tpc" },
  { name: "Dr. Jagannath Malik", designation: "TPC Member", affiliation: "IIT Patna", category: "tpc" },
  { name: "Prof. Kamaljit Rangra", designation: "Professor", affiliation: "IIT Jodhpur", category: "tpc" },
  { name: "Dr. Shyam Kamal", designation: "TPC Member", affiliation: "IIT BHU", category: "tpc" },
  { name: "Dr. Yanumula Venkata Karteek", designation: "TPC Member", affiliation: "IIT Mandi", category: "tpc" },
  { name: "Dr. Manas Kumar Bera", designation: "TPC Member", affiliation: "NIT Rourkela", category: "tpc" },
  { name: "Dr. Monalisa Pattnaik", designation: "TPC Member", affiliation: "NIT Rourkela", category: "tpc" },
  { name: "Dr. Sougata Kumar Kar", designation: "TPC Member", affiliation: "NIT Rourkela", category: "tpc" },
  { name: "Dr. Bapi Debnath", designation: "TPC Member", affiliation: "REVA University", category: "tpc" },
  { name: "Dr. Shruti Pandey", designation: "TPC Member", affiliation: "Missouri University of Science and Technology, USA", category: "tpc" },
  { name: "Dr. Raman Singh", designation: "TPC Member", affiliation: "University of West of Scotland, UK", category: "tpc" },
  { name: "Dr. Sunil Kumar Singla", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Vikram Chopra", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Ruchika Mehta", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Dipjyoti Das", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Souvik Ganguli", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Manoj Badoni", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Surya Prakash", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Mukesh Singh", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Sahaj Saxena", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Swati Sondhi", designation: "TPC Member", affiliation: "Thapar University, Punjab", category: "tpc" },
  { name: "Dr. Shitla Prasad", designation: "TPC Member", affiliation: "Galgotias University", category: "tpc" },
  { name: "Dr. Komal Agrawal", designation: "TPC Member", affiliation: "Galgotias University", category: "tpc" },
  { name: "Dr. Navdeep Singh", designation: "TPC Member", affiliation: "MMMUT Gorakhpur", category: "tpc" },
  { name: "Dr. Awadhesh Kumar", designation: "TPC Member", affiliation: "MMMUT Gorakhpur", category: "tpc" },
  { name: "Dr. Vivek Patel", designation: "TPC Member", affiliation: "MMMUT Gorakhpur", category: "tpc" },
  { name: "Dr. Arvind Yadav", designation: "TPC Member", affiliation: "Parul University", category: "tpc" },
  { name: "Dr. Amrita Sinha", designation: "TPC Member", affiliation: "Bakhtiyarpur College of Engineering, Patna", category: "tpc" },
  { name: "Dr. Pankaj Pratap Singh", designation: "TPC Member", affiliation: "Central Institute of Technology Kokrajhar", category: "tpc" },
  { name: "Dr. Anish Ahmad", designation: "TPC Member", affiliation: "Tezpur University", category: "tpc" },
  { name: "Dr. Soumya Samanta", designation: "TPC Member", affiliation: "Tezpur University", category: "tpc" },
  { name: "Dr. Utkal Mehta", designation: "TPC Member", affiliation: "The University of the South Pacific, Fiji", category: "tpc" },
  { name: "Dr. Soumesh Chatterjee", designation: "TPC Member", affiliation: "Nirma University, Ahmedabad", category: "tpc" },
  { name: "Dr. Khadim Moin Siddiqui", designation: "TPC Member", affiliation: "SR Institute of Management & Technology", category: "tpc" },
  { name: "Dr. Girraj Sharma", designation: "TPC Member", affiliation: "JECRC University, Jaipur", category: "tpc" },
  { name: "Dr. Akshaya Kumar Pati", designation: "TPC Member", affiliation: "KIIT University, Bhubaneshwar", category: "tpc" },
  { name: "Dr. Sraddhanjali Mohapatra", designation: "TPC Member", affiliation: "KIIT University, Bhubaneshwar", category: "tpc" },
  { name: "Dr. Rashmita Lenka", designation: "TPC Member", affiliation: "KIIT University, Bhubaneshwar", category: "tpc" },
  { name: "Dr. Tejaswini Kar", designation: "TPC Member", affiliation: "KIIT University, Bhubaneshwar", category: "tpc" },
  { name: "Dr. Jitendra Kumar Behara", designation: "TPC Member", affiliation: "Vellore Institute of Technology", category: "tpc" },
  { name: "Dr. Himadri Lala", designation: "TPC Member", affiliation: "Vellore Institute of Technology", category: "tpc" },
  { name: "Dr. Mithu Sarkar", designation: "TPC Member", affiliation: "Vellore Institute of Technology", category: "tpc" },
  { name: "Dr. Bhuvaneswari. M.", designation: "TPC Member", affiliation: "Vellore Institute of Technology", category: "tpc" },
  { name: "Dr. Jaiverdhan", designation: "TPC Member", affiliation: "NIT Uttarakhand", category: "tpc" },
  { name: "Dr. Atul Kumar Sharma", designation: "TPC Member", affiliation: "Government Engineering College Ajmer", category: "tpc" },
  { name: "Prof. Shahar Kvatinsky", designation: "Professor", affiliation: "Israel Institute of Technology, Haifa", category: "tpc" },
  { name: "Dr. Axay Mehta", designation: "TPC Member", affiliation: "IITRAM, Gujarat", category: "tpc" },
  { name: "Dr. R. Murugan", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Badal Soni", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Bijit Choudhari", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Prof. Binoy Krishna Roy", designation: "Professor", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Avadh Pati", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Ramanujam Ge", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Lalu Seban", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Shivendra Kumar Pandey", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Ranjay Hazra", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Devendra Singh Gurjar", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Arun Kumar Sunaniya", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Koena Mukherjee", designation: "TPC Member", affiliation: "NIT Silchar", category: "tpc" },
  { name: "Dr. Pankaj Saha", designation: "TPC Member", affiliation: "VTT Technical Research Center, Finland", category: "tpc" },
  { name: "Dr. Anirudh Nath", designation: "TPC Member", affiliation: "IIEST Shibpur", category: "tpc" },
  { name: "Dr. Suparna Maity", designation: "TPC Member", affiliation: "GNIT, Kolkata", category: "tpc" },
  { name: "Dr. Kali Prasanna Swain", designation: "TPC Member", affiliation: "Trident Institute of Engineering & Technology", category: "tpc" },
  { name: "Dr. Jnmejaya Rout", designation: "TPC Member", affiliation: "Sarang Engineering College", category: "tpc" },
  { name: "Dr. Debasish Nath", designation: "TPC Member", affiliation: "DY Patil University, Maharashtra", category: "tpc" },
  { name: "Dr. Manas Ranjan Sethi", designation: "TPC Member", affiliation: "GIFT Engineering College, Bhubaneshwar", category: "tpc" },
  { name: "Dr. Tunirani Nayak", designation: "TPC Member", affiliation: "VSSUT, Odisha", category: "tpc" },
  { name: "Dr. Soumya Sundar Pattanayak", designation: "TPC Member", affiliation: "Manipal Academy of Higher Education", category: "tpc" },
  { name: "Dr. Dhrubajyoti Bora", designation: "TPC Member", affiliation: "Symbiosis International University", category: "tpc" },
  { name: "Dr. Manoj Kumawat", designation: "TPC Member", affiliation: "NIT Delhi", category: "tpc" },
  { name: "Dr. S. Kanagalakshmi", designation: "TPC Member", affiliation: "NIT Calicut", category: "tpc" },
  { name: "Dr. Albena Mihovska", designation: "TPC Member", affiliation: "SmartAvatar B.V., Netherlands", category: "tpc" },
  { name: "Dr. Navin Kumar", designation: "TPC Member", affiliation: "Amrita Vishwa Vidyapeetham, Bengaluru", category: "tpc" },
  { name: "Dr. Sukwinder Singh", designation: "TPC Member", affiliation: "NIT Jalandhar", category: "tpc" },
  { name: "Dr. Krishanu Nath", designation: "TPC Member", affiliation: "NIT Jalandhar", category: "tpc" },
  { name: "Dr. Jiwanjot Singh", designation: "TPC Member", affiliation: "NIT Hamirpur", category: "tpc" },
  { name: "Dr. Ram Niwash Mahia", designation: "TPC Member", affiliation: "NIT Hamirpur", category: "tpc" },
  { name: "Dr. Kalimuddin Mondal", designation: "TPC Member", affiliation: "Saveetha Institute of Medical And Technical Science", category: "tpc" },
  { name: "Dr. Rinku Rabidas", designation: "TPC Member", affiliation: "Assam University, Silchar", category: "tpc" },
  { name: "Dr. Prakash.M.", designation: "TPC Member", affiliation: "NIT Nagaland", category: "tpc" }
];
