// SurveyField contains logic to render single label and input
import React from 'react';

function SurveyField({ input, label, meta: { error, touched } }) {
  return (
    <div>
      <label>{label}</label>
      <input {...input}/>
      <div className="red-text helper-text" style={{ marginBottom: '20px' }}>{touched && error}</div>
    </div>
  );
}

export default SurveyField;

