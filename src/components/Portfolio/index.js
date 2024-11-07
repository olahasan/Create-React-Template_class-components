// import React , { useState , useEffect }from "react";
import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  ImageWrapper,
  Image,
  Overlay,
  OSpan,
  Thepic1,
  Thepic4,
  Thepic2,
  Thepic3,
  Thepic8,
  Thepic7,
  Thepic6,
  Thepic5,
} from "./style.js";
// import axios from "axios";

const Portfolio = () => {
  // const [images , setImages] = useState([])

  // useEffect(() => {
  //   axios.get('js/data.json').then( res => { setImages(res.data.portfolio)})
  // } , [])

  // const PortfolioImages = images.map( (imageItem) => {
  //      return(
  //       <ImageWrapper key={imageItem.id}>
  //                     <Image src={imageItem.image} alt="" />
  //                     <Overlay>
  //                         <OSpan>
  //                             Show Image
  //                         </OSpan>
  //                     </Overlay>
  //       </ImageWrapper>
  //      )
  // })

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem style={{ fontWeight: "bold" }}>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">
        {/* {PortfolioImages} */}
        <ImageWrapper>
          {/* <Thepic ></Thepic> */}
          <Thepic1 />
          {/* <Image src="images/Portfolio/portfolio-img1.jpg" alt="piiic" /> */}
          <Overlay>
            <OSpan>Show Image</OSpan>
          </Overlay>
        </ImageWrapper>

        <ImageWrapper>
          <Thepic2 />
          {/* <Image src="/Portfolio/portfolio-img2.jpg" alt="pic" /> */}
          <Overlay>
            <OSpan>Show Image</OSpan>
          </Overlay>
        </ImageWrapper>

        <ImageWrapper>
          <Thepic3 />
          {/* <Image src="images/Portfolio/portfolio-img3.jpg" alt="pic" /> */}
          <Overlay>
            <OSpan>Show Image</OSpan>
          </Overlay>
        </ImageWrapper>

        <ImageWrapper>
          <Thepic4 />
          {/* <Image src="/public/images/Portfolio/portfolio-img4.jpg" alt="pic" /> */}
          <Overlay>
            <OSpan>Show Image</OSpan>
          </Overlay>
        </ImageWrapper>

        <ImageWrapper>
          <Thepic5 />
          {/* <Image src="/public/images/Portfolio/portfolio-img5.jpg" alt="pic" /> */}
          <Overlay>
            <OSpan>Show Image</OSpan>
          </Overlay>
        </ImageWrapper>

        <ImageWrapper>
          <Thepic6 />
          {/* <Image src="images/Portfolio/portfolio-img6.jpg" alt="pic" /> */}
          <Overlay>
            <OSpan>Show Image</OSpan>
          </Overlay>
        </ImageWrapper>

        <ImageWrapper>
          <Thepic7 />
          {/* <Image src="images/Portfolio/portfolio-img7.jpg" alt="pic" /> */}
          <Overlay>
            <OSpan>Show Image</OSpan>
          </Overlay>
        </ImageWrapper>

        <ImageWrapper>
          <Thepic8 />
          {/* <Image src="images/Portfolio/portfolio-img8.jpg" alt="pic" /> */}
          <Overlay>
            <OSpan>Show Image</OSpan>
          </Overlay>
        </ImageWrapper>
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
