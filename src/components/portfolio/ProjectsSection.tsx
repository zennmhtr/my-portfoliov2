"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Web Based Organization Structured Employee",
    subtitle: "Structured Organization & HR Digitalization System",
    description: "A comprehensive web-based system for digitizing organizational structures at PT. Dharma Controlcable Indonesia, featuring dynamic org chart management, competency matrix tracking, job description management, and a multi-level digital approval workflow.",
    features: [
      "Dynamic organization chart editor with drag-and-drop box management",
      "Multi-level digital approval workflow (Prepared By, Checked By, Approved By) for organizational changes",
      "Competency matrix (Matriks Skill) management per department with editable skill levels",
      "Job description management with structured responsibilities, accountabilities, and competency requirements",
      "Change request system with real-time status tracking for SO and job description updates",
      "Role-based access control for staff, department heads, directors, and system admins",
      "Digital signature integration for approval documents",
      "Export organizational structure and job descriptions to PDF format",
      "SO Bagian Editor for managing department-level organizational structures",
      "MongoDB-based data persistence with cross-device synchronization",
    ],
    deliverables: [
      "Fully functional organization structure digitalization system deployed on production server",
      "Dynamic org chart with 35% improved efficiency in structural change processing",
      "Multi-level approval workflow reducing manual approval time by 50%",
      "Competency matrix module for tracking employee skill levels across departments",
      "Job description management system with version control and approval history",
      "Department-level SO editor supporting 12+ departments at PT. Dharma Controlcable Indonesia",
      "Admin dashboard for managing users, roles, and organizational data",
      "Digital signature system integrated into approval documents",
      "Mobile-responsive interface accessible from any device",
      "REST API backend with JWT authentication and MongoDB database",
    ],
    tech: ["React.js", "Javascript", "Node.js", "Tailwind CSS", "MongoDB", "Alibaba Cloud Server", "Deployment Application", "REST API"],
    github: "https://github.com/zennmhtr/",
    live: "https://new-so.dharma-dcci.co.id/",
    gradient: "from-[#23A393] to-[#20716A]",
    status: "Development",
    category: "Web-Based System Application",
    highlight: "Featured",
    timeline: "3 months",
    clientType: "Cable & Battery Company",
    role: "Full-Stack Web Developer",
  },
  {
    title: "Web Based Attendance System Student Intern",
    subtitle: "GPS-Enabled Attendance & Reporting System",
    description: "A digital attendance system that integrates GPS validation to ensure real-time attendance tracking of student interns at company locations, with automated reporting for performance evaluation.",
    features: [
      "Real-time GPS location validation to verify student presence at company locations",
      "Automated reporting module for attendance, productivity, and compliance reports",
      "Shift management system with configurable check-in/check-out windows",
      "Push notifications via Firebase Cloud Messaging for attendance reminders",
      "Interactive map integration using Leaflet.js for location visualization",
      "Role-based access control for students, supervisors, and admins",
      "Export reports to PDF and Excel formats",
      "Student journal and activity logging",
    ],
    deliverables: [
      "Fully functional attendance system deployed on production",
      "GPS validation system with 30% increased data accuracy",
      "Automated reporting for internship performance evaluation",
      "Admin dashboard for managing students and workshops",
      "Supervisor interface for monitoring attendance and generating reports",
      "Student attendance history and activity logs",
      "Mobile-responsive interface for on-site attendance",
      "Real-time location tracking and verification",
    ],
    tech: ["Laravel", "Typescript", "Inertia.js", "Tailwind CSS", "MySQL", "Leaflet.js", "Firebase Cloud Messaging", "REST API", "GPS Integration"],
    github: "https://github.com/zennmhtr/attendance_intern_student",
    live: "https://prakerin-smk-am.my.id/",
    gradient: "from-[#1EAFED] to-[#53CBF3]",
    status: "Completed",
    category: "Web Application",
    highlight: "Featured",
    timeline: "3 months",
    clientType: "Educational Institution",
    role: "Full-Stack Web Developer",
  },
  {
    title: "Employee Performance Appraisal System (AHP Method)",
    subtitle: "Decision Support System for Employee Evaluation",
    description: "A decision-support system implementing Analytical Hierarchy Process (AHP) methodology to evaluate employees with structured scoring criteria, enabling consistent performance assessments.",
    features: [
      "AHP algorithm implementation for multi-criteria decision making",
      "Structured scoring criteria for objective evaluation",
      "Performance comparison across multiple employees",
      "Visualization of evaluation results with charts",
      "Historical data tracking for performance trends",
      "Customizable criteria weights based on organizational needs",
      "Report generation for management review",
    ],
    deliverables: [
      "Decision-support system with AHP methodology",
      "Structured workflow for consistent performance assessments",
      "Data-driven insights for management decisions",
      "User-friendly interface for evaluators",
      "Exportable evaluation reports",
    ],
    tech: ["Laravel", "Blade", "PHP", "AHP Algorithm", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Chart.js" , "Prototype Development"],
    github: "https://github.com/zennmhtr/ahp_performance_assessment",
    live: "#",
    gradient: "from-orange-500 to-red-500",
    status: "Completed",
    category: "Decision Support System",
    highlight: false,
    timeline: "3 months",
    clientType: "Company Transportation",
    role: "Full-Stack Web Developer",
  },
  {
    title: "Web Based Attendance System Employee (Facial Recognition & GPS)",
    subtitle: "Facial Recognition & GPS Enabled Attendance System",
    description: "A secure attendance system integrating facial recognition technology to automate clock-in/out validation, improving verification accuracy and reducing manual attendance processing.",
    features: [
      "Facial recognition integration for automated clock-in/out validation",
      "Real-time face detection and matching algorithms",
      "Employee database management with photo storage",
      "Attendance history tracking and reporting",
      "Late arrival and early departure detection",
      "Admin dashboard for monitoring and oversight",
      "Export attendance data to multiple formats",
    ],
    deliverables: [
      "Secure attendance system with facial recognition",
      "Improved verification accuracy for clock-in/out validation",
      "Production-ready Laravel application",
      "Admin dashboard for attendance management",
      "Employee attendance history and reporting",
      "Employee attendance with camera-based validation & GPS location tracking",
      "Technical documentation for system maintenance",
    ],
    tech: ["Laravel", "Blade", "PHP", "Facial Recognition API", "GPS Featured", "REST API", "MySQL", "JavaScript", "Leaflet.js", "HTML5", "CSS3", "Bootstrap", "Location Tracker"],
    github: "https://github.com/zennmhtr/attendance_fr_loct",
    live: "https://agungtirtalestari.my.id/",
    gradient: "from-purple-500 to-violet-500",
    status: "Completed",
    category: "Web Application",
    highlight: "Featured",
    timeline: "3 months",
    clientType: "Company Transportation",
    role: "Full-Stack Web Developer",
  },
  {
    title: "Web-Based New Student Admission System (PPDB Online)",
    subtitle: "Online Student Registration & Selection System",
    description: "An online student admission system developed for SMK Bina Karya 2 Karawang that streamlines the entire enrollment process. The platform allows prospective students to register, submit documents, and select majors without visiting the school, while providing administrators with efficient workflow management tools.",
    features: [
      "Online registration form with document upload capabilities",
      "Major selection workflow for prospective students",
      "Admin review and verification dashboard",
      "Data synchronization for 250+ registered students",
      "Automated registration status tracking",
      "Document validation and approval system",
      "PDF generation for acceptance letters",
      "Real-time registration statistics and reporting"
    ],
    deliverables: [
      "Scalable CodeIgniter 3 web application",
      "Complete registration and verification workflow",
      "Admin panel for managing student applications",
      "Data synchronization system for enrollment",
      "Technical documentation for system maintenance",
      "Security and optimization implementation"
    ],
    tech: ["CodeIgniter 3", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap", "REST API", "TCPDF"],
    github: "https://github.com/zennmhtr/ppdb_smk_bk2",
    live: "#", 
    gradient: "from-pink-500 to-pink-800",
    status: "Completed",
    category: "Web Application",
    highlight: "Featured",
    timeline: "3 months",
    clientType: "Educational Institution",
    role: "PHP Developer"
  },
];

function getStatusStyle(status: string) {
  switch (status) {
    case "Live":
    case "Completed":
      return {
        badge: "bg-green-500/20 text-green-200 border border-green-400/30",
        dot: "bg-green-400",
      };
    case "Development":
    case "In Progress":
      return {
        badge: "bg-orange-500/20 text-orange-200 border border-orange-400/30",
        dot: "bg-orange-400",
      };
    default:
      return {
        badge: "bg-gray-500/20 text-gray-200 border border-gray-400/30",
        dot: "bg-gray-400",
      };
  }
}

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-5 md:top-20 right-2 md:right-16 w-12 sm:w-16 md:w-32 h-12 sm:h-16 md:h-32 bg-gradient-to-br from-purple-400/15 md:from-purple-400/20 to-pink-400/15 md:to-pink-400/20 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-5 md:bottom-20 left-2 md:left-16 w-16 sm:w-20 md:w-40 h-16 sm:h-20 md:h-40 bg-gradient-to-br from-blue-400/10 md:from-blue-400/15 to-cyan-400/10 md:to-cyan-400/15 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="hidden lg:block absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <SectionHeader
          tagText="Portfolio Showcase"
          tagIcon="solar:code-square-bold"
          heading="Projects Experience"
          description="Discover my latest work in web development, API integration, and digital innovation"
          showUnderline={true}
          centered={true}
        />

        {/* Projects List */}
        <div className="max-w-7xl mx-auto px-3 md:px-4 space-y-8 md:space-y-12 lg:space-y-16">
          {projects.map((project, index) => {
            const statusStyle = getStatusStyle(project.status);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl">

                  {/* ── Header ── */}
                  <div className={`relative bg-gradient-to-br ${project.gradient} p-4 sm:p-6 md:p-8 lg:p-10`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px] md:bg-[length:30px_30px]" />
                    </div>

                    {/* Floating icons */}
                    <div className="hidden md:block absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      {[
                        { icon: "logos:react", pos: { top: "15%", left: "80%" } },
                        { icon: "logos:nextjs-icon", pos: { top: "60%", right: "4%" } },
                        { icon: "logos:typescript-icon", pos: { bottom: "20%", left: "75%" } },
                        { icon: "logos:nodejs-icon", pos: { top: "25%", right: "15%" } },
                        { icon: "logos:tailwindcss-icon", pos: { bottom: "30%", left: "85%" } },
                        { icon: "logos:postgresql", pos: { top: "40%", right: "20%" } },
                        { icon: "simple-icons:langchain", pos: { bottom: "10%", left: "70%" } },
                        { icon: "logos:redis", pos: { top: "20%", right: "25%" } },
                        { icon: "logos:socket-io", pos: { bottom: "25%", left: "90%" } },
                        { icon: "logos:stripe", pos: { top: "30%", right: "30%" } },
                        { icon: "logos:vercel-icon", pos: { bottom: "15%", left: "65%" } },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-white text-2xl md:text-3xl"
                          style={item.pos}
                          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Icon icon={item.icon} width={24} height={24} className="md:w-8 md:h-8" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="relative z-10">
                      {/* Meta badges */}
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <motion.span
                          className="px-2.5 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs md:text-sm font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.category}
                        </motion.span>

                        {project.highlight && (
                          <motion.span
                            className="px-2.5 py-1.5 md:px-4 md:py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-200 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Icon icon="solar:star-bold" width={12} height={12} className="md:w-4 md:h-4" />
                            <span className="hidden sm:inline">{project.highlight}</span>
                          </motion.span>
                        )}

                        <motion.span
                          className={`px-2.5 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2 ${statusStyle.badge}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${statusStyle.dot} animate-pulse`} />
                          {project.status}
                        </motion.span>

                        <span className="px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                          {project.timeline}
                        </span>

                        <span className="hidden sm:inline-block px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                          {project.clientType}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="mb-6 md:mb-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-medium mb-3 md:mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
                          {project.description}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                        <Link
                          href={project.github}
                          className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg md:rounded-xl hover:bg-white/30 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                        >
                          <Icon icon="solar:code-bold" width={18} height={18} className="md:w-5 md:h-5" />
                          <span>View Repository</span>
                        </Link>
                        <Link
                          href={project.live}
                          className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white text-gray-900 rounded-lg md:rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                        >
                          <Icon icon="solar:arrow-up-outline" width={18} height={18} className="md:w-5 md:h-5" />
                          <span>Live Demo</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ── Details ── */}
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

                      {/* Features */}
                      <div>
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <div className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg md:rounded-xl">
                            <Icon icon="solar:settings-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                          </div>
                          <span>Key Features</span>
                        </h4>
                        <ul className="space-y-2.5 md:space-y-3">
                          {project.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                            >
                              <Icon icon="solar:check-circle-bold" className="text-green-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                              <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="mt-6 lg:mt-0">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <div className="p-1.5 md:p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg md:rounded-xl">
                            <Icon icon="solar:delivery-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                          </div>
                          <span>Deliverables</span>
                        </h4>
                        <ul className="space-y-2.5 md:space-y-3">
                          {project.deliverables.map((deliverable, deliverableIndex) => (
                            <motion.li
                              key={deliverableIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: deliverableIndex * 0.1 }}
                              className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                            >
                              <Icon icon="solar:box-bold" className="text-blue-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                              <span className="text-sm md:text-base leading-relaxed">{deliverable}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6 md:mt-8 lg:mt-12 pt-6 md:pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg md:rounded-xl">
                          <Icon icon="solar:code-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                        </div>
                        <span>Technology Stack</span>
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-2.5 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl text-xs md:text-sm font-medium border border-gray-200 dark:border-gray-600 hover:shadow-md md:hover:shadow-lg transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12 md:mt-16 lg:mt-20 px-4 mb-12"
        >
          <Link href="#contact">
            <motion.div
              className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 dark:border-purple-500/20 rounded-xl md:rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <Icon icon="solar:programming-bold" className="text-blue-500 dark:text-purple-400 w-5 h-5 md:w-6 md:h-6" />
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base text-center">
                Interested in working together? Let&apos;s create something amazing!
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
