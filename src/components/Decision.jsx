import { decisionData } from "../database";
import { Fade, Zoom } from "react-awesome-reveal";
import "../components/css/Decision.css";



// Decision component
function Decision() {
  return (
    <section className="decision-section py-5 my-5">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h1 className="fw-bold display-5 text-center">
            Why Choose SGS?
          </h1>
          <p className="text-center text-muted mb-5">
            Empowering you to make smarter mortgage decisions with tools and
            insights that put you in control.
          </p>
        </Fade>

        <div className="row g-4">
          {decisionData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <Zoom triggerOnce>
                <div className="decision-card h-100 p-4 shadow-sm text-center rounded-4 bg-white hover-shadow">
                  <div className="decision-icon-wrapper mx-auto mb-3">{item.icon}</div>
                  <h5 className="fw-semibold mb-2 text-dark">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </div>
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Decision;
