import React from 'react'
import "./Footer.css";
import './Menu.css'
import { Link } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
export default function MenuFooter() {
  return (
    <div className="menu-footer-cont">
        <div className="footer-saf">
          <div className="footer-flex">
            <div className="footer-flex-item">
              <h2 className='word2'>Contact Us</h2>
              <br></br>
              <label>Add :    New Hyde Park, NY 11040</label> <br></br>
              <label>Email :<a className='anchor' href="#" >    mrharrison09@gmail.com</a></label>
              
              <br></br>
              <label>Phone :    8438974801</label>
              <br></br>
                <div className="icons">
                <Facebook strokeWidth={0} className="footer-icons" />
                <Twitter strokeWidth={0} className="footer-icons" />
                <Linkedin strokeWidth={0} className="footer-icons" /></div>
              </div>
              <div className="footer-flex-item">
                <h2 className='word2'>Links</h2>
                <br></br>
                <a className='anchor' href="#">About Us</a><br></br>
                <a className='anchor' href="#">Services</a>
                <br></br>
                <a className='anchor' href="#">Case</a>
                <br></br>
                <a className='anchor' href="#">Contact Us</a>
              </div>
              <div className="footer-flex-item">
                <h2 className='word2'>Hours</h2>
                <p>Tincidunt neque pretium lectus donec risus.</p>
                <p>Mon - Fri: 9:00AM - 6:00PM</p>
                <p>Sat - Sun: 8:00AM - 4:00PM</p>
              </div>
              <div className="footer-flex-item">
                <h2 className='word2'>Newsletter</h2>
                <div className="sub">
                    <input placeholder="Enter Email Address" />
                    <button><span></span>SUBSCRIBE</button>
                    </div>
              </div>
            </div>
          </div>
        </div>
  )
}
