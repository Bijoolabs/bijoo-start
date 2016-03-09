describe("Tests for Show Button on Form", function() {

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = ' ';
    });

    it("should result in correct text about show button clicked", function() {
        loadFixtures('./index.html');
        $('.mainContent').myTestedPlugin()
        $(".button_1").click();
        expect($( "#turn" )).toHaveText("button 1 click");
    });

});