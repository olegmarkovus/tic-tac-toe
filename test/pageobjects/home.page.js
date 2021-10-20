import Page from './page';

class HomePage extends Page {

    get inputNumber () { return $('#number') }
    get inputFieldIFrame () { return $('#result') }
    get playButton () { return $('#start') }
    get endGameMessage () { return $('#endgame') }

    enterBoardNumber(number){
        browser.switchToFrame(this.inputFieldIFrame);
        this.inputNumber.setValue(number);
    }

    placeCharToRowAndColumn(row, column){
        let markerPosition = $(`//table/tr[${row}]/td[${column}]`);
        markerPosition.click();
    }

}

export default new HomePage();
