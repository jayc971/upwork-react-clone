import { android , apple , facebook , instagram , linkedin , twitter , youtube } from "../assets";

export default function Footer(){
    return(

<footer className="footer">
    <div className="wrapper">
        <div className="footer_top">
            <div className="footer_top_list">
                <h5>For Clients</h5>
                <ul>
                    <li>
                        <a href="#0">How to Hire</a>
                    </li>

                    <li><a href="#0">Talent Marketplace</a></li>

                    <li>
                        <a href="#0"> Project Catalog</a>
                    </li>
                    <li>
                        <a href="#0">Talent Scout</a>
                    </li>
                    <li>
                        <a href="#0"> Hire an Agency</a>
                    </li>
                    <li>
                        <a href="#0">Enterprise</a>
                    </li>
                    <li>
                        <a href="#0">Payroll Services</a>
                    </li>
                    <li>
                        <a href="#0">Direct Contracts</a>
                    </li>
                    <li>
                        <a href="#0">Hire Worldwide</a>
                    </li>
                    <li>
                        <a href="#0">Hire in the USA</a>
                    </li>
                </ul>
            </div>
            <div className="footer_top_list">
                <h5>For Talent</h5>
                <ul>
                    <li>
                        <a href="#0">How to Find Work</a>
                    </li>

                    <li><a href="#0">Direct Contracts</a></li>

                    <li>
                        <a href="#0">Find Freelance Jobs Worldwide</a>
                    </li>
                    <li>
                        <a href="#0">Find Freelance Jobs in the USA</a>
                    </li>
                </ul>
            </div>

            <div className="footer_top_list">
                <h5>Resources</h5>
                <ul>
                    <li>
                        <a href="#0">Help & Support</a>
                    </li>

                    <li><a href="#0">Success Stories</a></li>

                    <li>
                        <a href="#0">Upwork Reviews</a>
                    </li>
                    <li>
                        <a href="#0">Resources</a>
                    </li>
                    <li>
                        <a href="#0">Blog</a>
                    </li>
                    <li>
                        <a href="#0">Community</a>
                    </li>
                    <li>
                        <a href="#0">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#0">Free Business tools</a>
                    </li>
                </ul>
            </div>
            <div className="footer_top_list">
                <h5>Company</h5>
                <ul>
                    <li>
                        <a href="#0">About Us </a>
                    </li>

                    <li><a href="#0">Leadership</a></li>

                    <li>
                        <a href="#0">Investor Relations</a>
                    </li>
                    <li>
                        <a href="#0">Careers</a>
                    </li>
                    <li>
                        <a href="#0">Our Impact</a>
                    </li>
                    <li>
                        <a href="#0">Press</a>
                    </li>
                    <li>
                        <a href="#0">Contact Us</a>
                    </li>
                    <li>
                        <a href="#0">Trust, Safety & Security</a>
                    </li>
                    <li>
                        <a href="#0">Modern Slavery Statement</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer_middle">
            <div className="footer_middle_left">
                <h5>Follow Us</h5>
                <div className="footer_middle_left_list">
                    <div className="footer_icons">
                        <img src={facebook} alt="facebook"/>
                    </div>
                    <div className="footer_icons">
                        <img src={linkedin} alt="linkedIn"/>
                    </div>
                    <div className="footer_icons">
                        <img src={twitter} alt="twitter"/>
                    </div>
                    <div className="footer_icons">
                        <img src={youtube} alt="youtube"/>
                    </div>
                    <div className="footer_icons">
                        <img src={instagram} alt="instagram"/>
                    </div>
                </div>
            </div>
            <div className="footer_middle_right">
                <h5>Mobile app</h5>
                <div className="footer_middle_right_list">
                    <div className="footer_icons">
                        <img src={apple} alt="apple"/>
                    </div>
                    <div className="footer_icons">
                        <img src={android} alt="android"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_bottom">
            <p>© 2015 - 2022 Upwork® Global Inc.</p>
            <ul className="footer_bottom_list">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>CA Notice at Collection</li>
                <li>Cookie Settings</li>
                <li>Accessibility</li>
            </ul>
        </div>
    </div>
</footer>
    )
}