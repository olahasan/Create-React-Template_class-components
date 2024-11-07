import React, { Component } from "react";
import axios from "axios";
import { ProfileSkills , ProfileSection , ProfileList , ProfileItem , Span , WSpan , Skills , SkillsDesc , SkillsBar , STitle , SPerc , Parent , ParentS , ProfileTitle , SkillTitle , ProfileTitleS , SkillTitleS} from './style.js'


class Profile extends Component{

state = {
    all : []
}

componentDidMount(){
    axios.get('js/data.json').then( res => {this.setState({all : res.data.olat})})
}


    render(){

        const {all} = this.state ;
        const hhh = all.map((e) => {
            return(
                <SkillsBar key={e.id}>
                            <STitle>{e.STitle}</STitle>
                            <SPerc >{e.per}</SPerc>
                            <Parent >
                                <ParentS first={e.id}></ParentS>
                            </Parent>
                </SkillsBar>
            )
        })

        return (
            <ProfileSkills>
                <div className="container">
                    <ProfileSection>
                        <ProfileTitle><ProfileTitleS>My </ProfileTitleS>Profile</ProfileTitle>
    
                        <ProfileList>
                            <ProfileItem>
                                <Span>Name</Span>
                                Ola Ali
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Birthday</Span>
                                21/1/1996
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Address</Span>
                                Cairo Egypt
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Phone</Span>
                                4444 5555 6666
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Email</Span>
                                Ola@Ola.com
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Website</Span>
                                <WSpan>www.google.com</WSpan>
                            </ProfileItem>
                        </ProfileList>
                    </ProfileSection>
                    
                    <Skills>
                        <SkillTitle>Some <SkillTitleS>skills</SkillTitleS></SkillTitle>
    
                        <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>

                        <div>
                            {hhh}
                        </div>

                        {/* <SkillsBar>
                            <STitle>Bootstrap</STitle>
                            <SPerc first = "1">100%</SPerc>
                            <Parent>
                                <ParentS ></ParentS>
                            </Parent>
                        </SkillsBar>
                        
                        <SkillsBar>
                            <STitle>CSS3</STitle>
                            <SPerc first = "2">90%</SPerc>
                            <Parent>
                                <ParentS ></ParentS>
                            </Parent>
                        </SkillsBar>
                        
                        <SkillsBar>
                            <STitle>Photoshop</STitle>
                            <SPerc first = "3">80%</SPerc>
                            <Parent>
                                <ParentS></ParentS>
                            </Parent>
                        </SkillsBar> */}

                    </Skills>
                    
                </div>
            </ProfileSkills>
      );
    
    }
}

export default Profile;
