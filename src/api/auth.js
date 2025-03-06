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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
import axios from "axios";
var API_URL = "http://127.0.0.1:9000/api/auth";
var api = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Ensure cookies are sent with requests
});
export var login = function (username, password) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.post("/login/", { username: username, password: password })];
            case 1:
                response = _b.sent();
                return [2 /*return*/, response.data];
            case 2:
                error_1 = _b.sent();
                throw ((_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data) || { error: "Login failed" };
            case 3: return [2 /*return*/];
        }
    });
}); };
// export const checkAuth = async () => {
//   try {
//     const response = await api.get("/check-auth/");
//     return response.data;
//   } catch (error) {
//     return null;
//   }
// };
export var logout = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.post("/logout/")];
            case 1:
                _b.sent();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                throw ((_a = error_2.response) === null || _a === void 0 ? void 0 : _a.data) || { error: "Logout failed" };
            case 3: return [2 /*return*/];
        }
    });
}); };
export var checkTokenValidity = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
export var refreshToken = function () { return __awaiter(void 0, void 0, void 0, function () {
    var refreshTokenCookie, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                refreshTokenCookie = getCookie("refresh_token");
                if (!refreshTokenCookie) {
                    console.warn("No refresh token found, cannot refresh access token.");
                    return [2 /*return*/, false];
                }
                return [4 /*yield*/, fetch("http://127.0.0.1:9000/api/token/refresh/", {
                        method: "POST",
                        credentials: "include",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ refresh: refreshTokenCookie }), // ✅ Include refresh token
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.ok]; // Returns true if token was successfully refreshed
        }
    });
}); };
var getCookie = function (name) {
    var cookies = document.cookie.split("; ");
    for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
        var cookie = cookies_1[_i];
        var _a = cookie.split("="), key = _a[0], value = _a[1];
        if (key === name)
            return value;
    }
    return null;
};
