import { useState } from 'react';
import CheckIcon from './images/check.svg';
import {
  Wrapper,
  Title,
  SubTitle,
  BlockTitle,
  FormBlock,
  Field,
  Label,
  Input,
  TextArea,
  Button,
  Submit,
  TermsText,
  CheckboxLabel,
} from './styled';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    country: '',
    hasTeam: '',
    teamSize: '',
    teamMembers: '',
    teamMemberEmails: '',
    hasNoTeam: '',
    fieldOfExpertise: '',
    ideaSummary: '',
    skills: '',
    programmingLanguages: '',
    linkedInProfile: '',
    previousProjects: '',
    additionalInfo: '',
    howHeard: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    // Handle form submission, e.g. sending data to an API or backend server
  };

  return (
    <Wrapper>
      <Title>HackAIthon Registration Form</Title>
      <SubTitle>
        Please fill in your details to register your interest in participating
        in the Quadcode HackAIthon.
      </SubTitle>
      <BlockTitle>Personal Information</BlockTitle>
      <FormBlock>
        <Field>
          <Label>Full Name:</Label>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Field>
        <Field>
          <Label>Age:</Label>
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Field>
        <Field>
          <Label>Email Address:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Field>
        <Field>
          <Label>Phone Number:</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Field>
        <Field>
          <Label>Country:</Label>
          <Input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </Field>
      </FormBlock>
      <BlockTitle>Team Status (2 Categories)</BlockTitle>
      <FormBlock>
        <Field>
          <Label>I have a team:</Label>
          <Input
            type="text"
            name="hasTeam"
            checked={formData.hasTeam}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Team size (1-5):</Label>
          <Input
            type="number"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Names of team members:</Label>
          <Input
            type="text"
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Emails of team members:</Label>
          <Input
            type="email"
            name="teamMemberEmails"
            value={formData.teamMemberEmails}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>I don’t have a team:</Label>
          <Input
            type="text"
            name="hasNoTeam"
            checked={formData.hasNoTeam}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Field of expertise:</Label>
          <Input
            type="text"
            name="fieldOfExpertise"
            value={formData.fieldOfExpertise}
            onChange={handleChange}
          />
        </Field>
        <BlockTitle>Your Idea in a summary:</BlockTitle>
        <TextArea
          name="ideaSummary"
          value={formData.ideaSummary}
          onChange={handleChange}
          required
        />
        <Field>
          <Label>Skills and Experience:</Label>
          <Input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Programming Languages/Frameworks you are proficient in:</Label>
          <Input
            type="text"
            name="programmingLanguages"
            value={formData.programmingLanguages}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>LinkedIn Profile (if any):</Label>
          <Input
            type="url"
            name="linkedInProfile"
            value={formData.linkedInProfile}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Project(s) previously (if any):</Label>
          <Input
            type="text"
            name="previousProjects"
            value={formData.previousProjects}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Additional Information:</Label>
          <Input
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>How did you hear about this hackathon?</Label>
          <Input
            type="text"
            name="howHeard"
            value={formData.howHeard}
            onChange={handleChange}
          />
        </Field>
        <TermsText>
          <div>Terms and Conditions:</div>
          <div>
            By submitting this form, I agree to abide by the rules and
            regulations of the hackathon and grant organizers the right to  use
            any materials or content produced during the hackathon  for
            promotional purposes.
          </div>
        </TermsText>
        <div>
          <CheckboxLabel>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <span>
              <CheckIcon />
            </span>
            I have read and agree to the Terms and Conditions.
          </CheckboxLabel>
        </div>
        <Submit>
          <Button type="submit" disabled={!formData.agreeToTerms}>
            Register Now
          </Button>
        </Submit>
      </FormBlock>
    </Wrapper>
  );
};

export default RegistrationForm;
