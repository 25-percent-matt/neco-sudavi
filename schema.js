'use strict';

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat
} = require('graphql');

const {resolver} = require('graphql-sequelize');
const surveydata = require('./models').surveydata;
const surveymetadata = require('./models').surveymetadata;
const queries = require('./queries');


const SurveyType = new GraphQLObjectType({
  name: 'Survey',

  fields: {
    id: { type: GraphQLID },
    Age : { type: GraphQLInt },
    AttendedBootcamp : { type : GraphQLBoolean},
    BootcampFinish : { type : GraphQLBoolean},
    BootcampFullJobAfter : { type : GraphQLBoolean},
    BootcampLoanYesNo : { type : GraphQLBoolean},
    BootcampMonthsAgo : { type: GraphQLInt },
    BootcampName : { type: GraphQLString },
    BootcampPostSalary : { type: GraphQLInt },
    BootcampRecommend : { type : GraphQLBoolean},
    ChildrenNumber : { type: GraphQLInt },
    CityPopulation : { type: GraphQLString },
    CodeEventBootcamp : { type : GraphQLBoolean},
    CodeEventCoffee : { type : GraphQLBoolean},
    CodeEventConferences : { type : GraphQLBoolean},
    CodeEventDjangoGirls : { type : GraphQLBoolean},
    CodeEventGameJam : { type : GraphQLBoolean},
    CodeEventGirlDev : { type : GraphQLBoolean},
    CodeEventHackathons : { type : GraphQLBoolean},
    CodeEventMeetup : { type : GraphQLBoolean},
    CodeEventNodeSchool : { type : GraphQLBoolean},
    CodeEventNone : { type : GraphQLBoolean},
    CodeEventOther  : { type: GraphQLString },
    CodeEventRailsBridge : { type : GraphQLBoolean},
    CodeEventRailsGirls : { type : GraphQLBoolean},
    CodeEventStartUpWknd : { type : GraphQLBoolean},
    CodeEventWomenCode : { type : GraphQLBoolean},
    CodeEventWorkshop : { type : GraphQLBoolean},
    CommuteTime : { type: GraphQLInt },
    CountryCitizen : { type: GraphQLString },
    CountryLive : { type: GraphQLString },
    EmploymentField : { type: GraphQLString },
    EmploymentFieldOther : { type: GraphQLString },
    EmploymentStatus : { type: GraphQLString },
    EmploymentStatusOther : { type: GraphQLString },
    ExpectedEarning : { type: GraphQLInt },
    FinanciallySupporting : { type : GraphQLBoolean},
    Gender : { type: GraphQLString },
    HasChildren : { type : GraphQLBoolean},
    HasDebt : { type : GraphQLBoolean},
    HasFinancialDependents : { type : GraphQLBoolean},
    HasHighSpdInternet : { type : GraphQLBoolean},
    HasHomeMortgage : { type : GraphQLBoolean},
    HasServedInMilitary : { type : GraphQLBoolean},
    HasStudentDebt : { type : GraphQLBoolean},
    HomeMortgageOwe : { type: GraphQLInt },
    HoursLearning : { type: GraphQLInt },
    IDx : { type: GraphQLString },
    IDy : { type: GraphQLString },
    Income : { type: GraphQLInt },
    IsEthnicMinority : { type : GraphQLBoolean},
    IsReceiveDiabilitiesBenefits : { type : GraphQLBoolean},
    IsSoftwareDev : { type : GraphQLBoolean},
    IsUnderEmployed : { type : GraphQLBoolean},
    JobApplyWhen : { type: GraphQLString },
    JobPref : { type: GraphQLString },
    JobRelocateYesNo : { type : GraphQLBoolean},
    JobRoleInterest : { type: GraphQLString },
    JobRoleInterestOther : { type: GraphQLString },
    JobWherePref : { type: GraphQLString },
    LanguageAtHome : { type: GraphQLString },
    MaritalStatus : { type: GraphQLString },
    MoneyForLearning : { type: GraphQLInt },
    MonthsProgramming : { type: GraphQLInt },
    NetworkID : { type: GraphQLString },
    Part1EndTime : { type: GraphQLString },
    Part1StartTime : { type: GraphQLString },
    Part2EndTime : { type: GraphQLString },
    Part2StartTime : { type: GraphQLString },
    PodcastChangeLog : { type : GraphQLBoolean},
    PodcastCodeNewbie : { type : GraphQLBoolean},
    PodcastCodingBlocks : { type : GraphQLBoolean},
    PodcastDeveloperTea : { type : GraphQLBoolean},
    PodcastDotNetRocks : { type : GraphQLBoolean},
    PodcastHanselminutes : { type : GraphQLBoolean},
    PodcastJSJabber : { type : GraphQLBoolean},
    PodcastJsAir : { type : GraphQLBoolean},
    PodcastNone : { type : GraphQLBoolean},
    PodcastOther : { type : GraphQLBoolean},
    PodcastProgrammingThrowDown : { type : GraphQLBoolean},
    PodcastRubyRogues : { type : GraphQLBoolean},
    PodcastSEDaily : { type : GraphQLBoolean},
    PodcastShopTalk : { type : GraphQLBoolean},
    PodcastTalkPython : { type : GraphQLBoolean},
    PodcastWebAhead : { type : GraphQLBoolean},
    ResourceBlogs : { type : GraphQLBoolean},
    ResourceBooks : { type : GraphQLBoolean},
    ResourceCodeWars : { type : GraphQLBoolean},
    ResourceCodecademy : { type : GraphQLBoolean},
    ResourceCoursera : { type : GraphQLBoolean},
    ResourceDevTips : { type : GraphQLBoolean},
    ResourceEdX : { type : GraphQLBoolean},
    ResourceEggHead : { type : GraphQLBoolean},
    ResourceFCC : { type : GraphQLBoolean},
    ResourceGoogle : { type : GraphQLBoolean},
    ResourceHackerRank : { type : GraphQLBoolean},
    ResourceKhanAcademy : { type : GraphQLBoolean},
    ResourceLynda : { type : GraphQLBoolean},
    ResourceMDN : { type : GraphQLBoolean},
    ResourceOdinProj : { type : GraphQLBoolean},
    ResourceOther : { type: GraphQLString },
    ResourceReddit : { type : GraphQLBoolean},
    ResourcePluralSight : { type : GraphQLBoolean},
    ResourceSkillCrush : { type : GraphQLBoolean},
    ResourceSoloLearn : { type : GraphQLBoolean},
    ResourceStackOverflow : { type : GraphQLBoolean},
    ResourceTreehouse : { type : GraphQLBoolean},
    ResourceUdacity : { type : GraphQLBoolean},
    ResourceUdemy : { type : GraphQLBoolean},
    ResourceW3Schools : { type : GraphQLBoolean},
    ResourceYouTube : { type : GraphQLBoolean},
    SchoolDegree : { type: GraphQLString },
    SchoolMajor : { type: GraphQLString },
    StudentDebtOwe : { type: GraphQLInt },
  }
});

const SurveyMetaType = new GraphQLObjectType({
  name: 'SurveyMeta',
  fields: {
    id : {
      type: GraphQLInt,
      description : 'record id'
    },
    fieldName : {
      type: GraphQLString,
      description : 'Name of the field in the database'
    },
    fieldLabel : {
      type: GraphQLString,
      description : 'Field label - how we want users to see it'
    },
    numOfResponses : {
      type: GraphQLInt,
      description : 'Total number of responses out of 15,620'
    },
    responsePercent : {
      type: GraphQLFloat,
      description : 'Percentage of 15,620 respondents who answered the question'
    },
    fieldGrouping : {
      type: GraphQLString,
      description : `groupings for the 3 multiple-choice questions: InPersonCodingEvents, Podcasts, Resources`
    }
  }
});

const queryType = new GraphQLObjectType({
  name: 'RootQuery',

  fields: {
    surveyRecord: { //searching for a specific id that will return only one survey record
      type: SurveyType, // the graphql object type we defined above
      args: { //list what how you can search through records
        id: {
          type: GraphQLInt // GraphQLNonNull means that this field is required when making queries
        },
      },
      // resolve: resolver(surveydata, { //A helper for resolving graphql queries targeted at Sequelize models or associations.
      //   include: false // disable auto including of associations based on AST - default: true
      // }),
    },
    EmploymentField : {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'EmploymentField',
          fields: {
            Count: {
              type: GraphQLInt
            },
            Response: {
              type: GraphQLString
            }
          },
        })),
        resolve : () => {
          return queries.EmploymentField;
        }
    },
    SchoolMajor : {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'SchoolMajor',
          fields: {
            Count: {
              type: GraphQLInt
            },
            Response: {
              type: GraphQLString
            }
          },
        })),
        resolve : () => {
          return queries.SchoolMajor;
        }
    },
    Income : {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'Income',
          fields: {
            Count: {
              type: GraphQLInt
            },
            Response: {
              type: GraphQLString
            }
          },
        })),
        resolve : () => {
          return queries.Income;
        }
    },
    ChildrenNumber : {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'ChildrenNumber',
          fields: {
            Count: {
              type: GraphQLInt
            },
            Response: {
              type: GraphQLString
            }
          },
        })),
        resolve : () => {
          return queries.ChildrenNumber;
        }
    },
    JobPref : {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'JobPref',
          fields: {
            Count: {
              type: GraphQLInt
            },
            Response: {
              type: GraphQLString
            }
          },
        })),
        resolve : () => {
          return queries.JobPref;
        }
    },
    HasDebt : {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'HasDebt',
          fields: {
            Count: {
              type: GraphQLInt
            },
            Response: {
              type: GraphQLString
            }
          },
        })),
        resolve : () => {
          return queries.HasDebt;
        }
    },
    SchoolDegree : {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'SchoolDegree',
          fields: {
            Count: {
              type: GraphQLInt
            },
            Response: {
              type: GraphQLString
            }
          },
        })),
        resolve : () => {
          return queries.SchoolDegree;
        }
    },
    surveyRecords: {
      type: new GraphQLList(SurveyType), // this returns a list defined by its args
      args: { //ex. "I only want to see data from someone who is 25 years old", lists all records where age: 25 and your fields can be described after and will only return "commute time" from people age:25
        Age: {
          type: GraphQLInt
        },
        CountryLive: {
          type: GraphQLString
        },
        CountryCitizen: {
          type: GraphQLString
        },
        SchoolDegree: {
          type: GraphQLString
        },
        SchoolMajor: {
          type: GraphQLString
        },
      },
      resolve: resolver(surveydata, {
        include: false
      }),
    },
    surveyMetaData: {
      type: new GraphQLList(SurveyMetaType), // this returns a list defined by its args
      args: { //ex. "responses for InPersonCodingEvents"
        fieldName : {
        type: GraphQLString,
        description : 'Name of the field in the database'
        },
        fieldLabel : {
          type: GraphQLString,
          description : 'Field label - how we want users to see it'
        },
        fieldGrouping : {
          type: GraphQLString,
          description : `groupings for the 3 multiple-choice questions: InPersonCodingEvents, Podcasts, Resources`
        },
      },
      resolve: resolver(surveymetadata, {
        include: false
      }),
    },
  },
});

const mySchema = new GraphQLSchema({
  query: queryType
});

module.exports = mySchema;


