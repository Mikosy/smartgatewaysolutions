import { securityData } from "../database";
import "../components/css/Security.css";


function Security() {
  return (
    <div className="custom-container-three pt-3 pb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">Your Security is our Priority</h1>
        <p className="text-muted fs-5">
          We offer bank level security and industry leading encryption
        </p>
      </div>

      <div className="row g-4">
        {securityData.map((item) => (
          <div className="col-xl-4 col-md-6 col-sm-12" key={item.id}>
            <div className="security-card shadow-sm h-100 text-center p-4">
              <div className="icon-wrapper mb-3 mx-auto">{item.icon}</div>
              <h3 className="card-title fw-semibold">{item.title}</h3>
              <p className="text-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Security;
