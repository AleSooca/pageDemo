// e2e.js
describe('angularjs homepage', function() {

	var tabsUl = element(by.id('tabs'));
	var firstButton = element.all(by.tagName('li')).get(0);
	var secondButton = element.all(by.tagName('li')).get(1);
	var firstTab = element(by.id('first_tab'));
	var secondTab = element(by.id('second_tab'));

	beforeEach(function() {
    	browser.get('http://localhost:9000/#/');
  	});

  it('should have a tab ul', function() {
    expect(tabsUl).toBeDefined();
  });

  it('should have the first button set to active by default', function() {
    expect(firstButton.getAttribute('class')).toContain('active');
    expect(secondButton.getAttribute('class')).not.toContain('active');
    //the activetab model var should be set to 0
  });

  it('should set the second button as active on click', function() {
  	secondButton.click();
    expect(firstButton.getAttribute('class')).not.toContain('active');
    expect(secondButton.getAttribute('class')).toContain('active');
    //the activetab model var should be set to 1
  });

  it('should have maximum 2 tabs', function() {
    var allbuttons = tabsUl.all(by.tagName('li')).then(function (arr) {
    	expect(arr.length).toEqual(2);
    });
    
  });

  it('should show the correct tab on click', function() {
  	firstButton.click();
    expect(firstTab.isDisplayed()).toBeTruthy();
  	secondButton.click();
    expect(secondTab.isDisplayed()).toBeTruthy();
  });

});