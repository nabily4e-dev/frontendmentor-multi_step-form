/** @format */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Error,
  FormContainer,
  Input,
  InputContainer,
  Label,
} from './ContactForm.Styled';

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onKeyUp={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label htmlFor='name'>Name</Label>
        <Input
          {...register('name')}
          id='name'
          type='text'
          placeholder='e.g. Stephen King'
          error={Boolean(errors.name)}
        />
        {errors.name && <Error>{errors.name.message}</Error>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor='email'>Email Address</Label>
        <Input
          {...register('email')}
          id='email'
          type='text'
          placeholder='e.g. stephenking@lorem.com'
          error={Boolean(errors.email)}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor='phone'>Phone Number</Label>
        <Input
          {...register('phone')}
          id='phone'
          type='text'
          placeholder='e.g. +1 234 567 890'
          error={Boolean(errors.phone)}
        />
        {errors.phone && <Error>{errors.phone.message}</Error>}
      </InputContainer>
    </FormContainer>
  );
};

export default ContactForm;
