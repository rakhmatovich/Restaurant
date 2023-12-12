import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-orange-100 text-gray-700 p-10">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links flex flex-wrap justify-between items-start w-full text-left mb-8">
          <div className="sb__footer-links_div w-1/5 m-4">
            <h4 className="text-lg font-semibold mb-3">For Business</h4>
            <a href="/employer">
              <p className="hover:text-orange-500">Employer</p>
            </a>
            <a href="/healthplan">
              <p className="hover:text-orange-500">Health Plan</p>
            </a>
            <a href="/individual">
              <p className="hover:text-orange-500">Individual</p>
            </a>
          </div>
          <div className="sb__footer-links_div w-1/5 m-4">
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <a href="/resource">
              <p className="hover:text-orange-500">Resource center</p>
            </a>
            <a href="/resource">
              <p className="hover:text-orange-500">Testimonials</p>
            </a>
            <a href="/resource">
              <p className="hover:text-orange-500">STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div w-1/5 m-4">
            <h4 className="text-lg font-semibold mb-3">Partners</h4>
            <a href="/employer">
              <p className="hover:text-orange-500">Swing Tech</p>
            </a>
          </div>
          <div className="sb__footer-links_div w-1/5 m-4">
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <a href="/about">
              <p className="hover:text-orange-500">About</p>
            </a>
            <a href="/press">
              <p className="hover:text-orange-500">Press</p>
            </a>
            <a href="/career">
              <p className="hover:text-orange-500">Career</p>
            </a>
            <a href="/contact">
              <p className="hover:text-orange-500">Contact</p>
            </a>
          </div>
          <div className="sb__footer-links_div w-1/5 m-4">
            <h4 className="text-lg font-semibold mb-3">Coming soon on</h4>
            <div className="socialmedia flex gap-5">
              <p>
                <img src="/assets/fbimg.png" alt="" className="w-6" />
              </p>
              <p>
                <img src="/assets/twitterimg.png" alt="" className="w-6" />
              </p>
              <p>
                <img src="/assets/linkedinimg.png" alt="" className="w-6" />
              </p>
              <p>
                <img src="/assets/instaimg.png" alt="" className="w-6" />
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-gray-600" />
        <div className="sb__footer-below flex justify-between mt-2">
          <div className="sb__footer-copyright text-sm">
            <p>@{new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="sb__footer-below-links flex">
            <a href="/terms" className="mr-5 hover:text-orange-500">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy" className="mr-5 hover:text-orange-500">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security" className="mr-5 hover:text-orange-500">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie" className="hover:text-orange-500">
              <div>
                <p>Cookie declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
