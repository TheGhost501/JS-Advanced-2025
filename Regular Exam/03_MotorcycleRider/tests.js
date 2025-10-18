const { expect } = require("chai");
const { motorcycleRider } = require("../MotorcycleRider.js");

describe("MotorcycleRider Tests", function () {
    describe("licenseRestriction()", function () {
        it("should return correct text for AM", function () {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal(
                "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
            );
        });

        it("should return correct text for A1", function () {
            expect(motorcycleRider.licenseRestriction("A1")).to.equal(
                "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
            );
        });

        it("should return correct text for A2", function () {
            expect(motorcycleRider.licenseRestriction("A2")).to.equal(
                "Motorcycles with maximum power of 35KW. and the minimum age is 18."
            );
        });

        it("should return correct text for A", function () {
            expect(motorcycleRider.licenseRestriction("A")).to.equal(
                "No motorcycle restrictions, and the minimum age is 24."
            );
        });

        it("should throw error for invalid category", function () {
            expect(() => motorcycleRider.licenseRestriction("B")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(123)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(null)).to.throw("Invalid Information!");
        });
    });

    describe("motorcycleShowroom()", function () {
        it("should throw error if first argument is not array", function () {
            expect(() => motorcycleRider.motorcycleShowroom("notArray", 100)).to.throw("Invalid Information!");
        });

        it("should throw error if second argument is not number", function () {
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250"], "200")).to.throw("Invalid Information!");
        });

        it("should throw error if engineVolume is empty array", function () {
            expect(() => motorcycleRider.motorcycleShowroom([], 100)).to.throw("Invalid Information!");
        });

        it("should throw error if maximumEngineVolume < 50", function () {
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250"], 40)).to.throw("Invalid Information!");
        });

        it("should return correct message with valid data", function () {
            const result = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 250);
            expect(result).to.equal("There are 2 available motorcycles matching your criteria!");
        });

        it("should count only motorcycles <= maximumEngineVolume", function () {
            const result = motorcycleRider.motorcycleShowroom(["49", "50", "70", "600"], 70);
            expect(result).to.equal("There are 2 available motorcycles matching your criteria!");
        });
        it("should handle numeric strings correctly", function () {
            const result = motorcycleRider.motorcycleShowroom(["50", "100", "150"], 120);
            expect(result).to.equal("There are 2 available motorcycles matching your criteria!");
        });
        it("should work correctly when maximumEngineVolume is exactly 50", function () {
            const result = motorcycleRider.motorcycleShowroom(["50", "70"], 50);
            expect(result).to.equal("There are 1 available motorcycles matching your criteria!");
        });
    });

    describe("otherSpendings()", function () {
        it("should throw error if first or second param not array", function () {
            expect(() => motorcycleRider.otherSpendings("helmet", ["engine oil"], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["helmet"], "engine oil", false)).to.throw("Invalid Information!");
        });

        it("should throw error if third param is not boolean", function () {
            expect(() => motorcycleRider.otherSpendings(["helmet"], ["engine oil"], "yes")).to.throw("Invalid Information!");
        });

        it("should calculate total without discount", function () {
            const result = motorcycleRider.otherSpendings(["helmet", "jacket"], ["engine oil", "oil filter"], false);
            expect(result).to.equal("You spend $600.00 for equipment and consumables!");
        });

        it("should calculate total with 10% discount", function () {
            const result = motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true);
            // helmet 200 + engine oil 70 = 270 * 0.9 = 243.00
            expect(result).to.equal("You spend $243.00 for equipment and consumables with 10% discount!");
        });
        it("should correctly round the total price with discount", function () {
            const result = motorcycleRider.otherSpendings(["helmet"], ["oil filter"], true);
            // 200 + 30 = 230 * 0.9 = 207.00
            expect(result).to.equal("You spend $207.00 for equipment and consumables with 10% discount!");
        });

        it("should handle empty arrays properly", function () {
            const result = motorcycleRider.otherSpendings([], [], false);
            expect(result).to.equal("You spend $0.00 for equipment and consumables!");
        });
    });
});
