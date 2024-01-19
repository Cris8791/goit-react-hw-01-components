import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  // Functie pentru a filtra si grupa datele
  // *cu metoda reduce parcurgem fiecare element din array-ul stats și acumulam
  // datele procesate în accumulator.
  const filteredStats = stats.reduce((accumulator, currentItem) => {
    // verificam daca există deja un elem în accumulator cu aceeași
    // etichetă(label)
    const existingItem = accumulator.find(
      item => item.label === currentItem.label
    );

    // Dacă exista, se adună procentajul la acel element
    if (existingItem) {
      existingItem.percentage += currentItem.percentage;
    }
    // Daca nu, se adauga un nou element în accumulator
    else {
      accumulator.push({ ...currentItem });
    }

    return accumulator;
  }, []);

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {filteredStats.map(({ label, percentage }) => (
          <li key={label} className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
