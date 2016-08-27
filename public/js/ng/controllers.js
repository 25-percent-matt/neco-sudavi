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
      $scope.recommendations = ["Don’t get overwhelmed with things, know when to take a break or ask for help.","Be patient. You will not become a master at a certain technology or library without dedicating a solid amount of time learning it."];
      $scope.favResources = ["Codecademy", "FreeCodeCamp", "FrontEnd Masters", "w3 Schools", "YouTube", "MDN", "Google"];
      $scope.toggleShow = false;
      $scope.toggleShow = true;
    };

    $scope.andysInfo = function(){
      $scope.aboutMe = "I hail from Gaithersburg, MD, just outside of our nation's capital.  I previously worked as a QA tester at a small tech company in Baltimore that made software for organ procurement organizations (OPOs) across the country.  After having spent a few years in QA, I eventually decided that I wanted to join the development side.  I was drawn to coding for a couple of big reasons; the first reason is likely the main reason most people get into coding: to level up their careers.  I knew coding jobs were in demand and having had experience in a software company, I saw first-hand the challenging and rewarding nature of the work.  The second reason is simply because I’ve always been interested in learning to code.  The ability to create something powerful and beautiful was always interesting to me.  Like most of my classmates, I’d had no prior coding experience aside from building basic static websites with HTML.  JavaScript, which was the focus of our bootcamp, was a whole new world to me.";
      $scope.favTech = ["Angular","Node.js",""];
      $scope.questions = ["What’s the right language/tech to learn?  There's no great answer to this.  There’s no consensus as to what’s “the” thing to learn.  Think about what you what to build and what language would be best suited for it.  Once you learn any language, it’s easier to pick up others, so I think it’s more important to pick a quality bootcamp.  Find as many reviews as possible, get in touch with alumni and ask questions.","How do I know I’m ready?  There’s a lot of factors to consider.  Make sure to have contingency plans if you need money or anything else.  Make sure you have a good support system in place.  If you’re expecting the biggest challenge of your life and still want to do it, you’re in the right mindset."];
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
      $scope.aboutMe = "I'm from Hawaii, an experienced SysOps guy recently returned after a long stint in NYC. I have a lot of experience building and maintaining technical infrastructure, but not much in development. As more infrastructure is becoming virtualized or software-based, that was something I wanted to look into - and I've always wanted to go to a coding bootcamp.";
      $scope.favTech = ["My new favorite technologies are Node, Express, Firebase, SASS, and NoSQL. Though I haven't used it yet, AWS Lambda seems like magic to me, and I *really* want to check it out."];
      $scope.questions = ["I'm older than average for bootcamp attendees; how will that affect things? What new skills will I emerge with? The answer to the first question is, I had a lot of existing context for the curriculum. Also, I was used to a more deliberative process; rapid iteration was a good thing to learn. While I'm emerging with a boatload of fresh technical skills - the month we built 7 or 8 web servers from scratch was a real eye-opener - the most important skills I picked up were breaking down large problems and learning how to learn."];
      $scope.recommendations = ["The best advice anyone ever gave me about coding is, get it working first. I\'d advise doing the simplest, easiest, minimal implementation, then flesh out the parts later. Break your problem down, review your assumptions. Give your variables meaningful names, because eventually someone - probably you! - will look at your code and wonder what it\'s doing."];
      $scope.favResources = ["W3 Schools, Frontend Masters, Codeacademy, Stack Overflow and Mozilla Developer Network have all been great learning resources, but reaching out to peers has been invaluable."];
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
      $scope.pageNumber++;
      console.log($scope.pageNumber);
    };
    $scope.gotoPrevPage = function() {
      $scope.pageNumber--;
      console.log($scope.pageNumber);
    };
    $scope.testFrog = true;
}])
    .controller('Ctrl1', ['$scope', function($scope) {
      $scope.names = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
      $scope.searchDynamic = 'Enter State';
      $scope.updateChart = function () {
        fillChartDynamic($scope.searchDynamic);
      };
  }]);