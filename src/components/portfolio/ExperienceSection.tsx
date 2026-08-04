"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          My professional journey and the impact I&apos;ve made across different domains
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="flex gap-4 sm:gap-6">
              {/* Company Icon */}
              <div className="flex-shrink-0">
                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden relative`}
                >
                  {exp.companyLogo ? (
                    <img
                      src={exp.companyLogo}
                      alt={exp.company}
                      className="w-full h-full object-contain p-2 relative z-10"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-white/10 rounded-2xl" />
                      <Icon
                        icon={exp.companyIcon || "mdi:company"}
                        className="text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 relative z-10"
                        width={40}
                        height={40}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <Icon icon="mdi:calendar" className="w-4 h-4" />
                        <span>{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.companyUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                      >
                        {exp.company}
                      </a>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Icon icon="mdi:map-marker" className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Icon icon="mdi:check-circle" className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                         Technologies &amp; Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
