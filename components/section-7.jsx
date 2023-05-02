import {
    airbnb_2 ,
    arrow_right ,
    automatic , bissell_white ,
    company_logos_cover , coty ,
    go_daddy_white ,
    microsoft_white ,
    nasdaq , rancher
} from "../assets";

export default function Section7(){
    return(

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

    )
}