import styles from '../../styles.module.css';

export default function CpmCalculator() {
  // write a cpm calculator

  //   let calculateCpm = () => {
  //     let campaignCost = document.getElementById('costInput').value;
  //     let totalImpressions = document.getElementById('impressionInput').value;
  //     let cpmRate = document.getElementById('cpmInput').value;

  //     let inputWarning = document.querySelector('#inputWarningContainer');

  //     if (campaignCost && totalImpressions && cpmRate) {
  //       inputWarning.style.display = 'block';
  //     } else {
  //       inputWarning.style.display = 'none';

  //       if (campaignCost && totalImpressions) {
  //         let result = (campaignCost / totalImpressions) * 1000;
  //         let output = document.getElementById('cpmInput');

  //         output.value = result.toFixed(2);
  //       } else if (campaignCost && cpmRate) {
  //         let result = (campaignCost / cpmRate) * 1000;
  //         let output = document.getElementById('impressionInput');

  //         output.value = result.toFixed(0);
  //       } else if (totalImpressions && cpmRate) {
  //         let result = (totalImpressions / 1000) * cpmRate;
  //         let output = document.getElementById('costInput');

  //         output.value = result.toFixed(2);
  //       }
  //     }
  //   };

  //   let getCPM = () => {
  //     let calcBtn = document.querySelector('#calculate-btn');

  //     let inputWarning = document.querySelector('#inputWarningContainer');

  //     calcBtn.addEventListener('click', function () {
  //       calculateCpm();
  //     });

  //     window.addEventListener('keydown', function (e) {
  //       if (e.code === 'Enter') {
  //         calculateCpm();
  //       }
  //     });
  //   };

  //   window.onload = setTimeout(getCPM, 500);

  return (
    // <div className={styles.calculatorWidget}>
    <form className={styles.calculatorWidget} id="calculatorWidget">
      <h3 className={styles.h3} id="h3">
        CPM Calculator
      </h3>
      <p className={styles.pTag} id="pTag">
        Enter two out of the three fields and click the button to calculate the
        empty field.
      </p>
      <div className={styles.costContainer} id="costContainer">
        <label className={styles.costLabel} id="costLabel">
          Cost of Campaign:
        </label>

        <div className={styles.inputIcon} id="input-icon">
          <input
            className={styles.costInput}
            id="costInput"
            type="number"
            placeholder="1,000"
          />
          <i className={styles.I8} id="I_8">
            $
          </i>
        </div>
      </div>
      <div className={styles.impressionContainer} id="impressionContainer">
        <label className={styles.impressionsLabel} id="impressionsLabel">
          Impressions:
        </label>
        <input
          className={styles.impressionInput}
          id="impressionInput"
          type="number"
          placeholder="1,000"
        />
      </div>
      <div className={styles.cpmContainer} id="cpmContainer">
        <label className={styles.cpmLabel} id="cpmLabel">
          CPM Rate:
        </label>
        <div className={styles.inputIcon} id="input-icon">
          <input
            className={styles.cpmInput}
            id="cpmInput"
            type="number"
            placeholder="1,000"
          />
          <i className={styles.I16} id="I_16">
            $
          </i>
        </div>
      </div>
      <div className={styles.inputWarningContainer} id="inputWarningContainer">
        <span className={styles.inputWarning} id="inputWarning">
          Please enter only two values. The other will be calculated for you.
        </span>
      </div>
      <button className={styles.calculateBtn} id="calculateBtn" type="button">
        Calculate
      </button>
    </form>
    // </div>
  );
}
