import HomePage from '../pageobjects/home.page';

describe('Tic Tac Toe Game to Calendly', () => {
    // it('should validate if the player "O" is a winner in Tic Tac Toe Game', () => {
    //     HomePage.open();
    //     HomePage.enterBoardNumber('3');
    //     HomePage.playButton.click();
    //     HomePage.placeCharToRowAndColumn('1','1');
    //     HomePage.placeCharToRowAndColumn('2','2');
    //     HomePage.placeCharToRowAndColumn('1','2');
    //     HomePage.placeCharToRowAndColumn('1','3');
    //     HomePage.placeCharToRowAndColumn('3','1');
    //     HomePage.placeCharToRowAndColumn('2','1');
    //     HomePage.placeCharToRowAndColumn('3','2');
    //     HomePage.placeCharToRowAndColumn('2','3');
    //     expect(HomePage.endGameMessage).toBeExisting();
    //     //the following assertion will be failing since a bug in the App
    //     expect(HomePage.endGameMessage).toHaveTextContaining(
    //         'Congratulations player O!');
    //     //explicit pause is set for demo purpose only
    //     browser.pause(10000);
    // });
    //
    // it('should validate if the player "X" is a winner in Tic Tac Toe Game', () => {
    //     HomePage.open();
    //     HomePage.enterBoardNumber('3');
    //     HomePage.playButton.click();
    //     HomePage.placeCharToRowAndColumn('1','1');
    //     HomePage.placeCharToRowAndColumn('2','2');
    //     HomePage.placeCharToRowAndColumn('1','2');
    //     HomePage.placeCharToRowAndColumn('1','3');
    //     HomePage.placeCharToRowAndColumn('3','1');
    //     HomePage.placeCharToRowAndColumn('3','2');
    //     HomePage.placeCharToRowAndColumn('2','1');
    //     expect(HomePage.endGameMessage).toBeExisting();
    //     //the following assertion will be failing since a bug in the App
    //     expect(HomePage.endGameMessage).toHaveTextContaining(
    //         'Congratulations player X!');
    //     //explicit pause is set for demo purpose only
    //     browser.pause(10000);
    // });

    it('should validate if the Tic Tac Toe Game ends in a draw', () => {
        HomePage.open();
        HomePage.enterBoardNumber('3');
        HomePage.playButton.click();
        HomePage.placeCharToRowAndColumn('1','1');
        HomePage.placeCharToRowAndColumn('2','2');
        HomePage.placeCharToRowAndColumn('1','2');
        HomePage.placeCharToRowAndColumn('1','3');
        HomePage.placeCharToRowAndColumn('3','1');
        HomePage.placeCharToRowAndColumn('2','1');
        HomePage.placeCharToRowAndColumn('2','3');
        HomePage.placeCharToRowAndColumn('3','2');
        HomePage.placeCharToRowAndColumn('3','3');
        expect(HomePage.endGameMessage).toBeExisting();
        //the following assertion will be failing since a bug in the App
        expect(HomePage.endGameMessage).toHaveTextContaining(
            'The game ends in a draw!');
        //explicit pause is set for demo purpose only
        browser.pause(10000);
    });
});


