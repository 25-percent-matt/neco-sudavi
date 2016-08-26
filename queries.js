
const db = require('./models');
const Sequelize = require('sequelize');
const SurveyData = db.surveydata;
const Projections = db.projections;


//employmentfield
module.exports.EmploymentField = db.sequelize.query(`SELECT "EmploymentField" AS "Response", COUNT("EmploymentField") AS "Count" FROM "surveydata" WHERE "EmploymentField" IS NOT NULL GROUP BY "EmploymentField" ORDER BY "EmploymentField"`, { type: db.sequelize.QueryTypes.SELECT})

// SchoolMajor
module.exports.SchoolMajor = db.sequelize.query(`WITH school_majors AS (SELECT COUNT("SchoolMajor") AS "SchoolMajorCount", CASE
  WHEN "SchoolMajor" IN ('Computer Science', 'Information Technology', 'Information Systems', 'Computer Programming', 'Computer and Information Studies', 'Computer Software Engineering', 'Management Information Systems', 'Computer Networking') THEN 'Computer Science'
  WHEN "SchoolMajor" IN ('Electrical Engineering', 'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Engineering', 'Civil Engineering') THEN 'Engineering'
  WHEN "SchoolMajor" IN ('Advertising and Marketing', 'Marketing', 'Advertising') THEN 'Advertising/Marketing'
  WHEN "SchoolMajor" LIKE '%Business Administration%' THEN 'Business Administration'
  WHEN "SchoolMajor" NOT IN ('Economics', 'English', 'Psychology', 'Software Engineering', 'Liberal Arts', 'Physics', 'Political Science', 'Graphic Design', 'History', 'Biology', 'Finance', 'Mathematics', 'Communications', 'Math', 'Accounting', 'Philosophy') THEN 'Other'
  ELSE "SchoolMajor" END
  AS "SchoolMajor"
  FROM "surveydata" WHERE "SchoolMajor" IS NOT NULL
  GROUP BY "SchoolMajor" ORDER BY "SchoolMajor")
SELECT "SchoolMajor" AS "Response", SUM("SchoolMajorCount") AS "Count" FROM school_majors
GROUP BY "SchoolMajor" ORDER BY "Count" DESC LIMIT 21`, { type: db.sequelize.QueryTypes.SELECT})

  //ChildrenNumber
module.exports.ChildrenNumber = db.sequelize.query(`SELECT CASE
  WHEN ("ChildrenNumber" < 5) THEN CAST("ChildrenNumber" AS VARCHAR(3))
  WHEN ("ChildrenNumber" >= 4) THEN '5+'
  ELSE NULL
  END
  AS "Response", COUNT("ChildrenNumber") AS "Count" FROM "surveydata" WHERE "ChildrenNumber" IS NOT NULL GROUP BY "Response" ORDER BY "Response"`, { type: db.sequelize.QueryTypes.SELECT})

  // Job preference

module.exports.JobPref = db.sequelize.query(`SELECT "JobPref" AS "Response", COUNT("JobPref") AS "Count" FROM "surveydata" WHERE "JobPref" IS NOT NULL GROUP BY "JobPref" ORDER BY "JobPref"`, { type: db.sequelize.QueryTypes.SELECT})

  //Income
module.exports.Income = db.sequelize.query(`WITH income_ranges AS (SELECT FLOOR(("Income"-1)/20000) AS "sortorder", CASE
  WHEN ("Income" BETWEEN 1 AND 20000) THEN '0-20K'
  WHEN ("Income" BETWEEN 20001 AND 40000) THEN '20-40K'
  WHEN ("Income" BETWEEN 40001 AND 60000) THEN '40-60K'
  WHEN ("Income" BETWEEN 60001 AND 80000) THEN '60-80K'
  WHEN ("Income" BETWEEN 80001 AND 100000) THEN '80-100K'
  WHEN ("Income" BETWEEN 100001 AND 120000) THEN '100-120K'
  WHEN ("Income" BETWEEN 120001 AND 140000) THEN '120-140K'
  WHEN ("Income" BETWEEN 140001 AND 160000) THEN '140-160K'
  WHEN ("Income" BETWEEN 160001 AND 180000) THEN '160-180K'
  WHEN ("Income" BETWEEN 180001 AND 200000) THEN '180-200K'
  WHEN ("Income" BETWEEN 200001 AND 220000) THEN '200-220K'
  ELSE NULL
  END
  AS "IncomeBracket"
FROM "surveydata" WHERE "Income" IS NOT NULL),
sorted_income AS (SELECT "sortorder", "IncomeBracket", COUNT("IncomeBracket") AS "Count" FROM income_ranges GROUP BY "IncomeBracket","sortorder"  ORDER BY "sortorder") SELECT "IncomeBracket" AS "Response", "Count" from sorted_income`, { type: db.sequelize.QueryTypes.SELECT})


//School degree
module.exports.SchoolDegree = db.sequelize.query(`SELECT "SchoolDegree" AS "Response", COUNT("SchoolDegree") AS "Count" FROM "surveydata" WHERE "SchoolDegree" IS NOT NULL GROUP BY "SchoolDegree" ORDER BY "Count" DESC`, { type: db.sequelize.QueryTypes.SELECT})


// age/gender
db.sequelize.query(`WITH age_ranges AS (SELECT "Gender", CASE
  WHEN ("Age" BETWEEN 10 AND 19) THEN '10-19'
  WHEN ("Age" BETWEEN 20 AND 29) THEN '20-29'
  WHEN ("Age" BETWEEN 30 AND 39) THEN '30-39'
  WHEN ("Age" BETWEEN 40 AND 49) THEN '40-49'
  WHEN ("Age" > 49) THEN '50+'
  ELSE NULL
  END
  AS "AgeRange"
FROM "surveydata" WHERE "Age" > 1 AND "Gender" IN ('male', 'female'))
SELECT "AgeRange" AS "Age Range", "Gender", COUNT("AgeRange") AS "Count" FROM age_ranges GROUP BY "AgeRange", "Gender" ORDER BY "AgeRange" ASC, "Gender" DESC`, { type: db.sequelize.QueryTypes.SELECT})

// Student debt
module.exports.HasDebt = db.sequelize.query(`SELECT CASE
  WHEN ("HasStudentDebt" = true) THEN CAST('Yes' AS VARCHAR(3))
  WHEN ("HasStudentDebt" = false) THEN CAST('No' AS VARCHAR(3))
  ELSE NULL
  END
  AS "Response", COUNT("HasStudentDebt") AS "Count"
FROM "surveydata" WHERE "HasStudentDebt" IS NOT NULL
GROUP BY "HasStudentDebt" ORDER BY "HasStudentDebt" DESC`, { type: db.sequelize.QueryTypes.SELECT})

module.exports.objsToArrays  = function (arrOfObjs) {
  let newArray = [];
  for (var i = 0 ; i< arrOfObjs.length; i++) {
    let currentObject = arrOfObjs[i];
    let currentObjArr = [];
    for (var key in currentObject) {
      if(Number(currentObject[key]) == currentObject[key]) currentObject[key] = Number(currentObject[key]);
      currentObjArr.push(currentObject[key]);
    }
    newArray.push(currentObjArr);
  }
  return newArray;
};