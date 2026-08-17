export interface Speaker {
  id: string;
  name: string;
  designation: string;
  affiliation: string;
  image: string;
  bio: string;
  type: string;
}

export const speakersData: Speaker[] = [
  {
    id: "1",
    name: "Dr. Ahmed Chemori",
    designation: "Head of RSM Team",
    affiliation: "LIRMM, CNRS / University of Montpellier, France",
    image: "/speaker/Dr.Ahmed Chemori.jpg",
    bio: "...",
    type: "Keynote",
  },
  {
    id: "2",
    name: "Prof. Xiaozhi Gao",
    designation: "Professor",
    affiliation:
      "School of Computing, Faculty of Science, Forestry and Technology",
    image: "/speaker/Prof.Xiaozhi Gao.jpg",
    bio: "...",
    type: "Keynote",
  },
  {
    id: "3",
    name: "Dr. Jayasree Chakraborty",
    designation: "Assistant Attending",
    affiliation: "Memorial Sloan Kettering Cancer Center",
    image: "/speaker/Dr.Jayasree Chakraborty.jpg",
    bio: "...",
    type: "Keynote",
  },
  {
    id: "4",
    name: "Dr. Priyanka Jain",
    designation:
      "Scientist 'F' & Head, Neurocognitive AI Group, Associate Director",
    affiliation:
      "Centre for Development of Advanced Computing (C-DAC), Delhi",
    image: "/speaker/priyanka-jain.jpg",
    bio: "...",
    type: "Keynote",
  },
];