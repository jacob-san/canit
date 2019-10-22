import React, { Component } from 'react';
import { Button, Form, Input, Select, Row, Col, DatePicker } from 'antd';
import moment from 'moment';

const { Option } = Select;

class RegistrationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const data = {
          ...values,
          dob: values.dob.format('DD/MM/YYYY'),
          yearsOfExperience: +values.yearsOfExperience,
          expectedSalary: +values.expectedSalary
        };
        let result;
        const id = this.props.candidate && this.props.candidate._id;
        if (id) {
          result = await this.props.editCandidate(id, data);
        } else {
          result = await this.props.createCandidate(data);
        }
        if (result) this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { candidate } = this.props;
    const {
      fullName,
      gender,
      dob,
      cityOfResidence,
      nationality,
      maritalStatus,
      major,
      degree,
      university,
      yearsOfExperience,
      employmentStatus,
      expectedSalary,
      contactNumber,
      email,
      visaStatus,
      description
    } = candidate || {};
    const rowGutter = 8;
    if (this.props.viewMode) {
      return (
        <div className="view-data">
          <pre>
            <code>{JSON.stringify(this.props.candidate, {}, 2)}</code>
          </pre>
        </div>
      );
    }
    return (
      <Form className="form-container" onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('fullName', {
            initialValue: fullName,
            rules: [
              {
                required: true,
                message: 'Please input your name'
              }
            ]
          })(<Input placeholder="Full name" />)}
        </Form.Item>
        <Row gutter={rowGutter}>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('gender', {
                initialValue: gender,

                rules: [
                  {
                    required: true,
                    message: 'Please input your gender'
                  }
                ]
              })(
                <Select placeholder="Gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('dob', {
                initialValue: dob && moment(dob),

                rules: [
                  {
                    required: true,
                    message: 'Please input your DOB'
                  }
                ]
              })(<DatePicker placeholder="Date of Birth" />)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          {getFieldDecorator('cityOfResidence', {
            initialValue: cityOfResidence,

            rules: [
              {
                required: true,
                message: 'Please input your city'
              }
            ]
          })(<Input placeholder="City of Residence" />)}
        </Form.Item>
        <Row gutter={rowGutter}>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('nationality', {
                initialValue: nationality
              })(<Input placeholder="Nationality" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('maritalStatus', {
                initialValue: maritalStatus
              })(
                <Select placeholder="Marital Status">
                  <Option value="single">Single</Option>
                  <Option value="married">Married</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('major', {
                initialValue: major
              })(<Input placeholder="Major" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('degree', {
                initialValue: degree
              })(<Input placeholder="Degree" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('university', {
                initialValue: university
              })(<Input placeholder="University" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('yearsOfExperience', {
                initialValue: yearsOfExperience,

                rules: [{ required: true, message: 'Please input Experience' }]
              })(
                <Select placeholder="Years of experience">
                  <Option value="1">1</Option>
                  <Option value="3">3</Option>
                  <Option value="5">5</Option>
                  <Option value="10">>10</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('employmentStatus', {
                initialValue: employmentStatus
              })(<Input placeholder="Employment Status" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('expectedSalary', {
                initialValue: expectedSalary
              })(<Input placeholder="Expected Salary" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('contactNumber', {
                initialValue: contactNumber,

                rules: [{ required: true, message: 'Please input Number' }]
              })(<Input placeholder="Contact Number" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('email', {
                initialValue: email
              })(<Input placeholder="Email" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={rowGutter}>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('visaStatus', {
                initialValue: visaStatus
              })(
                <Select placeholder="Visa status">
                  <Option value="tourist">Tourist</Option>
                  <Option value="visit">Visit</Option>
                  <Option value="work">Work</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('description', {
                initialValue: description
              })(<Input placeholder="Tell us about you(optional)" />)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button className="btn-submit" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const CandidateForm = Form.create({ name: 'register' })(RegistrationForm);

export default CandidateForm;
