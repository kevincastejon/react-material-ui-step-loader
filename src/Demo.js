import React, { useState, useEffect } from 'react';
import {
  Typography, Card,
} from '@material-ui/core';
import { StepLoader } from './lib';

const App = () => {
  const steps = [
    { label: 'Authenticating', labelAfter: 'Authenticated' },
    { label: 'Checking updates', labelAfter: 'Updated', labelError: 'No update found' },
    { label: 'Formatting message', labelAfter: 'Message formatted', labelSkip: 'Already formatted' },
    { label: 'Posting message', labelAfter: 'Message posted' },
    { label: 'Verifying', labelAfter: 'Verified' },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [stepErrors, setStepErrors] = useState([]);
  const [stepSkips, setStepSkips] = useState([]);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const speeds = [
      10, 5, 4, 1, 8,
    ];
    const id = setTimeout(() => {
      const inc = currentProgress + speeds[currentStep];
      if (inc >= 100) {
        setCurrentProgress(0);
        setCurrentStep(currentStep + 1);
        if (currentStep === 1) {
          setStepErrors([1]);
        }
        if (currentStep === 2) {
          setStepSkips([2]);
        }
      } else {
        setCurrentProgress(inc);
      }
    }, 20);
    return (() => {
      clearTimeout(id);
    });
  }, [currentProgress, currentStep]);

  return (
    <div style={{ width: 800, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="overline" style={{ fontSize: '2em', marginBottom: 20 }}>
        StepLoader Demo
      </Typography>
      <hr />
      <Card style={{
        backgroundColor: '#fafdff', width: '80%', margin: 'auto', marginBottom: 20, marginTop: 20,
      }}
      >
        <StepLoader
          steps={steps}
          currentStep={currentStep}
          currentProgress={currentStep !== 3 ? currentProgress : -1}
          errors={stepErrors}
          skips={stepSkips}
        />
      </Card>
    </div>
  );
};

export default App;
