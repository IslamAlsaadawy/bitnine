import BlueButton from "../../resusable/button/blueButtonLink";
import "./agensSql.css";
const AgensSql = () => {
  return (
    <section className="agens_section">
      <div className="agens_container">
        <div className="agens_image">
          <img
            src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo-300x61.png"
            alt=""
          />
        </div>
        <div className="agens_text">
          <h3> An integration of Bitnine’s DB technology and PG expertise</h3>
          <p>
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with
            years of expertise and knowledge accumulated through database
            research and development.
          </p>
          <p>
            The enterprise package, along with AgensSQL engine, is an all-in-one
            solution that ensures the efficiency and scalability of data
            management.
          </p>
          <p>
            Get AgensSQL now for stable operation and management services at a
            reduced maintenance cost.
          </p>
        </div>
        <div className="agens_links">
          <BlueButton text={"contact"}></BlueButton>
          <BlueButton text={"Brochure"}></BlueButton>
          <BlueButton text={"Blog"}></BlueButton>
        </div>
      </div>
    </section>
  );
};

export default AgensSql;
