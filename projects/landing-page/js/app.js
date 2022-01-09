/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
var sectionsList;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function ReadSections ()
{
  return document.querySelectorAll('section');
}

function buildNavBar (secList)
{
  let navBarULElem = document.querySelector('#navbar__list');
  console.log(navBarULElem);
  if (secList !== null)
  {
    console.log(secList);
    secList.forEach((item, i) => {
      let li = document.createElement("li");
      let sectionIdName = item.;
      navBarULElem.append (li);

      li.append (sectionIdName);

    });
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
console.log("TEST TST");
// build the nav
sectionsList = ReadSections();
buildNavBar (sectionsList);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
