import React from 'react';
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const ContactDetail = (props) => {
    console.log(props);
    return (
       <div className="main" style={{marginTop: "60px"}}>
           <div className="ui card centered">
               <div className="image">
                   <img src={user} alt="user" />
               </div>
               <div className="content">
                   <div className="header">{props.name}</div>
                   <div className="description">{props.email}</div>
               </div>
           </div>
           <div className="center-div" style={{textAlign:"center"}}>
           <Link to="/">
                   <button className="ui button blue">
                       Back to Contact List
                   </button>
               </Link>
           </div>
       </div>
    );
};

export default ContactDetail;