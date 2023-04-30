import "./styles/index.scss";
import {
  logo ,
  dropdown ,
  search ,
  microsoft ,
  airbnb ,
  image_1 ,
  star ,
  skills ,
  briefcase ,
  support ,
  enterprise ,
  find_talent ,
  right_arrow ,
  star_circle ,
  doller_circle ,
  check_circle ,
  reading ,
  start_white ,
  group ,
  find_great_work ,
  arrow_right ,
  nasdaq ,
  microsoft_white ,
  go_daddy_white ,
  company_logos_cover ,
  automatic ,
  bissell_white , coty , rancher , airbnb_2 , facebook , linkedin , twitter , youtube , instagram , apple , android, up_your_work, bissell
} from './assets'


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header_wrapper">
          <div className="header_left">
            <img src={logo} alt=""/>
            <ul className="header_left_list">
              <li className="header_left_list_item">
                Find Talent
                <img src={dropdown} alt=""/>
              </li>
              <li className="header_left_list_item">
                Find Work
                <img src={dropdown} alt=""/>
              </li>
              <li className="header_left_list_item">
                Why Upwork
                <img src={dropdown} alt=""/>
              </li>
              <li className="header_left_list_item">Enterprise</li>
            </ul>
          </div>
          <div className="header_right">
            <div className="header_right_form">
              <input type="search" placeholder="Search" name="search" id=""/>
              <div className="header_right_form_input_icons">
                <img src={search} alt=""/>
                <img src={dropdown} alt=""/>
              </div>
            </div>
            <div className="header_right_btns">
              <button className="btn_primary">Log In
              </button
              >
              <button className="btn_secondary">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="header_nav_menu ">
          <div className="header_nav_menu_left">
            <ul className="header_nav_menu_items">
              <li className="header_nav_menu_item">Post a job and hire a pro
              <p>ABC</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--green-side-arrow)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg>
              </li>
              <li className="header_nav_menu_item">Browse and buy projects <p>ABC</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--green-side-arrow)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg></li>
              <li className="header_nav_menu_item">Let us find you the right talent <p>ABC</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--green-side-arrow)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg></li>
            </ul></div>
        </div>

        <div className="section_1_top">
          <ul className="section_1_top_list">
            <li className="section_1_top_list_item">Development & IT</li>
            <li className="section_1_top_list_item">Design & Creative</li>
            <li className="section_1_top_list_item">Sales & Marketing</li>
            <li className="section_1_top_list_item">Writing & Translation</li>
            <li className="section_1_top_list_item">Admin & Customer Support</li>
            <li className="section_1_top_list_item">
              More
              <img src={dropdown} alt=""/>
            </li>
          </ul>
        </div>
      </header>
      <section className="section_1 wrapper">

        <div className="sectin_1_bottom">
          <div className="section_1_bottom_left">
            <h1 className="title-1 font-marcellus bold-font">
              How work<br/>
              should work
            </h1>
            <h3 className="title-3">
              Forget the old rules. You can have the best people.<br/>
              Right now. Right here.
            </h3>
            <div className="section_1_bottom_left_btns">
              <button className="btn_secondary">Get Started
              </button
              >

            </div>
            <div className="section_1_bottom_left_companies_logo">
              <h4 className="title-4">Trusted by</h4>
              <div>
                <img src={microsoft} alt=""/>
                <img src={airbnb} alt=""/>
                <img src={bissell} alt=""/>
              </div>
            </div>
          </div>
          <div className="section_1_bottom_right">
            <img src={image_1} alt=""/>
          </div>
        </div>
      </section>


      <section className="section_extra wrapper">
        <div className="section_extra_left">
          <img src={up_your_work} alt=""/>
        </div>




        <div className="section_extra_right">

          <div className="section_extra_header section_extra_bottom_left">
            <h3 class="title-5 font-marcellus">Up your work game, it’s free.</h3>

          </div>

          <div>
            <button className="btn_secondary">Sign up for free</button> <button className="btn_secondary_outline">Learn how to hire</button>
          </div>
        </div>
      </section>


      <section className="section_2 wrapper">
        <div className="section_2_header">
          <h3>Browse talent by category</h3>
          <div>
            <p>Looking for work?</p>
            <a href="#0" className={"primary-color"}> Browse jobs</a>
          </div>
        </div>
        <div className="section_2_categories">
          <div className="section_2_categories_tile">
            <h4>Development & IT</h4>
            <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
              <span> 1,853 skills </span>
            </div>
          </div>
          <div className="section_2_categories_tile">
            <h4>Design & Creative</h4>
            <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
              <span> 968 skills </span>
            </div>
          </div>
          <div className="section_2_categories_tile">
            <h4>Sales & Marketing</h4>
            <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
              <span> 392 skills </span>
            </div>
          </div>
          <div className="section_2_categories_tile">
            <h4>Writing & Translation</h4>
            <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
              <span> 505 skills </span>
            </div>
          </div>
          <div className="section_2_categories_tile">
            <h4>Admin & Customer Support</h4>
            <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
              <span> 508 skills </span>
            </div>
          </div>
          <div className="section_2_categories_tile">
            <h4>Finance & Accounting</h4>
            <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
              <span> 214 skills </span>
            </div>
          </div>
          <div className="section_2_categories_tile">
            <h4>Engineering & Architecture</h4>
            <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
              <span> 650 skills </span>
            </div>
          </div>
          <div className="section_2_categories_tile">
            <h4>Legal</h4>
            <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
              <span> 133 skills </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section_3 wrapper">
        <div className="section_3_left">
          <div className="section_3_left_header">
            <h3>Enterprise Suite</h3>
            <h1 className={'font-marcellus bold-font'}>
              This is how<br/>
              <font className={'font-marcellus bold-font'}>good companies<br/>
                find good company</font>
            </h1>
            <span>
            Access the top 1% of talent on Upwork, and a full suite of hybrid<br/>workforce management tools. This is how innovation works now.
          </span>
          </div>

          <div className="section_3_left_details">
            <div>
              <img src={skills} alt="skills"/>
              <p>Access expert talent to fill your skill gaps</p>
            </div>
            <div>
              <img src={briefcase} alt="briefcase"/>
              <p>Control your workflow: hire, classify and pay your talent</p>
            </div>
            <div>
              <img src={support} alt="support"/>
              <p>Partner with Upwork for end-to-end support</p>
            </div>
          </div>
          <div className="section_left_btn">
            <button className="btn_primary">Learn More</button>
          </div>
        </div>
        <div className="section_3_right">
          <img src={enterprise} alt="enterprise"/>
        </div>
      </section>
      <section className="section_4 wrapper">
        <div className="section_4_background_img">
          <img src={find_talent} alt="find_talent"/>
        </div>
        <div className="section_4_body">
          <div className="section_4_body_row_1">
            <h4>For Clients</h4>
            <h1>
              Find talent <br/>
              your way
            </h1>
          </div>

          <div className="section_4_body_row_2">
            <h5>
              Work with the largest network of independent<br/>
              professionals and get things done—from quick <br/>turnarounds to
              big transformations.
            </h5>
          </div>
          <div className="section_4_body_row_4">
            <div className="section_4_body_row_4_card">
              <button>
              <span>
                Post a job <br/>
                and hire a pro
              </span>
                <span
                >Talent Marketplace<sup>TM</sup>
                <img src={right_arrow} alt="right-arrow"/>
              </span>
              </button>
            </div>
            <div className="section_4_body_row_4_card">
              <button>
              <span>
                Browse and <br/>
                buy projects
              </span>
                <span
                >Project Catalog<sup>TM</sup>
                <img src={right_arrow} alt="right-arrow"/>
              </span>
              </button>
            </div>

            <div className="section_4_body_row_4_card">
              <button>
              <span>
                Let us help you find <br/>
                the right talent
              </span>
                <span
                >Talent Scout<sup>TM</sup>
                <img src={right_arrow} alt="right-arrow"/>
              </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section_5 wrapper">
        <div className="section_5_left">
          <div className="section_5_left_info">
            <h1 className="section_5_left_info_title font-marcellus-bold ">
              Why businesses<br/>
              turn to Upwork
            </h1>

            <div className="section_5_left_info_item">
              <div className="section_5_left_info_item_left">
                <img src={star_circle} alt=""/>
              </div>
              <div className="section_5_left_info_item_right">
                <h3>Proof of quality</h3>
                <p>
                  Check any pro’s work samples, client reviews, and <br/>identity
                  verification.
                </p>
              </div>
            </div>
            <div className="section_5_left_info_item">
              <div className="section_5_left_info_item_left">
                <img src={doller_circle} alt=""/>
              </div>
              <div className="section_5_left_info_item_right">
                <h3>No cost until you hire</h3>
                <p>
                  Interview potential fits for your job, negotiate rates, and<br/>
                  only pay for work you approve.
                </p>
              </div>
            </div>
            <div className="section_5_left_info_item">
              <div className="section_5_left_info_item_left">
                <img src={check_circle} alt=""/>
              </div>

              <div className="section_5_left_info_item_right">
                <h3>Safe and secure</h3>
                <p>
                  Focus on your work knowing we help protect your data<br/>
                  and privacy. We’re here with 24/7 support if you need it.
                </p>
              </div>
            </div>
          </div>
          <div className="section_5_left_img">
            <img src={reading} alt=""/>
          </div>
        </div>
        <div className="section_5_right">
          <div className="section_5_right_info">
            <h3>
              We’re<br/>
              the world’s<br/>
              work marketplace
            </h3>
            <div className="section_5_right_info_item">
              <img src={start_white} alt=""/>
              <div>
                <h3>4.9/5</h3>
                <p>Clients rate professionals on Upwork</p>
              </div>
            </div>
            <div className="section_5_right_info_item">
              <img src={group} alt=""/>
              <div>
                <h3>Award winner</h3>
                <p>G2’s 2021 Best Software Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_6 wrapper">
        <div className="section_6_left">
          <img src={find_great_work} alt=""/>
        </div>
        <div className="section_6_right">
          <div className="section_6_right_top">
            <h3>For talent</h3>
            <h1>
              Find great<br/>
              work
            </h1>
            <p>
              Meet clients you’re excited to work with and take <br/>your career
              or business to new heights.
            </p>
          </div>
          <hr/>
          <div className="section_6_right_middle">
            <p id="text-1">
              Find opportunities<br/>
              for every stage of<br/>
              your freelance<br/>
              career
            </p>

            <p>
              Control when,<br/>
              where, and how <br/>you work
            </p>

            <p>
              Explore different<br/>
              ways to earn
            </p>
          </div>
          <div className="section_6_right_bottom">
            <button className="btn_primary">Find Opportunities</button>
          </div>
        </div>
      </section>

      <section className="section_7 wrapper">
        <h1>
          Trusted by leading<br/>
          brands and startups
        </h1>
        <div className="section_7_container">
          <div
              onClick="onClickLeft()"
              className="section_7_reviews_list_controls_left"
          >
            <img src={arrow_right} alt=""/>
          </div>
          <div
              onClick="onClickRight()"
              className="section_7_reviews_list_controls_right"
          >
            <img src={arrow_right} alt=""/>
          </div>
          <div className="section_7_reviews_carousel">
            <div className="section_7_reviews_list">
              <div className="section_7_reviews_list_box_1">
                <div className="section_7_reviews_list_item item_1">
                  <div className="section_7_reviews_list_item_top">
                    <img src={nasdaq} alt=""/>
                    <h4>
                      “Upwork enables us to differentiate<br/>
                      ourselves from our competitors and <br/>produce content at
                      a higher caliber.”
                    </h4>
                    <p>Josh Machiz, Chief Digital Officer</p>
                  </div>
                  <div className="section_7_reviews_list_item_bottom">
                    <h5>Results</h5>
                    <hr/>
                    <div className="section_7_reviews_list_item_bottom_results">
                      <div>
                        <h4>Emmy Winning</h4>
                        <p>
                          Facebook Watch<br/>
                          program
                        </p>
                      </div>
                      <div>
                        <h4>Millions</h4>
                        <p>
                          of impressions generated<br/>
                          per client per IPO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section_7_reviews_list_item item_2">
                  <div className="section_7_reviews_list_item_top">
                    <img src={microsoft_white} alt=""/>
                    <h4>
                      “One of the advantages of utilizing<br/>
                      freelancers is finding talent with different<br/>
                      skills quickly as our needs change.”
                    </h4>
                    <p>Carol Taylor, Director of Content Experience</p>
                  </div>
                  <div className="section_7_reviews_list_item_bottom">
                    <h5>Results</h5>
                    <hr/>
                    <div className="section_7_reviews_list_item_bottom_results">
                      <div>
                        <h4>50% Faster</h4>
                        <p>launch of projects</p>
                      </div>
                      <div>
                        <h4>10,000</h4>
                        <p>projects completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section_7_reviews_list_box_2">
                <div className="section_7_reviews_list_item item_3">
                  <div className="section_7_reviews_list_item_top">
                    <img src={go_daddy_white} alt=""/>
                    <h4>
                      “I don’t think business would have grown<br/>
                      as fast or as well if not for the freelancers’<br/>
                      expertise and ability to adapt.”
                    </h4>
                    <p>Anthony Massarweh, Program Manager</p>
                  </div>

                  <div className="section_7_reviews_list_item_bottom">
                    <h5>Results</h5>
                    <hr/>
                    <div className="section_7_reviews_list_item_bottom_results">
                      <div>
                        <h4>72-Hour</h4>
                        <p>average turnaround on websites</p>
                      </div>
                      <div>
                        <h4>3x Faster</h4>
                        <p>launch of new program</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section_7_reviews_list_item item_4">
                  <div className="section_7_reviews_list_item_left">
                    <img src={company_logos_cover} alt=""/>
                  </div>
                  <div className="section_7_reviews_list_item_right">
                    <h5>And many more</h5>
                    <img src={airbnb_2} alt=""/>
                    <img src={automatic} alt=""/>
                    <img src={bissell_white} alt=""/>
                    <img src={coty} alt=""/>
                    <img src={rancher} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_8 wrapper">
        <div className="section_8_left">
          <a href="#0">Top skills</a>
          <a href="#0">Trending skills</a>
          <a href="#0">Top skills in US</a>
          <a href="#0">Project Catalog<sup>TM</sup></a>
        </div>
        <div className="section_8_middle">
          <a href="#0">Data Entry Specialists</a>
          <a href="#0">Video Editors</a>
          <a href="#0">Data Analyst</a>
          <a href="#0">Shopify Developer</a>
          <a href="#0">Ruby on Rails Developer</a>
          <a href="#0">Android Developer</a>
          <a href="#0">Bookkeeper</a>
          <a href="#0">Content Writer</a>
          <a href="#0">Copywriter</a>
          <a href="#0">Database Administrator</a>
          <a href="#0">Data Scientist</a>
          <a href="#0">Front-End Developer</a>
          <a href="#0">Game Developer</a>
          <a href="#0">Graphic Designer</a>
          <a href="#0">iOS Developer</a>
          <a href="#0">Java Developer</a>
        </div>
        <div className="section_8_right">
          <a href="#0">JavaScript Developer</a>
          <a href="#0">Logo Designer</a>
          <a href="#0">Mobile App Developer</a>
          <a href="#0">PHP Developer</a>
          <a href="#0">Python Developer</a>
          <a href="#0">Resume Writer</a>
          <a href="#0">SEO Expert</a>
          <a href="#0">Social Media Manager</a>
          <a href="#0">Software Developer</a>
          <a href="#0">Software Engineer</a>
          <a href="#0">Technical Writer</a>
          <a href="#0">UI Designer</a>
          <a href="#0">UX Designer</a>
          <a href="#0">Virtual Assistant</a>
          <a href="#0">Web Designer</a>
          <a href="#0">Wordpress Developer</a>
        </div>
      </section>
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
      <script src="./js/script.js"></script>
    </div>
  );
}

export default App;
