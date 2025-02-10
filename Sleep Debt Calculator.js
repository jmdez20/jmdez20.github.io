function getSleepHours(day) {
  switch (day) {
    case "Monday":
      return 8;
    case "Tuesday":
      return 9;
    case "Wednesday":
      return 7;
    case "Thursday":
      return 6;
    case "Friday":
      return 8;
    case "Saturday":
      return 8;
    case "Sunday":
      return 7;
    default:
      return "Invalid day";
  }
}

console.log(getSleepHours("Sunday")); // Output: 7

// Using an implicit return in getActualSleepHours
const getActualSleepHours = () =>
  8 + //Monday
  9 + //Tuesday
  7 + // Wednesday
  6 + //Thursday
  8 + //Friday
  8 + // Saturday
  7; //Sunday

console.log(getActualSleepHours());

const getIdealSleepHours = (idealSleepHours) => idealHours * 7;

console.log(getIdealSleepHours());

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log("You have gotten the right amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You had " +
        (actualSleepHours - idealSleepHours) +
        " hour(s) more sleep than needed"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hours(s) less sleep than you needed this week. Get some rest."
    );
  }
}
calculateSleepDebt();
