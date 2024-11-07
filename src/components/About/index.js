import React from "react";
import { CreativeSection  , CreativeInfo , CreativeTitle , Span , InfoDir , InfoDesc , InfoDescA} from './style.js'


const About = () => {
  return (
    <CreativeSection>
        <div className="container">
            <CreativeInfo>
                <CreativeTitle><Span>This is</Span> Me</CreativeTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescA href="#">explicabo</InfoDescA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </CreativeInfo>
        </div>
    </CreativeSection>

  );
}

export default About;
