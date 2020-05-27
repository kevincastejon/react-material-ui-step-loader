```javascript

import { StepLoader } from 'react-material-ui-step-loader';
const steps = [
  { label: 'Authenticating', labelAfter: 'Authenticated' },
  { label: 'Checking updates', labelAfter: 'Updated', labelError: 'No update found' },
  { label: 'Formatting message', labelAfter: 'Message formatted', labelSkip: 'Already formatted' },
  { label: 'Posting message', labelAfter: 'Message posted' },
  { label: 'Verifying', labelAfter: 'Verified' },
];
// ...

<StepLoader
  steps={steps}
  currentStep={2}
  currentProgress={75}
/>
```
