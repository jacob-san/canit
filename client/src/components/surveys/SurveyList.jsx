import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSurveys();
  }
  deleteSurvey(id) {
    this.props.deleteSurvey(id);
  }
  renderSurveys() {
    console.log(this.props.surveys);
    const list = this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} class="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="right">
              <button className="btn btn-floating waves-effect waves-light"><i className="material-icons">edit</i></button>
              <button onClick={()=>this.deleteSurvey(survey._id)} className="btn btn-floating waves-effect waves-light"><i className="material-icons">delete</i></button>
            </div>
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right"> 
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      )
    })
     
    return list;
  }
  render() {
    console.log("rendering")
    return (
      <div>
        {this.props.surveys && this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);