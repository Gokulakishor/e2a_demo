export interface Speaker {
  id: string;
  name: string;
  designation: string;
  affiliation: string;
  image: string;
  bio: string;
  type: "Keynote" | "Plenary" | "Invited";
}

export const speakersData: Speaker[] = [
  {
    id: "1",
    name: "Dr. Jane Doe",
    designation: "Professor",
    affiliation: "Massachusetts Institute of Technology (MIT)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Dr. Doe is a renowned researcher in the field of VLSI design and quantum computing. She has over 150 publications in top-tier IEEE journals.",
    type: "Keynote",
  },
  {
    id: "2",
    name: "Dr. John Smith",
    designation: "Director of AI Research",
    affiliation: "Google DeepMind",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "Dr. Smith leads a core team focusing on automation in machine learning processes. His recent work revolves around intelligent control systems.",
    type: "Keynote",
  },
  {
    id: "3",
    name: "Prof. Alan Turing",
    designation: "Chair, Dept. of Electronics",
    affiliation: "Stanford University",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Prof. Turing specializes in next-generation communication networks and has been instrumental in drafting the initial protocols for 6G.",
    type: "Plenary",
  }
];
