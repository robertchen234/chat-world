import Chance from "chance";

const chance = new Chance();
const name =
  "Guest" + chance.integer({ min: 1, max: 90071992 }).toString();
export default name;