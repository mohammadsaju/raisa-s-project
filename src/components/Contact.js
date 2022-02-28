import React from "react";
import {FaLocationArrow,FaPhoneAlt,FaEnvelope,FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-slate-700 text-center mt-12">Have Some Questions?</h1>
      <p className="text-center text-lg text-slate-500 tracking-tight mb-10">Have any questions? i'd like to hear from you.</p>
      <div className="max-w-6xl border mx-auto py-12 px-10 sm:px-24 sm:flex sm:gap-16 shadow-md shadow-green-400">
      <div className="sm:w-1/2 mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-teal-500 tracking-tight mb-3">
            Let's talk
          </h1>
          <p className="text-slate-500 text-lg font-light">
            Let's talk about your website or project. Send us a message and we
            will be in touch within one business day.
          </p>
        </div>
        <form className="flex flex-col items-start mt-8">
          <label className=" text-gray-500 font-medium ml-3">Your Name</label>
          <input
            className="outline-none bg-slate-50 caret-sky-500 py-3 px-5 w-full rounded-full mb-4 focus:shadow-inner"
            type="text"
          />
          <label className=" text-gray-500 font-medium ml-3">Your Email</label>
          <input
            className="outline-none bg-slate-50 caret-sky-500 py-3 px-5 w-full rounded-full mb-4 focus:shadow-inner"
            type="email"
          />
          <label className=" text-gray-500 font-medium ml-3">Your Message</label>
          <textarea rows='4'
            className="outline-none bg-slate-50 caret-sky-500 rounded-[40px] py-3 px-8 w-full text-body-color text-base resize-none focus:shadow-inner"
            placeholder="Type something if your want..."
          ></textarea>
          <button className="bg-sky-400 px-10 py-3 rounded-full text-white font-medium mt-8 shadow-md shadow-green-300 hover:-translate-y-2 transition">Send Message</button>
        </form>
      </div>
      <div className="sm:w-1/2 mx-auto">
        <div>
          <img className="mb-2" src="./images/contact.gif" alt="contact" />
        </div>
        <div className="flex items-center gap-4 text-slate-400 font-mono">
        <FaLocationArrow></FaLocationArrow>
          <p>
            Aren Road, Comilla, Bangladesh
          </p>
        </div>
        <div className="flex items-center gap-4 text-slate-400 font-mono my-5">
        <FaPhoneAlt></FaPhoneAlt>
          <p>
            017********
          </p>
        </div>
        <div className="flex items-center gap-4 text-slate-400 font-mono">
        <FaEnvelope></FaEnvelope>
          <p>
            raisamuni@gmail.com
          </p>
        </div>
        <div className="flex gap-5 ml-10 mt-12">
          <div className="text-white bg-[#3b5998] p-3 rounded-full cursor-pointer hover:-translate-y-2 transition">
          <FaFacebookF/>
          </div>
          <div className="text-white bg-sky-500 p-3 rounded-full cursor-pointer hover:-translate-y-2 transition">
          <FaTwitter/>
          </div>
          <div className="text-white bg-[#e95950] p-3 rounded-full cursor-pointer hover:-translate-y-2 transition">
          <FaInstagram/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
