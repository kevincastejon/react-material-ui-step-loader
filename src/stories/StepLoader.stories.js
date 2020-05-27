import React from 'react';
import { Card } from '@material-ui/core';
import {
  withKnobs, object as obj, select, number,
} from '@storybook/addon-knobs';
import StepLoader from '../lib/components/StepLoader';

export default {
  title: 'StepLoader',
  component: StepLoader,
  decorators: [withKnobs],
};

export const Playground = () => {
  const currentProgress = number('CurrentProgress', -1, { range: true, min: -1, max: 100 });
  const currentStep = number('CurrentStep', 0, { range: true, min: -1, max: 5 });
  const color = select('Color', { Primary: 'primary', Secondary: 'secondary' }, 'primary');
  const variant = select('Variant', { Square: 'square', Rounded: 'rounded', Round: 'round' }, 'square');
  const height = number('Height', 2, { min: 1, max: 20 });
  const stepSkips = obj('Skips (add skipped step indexes into the array)', []);
  const stepErrors = obj('Errors (add failed step indexes into the array)', []);
  const steps = obj('Steps', [
    {
      label: 'Authenticating', labelAfter: 'Authenticated', labelError: 'Auth failed', labelSkip: 'Auth not needed',
    },
    {
      label: 'Checking updates', labelAfter: 'Updated', labelError: 'No update found', labelSkip: 'Useless',
    },
    {
      label: 'Formatting message', labelAfter: 'Message formatted', labelError: 'Bad format', labelSkip: 'Already formatted',
    },
    {
      label: 'Posting message', labelAfter: 'Message posted', labelError: 'Cannot send', labelSkip: 'Empty message',
    },
    {
      label: 'Verifying', labelAfter: 'Verified', labelError: 'Check failed', labelSkip: 'Check skipped',
    },
  ]);
  const styles = {
    root: {
      width: '40%', margin: 'auto', marginTop: 20, textAlign: 'center',
    },
  };
  return (
    <div style={styles.root}>
      <Card style={{ backgroundColor: '#fafdff', width: '80%', margin: 'auto' }}>
        <StepLoader
          steps={steps}
          currentStep={currentStep}
          currentProgress={currentProgress}
          errors={stepErrors}
          skips={stepSkips}
          color={color}
          height={height}
          variant={variant}
        />
      </Card>
    </div>
  );
};
