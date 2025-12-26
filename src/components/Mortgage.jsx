import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Sparkles } from "lucide-react";

function Mortgage() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [monthly, setMonthly] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!amount || !years || !rate) return;

    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const payments = parseInt(years) * 12;

    const x = Math.pow(1 + monthlyRate, payments);
    const monthlyPayment = (principal * x * monthlyRate) / (x - 1);

    setMonthly(monthlyPayment.toFixed(2));
  };

  return (
    <div className="bg-light py-5 my-5">
      <div className="custom-container-three">
        <div className="row align-items-center">
          {/* Left side */}
          <motion.div
            className="col-xl-6 col-md-6 col-sm-12 mb-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* <h6 className="text-primary fw-bold">Smart Mortgage</h6> */}
            <h1 className="display-5 fw-bold mt-0 mb-3">
              Find Your Perfect Mortgage in Minutes
            </h1>
            <p className="text-muted fs-5">
              Compare rates from top lenders, get pre-approved instantly, and
              secure your dream home with ease.
            </p>

            <ul className="list-unstyled fs-5">
              <li className="mb-2 d-flex align-items-center">
                <Sparkles  className="text-success me-2" size={20} />
                Instant Pre-Approval
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Sparkles  className="text-success me-2" size={20} />
                Compare Top Banks
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Sparkles  className="text-success me-2" size={20} />
                Best Rates Guaranteed
              </li>
            </ul>

            <small className="text-muted">
              No paperwork, no waiting — all online.
            </small>
          </motion.div>

          {/* Right side - Calculator */}
          <motion.div
            className="col-xl-6 col-md-6 col-sm-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="card border-0 rounded-4 shadow-lg p-4"
              style={{
                background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h4 className="fw-bold mb-4 text-center">
                Quick Rate Calculator
              </h4>
              <form onSubmit={handleCalculate}>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3 shadow-sm"
                    id="loanAmount"
                    placeholder="Enter loan amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <label htmlFor="loanAmount">Loan Amount ($)</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3 shadow-sm"
                    id="loanYears"
                    placeholder="Enter years"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                  <label htmlFor="loanYears">Term (Years)</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    step="0.01"
                    className="form-control rounded-3 shadow-sm"
                    id="interestRate"
                    placeholder="e.g. 5"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <label htmlFor="interestRate">Interest  Rate (%)</label>
                </div>

                <motion.button
                  type="submit"
                  className="btn w-100 p-3 mt-3 rounded-3 fw-bold"
                  whileHover={{ background: "linear-gradient(135deg, #d63384, #6f42c1)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{
                    background: "linear-gradient(135deg, #6f42c1, #d63384)",
                    outline: "none",
                    border: "none",
                    color: "#fff",
                  }}
                  
                >
                  Calculate
                </motion.button>
              </form>

              {monthly && (
                <motion.div
                  className="mt-4 p-3 rounded-3 text-center text-white fw-bold"
                  style={{
                    background: "linear-gradient(135deg, #d63384, #6f42c1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Estimated Monthly Payment: ${monthly}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Mortgage;
