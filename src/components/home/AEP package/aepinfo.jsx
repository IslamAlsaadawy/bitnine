import AemCard from "../../resusable/card/AEM card/aemCard";
import "./aepinfo.css";
import info1 from "../../../assets/info1.png";

const AepInfo = () => {
  return (
    <section className="aepinfo_section">
      <div className="aepinfo_container">
        <div className="aepinfo_text">
          <h2>Agens Enterprise Package</h2>
          <p>
            Agens Enterprise Package comes with a high availability management
            server that <br />
            supports backup and data monitoring dashboard that helps enterprise
            customers manage their data efficiently.
          </p>
        </div>

        <div className="aepinfo_middle">
          <div className="aepinfo_left">
            <h3> Agens HA Manager</h3>
            <h4>
              <span className="hac"> HA Clustering</span> – Failover/Failback,
              Load-balancing
            </h4>
            <img
              className="aepinfo_image"
              src={info1}
              alt=""
            />
            <h4 className="mobile_aep">Replication</h4>
          </div>
          <div className="aepinfo_right">
            <h3>Agens Enterprise Manager</h3>
            <AemCard
              title={"Backup/Restore"}
              text1={"provides a convenient interface for backup & restore"}
              text2={"provides a convenient interface for backup & restore"}
            ></AemCard>
            <AemCard
              title={"DB Monitoring Dashboard"}
              text1={"monitors real-time session & transaction lock"}
              text2={"provides status for server CPU & memory"}
            ></AemCard>
            <AemCard
              title={"Schedule Management"}
              text1={
                "provides module for script, SQL job, and scheduling management"
              }
              text2={"provides UX dedicated to scheduling"}
            ></AemCard>
            <AemCard
              title={"Database Audit"}
              text1={"enables auditing via user interface"}
              text2={"view audit results via user interface"}
            ></AemCard>
            <AemCard
              title={"SQL Monitoring"}
              text1={
                "collects query statistics required for performance analysis"
              }
              text2={"extracts monitoring results in query"}
            ></AemCard>
            <AemCard
              title={"Performance Management"}
              text1={
                "monitors and collects operation status & statistical data"
              }
              text2={
                "provides status reports required for improving performance"
              }
            ></AemCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AepInfo;
