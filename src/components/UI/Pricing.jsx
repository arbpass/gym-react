import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
  return (
    <>
    <section id='pricing'>
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">
                    Gym <span className="highlights">Pricing</span> Plan
                </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br/>Magnam consequatur, iste quasi impedit saepe!</p>
            </div>

            {/* ==========pricing========== */}
            <div className="pricing_wrapper">
                <div className="pricing_item" data-aos='fade-up' data-aos-duration='1800'>
                    <div className="pricing_card-top">
                        <h2 className="section_title">Regular Member</h2>
                        <h2 className="pricing section_title">$50 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Unlimited access to gym</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Customer support</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Personal trainer</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Standard options</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> 5 class per week</span></li>
                        </ul>
                        <button className="register_btn">Join Now</button>
                    </div>
                </div>


                <div className="pricing_item pricing_item-02" data-aos='fade-up' data-aos-duration='1800'>
                    <div className="pricing_card-top">
                        <h2 className="section_title">Premium Member</h2>
                        <h2 className="pricing section_title">$70 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Unlimited access to gym</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Customer support</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Personal trainer</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Standard options</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> 5 class per week</span></li>
                        </ul>
                        <button className="register_btn">Join Now</button>
                    </div>
                </div>


                <div className="pricing_item" data-aos='fade-up' data-aos-duration='1800'>
                    <div className="pricing_card-top">
                        <h2 className="section_title">Standard Member</h2>
                        <h2 className="pricing section_title">$100 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Unlimited access to gym</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Customer support</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Personal trainer</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> Standard options</span></li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i> 5 class per week</span></li>
                        </ul>
                        <button className="register_btn">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Pricing