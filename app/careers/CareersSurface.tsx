import CareersForm from "./CareersForm";
import styles from "./CareersSurface.module.css";

export default function CareersSurface() {
  return (
    <section className={styles.surface}>
      <div className={styles.left}>
        <span className={styles.eyebrow}>Careers</span>

        <h1 className={styles.heading}>
          Good people.
          <br />
          Hard work.
          <br />
          High places.
        </h1>

        <p className={styles.intro}>
          We're a rope-access-first business. We invest heavily in training,
          safety and long-term career development for people who take their
          trade seriously.
        </p>

        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <span>✓</span>
            <p>IRATA funded progression</p>
          </div>

          <div className={styles.benefit}>
            <span>✓</span>
            <p>Consistent year-round work</p>
          </div>

          <div className={styles.benefit}>
            <span>✓</span>
            <p>Modern equipment & systems</p>
          </div>

          <div className={styles.benefit}>
            <span>✓</span>
            <p>Safety-first culture</p>
          </div>

          <div className={styles.benefit}>
            <span>✓</span>
            <p>Long-term career pathways</p>
          </div>

          <div className={styles.benefit}>
            <span>✓</span>
            <p>Sunshine Coast based</p>
          </div>
        </div>

        <div className={styles.stats}>
          <div>
            <strong>25+</strong>
            <span>Years operating</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Crew & subcontractors</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>IRATA compliant systems</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <CareersForm />
      </div>
    </section>
  );
}
