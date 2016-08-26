var counterApp = angular.module('counterApp', ['ngAnimate']);

counterApp.controller('divHideController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.loadBigFunction = function (chartSelected) {
      $scope.showHide = !$scope.showHide;
      $scope[chartSelected] = !$scope[chartSelected];
    };

    $scope.home = function(){
      $scope.pageNumber = 1;
    };

    $scope.returnHome = function () {
      $scope.showHide = !$scope.showHide;
      $scope.chartDegreeBigShow = false;
      $scope.chartMajorBigShow = false;
      $scope.chartHasDebtBigShow = false;
      $scope.chartEmploymentFieldBigShow = false;
      $scope.chartCurrentIncomeBigShow = false;
      $scope.chartNumChildrenBigShow = false;
      $scope.chartJobPrefBigShow = false;
    };

    $scope.mattsInfo = function(){
      $scope.aboutMe = "I am a Honolulu based Full-Stack JavaScript Developer. My hobbies include surfing and building things. Before DevLeague, I was always interested in coding but never had a mentor or the right entry point. Learning to code takes a remarkable amount of dedication, but anyone is capable of doing it! I thought that only Computer Science degrees could get you a job in this field but bootcamps are really starting to change that. If you have a burning desire to make it happen, going through a bootcamp will be your best decision yet. Do your homework and commit 110%!!";
      $scope.favTech = ["Angular","GraphQL"];
      $scope.questions = ["Am I too inexperienced? No, but learning how to code is a commitment and you have to be driven.", "Are there really as many jobs out there as they say? Yes, I walked into my first project by just talking with a local business owner. There is a solid amount of work out there for devs, you just need to get creative in your search. “When everybody is zigging you gotta zag!” - Russel Cheng, DevLeague Co-Founder.", "Is that really how much it costs? Is it worth that amount of money? Yes, it’s a lot of money and you probably do not have that amount of money. But if you want something bad enough, you find out a way to make it happen. I already had school loans from college but decided to take a risk and take on more student loans."];
      $scope.recommendations = ["Don’t get overwhelmed with things, know when to take a break or ask for help."];
      $scope.favResources = ["Codecademy", "FreeCodeCamp", "FrontEnd Masters", "w3 Schools", "YouTube", "MDN", "Google"];
      $scope.toggleShow = false;
      $scope.toggleShow = true;
    };

    $scope.andysInfo = function(){
      $scope.aboutMe = "I hail from Gaithersburg, MD, just outside of our nation's capital.  I previously worked as a QA tester at a small tech company in Baltimore that made software for organ procurement organizations (OPOs) across the country.  After having spent a few years in QA, I eventually decided that I wanted to join the development side.  I was drawn to coding for a couple of big reasons; the first reason is likely the main reason most people get into coding: to level up their careers.  I knew coding jobs were in demand and having had experience in a software company, I saw first-hand the challenging and rewarding nature of the work.  The second reason is simply because I’ve always been interested in learning to code.  The ability to create something powerful and beautiful was always interesting to me.  Like most of my classmates, I’d had no prior coding experience aside from building basic static websites with HTML.  JavaScript, which was the focus of our bootcamp, was a whole new world to me.";
      $scope.favTech = ["Angular","D3"];
      $scope.questions = ["What’s the right language/tech to learn? I don’t think there is a great answer to this one.  Different bootcamps offer different things and there’s definitely no consensus as to what’s “the” thing to learn.  I was drawn to JavaScript because of its ubiquity on the web but there are plenty of different tech stacks to choose from.  Think about what you what to build and what kind of language would be best for it.  What IS agreed upon is that once you learn one language well, it’s easier to pick up others, so more than anything else, I think it’s more important to pick a quality bootcamp.  Try to find as many reviews of the bootcamps you’re interested in as possible.  Try to get in touch with alumni and ask them questions.","How do I know I’m ready?  There’s a lot of factors to consider besides tech stack, cost, and quality of the bootcamp.  Because of the immersive and intense nature of these programs, be ready to do little else in the 12 weeks (or however long) you’ll be there.  For me, I chose a bootcamp 6 timezones away from home and there was definitely an adjustment period.  Make sure to have contingency plans if you need money or anything else.  Make sure you have a good support system in place.  If you’re expecting the biggest challenge of your life and still want to do it, you’re in the right mindset."];
      $scope.recommendations = ["There may be times you question yourself, your abilities, and maybe most of all, your decision to join the bootcamp.  Remember the reasons you wanted to join and imagine going back to the exact same situation (just a little more in debt).  Believe in the end result and keep working hard."];
      $scope.favResources = ["Codecademy", "w3 Schools", "YouTube", "A Smarter Way to Learn JavaScript", "MDN", "Google", "YouTube", "Code School"];
      $scope.toggleShow = false;
      $scope.toggleShow = true;
    };

    $scope.drewsInfo = function(){
      $scope.aboutMe = "Most of my life has been lived in Connecticut.  I went to 2 colleges and got my associates but never found work in that field.  Working in hardware, network administration and tech support was interesting but not very challenging.  These jobs restricted as much as possible.  I didn’t matter to the companies I worked at.  Trying to figure out what I wanted to do, I ended up studying JavaScript for a few weeks.  Eventually finding Dev League, very thankful to not be pursuing a career in medical coding.";
      $scope.favTech = ["Windows is my favorite OS.", "The internet is my favorite technology.", "JavaScript Angular is really growing on me."];
      $scope.questions = ["My main question before starting a bootcamp was, What do I need to know to apply?.  Everyone knows you need the basic fundamentals of JavaScript, but there are a few more things.  Good experience creating and changing a basic webpage with JavaScript, practice asking questions in person, learning how to iterate over and used objects.  Also I would say look into the job market and try coding one day for a long time.  This will help motivate you before joining."];
      $scope.recommendations = ["My best recommendation is to ask questions after simplifying your problem.  It is tough to help someone with 100 lines of code, but 1 commented line can be much easier to debug."];
      $scope.favResources = ["Code Academy and w3school were the only resources I used to prepare for Dev League.  Mostly Google searches found me the rest of the information I needed.  This helped me weed out the more advanced resources and resources."];
      $scope.toggleShow = false;
      $scope.toggleShow = false;
      $scope.toggleShow = true;
    };

    $scope.andrewsInfo = function(){
      $scope.aboutMe = ["ANDrewwwwwwwwwwwww"];
      $scope.favTech = ["postgres","sql"];
      $scope.questions = [];
      $scope.recommendations = [];
      $scope.favResources = [];
      $scope.toggleShow = false;
      $scope.toggleShow = false;
      $scope.toggleShow = true;
    };

    $scope.exit = function(){
      $scope.toggleShow = false;
    };

    $scope.showHide = false;
    $scope.pageNumber = 1;
    $scope.gotoNextPage = function() {
      ++$scope.pageNumber;
      console.log($scope.pageNumber);
    };
    $scope.gotoPrevPage = function() {
      $scope.pageNumber--;
      console.log($scope.pageNumber);
    };
    $scope.testFrog = true;
}])
    .controller('Ctrl1', ['$scope', function($scope) {
      $scope.searchDynamic = 'Enter State';
      $scope.updateChart = function () {
        fillChartDynamic($scope.searchDynamic);
      };
  }]);
