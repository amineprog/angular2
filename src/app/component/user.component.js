"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.books = [];
        this.name = "amine";
        this.phone = "0670739274";
        var book1 = {
            id: 1,
            title: 'book1',
            price: 100
        };
        var book2 = {
            id: 1,
            title: 'book2',
            price: 85
        };
        var book3 = {
            id: 1,
            title: 'book3',
            price: 14
        };
        this.books.push(book1);
        this.books.push(book2);
        this.books.push(book3);
        console.log(this.books);
    }
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        templateUrl: './views/user.view.html'
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map