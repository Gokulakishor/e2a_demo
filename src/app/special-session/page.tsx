"use client";

import { motion } from "framer-motion";
import { Presentation, Target, FileText, CheckCircle, Calendar, Users, Briefcase, Mail } from "lucide-react";
const acceptedSessions = [
  {
    id: 1,
    title: "AI/ML-Driven Control and Navigation for Autonomous UAV Systems",
    organizers: [
      {
        name: "Dr. Vasanthakumar Sekar",
        affiliation: "Assistant Professor (Sr.), School of Computer Science and Engineering, VIT University, Chennai, India ",
      },
      
    ],
  },

  {
    id: 2,
    title:
      "AI-Driven Technologies for Electric Vehicles, Smart Charging, and Future E-Mobility Systems",
    organizers: [
      {
        name: "Dr. Amritesh Kumar",
        affiliation: " Assistant Professor,epartment of Electrical Engineering, NIT Silchar, Assam, India",
      },
      {
        name: "Dr. Suraj Gupta",
        affiliation: "Assistant Professor,Department of Electrical Engineering, NIT Meghalaya, India",
      },
    ],
  },

  {
    id: 3,
    title: "Biometrics Authentication and Pattern Recognition",
    organizers: [
      {
        name: "Dr. Biswajit Kar",
        affiliation: "Central Institute of Technology Kokrajhar (CITK), Assam, India",
      },
      {
        name: "Dr. Pankaj Pratap Singh",
        affiliation: "Central Institute of Technology Kokrajhar (CITK), Assam, India",
      },
    ],
  },

  {
    id: 4,
    title:
      "Explainable AI for Smart Healthcare, Industry 5.0 and Intelligent Automation",
    organizers: [
      {
        name: "Dr. R. Nidhya",
        affiliation:
          "Professor, Department of Computer Science and Engineering, Madanapalle Institute of Technology & Science Deemed to be University",
      },
      {
        name: "Dr. M. Sreedevi",
        affiliation:
          "Professor & HoD, Department of Computer Science and Engineering, Madanapalle Institute of Technology & Science Deemed to be University",
      },
      {
        name: "Mr. T Thangarasan",
        affiliation:
          "Assistant Professor, Department of Computer Science and Engineering, Madanapalle Institute of Technology & Science Deemed to be University",
      },
    ],
  },

  {
    id: 5,
    title: "Intelligent Automation",
    organizers: [
      {
        name: "Dr. Koena Mukherjee",
        affiliation:
          "Associate Professor, Department of Electrical and Electronics Engineering, NIT Puducherry, India",
      },
      {
        name: "Dr. Rajvir Kaur",
        affiliation:
          "Assistant Professor, Department of Electrical and Electronics Engineering, NIT Puducherry, India",
      },
      {
        name: "Dr. Bijukumar B.",
        affiliation: "Assistant Professor,Department of Electrical Engineering NIT Puducherry, India",
      },
    ],
  },

  {
    id: 6,
    title:
      "Special Session on Applied AI/ML for Intelligent Electrical and Electronic Systems",
    organizers: [
      {
        name: "Dr. Asmita Bose",
        affiliation: "Assistant Professor, Department of Electrical Engineering NIT Durgapur",
      },
      {
        name: "Dr. Avishek Adhikary",
        affiliation: "Associate Professor,Department of Electrical Engineering IIT Bhilai",
      },
      {
        name: "Prof. Shubhojit Ghosh",
        affiliation: "Professor, Department of Electrical Engineering ,NIT Raipur",
      },
    ],
  },

  {
    id: 7,
    title:
      "ASCVA-UAV: Advances in Sensing, Control and Vision for Secure Autonomy in UAVs",
    organizers: [
      {
        name: "Dr. Deep Chandra Upadhyay",
        affiliation:
          "School of Electrical and Electronics Engineering, VIT Bhopal University",
      },
      {
        name: "Dr. Anurag Tiwari",
        affiliation:
          "School of Electrical and Electronics Engineering, VIT Bhopal University",
      },
      {
        name: "Dr. Gopal Singh",
        affiliation:
          "School of Electrical and Electronics Engineering, VIT Bhopal University",
      },
      {
        name: "Dr. Dipak Prasad",
        affiliation: "VIT Bhopal University, Bhopal, Madhya Pradesh",
      },
    ],
  },

  {
    id: 8,
    title:
      "Intelligence-Driven Signal and Image Processing for Secure, Intelligent, and Trustworthy VLSI Systems",
    organizers: [
      {
        name: "Dr. M. Suresh",
        affiliation:
          "School of Electrical and Electronics Engineering, VIT Bhopal University",
      },
      {
        name: "Dr. Vijay Birichha",
        affiliation: "SCAI, VIT Bhopal University",
      },
      {
        name: "Dr. Amit Kumar Singh",
        affiliation:
          "School of Electrical and Electronics Engineering, VIT Bhopal University",
      },
      {
        name: "Dr. Anurag Tiwari",
        affiliation: "VIT Bhopal University, Bhopal, Madhya Pradesh",
      },
    ],
  },

  {
    id: 9,
    title:
      "Engineering Trustworthy and Intelligent Autonomous Systems: Explainability, Safety, Security and Responsible Innovation",
    organizers: [
      {
        name: "Dr. Amit Verma",
        affiliation:
          "Associate Professor, School of Computer Science and Engineering and Advanced Centre of Research and Innovation (ACRI), CGC University, Mohali, Punjab, India",
      },
      {
        name: "Dr. Mukesh Kumar",
        affiliation:
          "Associate Professor, Department of Computer Applications, Chandigarh School of Business, CGC University, Mohali, Punjab, India",
      },
      {
        name: "Mr. Bineet Singh",
        affiliation:
          "Assistant Professor of Law, CGC University, Mohali, Punjab, India; Doctoral Researcher, Himachal Pradesh University, Shimla",
      },
    ],
  },

  {
    id: 10,
    title:
      "Learning-Enabled Control and Autonomous Decision-Making for Resilient Cyber-Physical Systems(LEAD-CPS)",
    organizers: [
      {
        name: "Dr. Ghousiya Begum K",
        affiliation:
          "Assistant Professor, School of Electrical and Electronics Engineering (SEEE), SASTRA Deemed to be University, India",
      },
      {
        name: "Dr. Hemavathi. N",
        affiliation:
          "Senior Assistant Professor, School of Electrical and Electronics Engineering (SEEE), SASTRA Deemed to be University, India",
      },
      {
        name: "Mr. Kannabhiran A",
        affiliation:
          "Assistant Professor, School of Electrical and Electronics Engineering (SEEE), SASTRA Deemed to be University, India",
      },
    ],
  },
];
export default function SpecialSessionPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 relative overflow-hidden">
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto,w_1600,h_900,q_auto,a_exif/v1779299287/DSC_6225_wnugff.jpg" 
            alt="NIT Silchar Campus" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white"
          >
            Call for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Special Sessions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            E2A 2027 invites proposals for Special Sessions focusing on emerging, interdisciplinary, and high-impact research topics.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute right-0 top-1/4 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-16">
          
          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-slate max-w-none text-justify"
          >
            <p className="text-lg leading-relaxed text-slate-700">
              The Organizing Committee of E2A 2027 invites proposals for Special Sessions (SS) to be held as part of the conference program. These sessions aim to complement the main technical tracks by focusing on emerging, interdisciplinary, and high-impact research topics. Special Sessions provide a platform for researchers and practitioners from academia, industry, and government organizations to present state-of-the-art developments, novel applications, and future directions in specialized domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit of SS */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Benefit of Special Sessions</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-justify">
                Special sessions provide the opportunity to focus in detail on particular emerging topics, which are not reflected in the list of conference tracks or represent specific working fields where researchers would like to meet and discuss advances.
              </p>
            </motion.div>

            {/* Special Session Organization */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Special Session Organization</h3>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Promoting the special session to potential authors</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Ensuring submitted papers are relevant to the topic</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Coordinating with the conference technical program committee</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Sending papers for review and receiving comments</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Chairing the special session during the conference</li>
              </ul>
            </motion.div>
          </div>

          {/* Proposal Content & Review Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Proposal Content</h3>
              </div>
              <p className="text-slate-600 mb-4 text-sm font-medium">Your special session proposal should include:</p>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span> Special session title and acronym</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span> Brief description (max 500 words)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span> Names, affiliations, emails, & short CV of the Proposer</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span> List of potential contributors and paper titles</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span> Rationale for organizing this session</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-8 shadow-lg text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 text-white rounded-xl">
                  <Presentation className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Paper Submission & Review</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-amber-400 font-semibold mb-2 text-sm">Paper Submission Process</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Papers submitted to special sessions will follow the same submission process, formatting guidelines, and peer review process as regular conference papers. Accepted papers will be published in the conference proceedings. At least one author must register.
                  </p>
                </div>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-2 text-sm">Review of the Proposal</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Proposals will be evaluated based on relevance, novelty, potential impact, and the organizers' qualifications. Accepted special sessions will be announced on the conference website.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Requirements & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border-l-4 border-l-rose-500 border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">Requirements</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-slate-100 rounded-md shrink-0"><CheckCircle className="w-4 h-4 text-slate-500" /></div>
                  <span>Minimum 5 accepted papers from ≥ 3 institutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-slate-100 rounded-md shrink-0"><CheckCircle className="w-4 h-4 text-slate-500" /></div>
                  <span>SS Chairs manage review (≥3 reviews/paper)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-slate-100 rounded-md shrink-0"><CheckCircle className="w-4 h-4 text-slate-500" /></div>
                  <span>Conflict of interest must be declared</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-slate-100 rounded-md shrink-0"><CheckCircle className="w-4 h-4 text-slate-500" /></div>
                  <span>Max 2 papers/author</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-slate-100 rounded-md shrink-0"><CheckCircle className="w-4 h-4 text-slate-500" /></div>
                  <span>Max 2 organizers/institute</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border-l-4 border-l-green-500 border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">Benefits</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-green-50 rounded-lg text-green-600 shrink-0"><Briefcase className="w-5 h-5" /></div>
                  <span className="leading-relaxed"><strong>1 free full registration</strong> per SS for one organizer (with ≥5 accepted and registered papers).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-green-50 rounded-lg text-green-600 shrink-0"><Users className="w-5 h-5" /></div>
                  <span className="leading-relaxed">At least one organizer is expected to register, attend, and chair the corresponding sessions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-green-50 rounded-lg text-green-600 shrink-0"><Target className="w-5 h-5" /></div>
                  <span className="leading-relaxed"><strong>Travel support</strong> to the organizer (one no.) of the SS to attend the conference will be provided – Rs. 5,000/- or the actual travel fare, whichever is lower.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Accepted Special Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold tracking-wide">
                E2A 2027
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                Accepted Special Sessions
              </h2>

              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Explore the special sessions accepted for E2A 2027, featuring
                emerging research areas and interdisciplinary topics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acceptedSessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Session number */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                      {String(session.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-slate-900 leading-snug group-hover:text-amber-700 transition-colors">
                    {session.title}
                  </h3>

                  {/* Organizers */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                      Organizers
                    </h4>

                    <div className="space-y-3">
                      {session.organizers.map((organizer, organizerIndex) => (
                        <div
                          key={organizerIndex}
                          className="border-l-2 border-amber-400 pl-4"
                        >
                          <p className="font-semibold text-slate-800">
                            {organizer.name}
                          </p>

                          <p className="text-sm text-slate-500 mt-0.5">
                            {organizer.affiliation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Important Dates & Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1E3A8A] to-indigo-900 rounded-3xl p-8 shadow-xl text-white flex flex-col md:flex-row gap-8 items-center justify-between"
          >
            <div className="w-full md:w-2/3 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Calendar className="w-7 h-7 text-amber-400" />
                Important Dates
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">Proposal Deadline</div>
                  <div className="font-mono text-lg font-semibold text-white/50 line-through decoration-rose-500 decoration-2">22.07.2026</div>
                  <div className="font-mono text-lg font-bold text-white/50 decoration-rose-500 decoration-2">31.08.2026</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">Notification</div>
                  <div className="font-mono text-lg font-semibold text-white/50 line-through decoration-rose-500 decoration-2">27.07.2026</div>
                  <div className="font-mono text-lg font-bold text-white/50 decoration-rose-500 decoration-2">05.08.2026</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">Paper Deadline</div>
                  <div className="font-mono text-lg font-semibold">14.09.2026</div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
              <Mail className="w-10 h-10 mx-auto text-amber-400 mb-4" />
              <h4 className="font-bold text-lg mb-2">More Information</h4>
              <p className="text-sm text-indigo-100 mb-4">For any questions or clarifications regarding special sessions, please contact:</p>
              <a href="mailto:e2a@ei.nits.ac.in" className="inline-block bg-white text-indigo-900 font-bold px-6 py-2 rounded-full hover:bg-amber-400 hover:text-indigo-950 transition-colors">
                e2a@ei.nits.ac.in
              </a>
            </div>
          </motion.div>

          {/* Format for Proposal Submission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mt-12"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Format for Proposal Submission</h3>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 font-mono text-sm text-slate-700 whitespace-pre-wrap overflow-x-auto selection:bg-primary/20">
{`Title of the Proposal:

A brief description of the proposed area (With significance):
(500 words max. Please mention how it is aligned to the conference and different with the existing tracks)

Details of Session Chairs/Organizers: Name, Photo, Brief bio (800 words max), Contact email
Organizer 1:
Organizer 2:
Organizer 3:
Organizer 4:

Technical Outline of the Session and Topics:
o xxx
o xxx
o xxx

Potential Contributing Authors (names, affiliations and emails), if available:
o xxx
o xxx
o xxx

Potential Reviewers (names, affiliations and emails, at least 20):
o xxx
o xxx
o xxx

Other Details (if any):
xxx`}
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`Title of the Proposal:\n\nA brief description of the proposed area (With significance):\n(500 words max. Please mention how it is aligned to the conference and different with the existing tracks)\n\nDetails of Session Chairs/Organizers: Name, Photo, Brief bio (800 words max), Contact email\nOrganizer 1:\nOrganizer 2:\nOrganizer 3:\nOrganizer 4:\n\nTechnical Outline of the Session and Topics:\no xxx\no xxx\no xxx\n\nPotential Contributing Authors (names, affiliations and emails), if available:\no xxx\no xxx\no xxx\n\nPotential Reviewers (names, affiliations and emails, at least 20):\no xxx\no xxx\no xxx\n\nOther Details (if any):\nxxx`);
                  alert("Format copied to clipboard!");
                }}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-primary transition-colors text-sm font-medium"
              >
                <FileText className="w-4 h-4" /> Copy Format
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
