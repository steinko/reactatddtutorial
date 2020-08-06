import React from 'react'
import Appointment from './Appointment'
import {render} from '@testing-library/react'

describe('Appointment unit tests', () => {

   it('should exist', () => { 
	   const customer = { firstName: 'Ashley' };
	   expect(render(<Appointment customer={customer}/>)).not.toBeNull() 

   })

   it('renders the customer first name', () => {
	   const customer = { firstName: 'Ashley' };
       render(<Appointment customer={customer} />)
       expect(document.body.textContent).toMatch('Ashley');
   });

});