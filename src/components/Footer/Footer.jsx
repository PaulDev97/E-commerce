import React from 'react'
import { BoxAppsImg, BoxItemsFooter, BoxLeftFooter, FooterContainer, FooterSectionContainer, IconFooter, LogoFooter, MiddleFooter, Play, PlayStore } from './footerStyled'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock, faMessage } from '@fortawesome/free-regular-svg-icons'


const Footer = () => {
  return (
    <FooterSectionContainer>
      <FooterContainer>

        <BoxLeftFooter>
          <LogoFooter>
            <img src="../assets/logos/logo_website.png" alt="" />
          </LogoFooter>
          <span>Quality cars </span>
        </BoxLeftFooter>

        <MiddleFooter>
          <h3>
            Our Store
          </h3>

          <BoxItemsFooter>

            <div>
              <IconFooter icon={faLocationDot}/>
              <span>102 Street Road</span>
            </div>

            <div>
              <IconFooter icon={faMessage}/>
              <span>carshop@gmail.com</span>
            </div>

            <div>
              <IconFooter icon={faPhone}/>
              <span>+02 5682 7439</span>
            </div>

            <div>
              <IconFooter icon={faClock}/>
              <span>08 AM - 16 PM , Monday - Saturday</span>
            </div>

          </BoxItemsFooter>

        </MiddleFooter>


        <BoxAppsImg>

          <PlayStore>
            <img src="../assets/logos/app.png" alt="" />
          </PlayStore>

          <Play>
            <img src="../assets/logos/play.png" alt="" />
          </Play>

        </BoxAppsImg>

      </FooterContainer>
    </FooterSectionContainer>
  )
}

export default Footer
