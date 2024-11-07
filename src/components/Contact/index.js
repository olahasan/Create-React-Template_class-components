import React , { Fragment } from "react";
import  { ContactSection , ContactTitle , ContactTitleSpan , Form , FormInput , InputText , InputEmail , InputSub , InputSubmit , Textarea} from './style.js'
// import  { ContactSection , ContactTitle , ContactTitleSpan , Form , FormInput , Input , InputText , InputEmail , InputSub , InputSubmit , Textarea} from './style.js'

// import Footer from "../Footer/index.js";
import Footer from './../Footer/index';

const Contact = () => {
  return (
   <Fragment>

    <ContactSection>
        <div className="container">
            <ContactTitle><ContactTitleSpan>Drop </ContactTitleSpan>Me A line</ContactTitle>
            <Form action="">
                <FormInput>
                    <InputText type="text" placeholder="Your Name" />
                    <InputEmail type="email" placeholder="Your Email" />
                </FormInput>
                <InputSub type="text" className="sub" placeholder="Your Subject" />
                {/* <InputSub type="text" class="sub" placeholder="Your Subject" /> */}
                <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                <InputSubmit type="submit" value="Send Message" />
            </Form>
        </div>
    </ContactSection>

    <Footer />

   </Fragment>
  );
}

export default Contact;
