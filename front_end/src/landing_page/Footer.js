import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#808080"}}>
      <div className="container border-top">
        <div className="row mt-5" style={{ color: "white" }}>
          <div className="col-3">
            <img
              src="SchoolImage/footerLogo.jpg"
              style={{ width: "50%" }}
              alt="logo"
            />
            <p>
              Copyright
              <i class="fa fa-at" aria-hidden="true"></i>
              2024 Vishal Bharti Senior Secondary School- All rights reserved.
              <br />
              <span style={{ marginRight: "4%" }}>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </span>
              <span style={{ marginRight: "4%" }}>
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </span>
              <span style={{ marginRight: "4%" }}>
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </span>
              <span style={{ marginRight: "4%" }}>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </span>
            </p>
            <br />
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
        <div className="mt-5" style={{ fontSize: "14px", color: "white" }}>
          <p>
            "Education gives the deepest insight, search for truth the highest
            form of Worship, passion ends in endless miseries, scarifies and
            renunciation bring eternal bliss." 
            
          </p>

          <p>
          The Mahabharata Vishal Bharti Senior Secondary School, a premier educational institution, was established in 1989.
          </p>

          <p>
          Vishal Bharti Sr. Sec. School is a new wave
            Progressive school with the vision and aspiration of the new
            millennium enriched by the wisdom of great thinkers and educators
            like Tagore and Vivekananda and the dreams of scientist and educator
            Stephen Hawkings. Achieving excellence through human values is the
            goal of this School. The school is a unique experiment and honest
            endeavor aiming at man-making education for building a dynamic
            society by developing the personality of the child towards fullness.
          </p>

          <p>
          It is by helping the child in the manifestation of the perfection
            already existing in the child and by creating an environment where
            the child can recognize "the angle of surplus" that he is. Integral
            Education for fullness is ensured by developing his physical,
            intellectual, emotional and spiritual qualities in a balanced form,
            so that the child can blossom as a multi lotus in its pristine glory
            under the ever-purifying, constantly ever rising Sun. The
            manifestation of the perfection already existing in the child-the
            blossoming of the "Integral", i.e. his physical, intellectual,
            emotional and spiritual faculties.
          </p>
        </div>
        <div className="container">
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
