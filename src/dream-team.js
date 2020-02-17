module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      members[i] = members[i].toUpperCase();
      while (members[i].charAt(0) == " ") {
        members[i] = members[i].substring(1);
      }
    }
  }

  members.sort();

  let result = "";
  for (let s of members) {
    if (typeof s == "string" && s.match(/^[a-zA-Z]/)) result += s.charAt(0);
  }
  return result;
};