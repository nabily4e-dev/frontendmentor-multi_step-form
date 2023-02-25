/** @format */

import React from 'react';
import { SidebarStyled } from './Sidebar.Styled';
import Step from '../Step/Step';

const steps = [
  { number: 1, title: 'Your Info' },
  { number: 2, title: 'Select Plan' },
  { number: 3, title: 'Add-Ons' },
  { number: 4, title: 'Summary' },
];

function Sidebar() {
  return (
    <SidebarStyled>
      <Step steps={steps}/>
    </SidebarStyled>
  );
}

export default Sidebar;
