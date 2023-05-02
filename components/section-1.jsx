import { airbnb , bissell , image_1 , microsoft } from "../assets";

export default function Section1(){
    return(

<section className="section_1 wrapper">

    <div className="section_1_bottom">
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
</section> )}