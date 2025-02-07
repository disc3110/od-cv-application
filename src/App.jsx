import { useState } from 'react';
import PersonalForm from './components/personal-form';
import CVLayout from './components/cv-layout';

function App() {
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

  const [step, setStep] = useState(0); // Current form section step
  const [cvData, setCVData] = useState({ jobs: [{}] }); // Initial state with an empty job entry

  // Handle form input changes for all sections
  const handleInfoChange = (sectionKey, id, value, index = null) => {
    setCVData(prevData => {
      if (sectionKey === 'jobs' && index !== null) {
        // Update specific job entry
        const updatedJobs = [...prevData.jobs];
        updatedJobs[index] = { ...updatedJobs[index], [id]: value };
        return { ...prevData, jobs: updatedJobs };
      } else {
        return { ...prevData, [id]: value };
      }
    });
  };

  // Handle next step navigation
  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  // Add a new job entry
  const addJob = () => {
    setCVData(prevData => ({
      ...prevData,
      jobs: [...prevData.jobs, {}] // Add an empty job object
    }));
  };

  // Current form section based on the step
  const currentSection = formSections[step];

  return (
    <div className='container p-4'>
      <div className='row vh-75'>
        <div className='col-4 border border-black rounded p-2'>
          <h1>{currentSection?.title}</h1>
          {step === 1 ? (
            <div>
              {cvData.jobs.map((job, index) => (
                <div key={index}>
                  <PersonalForm
                    questions={currentSection.questions}
                    onInputChange={(id, value) => handleInfoChange('jobs', id, value, index)}
                  />
                </div>
              ))}
              <button onClick={addJob} className="btn btn-secondary mt-2">Add Another Job</button>
              <button onClick={nextStep} className="btn btn-primary mt-2">Next</button>
            </div>
          ) : (
            <div>
              <PersonalForm
                questions={currentSection.questions}
                onInputChange={(id, value) => handleInfoChange('general', id, value)}
              />
              <button onClick={nextStep} className="btn btn-primary mt-2">
                {step === formSections.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
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
