require('dotenv').config({path: './.env'});
import {sendRequest} from '../../tradeRequests/functions';

describe('First test', function () {
    it('Does npt match', function () {
        expect(sendRequest()).to.equal(1)
    });
})