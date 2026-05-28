export interface CommitteeMember {
  name: string;
  designation: string;
  affiliation: string;
  role: string;
  image?: string;
  email?: string;
}

export const patronData: CommitteeMember[] = [
  {
    name: "Prof. Dilip Kumar Baidya",
    designation: "Director",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Patron",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_300,h_300,q_auto/v1779298725/dilip_ddxs7f.jpg"
  }
];

export const honoraryChairData: CommitteeMember[] = [
  {
    name: "Dr. Ahmed Chemori",
    designation: "Research Director",
    affiliation: "LIRMM, CNRS / University of Montpellier, France",
    role: "Honorary Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto:faces,w_600,h_600,q_auto/v1779951079/ahmed2_pwg1q9.jpg"
  }
];

export const generalChairsData: CommitteeMember[] = [
  {
    name: "Dr. Shankar K.",
    designation: "Assistant Professor, Dept. of EIE",
    affiliation: "National Institute of Technology Silchar, India",
    role: "General Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_300,h_300/v1779298332/dr_dhankar_k_xb060u.jpg"
  },
  {
    name: "Dr. Vipin Chandra Pal",
    designation: "Assistant Professor, Dept. of EIE",
    affiliation: "National Institute of Technology Silchar, India",
    role: "General Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_300,h_300,q_auto/v1779298725/vipin_qo7dl7.jpg"
  }
];

export const convenorData: CommitteeMember[] = [
  {
    name: "Dr. Munmun Khanra",
    designation: "Head of Department, EIE",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Convenor",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_300,h_300/v1779298331/munmun_qxeyxx.jpg"
  }
];

export const organizingChairsData: CommitteeMember[] = [
  {
    name: "Dr. Anup Kumar Sharma",
    designation: "Assistant Professor (Also Financial Chair)",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Organizing Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_300,h_300/v1779298330/anup_urbmbx.jpg"
  },
  {
    name: "Dr. Shuprajhaa T.",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Organizing Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_300,h_300/v1779298331/shuprajhaa_rbghit.jpg"
  },
  {
    name: "Dr. Dhruba Jyoti Bora",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Organizing Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_300,h_300/v1779298331/dj_kicgyp.png"
  },
  {
    name: "Dr. Debasish Nath",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Organizing Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_300,h_300/v1779298332/debashish_nath_i8sxfr.png"
  }
];

export const publicationChairsData: string[] = [
  "Dr. Sudipta Chakraborty",
  "Dr. Koena Mukherjee",
  "Dr. Ranjay Hazra"
];

export const publicityChairsData: CommitteeMember[] = [
  {
    name: "Dr. R. Murugan",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Publicity Chair"
  },
  {
    name: "Dr. Biplab Das",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Publicity Chair"
  },
  {
    name: "Dr. Manas K. Bera",
    designation: "Associate Professor",
    affiliation: "National Institute of Technology Rourkela, India",
    role: "Publicity Chair"
  }
];

export const hospitalityChairsData: CommitteeMember[] = [
  {
    name: "Dr. Ujjal Chakraborty",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Hospitality Chair"
  },
  {
    name: "Dr. Chinmay Kumar Sahoo",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Hospitality Chair"
  }
];

export interface TPCMember {
  name: string;
  affiliation: string;
}

export const tpcData: TPCMember[] = [
  { name: "Dr. Ashish Kumar", affiliation: "NIT Raipur" },
  { name: "Dr. Risha Mal", affiliation: "IIT Guwahati" },
  { name: "Dr. Nikhil Deep Gupta", affiliation: "VNIT Nagpur" },
  { name: "Dr. Prabhat Kumar Sharma", affiliation: "VNIT Nagpur" },
  { name: "Dr. Shashi Bhushan Singh", affiliation: "NIT Kurukshetra" },
  { name: "Dr. Chagan Charan", affiliation: "NIT Kurukshetra" },
  { name: "Dr. Pankaj Verma", affiliation: "NIT Kurukshetra" },
  { name: "Dr. Gaurav Verma", affiliation: "NIT Kurukshetra" },
  { name: "Dr. Shweta Meena", affiliation: "NIT Kurukshetra" },
  { name: "Dr. Nitin Singh", affiliation: "MNNIT Allahabad" },
  { name: "Dr. Dipayan Guha", affiliation: "MNNIT Allahabad" },
  { name: "Dr. Richa Negi", affiliation: "MNNIT Allahabad" },
  { name: "Dr. Deepak Kumar", affiliation: "MNNIT Allahabad" },
  { name: "Dr. Kapil Chauhan", affiliation: "MNNIT Allahabad" },
  { name: "Dr. V. K. Gaur", affiliation: "MNNIT Allahabad" },
  { name: "Dr. Omkar Yadav", affiliation: "NIT Durgapur" },
  { name: "Dr. Manika Saha", affiliation: "NIT Durgapur" },
  { name: "Dr. Vinay Pratap Singh", affiliation: "MNIT Jaipur" },
  { name: "Dr. Ritu Sharma", affiliation: "MNIT Jaipur" },
  { name: "Dr. Sunanda Sinha", affiliation: "MNIT Jaipur" },
  { name: "Dr. Farhad Ilahi Bakhsh", affiliation: "NIT Srinagar" },
  { name: "Dr. Amit Kumar", affiliation: "NIT Srinagar" },
  { name: "Dr. Om Hari Gupta", affiliation: "NIT Jamshedpur" },
  { name: "Dr. Swagatadeb Sahoo", affiliation: "NIT Jamshedpur" },
  { name: "Dr. Veer Pratap Meena", affiliation: "NIT Jamshedpur" },
  { name: "Dr. Saurabh Kumar Pandey", affiliation: "IIT Patna" },
  { name: "Dr. Jagannath Malik", affiliation: "IIT Patna" },
  { name: "Prof. Kamaljit Rangra", affiliation: "IIT Jodhpur" },
  { name: "Dr. Shyam Kamal", affiliation: "IIT BHU" },
  { name: "Dr. Yanumula Venkata Karteek", affiliation: "IIT Mandi" },
  { name: "Dr. Manas Kumar Bera", affiliation: "NIT Rourkela" },
  { name: "Dr. Monalisa Pattnaik", affiliation: "NIT Rourkela" },
  { name: "Dr. Sougata Kumar Kar", affiliation: "NIT Rourkela" },
  { name: "Dr. Bapi Debnath", affiliation: "REVA University" },
  { name: "Dr. Shruti Pandey", affiliation: "Missouri University of Science and Technology, USA" },
  { name: "Dr. Raman Singh", affiliation: "University of West of Scotland, UK" },
  { name: "Dr. Sunil Kumar Singla", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Vikram Chopra", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Ruchika Mehta", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Dipjyoti Das", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Souvik Ganguli", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Manoj Badoni", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Surya Prakash", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Mukesh Singh", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Sahaj Saxena", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Swati Sondhi", affiliation: "Thapar University, Punjab" },
  { name: "Dr. Shitla Prasad", affiliation: "Galgotias University" },
  { name: "Dr. Komal Agrawal", affiliation: "Galgotias University" },
  { name: "Dr. Navdeep Singh", affiliation: "MMMUT Gorakhpur" },
  { name: "Dr. Awadhesh Kumar", affiliation: "MMMUT Gorakhpur" },
  { name: "Dr. Vivek Patel", affiliation: "MMMUT Gorakhpur" },
  { name: "Dr. Arvind Yadav", affiliation: "Parul University" },
  { name: "Dr. Amrita Sinha", affiliation: "Bakhtiyarpur College of Engineering, Patna" },
  { name: "Dr. Pankaj Pratap Singh", affiliation: "Central Institute of Technology Kokrajhar" },
  { name: "Dr. Anish Ahmad", affiliation: "Tezpur University" },
  { name: "Dr. Soumya Samanta", affiliation: "Tezpur University" },
  { name: "Dr. Utkal Mehta", affiliation: "The University of the South Pacific, Fiji" },
  { name: "Dr. Soumesh Chatterjee", affiliation: "Nirma University, Ahmedabad" },
  { name: "Dr. Khadim Moin Siddiqui", affiliation: "SR Institute of Management & Technology" },
  { name: "Dr. Girraj Sharma", affiliation: "JECRC University, Jaipur" },
  { name: "Dr. Akshaya Kumar Pati", affiliation: "KIIT University, Bhubaneshwar" },
  { name: "Dr. Sraddhanjali Mohapatra", affiliation: "KIIT University, Bhubaneshwar" },
  { name: "Dr. Rashmita Lenka", affiliation: "KIIT University, Bhubaneshwar" },
  { name: "Dr. Tejaswini Kar", affiliation: "KIIT University, Bhubaneshwar" },
  { name: "Dr. Jitendra Kumar Behara", affiliation: "Vellore Institute of Technology" },
  { name: "Dr. Himadri Lala", affiliation: "Vellore Institute of Technology" },
  { name: "Dr. Mithu Sarkar", affiliation: "Vellore Institute of Technology" },
  { name: "Dr. Bhuvaneswari. M.", affiliation: "Vellore Institute of Technology" },
  { name: "Dr. Jaiverdhan", affiliation: "NIT Uttarakhand" },
  { name: "Dr. Atul Kumar Sharma", affiliation: "Government Engineering College Ajmer" },
  { name: "Prof. Shahar Kvatinsky", affiliation: "Israel Institute of Technology, Haifa" },
  { name: "Dr. Axay Mehta", affiliation: "IITRAM, Gujarat" },
  { name: "Dr. R. Murugan", affiliation: "NIT Silchar" },
  { name: "Dr. Badal Soni", affiliation: "NIT Silchar" },
  { name: "Dr. Bijit Choudhari", affiliation: "NIT Silchar" },
  { name: "Prof. Binoy Krishna Roy", affiliation: "NIT Silchar" },
  { name: "Dr. Avadh Pati", affiliation: "NIT Silchar" },
  { name: "Dr. Ramanujam Ge", affiliation: "NIT Silchar" },
  { name: "Dr. Lalu Seban", affiliation: "NIT Silchar" },
  { name: "Dr. Shivendra Kumar Pandey", affiliation: "NIT Silchar" },
  { name: "Dr. Ranjay Hazra", affiliation: "NIT Silchar" },
  { name: "Dr. Devendra Singh Gurjar", affiliation: "NIT Silchar" },
  { name: "Dr. Arun Kumar Sunaniya", affiliation: "NIT Silchar" },
  { name: "Dr. Koena Mukherjee", affiliation: "NIT Silchar" },
  { name: "Dr. Pankaj Saha", affiliation: "VTT Technical Research Center, Finland" },
  { name: "Dr. Anirudh Nath", affiliation: "IIEST Shibpur" },
  { name: "Dr. Suparna Maity", affiliation: "GNIT, Kolkata" },
  { name: "Dr. Kali Prasanna Swain", affiliation: "Trident Institute of Engineering & Technology" },
  { name: "Dr. Jnmejaya Rout", affiliation: "Sarang Engineering College" },
  { name: "Dr. Debasish Nath", affiliation: "DY Patil University, Maharashtra" },
  { name: "Dr. Manas Ranjan Sethi", affiliation: "GIFT Engineering College, Bhubaneshwar" },
  { name: "Dr. Tunirani Nayak", affiliation: "VSSUT, Odisha" },
  { name: "Dr. Soumya Sundar Pattanayak", affiliation: "Manipal Academy of Higher Education" },
  { name: "Dr. Dhrubajyoti Bora", affiliation: "Symbiosis International University" },
  { name: "Dr. Manoj Kumawat", affiliation: "NIT Delhi" },
  { name: "Dr. S. Kanagalakshmi", affiliation: "NIT Calicut" },
  { name: "Dr. Albena Mihovska", affiliation: "SmartAvatar B.V., Netherlands" },
  { name: "Dr. Navin Kumar", affiliation: "Amrita Vishwa Vidyapeetham, Bengaluru" },
  { name: "Dr. Sukwinder Singh", affiliation: "NIT Jalandhar" },
  { name: "Dr. Krishanu Nath", affiliation: "NIT Jalandhar" },
  { name: "Dr. Jiwanjot Singh", affiliation: "NIT Hamirpur" },
  { name: "Dr. Ram Niwash Mahia", affiliation: "NIT Hamirpur" },
  { name: "Dr. Kalimuddin Mondal", affiliation: "Saveetha Institute of Medical And Technical Science" },
  { name: "Dr. Rinku Rabidas", affiliation: "Assam University, Silchar" },
  { name: "Dr. Prakash.M.", affiliation: "NIT Nagaland" }
];
