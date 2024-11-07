import React from "react";
import {TheHome , HomeInformation , HomeTitle , HomeInfo , HomeDesc , TheSpan , HomeBtn} from './style.js'

const Home = () => {
  return (
        <TheHome>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Ola Ali</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <TheSpan>UX Designer</TheSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </TheHome>
  );
}

export default Home;
