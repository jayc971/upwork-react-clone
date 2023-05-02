import { star } from "../assets";

export default function Section2(){
    return(
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
</section>)}