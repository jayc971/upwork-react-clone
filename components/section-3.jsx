import { briefcase , enterprise , skills , support } from "../assets";

export default function Section3(){
    return(
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
    )}
