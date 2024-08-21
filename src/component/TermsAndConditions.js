import React from "react";
import './TermsAndConditions.css'; 

function TermsAndConditions({handleCloseTerms}) {

    return (
        <div className="terms-and-conditions">
            <div className="terms-content">

                {/* TERMS */}
                <div className="wrap">
                <div className="content-flex">
                <h1 style={{color: 'red'}}>Terms and Conditions</h1>
                <p>Welcome to our website! By accessing or using our site, you agree to comply with and be bound by the following terms and conditions.</p>
                </div>


                <div className="content-flex">
                <h2 style={{color: 'red'}}>1. Acceptance of Terms</h2>
                <p>By using our services, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.</p>
                </div>
                

                
                <div className="content-flex">
                <h2 style={{color: 'red'}}>2. Changes to Terms</h2>
                <p>We reserve the right to update these terms at any time. Your continued use of the site constitutes your acceptance of the updated terms.</p>
                </div>

                <div className="content-flex">
                <h2 style={{color: 'red'}}>3. User Responsibilities</h2>
                <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                </div>

                <div className="content-flex">
                <h2 style={{color: 'red'}}>4. Intellectual Property</h2>
                <p>All content on this site, including text, graphics, logos, and images, is the property of the company and is protected by intellectual property laws.</p>
                </div>
                </div>
                {/* TERMS ENDS */}

                {/* POLICY */}
                <div className="wrap">
                <div className="content-flex">
                <h1 style={{color: 'green'}}>Privacy Policy</h1>
                <p>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
                </div>

               
                <div className="content-flex">
                <h2 style={{color: 'green'}}>1. Information We Collect</h2>
                <p>We may collect personal information that you provide to us, such as your name, email address.</p>
                </div>

                <div className="content-flex">
                <h2 style={{color: 'green'}}>2. Use of Information</h2>
                <p>We use the information we collect to provide and improve our services, process transactions, and communicate with you.</p>
                </div>

                <div className="content-flex">
                <h2 style={{color: 'green'}}>3. Sharing of Information</h2>
                <p>We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
                </div>

                <div className="content-flex">
                <h2 style={{color: 'green'}}>4. Data Security</h2>
                <p>We implement security measures to protect your personal information from unauthorized access and use.</p>
                </div>

                <div className="content-flex">
                <h2 style={{color: 'green'}}>5. Your Rights</h2>
                <p>You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.</p>
                </div>
                {/* POLICY ENDS */}

                </div>

                {/* CONTACT AND LAST UPDATE */}
                <div className="wrap">
                <div className="wrap">
                

                
                <div className="content-flex">
                <h1 style={{color: 'blue'}}>Contact Information</h1>
                <p>If you have any questions about our terms and conditions or privacy policy, please contact us at support@gamefusion.com.</p>
                </div>
                </div>

                <div className="content-flex">
                <p>Last updated: <strong>2024 August 21</strong></p>
                </div>
                </div>
                {/* CONTACT ENDS */}

                <button onClick={handleCloseTerms} className="close">+</button>

            </div>
        </div>
    )
}

export default TermsAndConditions;
