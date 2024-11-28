import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#808080" }}>
      <div className="container border-top">
        <div className="row mt-5" style={{color:"white"}}>
          <div className="col-3">
            <img src="SchoolImage/footerLogo.jpg" style={{ width: "50%" }} alt="logo" />
            <p>Copyright
              <i class="fa fa-at" aria-hidden="true"></i>
              2024 Vishal Bharti Senior Secondary School-
              All rights reserved.<br/>
              <span style={{ marginRight: "4%" }}><i class="fa fa-instagram" aria-hidden="true"></i></span>
              <span style={{ marginRight: "4%" }}><i class="fa fa-twitter" aria-hidden="true"></i></span>
              <span style={{ marginRight: "4%" }}><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
              <span style={{ marginRight: "4%" }}><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
            </p><br/>
          
          </div>
          <div className="col-3">
            <p>Infrastructure</p>
            <a href="">Class Room</a>
            <br />
            <a href="">Computer Lab</a>
            <br />
            <a href="">Library</a>
            <br />
            <a href="">Mathematics Lab</a>
            <br />
            <a href="">Music</a>
            <br />
            <a href="">PCM Laboratory</a>
            <br />
            <a href="">Playground</a>
            <br />
            <a href="">Play Zone</a>
            <br />
            <a href="">Reception</a>
            <br />
            <a href="">Transportation</a>
            <br />
          </div>
          <div className="col-3">
            <p>Academics</p>
            <a href="">Rules & Regulations</a>
            <br />
            <a href="">Assessments</a>
            <br />
            <a href="">Counselling</a>
          </div>
          <div className="col-3">
            <p>Activities</p>
            <a href="">Glimpse of Activities</a>
            <br />
            <a href="">Planner</a>
          </div>
        </div>
        <div className="mt-5" style={{ fontSize: "14px",color:"white" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-4"></div>
            <div className="col" style={{ frontSize: "1%" }}>
              <a href="" style={{ marginRight: "2%" }}>
                reCAPTCHA
              </a>
              <a href="" style={{ marginRight: "2%" }}>
                Google Privacy Policy
              </a>
              <a href="" style={{ marginRight: "2%" }}>
                Terms and conditions
              </a>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
