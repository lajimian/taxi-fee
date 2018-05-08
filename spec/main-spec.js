const main = require('../main/main');

describe('taxi fee', function () {
    it('should generate price when the actual mileage is 两公里内', function () {
        let mileage = 1.5;
        let price = main(mileage, 0);
        let expected = 6;
        expect(price).toEqual(expected);
    });

    it('should generate price when the actual mileage is 两公里外八公里内', function () {
        let mileage = 6;
        let price = main(mileage, 0);
        let expected = 9;
        expect(price).toEqual(expected);
    });

    it('should generate price when the actual mileage is 八公里外', function () {
        let mileage = 10;
        let price = main(mileage, 0);
        let expected = 13;
        expect(price).toEqual(expected);
    });

    it('should generate price when the actual mileage is 两公里内有停车', function () {
        let mileage = 1.5;
        let wait = 10;
        let price = main(mileage, wait);
        let expected = 9;
        expect(price).toEqual(expected);
    });

    it('should generate price when the actual mileage is 两公里外八公里内有停车', function () {
        let mileage = 6;
        let wait = 10;
        let price = main(mileage, wait);
        let expected = 12;
        expect(price).toEqual(expected);
    });

    it('should generate price when the actual mileage is 八公里外有停车', function () {
        let mileage = 10;
        let wait = 10;
        let price = main(mileage, wait);
        let expected = 16;
        expect(price).toEqual(expected);
    });
});
