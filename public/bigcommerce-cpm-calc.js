let calculateCpm = () => {
  let campaignCost = document.getElementById('costInput').value;
  let totalImpressions = document.getElementById('impressionInput').value;
  let cpmRate = document.getElementById('cpmInput').value;

  let inputWarning = document.querySelector('#inputWarningContainer');

  if (campaignCost && totalImpressions && cpmRate) {
    inputWarning.style.display = 'block';
  } else {
    inputWarning.style.display = 'none';

    if (campaignCost && totalImpressions) {
      let result = (campaignCost / totalImpressions) * 1000;
      let output = document.getElementById('cpmInput');

      output.value = result.toFixed(2);
    } else if (campaignCost && cpmRate) {
      let result = (campaignCost / cpmRate) * 1000;
      let output = document.getElementById('impressionInput');

      output.value = result.toFixed(0);
    } else if (totalImpressions && cpmRate) {
      let result = (totalImpressions / 1000) * cpmRate;
      let output = document.getElementById('costInput');

      output.value = result.toFixed(2);
    }
  }
};

let getCPM = () => {
  let calcBtn = document.querySelector('#calculate-btn');

  let inputWarning = document.querySelector('#inputWarningContainer');

  calcBtn.addEventListener('click', function () {
    calculateCpm();
  });

  window.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      calculateCpm();
    }
  });
};

window.onload = setTimeout(getCPM, 500);
