import { find_talent , right_arrow } from "../assets";

export default function Section4(){
    return(
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
    )}
