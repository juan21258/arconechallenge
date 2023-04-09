"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
var data_constants_1 = require("../constants/data_constants");
var login_page_1 = require("../pages/login_page");
var products_page_1 = require("../pages/products_page");
var checkout_page_1 = require("../pages/checkout_page");
var confirmcheckout_page_1 = require("../pages/confirmcheckout_page");
var assert = require('assert');
var thankyou_page_1 = require("../pages/thankyou_page");
function runTests() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, capabilities, thanksText, _a, _b, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 10, 11, 14]);
                    capabilities = selenium_webdriver_1.Capabilities.chrome();
                    return [4 /*yield*/, new selenium_webdriver_1.Builder()
                            .withCapabilities(capabilities)
                            .build()];
                case 1:
                    driver = _c.sent();
                    // Navigate to the page
                    return [4 /*yield*/, driver.get(data_constants_1.default.PAGEURL)];
                case 2:
                    // Navigate to the page
                    _c.sent();
                    return [4 /*yield*/, driver.manage().window().maximize()];
                case 3:
                    _c.sent(); // maximize the window
                    return [4 /*yield*/, (0, login_page_1.login)(driver)];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, (0, products_page_1.selectProduct)(driver)];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, (0, checkout_page_1.checkout)(driver)];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, (0, confirmcheckout_page_1.confirmCheckout)(driver)];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, (0, thankyou_page_1.thanks)(driver)];
                case 8:
                    thanksText = _c.sent();
                    _b = (_a = assert).strictEqual;
                    return [4 /*yield*/, thanksText];
                case 9:
                    _b.apply(_a, [_c.sent(), data_constants_1.default.THANKS,
                        "There was an error going to the thank you page"]);
                    return [3 /*break*/, 14];
                case 10:
                    error_1 = _c.sent();
                    console.error("Error running tests: ".concat(error_1));
                    return [3 /*break*/, 14];
                case 11:
                    if (!driver) return [3 /*break*/, 13];
                    return [4 /*yield*/, driver.quit()];
                case 12:
                    _c.sent();
                    _c.label = 13;
                case 13: return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    });
}
// Run the tests
runTests();
