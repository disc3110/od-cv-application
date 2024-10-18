import { useState } from 'react';
import PersonalForm from './components/personal-form';
import CVLayout from './components/cv-layout';

function App() {
  // Define questions and titles for each step in one place
  const formSections = [
    {
      title: "Personal Information",
      questions: [
        { label: "Name", id: "name", type: "text" },
        { label: "Phone Number", id: "phone", type: "text" },
        { label: "Email Address", id: "email", type: "text" },
        { label: "LinkedIn Profile", id: "linkedIn", type: "text" }
      ]
    },
    {
      title: "Job Information",
      questions: [
        { label: "Job Title", id: "job", type: "text" },
        { label: "Company Name", id: "company", type: "text" },
        { label: "Years of Experience", id: "jobDuration", type: "number" },
        { label: "Responsibilities", id: "jobResponsibilities", type: "textarea" }
      ]
    },
    {
      title: "Education Information",
      questions: [
        { label: "Earned Degree", id: "eduDegree", type: "text" },
        { label: "School name", id: "school", type: "text" },
        { label: "Program duration", id: "schoolDuration", type: "number" },
        { label: "Skills obtained", id: "eduDescription", type: "textarea" }
      ]
    },
    {
      title: "Other Information",
      questions: [
        { label: "Skills", id: 'skills', type: "text" },
        { label: "Profile", id: "profile", type: "text" }
      ]
    }
  ];

  const [step, setStep] = useState(0); // Step starts at 0 for the first form
  const [cvData, setCVData] = useState({});

  // Handle next step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Handle data change in the form
  const handleInfoChange = (id, value) => {
    setCVData(prevData => ({ ...prevData, [id]: value }));
  };

  // Current form section based on the step
  const currentSection = formSections[step];

  return (
    <div className='container p-4'>
      <div className='row vh-75'>
        <div className='col-4 border border-black rounded p-2'>
          <h1>{currentSection?.title}</h1>
          {currentSection ? (
            <div>
              <PersonalForm questions={currentSection.questions} onInputChange={handleInfoChange} />
              <button onClick={nextStep} className="btn btn-primary mt-2">
                {step === formSections.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          ) : (
            <div>Thanks!</div>
          )}
        </div>
        <div className='col-8'>
          <CVLayout cvData={cvData} />
        </div>
      </div>
    </div>
  );
}

export default App;
