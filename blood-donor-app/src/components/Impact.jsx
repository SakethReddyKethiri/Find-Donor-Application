import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulseIcon, 
  ActivityIcon, 
  HandHelpingIcon, 
  ShieldIcon, 
  StarIcon, 
  FlagIcon, 
  GlobeIcon, 
  AwardIcon 
} from 'lucide-react';

const impactData = [
  {
    title: "Saving Lives in Critical Situations",
    description: "Blood donations are essential in emergencies such as accidents, surgeries, and trauma care. They help save lives by ensuring blood is available in critical situations.",
    icon: HeartPulseIcon
  },
  {
    title: "Strengthening Healthcare Systems",
    description: "Regular blood donations support hospitals in providing efficient care for surgeries, cancer treatments, and other medical needs, strengthening overall healthcare infrastructure.",
    icon: ActivityIcon
  },
  {
    title: "Fostering a Culture of Giving",
    description: "Blood donation encourages generosity and compassion, promoting a culture of selflessness within communities.",
    icon: HandHelpingIcon
  },
  {
    title: "Helping Vulnerable Populations",
    description: "Blood donations are crucial for individuals with chronic conditions like leukemia or anemia. They provide life-saving support to the most vulnerable groups.",
    icon: ShieldIcon
  },
  {
    title: "Reducing the Burden on Healthcare Providers",
    description: "Consistent donations help hospitals maintain an adequate blood supply, easing the strain on healthcare providers during emergencies or high-demand periods.",
    icon: StarIcon
  },
  {
    title: "Encouraging Healthy Lifestyles",
    description: "Donating blood encourages individuals to stay healthy and fit, as blood banks require donors to meet health criteria.",
    icon: FlagIcon
  },
  {
    title: "Promoting Social Responsibility",
    description: "Blood donation fosters a sense of social responsibility, encouraging individuals to contribute positively to their community's health and well-being.",
    icon: GlobeIcon
  },
  {
    title: "Building a Legacy of Lifesaving Actions",
    description: "Each donation creates a lasting impact by contributing to a sustainable blood supply, benefiting future generations and ensuring quick responses during crises.",
    icon: AwardIcon
  }
];

const ImpactCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 w-80 flex-shrink-0 mx-4"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <motion.div className="flex items-center mb-4">
        <motion.div 
          className="bg-red-100 p-3 rounded-full mr-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="text-red-600" size={32} />
        </motion.div>
        <h3 className="text-xl font-bold text-red-800">{title}</h3>
      </motion.div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ImpactOnSocietySection = () => {
  // Duplicate the data to create a seamless loop
  const duplicatedData = [...impactData, ...impactData];

  return (
    <section id="Impact"
    className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-red-800 mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Impact on Society
        </motion.h2>
        
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex"
            initial={{ x: 0 }}
            animate={{ 
              x: [0, -100 * impactData.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear"
              }
            }}
          >
            {duplicatedData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ImpactCard 
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default ImpactOnSocietySection;