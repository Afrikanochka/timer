import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../../utils/helpers';
import { TimerStyled } from './TimerStyled';

const Timer = ({ time,
    start,
    stop,
    reset,
    wait,}) => {

    return (
         <TimerStyled>
    <header className="header">
      <h1 className="title">
        Your Timer
      </h1>
      <h1 className="indicator">
        {setTimeFormat(time)}
      </h1>
    </header>
    <section className="main">
      <div className="btnContainer">
        <button type="button" className="btn" onClick={start}>
          Start
        </button>
        <button type="button" className="btn" onClick={stop}>
          Stop
        </button>
        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>
        <button type="button" className="btn" onClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </TimerStyled>
    );
}

export default Timer;

Timer.propTypes = {
    time: PropTypes.number.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    wait: PropTypes.func.isRequired,
  };