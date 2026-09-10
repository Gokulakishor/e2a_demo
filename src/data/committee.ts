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
    designation: "Head of RSM Team",
    affiliation: "LIRMM, CNRS / University of Montpellier, France",
    role: "Honorary Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_face,w_400,h_400,q_auto/v1783739810/special_cibveh.jpg"
  }
];

export const generalChairsData: CommitteeMember[] = [
  {
    name: "Prof. Xiaozhi Gao",
    designation: "Professor",
    affiliation: "School of Computing, Faculty of Science, Forestry and Technology",
    role: "General Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/v1780617699/gao_w4wczp.jpg"
  },
  {
    name: "Dr. Jayasree Chakraborty",
    designation: "Assistant Attending",
    affiliation: "Memorial Sloan Kettering Cancer Center",
    role: "General Chair",
    image: "https://res.cloudinary.com/dprjiwgfo/image/upload/v1780617998/jaya_zhjhub.jpg"
  },
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
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Silchar, India",
    role: "Organizing Chair\nFinance Chair",
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

export const publicationChairsData = [
  { name: "Dr. Sudipta Chakraborty", affiliation: "EIE Dept, NIT Silchar" },
  { name: "Dr. Koena Mukherjee", affiliation: "NIT Puducherry" },
  { name: "Dr. Ranjay Hazra", affiliation: "EIE Dept, NIT Silchar" }
];

export const publicityChairsData: CommitteeMember[] = [
  {
    name: "Dr. R. Murugan",
    designation: "Assistant Professor",
    affiliation: "National Institute of Technology Puducherry, India",
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
  { name: "Dr. Subhra Sarma", affiliation: "VIT Vellore" },
  { name: "Dr. Ram Niwash Mahia", affiliation: "National Institute of Technology, Hamirpur" },
  { name: "Prof. Rohini V", affiliation: "CHRIST (Deemed to be University) Bangalore" },
  { name: "Dr. Vivekanand Ilango", affiliation: "National Engineering College, Kovilpatti" },
  { name: "Dr. Abhishek Ranjan", affiliation: "Govt. Engg. College Bhojpur" },
  { name: "Dr. Satyajit Das", affiliation: "Barak Valley Engineering College (BVEC), Sribhumi" },
  { name: "Dr. Bhuvaneswari M", affiliation: "VIT Vellore" },
  { name: "Dr. M. Venkata Krishna", affiliation: "Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad" },
  { name: "Jyothi Gupta", affiliation: "CHRIST (Deemed to be University) Bangalore" },
  { name: "Swati Sondhi", affiliation: "Thapar Institute of Engineering and Technology, Patiala, Punjab" },
  { name: "Sonam Mittal", affiliation: "B K Birla Institute of Engineering & Technology, CEERI Road, Rajasthan" },
  { name: "Dr Chandra J", affiliation: "CHRIST (Deemed to be University) Bangalore" },
  { name: "Dr. Himadri Lala", affiliation: "VIT Vellore" },
  { name: "Dr Harishchander Anandaram", affiliation: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu" },
  { name: "Dr. Tejinder Kaur", affiliation: "Chandigarh University" },
  { name: "Dr. Namrata Saxena", affiliation: "Swami Keshvanand Institute of Technology, Jaipur" },
  { name: "Quang-Vinh Dang", affiliation: "British University Vietnam" },
  { name: "Lloyds Raja", affiliation: "NIT Patna" },
  { name: "Dr. Mohd. Nadeem", affiliation: "Shri Ramswaroop Memorial University, Lucknow" },
  { name: "Y V R Naga Pawan", affiliation: "Anurag Engineering College, Telangana" },
  { name: "Dr. Siva Balan R V", affiliation: "CHRIST (Deemed to be University) Bangalore" },
  { name: "Dr. V. Deepika", affiliation: "CVR College of Engineering, Telangana" },
  { name: "Dr. Vishal Shrivastava", affiliation: "Arya College of Engineering & I.T., Jaipur" },
  { name: "Dr. Tejaswini Kar", affiliation: "KIIT Deemed to be University, Bhubaneswar" },
  { name: "Girraj Sharma", affiliation: "Jaipur Engineering College and Research Centre" },
  { name: "Dr. Pratik Goswami", affiliation: "Yeungnam University, South Korea" },
  { name: "Dr Reepu", affiliation: "University School of Business Chandigarh University" },
  { name: "Dr. Rasmita Lenka", affiliation: "KIIT Deemed to be University, Bhubaneswar" },
  { name: "Dr. Vahini Siruvoru", affiliation: "B V Raju Institute of Technology, Narsapur" },
  { name: "Dr. Khadim Moin Siddiqui", affiliation: "SR Institute of Management & Technology, Lucknow" },
  { name: "Dr. Subhajit Das", affiliation: "CSIR - Central Glass & Ceramic Research Institute, West Bengal" },
  { name: "Dr. Shashi Raj K", affiliation: "Dayananda Sagar College of Engineering, Bengaluru" },
  { name: "Dr. Shrikant J. Honade", affiliation: "Chh. Shahu College of Engineering, Aurangabad" },
  { name: "Dr. NAVDEEP SINGH", affiliation: "MMMUT Gorakhpur" },
  { name: "Krishnendu Rarhi", affiliation: "Institute of Engineering and Management Kolkata" },
  { name: "Dr. Kaliprasanna Swain", affiliation: "Trident Academy of Technology, Bhubaneswar" },
  { name: "Dr. Radhika Gour", affiliation: "IIIT Allahabad" },
  { name: "Dr. Anushmita Pathak", affiliation: "East West College of Engineering Bengaluru" },
  { name: "K.Alfoni Jose", affiliation: "Dadi Institute of Engineering & Technology, Visakhapatnam" },
  { name: "Dr. Neeraj Gupta", affiliation: "Amity University Haryana" },
  { name: "Dr. Naiwrita Dey", affiliation: "RCC Institute of Information Technology Kolkata" },
  { name: "Dr. Krishnan Bandyopadhyay", affiliation: "Dayananda Sagar College of Engineering Bangalore" },
  { name: "Dr. Poli Lokeshwara Reddy", affiliation: "Anurag University Hyderabad" },
  { name: "Navjot Singh Talwandi", affiliation: "Chandigarh University" },
  { name: "Nivedita Swain", affiliation: "Silicon University Bhubaneswar" },
  { name: "Dr. Kalimuddin Mondal", affiliation: "Saveetha Institute of Medical and Technical Sciences, Chennai" },
  { name: "Raghavendra Kulkarni", affiliation: "Gandhi Institute of Technology & Management Telangana" },
  { name: "Dr. Manasa Ranjan Jena", affiliation: "Veer Surendra Sai University of Technology Burla" },
  { name: "Chitra Jalota", affiliation: "Manav Rachna International University, Faridabad" },
  { name: "Dr. Soumya Ranjan Mahapatro", affiliation: "VIT Chennai" },
  { name: "Athraa Juhi", affiliation: "Al-Naharin University, Baghdad" },
  { name: "Dr. Sheetla Prasad", affiliation: "Galgotias University" },
  { name: "Dr. Tapas Kumar Maji", affiliation: "Silicon University Bhubaneswar" },
  { name: "Dr. Sabyasachi Bhattacharyya", affiliation: "Assam Engineering College, Guwahati" },
  { name: "Dr. Manikandakumar M", affiliation: "CHRIST (Deemed to be University) Bangalore" },
  { name: "Dr Subba Rao Polamuri", affiliation: "Aditya University, Surampalem" },
  { name: "V. Elamaran", affiliation: "SASTRA Deemed University Thanjavur" },
  { name: "Umakanta Majhi", affiliation: "NIT Silchar" },
  { name: "Dr. Biswarup Ganguly", affiliation: "NIT Silchar" },
  { name: "Dr. Amritesh Kumar", affiliation: "NIT Silchar" },
  { name: "Dr. Debayan Sarkar", affiliation: "NIT Silchar" },
  { name: "Dr. Bijit Choudhuri", affiliation: "NIT Silchar" },
  { name: "Dr. Avadh Pati", affiliation: "NIT Silchar" },
  { name: "Dr. Ramanujam E", affiliation: "NIT Silchar" },
  { name: "Partha Kayal", affiliation: "NIT Silchar" },
  { name: "R. Murugan", affiliation: "NIT Puducherry" },
  { name: "Raji Gopalakrishnan Nair", affiliation: "" },
  { name: "Satish Kabde", affiliation: "" },
  { name: "Akshay Sharma", affiliation: "" }
];