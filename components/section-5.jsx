import { check_circle , doller_circle , group , reading , star_circle , start_white } from "../assets";

export default function Section5(){
    return(


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
</section>)
}