import { motion } from "framer-motion";

function BannerContents() {
  return (
    <>
      <div className="banner-section custom-container-two">
        <div className="">
          <motion.h1
            className="banner-header mt-0 pb-2"
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 100, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Your <span class="d-none d-md-inline"><br /></span>
            Gateway to <span class="d-none d-md-inline"><br /></span>
            Property in Nigeria

          </motion.h1>

          <motion.p
            className="banner-subtext pt-2"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SmartGateway connects Nigerians in the diaspora to safe and verified
            property opportunities back home. We provide real estate marketing,
            mortgage brokerage, and end-to-end support helping you buy property,
            access financing, and handle documentation with confidence.
          </motion.p>

          <motion.div
            className="banner-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a className="btn btn-green" href="#">
              Join Waitlist →
            </a>
            <a className="btn btn-dark" href="#">
              ▶ Watch Demo
            </a>
          </motion.div>

          <motion.div
            className="banner-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Properties Marketed</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Diaspora Support</div>
            </div>
          </motion.div>
        </div>

        <div className="card-section">
          <motion.aside
            className="banner-right"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div
              className="property-card"
              role="region"
              aria-label="Property overview"
            >
              <h4 className="property-title">Property Overview</h4>

              <div className="progress-row">
                <div className="progress-meta">
                  <span className="meta-icon">🏠</span>
                  <span className="meta-label">Units Sold</span>
                </div>
                <div className="progress">
                  <div className="progress-fill" style={{ width: "72%" }} />
                </div>
                <div className="progress-value">72%</div>
              </div>

              <div className="progress-row">
                <div className="progress-meta">
                  <span className="meta-icon">💰</span>
                  <span className="meta-label">Mortgage Accessed</span>
                </div>
                <div className="progress">
                  <div className="progress-fill" style={{ width: "64%" }} />
                </div>
                <div className="progress-value">64%</div>
              </div>

              <div className="chips">
                <div className="chip chip-location">
                  <div className="chip-title">Location</div>
                  <div className="chip-sub">Lagos</div>
                </div>
                <div className="chip">
                  <div className="chip-title">Price</div>
                  <div className="chip-sub">₦45m</div>
                </div>
                <div className="chip">
                  <div className="chip-title">Tenor</div>
                  <div className="chip-sub">10 yrs</div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </>
  );
}

export default BannerContents;
