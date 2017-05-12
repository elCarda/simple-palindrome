
describe("Main scenario", () => {
    const baseUrl = 'http://localhost:8080'; //@todo Should be taken from configuration
    let mainPage;
    beforeAll(()=>{
        browser.get(baseUrl);
        mainPage = new MainPage();
    });
    it('Should add an item to history', () => {
        mainPage.addPalindrome("myPalindrome");
        mainPage.history().expectSize(1);
    });
    it("Uri including palindrome should add the item into history", function () {
        browser.get(baseUrl +'?palindrome=TXIuIE93bCBhdGUgbXkgbWV0YWwgd29ybQ==');
        mainPage.history().expectSize(1);
        mainPage.history().elementOnPosition(0).containsText('Mr. Owl ate my metal worm');
    });

    //@todo Should be implemented
    xit("Should copy the URL to the history item into clipboard. This link should lead to page that will contain the item.", () => {
        mainPage.addPalindrome("myPalindrome");
        mainPage.history().elementOnPosition(0).copyLinkAndFollowIt();
        mainPage.history().expectSize(1);
        mainPage.history().elementOnPosition(0).containsText('myPalindrome');
    });
});

/**
 * @todo Following page fragments should be moved to elsewhere
 */
function MainPage(){
    const inputLocator = by.xpath('//input[@data-component="new-palindrome-input"]');
    const submitLocator = by.xpath('//input[@data-component="new-palindrome-submit"]');

    this.addPalindrome = (string) => {
        element(inputLocator).sendKeys(string);
        element(submitLocator).click();
    };

    this.history = () =>{
        return new HistoryFragment();
    }
}

function HistoryFragment(){
    const historySelector = by.xpath(".//ul[@data-component='history']");
    const historyElement = element(historySelector);


    this.expectSize = (expected) => {
        const items = historyElement.all(By.xpath('./li'));

        expect(items.count()).toBe(expected);
    };
    this.elementOnPosition = (position) => {
        const items = historyElement.all(By.xpath('./li'));
        return new HistoryItemFragment(items.get(position));
    }
}

function HistoryItemFragment(fragment){
    const buttonSelector = by.xpath('./button');

    this.copyLinkAndFollowIt = () => {
        throw new Error('Not implemented yet!');
        fragment.element(buttonSelector).click();
        browser.switchTo().alert().then(
            function (alert) { alert.dismiss(); }
        );
        /**
         * @todo Cannot read from clipboard via Selenium directly.
         *       Is it possible to execute script in browser which will add an extra input text element somewhere in DOM
         *       then perform Ctrl + p operation and slice the content of clipboard from the element.
         */
        browser.get();
    };

    this.containsText = (str) => {
        expect(fragment.getText()).toContain(str);
    }
}