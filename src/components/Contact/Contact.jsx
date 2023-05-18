import React from 'react'
import { BoxLabelInput, BoxTitleContact, ContactContainer, ContainerSectionContact, DateContactContainer, FormContact, FormContactContainer, IconContact, IconsContactContainer } from './contactStyles'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
  return (
    <ContainerSectionContact>


      <ContactContainer>


      <BoxTitleContact>
        <h2>Get it touch!</h2>
        <span>Contact us for a quote, help or to join the team</span>
      </BoxTitleContact>

      <IconsContactContainer>

        <DateContactContainer>
          <IconContact icon={faLocationDot}/>
          <span>102 Street Road</span>
         </DateContactContainer>
         
        <DateContactContainer>
          <IconContact icon={faMessage}/>
          <span>carshop@gmail.com</span>
        </DateContactContainer>

        <DateContactContainer>
          <IconContact icon={faPhone}/>
          <span>+02 5682 7439</span>
        </DateContactContainer>


      </IconsContactContainer>

      <FormContactContainer>
        <h3>Contact Form</h3>

        <FormContact action="">
          <BoxLabelInput>
            <label>Name</label>
            <input type="text"/>
          </BoxLabelInput>

          <BoxLabelInput>
            <label>E-mail</label>
            <input type="email"/>
          </BoxLabelInput>

          <BoxLabelInput>
            <label>Message</label>
            <textarea cols="30" rows="10"></textarea>
          </BoxLabelInput>


          <button type='button'>Send</button>
        </FormContact>
      </FormContactContainer>




      </ContactContainer>
     


    </ContainerSectionContact>
  )
}

export default Contact
