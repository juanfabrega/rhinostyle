import React from 'react';
import cx    from 'classnames';

class ProgressBar extends React.Component {
  static displayName = 'RhinoProgressBar';

  static propTypes = {
    /**
     * Optionally include additional classes.
     */
    className: React.PropTypes.string,
    /**
     * Number 1-100 representing a percentage.
     */
    progress:  React.PropTypes.number,
    /**
     * Set to 'true' to show label in progress bar.
     */
    showLabel: React.PropTypes.bool,
    /**
     * Optionally include type.
     */
    type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'temperature']),
  };

  static defaultProps = {
    progress:    0,
    showLabel:   false,
    type:        'default',
  };

  render() {
    const { className, progress, showLabel, type } = this.props;

    let progressTranslation = progress;

    progressTranslation = parseInt(progress, 10);

    if (isNaN(progressTranslation) || progressTranslation < 0) {
      progressTranslation = 0;
    }

    const classes = cx('progress', className);

    const barClasses = cx('progress__bar', {
      'progress__bar--default':  type === 'default',
      'progress__bar--primary':  type === 'primary',
      'progress__bar--secondary':  type === 'secondary',
      'progress__bar--temperature':  type === 'temperature',
    });

    /**
     * Style for progressing bar
     */
    const style = {
      transform: `translateX(${progressTranslation}%)`,
      WebkitTransform: `translateX(${progressTranslation}%)`,
    };

    /**
     * If showLabel is true and progress is more than 1, construct label
     */
    let label = null;

    if (showLabel && progressTranslation > 1) {
      label = (
        <div className="progress__bar__slider__label">{`${progressTranslation}%`}</div>
      );
    }

    return (
      <div className={classes}>
        <div className={barClasses}>
          <div className="progress__bar__slider" style={style}>
            {label}
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
