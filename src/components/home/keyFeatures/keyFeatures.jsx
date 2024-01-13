import "./keyFeatures.css";
import keyfeaturesImg from "../../../assets/img_key-features_eng-1024x402.png";

const KeyFeatures = () => {
  return (
    <section className="keyfeatures_section">
      <div className="keyfeatures_container">
        <div className="keyfeatures_text">
          <h2>Key Features</h2>
          <p>
            Manage your data with Agens Enterprise Package
            <br />
            Essential enterprise features such as high availability and sharding
            are provided
          </p>
        </div>
        <div className="keyfeatures_image">
          <img
            src={keyfeaturesImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
