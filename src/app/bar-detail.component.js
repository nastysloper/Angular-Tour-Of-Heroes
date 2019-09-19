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
var bar_1 = require("./bar");
var BarDetailComponent = (function () {
    function BarDetailComponent() {
    }
    return BarDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", bar_1.Bar)
], BarDetailComponent.prototype, "bar", void 0);
BarDetailComponent = __decorate([
    core_1.Component({
        selector: 'bar-detail',
        template: "\n\t\t<div *ngIf=\"bar\">\n\t\t\t<h2>{{bar.name}} details!</h2>\n\t\t\t<div><label>ID:</label>{{bar.id}}</div>\n\t\t\t<div><label>Name:</label>\n\t\t\t\t<input [(ngModel)]=\"bar.name\" placeholder=\"name\"/>\n\t\t\t</div>\n\t\t</div>\n\t",
        styles: ["\n\t\th2, label {\n\t\t\tfont-family: Arial;\n\t\t}\n\t"]
    })
], BarDetailComponent);
exports.BarDetailComponent = BarDetailComponent;
//# sourceMappingURL=bar-detail.component.js.map