import { useState } from 'react';
import { Widget } from '@typeform/embed-react';
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
    <Widget
      id="YkSWRdnK"
      style={{ width: '100%', height: '100%' }}
      className="my-form"
    />
  );
};

export default RegistrationForm;
