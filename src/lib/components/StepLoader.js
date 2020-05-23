import React from 'react';
import PropTypes from 'prop-types';
import {
  LinearProgress, Typography, Grid,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ErrorIcon from '@material-ui/icons/Error';

/**
 * Stepped LinearProgress component using material-ui
 */
export default function StepLoader(props) {
  const {
    steps, color, height, variant, currentStep, currentProgress, errors, skips
  } = props;
  return (
    <div>
      <Grid
        style={{ width: '80%', margin: 'auto' }}
        container
        spacing={1}
      >
        {steps.map((s, i) => (
          <Grid
            key={s.label}
            container
            item
            xs={12}
            spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid xs item>
              <Typography
                variant="subtitle2"
                style={{
                  fontWeight: currentStep >= i ? 'bold' : 'normal',
                  color: errors.includes(i) ? 'red' : null,
                  fontStyle: currentStep > i ? 'oblique' : 'normal',
                }}
              >
                {errors.includes(i) && s.labelError ? s.labelError : (skips.includes(i) && s.labelSkip ? s.labelSkip : (currentStep > i && s.labelAfter ? s.labelAfter : s.label))}
              </Typography>
            </Grid>
            <Grid xs item>
              <LinearProgress
                style={{height:height, borderRadius:variant==='square'?0:(variant==='rounded'?5:15)}}
                variant={(currentStep === i && currentProgress === -1 ? 'indeterminate' : 'determinate')}
                value={currentStep > i ? 100 : (currentStep === i && currentProgress > -1 ? currentProgress : 0)}
                color={s.color ? s.color : color}
              />
            </Grid>
            <Grid item>
              {errors.includes(i) ? <ErrorIcon color="secondary" /> :
               (skips.includes(i)?<CancelIcon style={{color:'orange'}}/>:
                (currentStep > i ? <CheckCircleIcon style={{ color: 'green' }} /> :
                 <CheckCircleOutlineIcon style={{ color: currentStep === i ? 'black' : 'grey' }} />))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

StepLoader.propTypes = {
  /**
   * An array of 'step' object with the following shape (label:string, [labelAfter:string],[labelSkip:string],[labelError:string],[color:string "primary"|"secondary"]).
   */
  steps: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    labelAfter: PropTypes.string,
    labelSkip: PropTypes.string,
    labelError: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
  })).isRequired,
  /**
   * The current step.
   */
  currentStep: PropTypes.number.isRequired,
  /**
   * The LinearProgress height.
   */
  height: PropTypes.number,
  /**
   * The color of the progress bars.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * The variant type for the LinearProgress outline. 'square' | 'rounded' | 'round'
   */
  variant: PropTypes.oneOf(['square', 'rounded', 'round']),

  /**
   * The current progress [0-100] of the current step. If ommited the LinearProgress will use the 'undeterminate' variant.
   */
  currentProgress: PropTypes.number,

  /**
   * An array of int representing the failed steps.
   */
  errors: PropTypes.arrayOf(PropTypes.number),

  /**
   * An array of int representing the skipped steps.
   */
  skips: PropTypes.arrayOf(PropTypes.number),
};
StepLoader.defaultProps = {
  color: 'primary',
  height: 2,
  currentProgress: -1,
  errors: [],
  skips: [],
};
