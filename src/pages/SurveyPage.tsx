import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SurveyPage.css";

interface SurveyData {
  personalInfo: {
    name: string;
    age: string;
    gender: string;
    location: string;
    occupation: string;
  };
  legalNeeds: {
    legalIssueType: string;
    urgencyLevel: string;
    previousLegalHelp: string;
    budgetRange: string;
  };
  preferences: {
    preferredContactMethod: string;
    languagePreference: string;
    availableTime: string;
  };
}

const SurveyPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    personalInfo: {
      name: "",
      age: "",
      gender: "",
      location: "",
      occupation: "",
    },
    legalNeeds: {
      legalIssueType: "",
      urgencyLevel: "",
      previousLegalHelp: "",
      budgetRange: "",
    },
    preferences: {
      preferredContactMethod: "",
      languagePreference: "",
      availableTime: "",
    },
  });

  const handleInputChange = (
    section: keyof SurveyData,
    field: string,
    value: string
  ) => {
    setSurveyData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Survey Data:", surveyData);
    alert("Survey submitted successfully! Thank you for your responses.");
    navigate("/login");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const renderPersonalInfo = () => (
    <div className="survey-section">
      <h3>Personal Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            className="form-input"
            value={surveyData.personalInfo.name}
            onChange={(e) =>
              handleInputChange("personalInfo", "name", e.target.value)
            }
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Age *</label>
          <select
            className="form-input"
            value={surveyData.personalInfo.age}
            onChange={(e) =>
              handleInputChange("personalInfo", "age", e.target.value)
            }
            required
          >
            <option value="">Select age range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-55">46-55</option>
            <option value="56-65">56-65</option>
            <option value="65+">65+</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <select
            className="form-input"
            value={surveyData.personalInfo.gender}
            onChange={(e) =>
              handleInputChange("personalInfo", "gender", e.target.value)
            }
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Location *</label>
          <input
            type="text"
            className="form-input"
            value={surveyData.personalInfo.location}
            onChange={(e) =>
              handleInputChange("personalInfo", "location", e.target.value)
            }
            placeholder="City, State"
            required
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label">Occupation</label>
          <input
            type="text"
            className="form-input"
            value={surveyData.personalInfo.occupation}
            onChange={(e) =>
              handleInputChange("personalInfo", "occupation", e.target.value)
            }
            placeholder="Your occupation"
          />
        </div>
      </div>
    </div>
  );

  const renderLegalNeeds = () => (
    <div className="survey-section">
      <h3>Legal Assistance Needs</h3>
      <div className="form-grid">
        <div className="form-group full-width">
          <label className="form-label">Type of Legal Issue *</label>
          <select
            className="form-input"
            value={surveyData.legalNeeds.legalIssueType}
            onChange={(e) =>
              handleInputChange("legalNeeds", "legalIssueType", e.target.value)
            }
            required
          >
            <option value="">Select legal issue type</option>
            <option value="family-law">
              Family Law (Divorce, Child Custody)
            </option>
            <option value="criminal-law">Criminal Law</option>
            <option value="civil-rights">Civil Rights</option>
            <option value="employment">Employment Issues</option>
            <option value="housing">Housing/Landlord-Tenant</option>
            <option value="immigration">Immigration</option>
            <option value="consumer-protection">Consumer Protection</option>
            <option value="disability-benefits">Disability Benefits</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Urgency Level *</label>
          <select
            className="form-input"
            value={surveyData.legalNeeds.urgencyLevel}
            onChange={(e) =>
              handleInputChange("legalNeeds", "urgencyLevel", e.target.value)
            }
            required
          >
            <option value="">Select urgency</option>
            <option value="immediate">Immediate (within 24 hours)</option>
            <option value="urgent">Urgent (within a week)</option>
            <option value="moderate">Moderate (within a month)</option>
            <option value="low">Low (no specific timeline)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Previous Legal Help</label>
          <select
            className="form-input"
            value={surveyData.legalNeeds.previousLegalHelp}
            onChange={(e) =>
              handleInputChange(
                "legalNeeds",
                "previousLegalHelp",
                e.target.value
              )
            }
          >
            <option value="">Select option</option>
            <option value="yes-satisfied">Yes, and was satisfied</option>
            <option value="yes-unsatisfied">Yes, but was unsatisfied</option>
            <option value="no">No, first time seeking help</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label className="form-label">Budget Range</label>
          <select
            className="form-input"
            value={surveyData.legalNeeds.budgetRange}
            onChange={(e) =>
              handleInputChange("legalNeeds", "budgetRange", e.target.value)
            }
          >
            <option value="">Select budget range</option>
            <option value="free">Free services only</option>
            <option value="under-500">Under $500</option>
            <option value="500-1500">$500 - $1,500</option>
            <option value="1500-5000">$1,500 - $5,000</option>
            <option value="over-5000">Over $5,000</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="survey-section">
      <h3>Communication Preferences</h3>
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Preferred Contact Method *</label>
          <select
            className="form-input"
            value={surveyData.preferences.preferredContactMethod}
            onChange={(e) =>
              handleInputChange(
                "preferences",
                "preferredContactMethod",
                e.target.value
              )
            }
            required
          >
            <option value="">Select contact method</option>
            <option value="phone">Phone Call</option>
            <option value="email">Email</option>
            <option value="text">Text Message</option>
            <option value="in-person">In-Person Meeting</option>
            <option value="video-call">Video Call</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Language Preference</label>
          <select
            className="form-input"
            value={surveyData.preferences.languagePreference}
            onChange={(e) =>
              handleInputChange(
                "preferences",
                "languagePreference",
                e.target.value
              )
            }
          >
            <option value="">Select language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="hindi">Hindi</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label className="form-label">Best Time to Contact</label>
          <select
            className="form-input"
            value={surveyData.preferences.availableTime}
            onChange={(e) =>
              handleInputChange("preferences", "availableTime", e.target.value)
            }
          >
            <option value="">Select time preference</option>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
            <option value="evening">Evening (5 PM - 8 PM)</option>
            <option value="anytime">Anytime</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="survey-page">
      <div className="survey-header">
        <div className="header-content">
          <h1>Legal Aid Survey</h1>
          <p>Help us understand your legal needs better</p>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="survey-container">
        <div className="progress-bar">
          <div className="progress-steps">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`progress-step ${
                  currentStep >= step ? "active" : ""
                }`}
              >
                <div className="step-number">{step}</div>
                <div className="step-label">
                  {step === 1 && "Personal Info"}
                  {step === 2 && "Legal Needs"}
                  {step === 3 && "Preferences"}
                </div>
              </div>
            ))}
          </div>
          <div className="progress-line">
            <div
              className="progress-fill"
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="survey-content">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderLegalNeeds()}
          {currentStep === 3 && renderPreferences()}
        </div>

        <div className="survey-navigation">
          {currentStep > 1 && (
            <button onClick={handlePrevious} className="btn btn-secondary">
              Previous
            </button>
          )}

          <div className="nav-spacer"></div>

          {currentStep < 3 ? (
            <button onClick={handleNext} className="btn btn-primary">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn btn-primary">
              Submit Survey
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
