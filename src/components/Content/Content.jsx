/** @format */

import React from 'react';
import { Header } from '../Header/Header';
import { Description } from '../Description/Description';
import { ContentDetails, ContentStyled, MainContent } from './Content.Styled';
import ContactForm from '../Form/ContactForm';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';

function Content() {
  return (
    <ContentStyled>
      <ContentDetails>
        <MainContent>
          <Header>Personal info description</Header>
          <Description>
            Please provide your name, email address, and phone number.
          </Description>
          <ContactForm />
        </MainContent>
      </ContentDetails>
      <Footer>
        <Button>Next Step</Button>
      </Footer>
    </ContentStyled>
  );
}

export default Content;
