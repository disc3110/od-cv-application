import { useState } from 'react';
import PersonalForm from './components/personal-form';
import CVLayout from './components/cv-layout';

function App() {

  const [cvData, setCVData] = useState({});

  const personalQuestions = [
    { label: "Name", id: "name", type: "text" },
    { label: "Phone Number", id: "phone", type: "text" },
    { label: "Email Address", id: "email", type: "text" },
    { label: "LinkedIn Profile", id: "linkedIn", type: "text" }
  ];

  const experienceQuestions = [
    { label: "Job Title", id: "job", type: "text" },
    { label: "Company Name", id: "company", type: "text" },
    { label: "Years of Experience", id: "jobDuration", type: "number" },
    { label: "Responsibilities", id: "jobResponsibilities", type: "textarea" }
  ];

  const educationQuestions = [
    { label: "Earned Degree", id: "eduDegree", type: "text" },
    { label: "School name", id: "school", type: "text" },
    { label: "Program duration", id: "schoolDuration", type: "number" },
    { label: "Skills obtained", id: "eduDescription", type: "textarea" }
  ];

  const additionalQuestions = [
    { label: "skills", id: 'skills', type: "text"},
    { label: "profile", id: "profile", type: "text"}
  ]

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleInfoChange = (id, value) => {
    setCVData(prevData => ({ ...prevData, [id]: value }));
  };

  // Helper function for rendering based on the current step
  const renderFormByStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <PersonalForm questions={personalQuestions} onInputChange={handleInfoChange} />
            <button onClick={nextStep} className="btn btn-primary mt-2">Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <PersonalForm questions={experienceQuestions} onInputChange={handleInfoChange} />
            <button onClick={nextStep} className="btn btn-primary mt-2">Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <PersonalForm questions={educationQuestions} onInputChange={handleInfoChange} />
            <button onClick={nextStep} className="btn btn-primary mt-2">Finish</button>
          </div>
        );
      default:
        return <div>Thanks !</div>;
    }
  };

  return (
    <div className='container p-4'>
      <div className='row vh-75'>
        <div className='col-4 border border-black rounded p-2'>
          <h1>Step {step}</h1>
          {renderFormByStep()}
        </div>
        <div className='col-8'>{
          <CVLayout cvData={cvData} />
        }
        </div>
      </div>
    </div>
  );
}

export default App;
