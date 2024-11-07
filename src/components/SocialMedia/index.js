import React, { Component } from "react";
import axios from "axios";
import  { SocialMediaSection , Social , Icon , SocialP , SpanOne , SpanTwo } from './style.js'


class  SocialMedia  extends  Component{

state = {
    all : []
}

componentDidMount(){
    // axios.get('js/data.json').then( (res) => { console.log(res.data.social)})
    axios.get('js/data.json').then( (res) => { this.setState({ all : res.data.social })})
}

    render(){

       const {all} = this.state ;
       const hhh =  all.map((e)=>{
        return(
            <Social item ={e.id} key={e.id}>
                <Icon className={e.icon}></Icon>
                <SocialP>
                    <SpanOne>{e.title}</SpanOne>
                    <SpanTwo>{e.body}</SpanTwo>
                </SocialP>
            </Social>
        )
       })

        return (
            <SocialMediaSection> 
                <div>
                   {hhh}
                </div>
            </SocialMediaSection>
      );
    
    }
}

export default SocialMedia;
