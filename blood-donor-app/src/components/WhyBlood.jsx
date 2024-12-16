import React from 'react';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UsersIcon, 
  HandHelpingIcon 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentSection = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex items-start">
      <div className="mr-6 text-red-600">
        <Icon size={48} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-red-800 mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const ContentSections = () => {
  const sections = [
    {
      icon: HeartIcon,
      title: "Saving Lives",
      description: "Blood donations are essential for treating trauma, surgeries, and illnesses like leukemia and anemia."
    },
    {
      icon: HeartIcon,
      title: "No Substitute for Blood",
      description: "Unlike other medical supplies, there is no substitute for human blood. Donations are the only way to meet this need."
    },
    {
      icon: UsersIcon,
      title: "Supporting Medical Treatments",
      description: "Blood is critical for surgeries, cancer treatments, dialysis, and bone marrow transplants."
    },
    {
      icon: ShieldCheckIcon,
      title: "Safe and Simple Process",
      description: "Donating blood is quick, safe, and takes less than an hour. Your body replenishes the blood in just a few days."
    },
    {
      icon: HandHelpingIcon,
      title: "One Donation Can Save Multiple Lives",
      description: "Blood can be separated into components—red blood cells, plasma, and platelets—helping several patients."
    },
    {
      icon: ClockIcon,
      title: "The Need for Donors is Constant",
      description: "The demand for blood is always high, with someone needing blood every two seconds. Regular donations are crucial."
    }
  ];

  return (
    <section id='WhyBlood'
    className="container mx-auto px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
        Understanding Blood Donation
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <ContentSection 
            key={index}
            icon={section.icon}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
    </section>
  );
};

const EligibilitySection = () => {
  return (
    <section
    className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Who Can Donate Blood?
        </h2>
        <div className="bg-red-50 p-8 rounded-xl shadow-md">
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>Healthy adults aged 18 to 65</li>
            <li>Weigh at least 110 pounds</li>
            <li>Free from active infections</li>
            <li>Meet local blood center's specific health guidelines</li>
          </ul>
          <p className="mt-6 text-sm italic text-gray-600">
            Always consult with your local blood center for specific eligibility requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="bg-red-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Be a Lifesaver - Donate Blood Today
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your single donation can save up to three lives. Join our community of heroes and make a difference.
        </p>
        <Link to="/registration" className="bg-white text-red-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Schedule a Donation
        </Link>
      </div>
    </section>
  );
};

const BloodDonationPage = () => {
  return (
    <div>
     
      <ContentSections />
      <EligibilitySection />
      <CallToActionSection />
    </div>
  );
};

export default BloodDonationPage;