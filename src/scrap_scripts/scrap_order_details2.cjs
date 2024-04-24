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
var playwright_1 = require("playwright");
var authFile = 'playwright/.auth/user.json';
function loginAndStoreSession(username, url) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page, classname, inputElement, cookies, cookiesJson, page2, element, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwright_1.chromium.launchPersistentContext('', {
                        args: ['--remote-debugging-port=9222'],
                        headless: false,
                        userAgent: 'Some Overriden User Agent',
                    })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, , 19, 20]);
                    // Navigate to the login page
                    return [4 /*yield*/, page.goto(url)];
                case 4:
                    // Navigate to the login page
                    _a.sent();
                    classname = 'r4vIwl';
                    return [4 /*yield*/, page.$(".".concat(classname))];
                case 5:
                    inputElement = _a.sent();
                    if (!inputElement) return [3 /*break*/, 7];
                    // Fill the input field with the specified text
                    return [4 /*yield*/, inputElement.fill(username)];
                case 6:
                    // Fill the input field with the specified text
                    _a.sent();
                    console.log("Filled input with classname '".concat(classname, "' with text: '").concat(username, "'"));
                    return [3 /*break*/, 8];
                case 7:
                    console.error("Input with classname '".concat(classname, "' not found"));
                    _a.label = 8;
                case 8: 
                // Click the login button
                return [4 /*yield*/, page.click('.QqFHMw')];
                case 9:
                    // Click the login button
                    _a.sent();
                    // Wait for navigation or other actions as needed
                    return [4 /*yield*/, page.waitForURL('https://www.flipkart.com/')];
                case 10:
                    // Wait for navigation or other actions as needed
                    _a.sent();
                    return [4 /*yield*/, page.context().cookies()];
                case 11:
                    cookies = _a.sent();
                    cookiesJson = JSON.stringify(cookies);
                    return [4 /*yield*/, page.context().storageState({ path: authFile })];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 13:
                    page2 = _a.sent();
                    // Navigate explicitly, similar to entering a URL in the browser.
                    return [4 /*yield*/, page.goto('https://www.flipkart.com/account/orders?link=home_orders')];
                case 14:
                    // Navigate explicitly, similar to entering a URL in the browser.
                    _a.sent();
                    return [4 /*yield*/, page.$(".column.sKUelf")];
                case 15:
                    element = _a.sent();
                    if (!element) return [3 /*break*/, 17];
                    return [4 /*yield*/, element.innerHTML()];
                case 16:
                    html = _a.sent();
                    console.log("HTML code of element with classname '".concat(classname, "':"));
                    console.log(html);
                    return [3 /*break*/, 18];
                case 17:
                    console.error("Element with classname '".concat(classname, "' not found"));
                    _a.label = 18;
                case 18: return [2 /*return*/, cookiesJson];
                case 19: return [7 /*endfinally*/];
                case 20: return [2 /*return*/];
            }
        });
    });
}
// Example usage
var username = 'selvasundar5592@gmail.com';
var url = 'https://www.flipkart.com/account/login';
loginAndStoreSession(username, url)
    .then(function (cookiesJson) {
    console.log('Session stored successfully:');
    console.log(cookiesJson);
})
    .catch(function (error) {
    console.error('Error:', error);
});
