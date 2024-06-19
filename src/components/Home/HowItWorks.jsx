import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Create your account to unlock a world of job opportunities
                tailored to your interests and skills.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Whether you're a job seeker looking for your next opportunity or
                an employer looking to hire top talent, our platform has you
                covered. With a wide range of job listings and a user-friendly
                interface, finding the right job or candidate has never been
                easier.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Take the first step towards your dream job or find the perfect
                candidate for your organization. Our platform connects job
                seekers with top employers, making it easy to apply for jobs or
                recruit suitable candidates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
