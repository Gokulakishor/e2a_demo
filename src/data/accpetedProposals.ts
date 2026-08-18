
type Organizer={
    name: string;
    affilation : string;
}



export interface Accproposal{
code: string;
title:string;
organizer: Organizer[];
}

type SpecialSession = {
  code: string;       
  title: string;      
  organizers: Organizer[];
}
// Special sessions

export const session:SpecialSession[] =[
    {code: "SS1",
    
    title:"AI/ML- Driven Control and Navigation for Autonomous UAV Systems ",
    organizers:[{
      name: "Dr. Vasanthakumar Sekar",
    affilation : "Assistant Professor (Sr.), School of Computer Science and Engineering, VIT University, Chennai, India",
    },
    ],

    },
    {code: "SS2",
    
    title:"AI-Driven Technologies for Electric Vehicles, Smart Charging, and Future E-Mobility Systems",
    organizers:[{
      name: ": Dr. Amritesh Kumar",
    affilation : "Assistant Professor, Department of Electrical Engineering, NIT Silchar",
    },
    {
      name: "Dr. Suraj Gupta",
    affilation : "Assistant Professor, Department of Electrical Engineering, NIT Meghalaya",
    },

    ],

    },{code: "SS3",
    
    title:"Biometrics Authentication and Pattern Recognition ",
    organizers:[{
      name: "Dr. Biswajit Kar	",
    affilation : "Associate Professor",
    },
    {
      name: "Dr. Pankaj Pratap Singh",
    affilation : "Assistant Professor",
    },

    ],

    },{code: "SS4",
    
    title:"Explainable AI for Smart Healthcare, Industry 5.0 and Intelligent Automation",
    organizers:[{
      name: "Dr. R. Nidhya",
    affilation : "Professor, Department of Computer Science and Engineering",
    },
    {
      name: " Dr. M. Sreedevi",
    affilation : "Professor & HoD, Department of Computer Science and Engineering",
    },
    {
      name: " Mr T Thangarasan",
    affilation : "Assistant Professor, Department of Computer Science and Engineering",
    },

    ],

    },{
        code: "SS5",
    title:"Intelligent Automation (IA) ",
    organizers:[{
      name: "Dr. Koena Mukherjee",
    affilation : "Associate Professor in the Department of Electrical and Electronics Engineering at the National Institute of Technology (NIT) Puducherry",
    },
    {
      name: "Dr. Rajvir Kaur ",
    affilation : "Assistant Professor in the Department of Electrical and Electronics Engineering at the National Institute of Technology (NIT) Puducherry",
    },
    {
      name: "Dr. Bijukumar B.",
    affilation : "Assistant Professor at the National Institute of Technology Puducherry",
    },

    ],

    },
    // {code: "SS1",
    
    // title:"wa",
    // organizers:[{
    //   name: "",
    // affilation : "",
    // },
    // {
    //   name: "",
    // affilation : "",
    // },

    // ],

    // },{code: "SS1",
    
    // title:"wa",
    // organizers:[{
    //   name: "",
    // affilation : "",
    // },
    // {
    //   name: "",
    // affilation : "",
    // },

    // ],

    // },{code: "SS1",
    
    // title:"wa",
    // organizers:[{
    //   name: "",
    // affilation : "",
    // },
    // {
    //   name: "",
    // affilation : "",
    // },

    // ],

    // },{code: "SS1",
    
    // title:"wa",
    // organizers:[{
    //   name: "",
    // affilation : "",
    // },
    // {
    //   name: "",
    // affilation : "",
    // },

    // ],

    // },{code: "SS1",
    
    // title:"wa",
    // organizers:[{
    //   name: "",
    // affilation : "",
    // },
    // {
    //   name: "",
    // affilation : "",
    // },

    // ],

    // },
]
