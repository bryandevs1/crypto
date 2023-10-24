import AfterSubmitMessage from '@components/atoms/AfterSubmitMessage';
import Button from '@components/atoms/Button';
import Checkbox from '@components/atoms/Checkbox';
import TextArea from '@components/atoms/TextArea';
import TextInput from '@components/atoms/TextInput';
import Modal from '@components/molecules/Modal';
import {
  messageCheckboxValidationSchema,
  messageValidationSchema,
} from '@shared/form/validation/validationSchema';
import classNames from 'classnames/bind';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './MessageForm.module.scss';

const cn = classNames.bind(styles);

export default function MessageForm({ text, checkboxText }) {
  const [showMessage, setShowMessage] = useState(false);

  const btnWrapperCustomClass = checkboxText
    ? 'contact-form__button-wrapper--with-checkbox'
    : 'contact-form__button-wrapper';

  const validationSchema = checkboxText
    ? messageCheckboxValidationSchema
    : messageValidationSchema;

  const initialValues = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  const { name, email, message } = text;

  const handleOnSubmit = (values, { resetForm }) => {
    console.log('Form values', values);
    setShowMessage(true);
    resetForm();
  };

  const handleModalOnClose = () => {
    setShowMessage(false);
  };

  return (
    <>
      {' '}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ handleSubmit }) => (
          <Form className={cn('contact-form')}>
            <div className={cn('contact-form__container')}>
              <TextInput
                name="name"
                autoComplete="given-name"
                type="text"
                placeholder={name.placeholder}
              />
              <TextInput
                name="email"
                autoComplete="email"
                type="text"
                placeholder={email.placeholder}
              />
            </div>
            <TextArea name="message" placeholder={message.placeholder} />
            {checkboxText && (
              <Checkbox
                name="privacy"
                label={checkboxText}
                className={cn('contact-form__checkbox')}
              />
            )}
            <div className={cn(btnWrapperCustomClass)}>
              <Button type={'submit'} onClick={handleSubmit}>
                Send Now
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      {showMessage && (
        <Modal
          ariaLabel="Successful submit message"
          isOpen={showMessage}
          onClose={handleModalOnClose}
        >
          <AfterSubmitMessage />
        </Modal>
      )}
    </>
  );
}

MessageForm.proptTypes = {
  text: PropTypes.object.isRequired,
  checkboxText: PropTypes.string,
};
