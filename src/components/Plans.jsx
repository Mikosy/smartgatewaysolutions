import React from "react";
import { PricingSection } from "../database";
import { CheckCircle } from "lucide-react";
import { Zoom } from "react-awesome-reveal"; 
import "../components/css/Plans.css";

function Plans() {
  return (
    <section className="py-5 bg-dark text-light position-relative overflow-hidden">
      <div className="container mb-5 pb-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Plans for You</h1>
          <p className="text-secondary fs-5">
            Flexible pricing to fit your growth
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {PricingSection.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <Zoom triggerOnce>
                <div
                  className={`plan-card h-100 text-center p-4 border-0 ${item.shadow} ${
                    item.highlight ? "bg-primary text-white" : "bg-light"
                  }`}
                  style={{
                    transform: `scale(${item.scale})`,
                    zIndex: item.zIndex,
                  }}
                >
                  <div className="card-body">
                    <h5
                      className={`fw-semibold mb-2 ${
                        item.highlight ? "text-white" : "text-dark"
                      }`}
                    >
                      {item.title}
                    </h5>

                    <p
                      className={`fs-3 fw-bold mt-3 mb-4 ${
                        item.highlight ? "text-white" : "text-dark"
                      }`}
                    >
                      {item.price}
                    </p>

                    <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: "220px" }}>
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="mb-2 d-flex align-items-center"
                        >
                          <CheckCircle
                            className={`me-2 ${
                              item.highlight ? "text-light" : "text-success"
                            }`}
                            size={20}
                          />
                          <span
                            className={`${
                              item.highlight ? "text-light" : "text-muted"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
