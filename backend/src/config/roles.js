const allRoles = {
  //user: [],
  admin: ['addGrade, viewGrade, updateGrade, deleteGrade'],
  teacher: ['addGrade, viewGrade, updateGrade, deleteGrade'],
  parent: ['viewGrade'],
  student: ['viewGrade'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
