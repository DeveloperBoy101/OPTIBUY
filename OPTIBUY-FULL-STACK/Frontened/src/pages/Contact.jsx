import React from "react";
import ContactUs from "../components/ContactUs";
import Offers from "../components/Offers";
import OfferingsGrid from "../components/OfferingGrid";
import TheTeam from "../components/TheTeam";

const Contact = () => {
  return (
    <div>
      <ContactUs />
      <OfferingsGrid />
      <Offers />
      <TheTeam/>
    </div>
  );
  
};

export default Contact;
