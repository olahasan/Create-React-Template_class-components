import styled from "styled-components";

export const PortfolioSection = styled.div`
  background: #f8f8f8;
  padding-top: 20px;
  overflow: hidden;
`;

export const PortfolioTitle = styled.h2`
  text-align: center;
  font-size: 35px;
`;

export const Span = styled.span`
  font-weight: normal;
`;

export const PortfolioList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 20px 0;
  cursor: pointer;
`;

export const PortfolioItem = styled.li`
  display: inline-block;
  width: 100px;
  padding: 10px;

  background: ${(props) => (props.active ? "#eb5424" : "")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;

export const ImageWrapper = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;

  height: 182px;

  &:hover > p {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Overlay = styled.p`
  position: absolute;
  // top: 0;
  top: -12px;

  left: 0;

  // bottom: 0;
  bottom: -12px;

  right: 0;
  background: rgba(235, 84, 36, 0.5);
  // font-size: 15px;
  font-size: 12px;
  opacity: 0;
`;

export const OSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #eb5424;
`;

export const Thepic1 = styled.img`
  // height: 500px;
  // background: url('images/Home/home-bg.jpg');
  background: url("images/Portfolio/portfolio-img1.jpg");
  height: 182px;
  width: 100%;
  background-size: cover;
  // background-size: cover;
  // background-position: center;
  // text-align: center;
  // position: relative;
`;

export const Thepic2 = styled.img`
  background: url("images/Portfolio/portfolio-img2.jpg");
  height: 182px;
  width: 100%;
  background-size: cover;
`;
export const Thepic3 = styled.img`
  background: url("images/Portfolio/portfolio-img3.jpg");
  height: 182px;
  width: 100%;
  background-size: cover;
`;
export const Thepic4 = styled.img`
  background: url("images/Portfolio/portfolio-img4.jpg");
  height: 182px;
  width: 100%;
  background-size: cover;
`;
export const Thepic5 = styled.img`
  background: url("images/Portfolio/portfolio-img5.jpg");
  height: 182px;
  width: 100%;
  background-size: cover;
`;
export const Thepic6 = styled.img`
  background: url("images/Portfolio/portfolio-img6.jpg");
  height: 182px;
  width: 100%;
  background-size: cover;
`;
export const Thepic7 = styled.img`
  background: url("images/Portfolio/portfolio-img7.jpg");
  height: 182px;
  width: 100%;
  background-size: cover;
`;
export const Thepic8 = styled.img`
  background: url("images/Portfolio/portfolio-img8.jpg");
  height: 182px;
  width: 100%;
  background-size: cover;
`;
