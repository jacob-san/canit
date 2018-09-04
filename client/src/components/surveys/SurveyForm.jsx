import React from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../utils/validateEmail';
import formFields from './formFields';

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} label = {label} type="text" name={name} component={SurveyField}/>
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSurveySubmit}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">Next
            <i className="material-icons right">done</i>
          </button>

        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmail(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if(!values[name]) {
      errors[name] = 'You must provide a value'
    }
  })

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false 
})(SurveyForm);