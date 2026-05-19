export interface Track {
  title: string;
  topics: string[];
}

export const tracksData: Track[] = [
  {
    title: "Track 1: Microelectronics & VLSI",
    topics: [
      "Device Modeling and Simulation",
      "Low Power VLSI Design",
      "Analog and Mixed Signal IC Design",
      "Testing and Verification"
    ]
  },
  {
    title: "Track 2: Signal & Image Processing",
    topics: [
      "Audio and Acoustic Signal Processing",
      "Biomedical Signal Processing",
      "Computer Vision and Pattern Recognition",
      "Machine Learning in Signal Processing"
    ]
  },
  {
    title: "Track 3: Control & Automation",
    topics: [
      "Linear and Non-linear Control",
      "Robotics and Intelligent Systems",
      "Industrial Automation",
      "Process Control"
    ]
  },
  {
    title: "Track 4: Power & Energy Systems",
    topics: [
      "Smart Grid Technologies",
      "Renewable Energy Systems",
      "Power Electronics and Drives",
      "Energy Storage Systems"
    ]
  },
  {
    title: "Track 5: Communication Systems",
    topics: [
      "Wireless and Mobile Communication",
      "Optical Communication and Networks",
      "5G and 6G Technologies",
      "Antenna and Microwave Engineering"
    ]
  },
  {
    title: "Track 6: Sensors & Instrumentation",
    topics: [
      "Advanced Sensor Technologies",
      "Biomedical Instrumentation",
      "Industrial Instrumentation",
      "Internet of Things (IoT) Sensors"
    ]
  }
];
