const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") return false;
  if (sampleActivity.match(/[\d]+[.][\d]+[.]/)) sampleActivity =
      sampleActivity.slice(0,sampleActivity.lastIndexOf("."))+
      sampleActivity.slice(sampleActivity.lastIndexOf(".")+1,sampleActivity.length-1);
  console.log(sampleActivity);
  if (isNaN(Number(sampleActivity))) return false;
  if (sampleActivity>=15||sampleActivity<=0) return false;
  return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD)));
};
