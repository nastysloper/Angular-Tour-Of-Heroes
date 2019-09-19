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
var bar_service_1 = require("./bar.service");
var BarsComponent = (function () {
    function BarsComponent(barService) {
        this.barService = barService;
    }
    BarsComponent.prototype.ngOnInit = function () {
        this.getBars();
    };
    BarsComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBarsSlowly().then(function (bars) { return _this.bars = bars; });
    };
    BarsComponent.prototype.onSelect = function (bar) {
        this.selectedBar = bar;
    };
    return BarsComponent;
}());
BarsComponent = __decorate([
    core_1.Component({
        selector: 'my-bars',
        providers: [bar_service_1.BarService],
        template: "\n  \t<h1>{{title}}</h1>\n  \t<h2>My Hero Bars</h2>\n  \t<ul class=\"bars\">\n  \t\t<li *ngFor=\"let bar of bars\" \n  \t\t[class.selected]=\"bar === selectedBar\"\n  \t\t(click)=\"onSelect(bar)\" >\n  \t\t\t<span class=\"badge\">{{bar.id}}</span> {{bar.name}}\n  \t\t</li>\n  \t</ul>\n  \t<bar-detail [bar]=\"selectedBar\"></bar-detail>\n  ",
        styles: ["\n  h2 {\n  \tcolor: #369;\n  \tfont-family: Arial;\n  }\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .bar {\n  \tbackground-color: #EEE;\n  \twidth: 220px;\n  \tborder-radius: 4px;\n  \tpadding: .3em;\n  \tborder: 2px solid #607D8B;\n  \tfont-family: Arial;\n  }\n  .bars {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n    font-family: Arial;\n  }\n  .bars li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    margin-left: 0;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n    overflow: hidden;\n  }\n  .bars li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .bars li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .bars .text {\n    position: relative;\n    top: -3px;\n  }\n  .bars .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    }),
    __metadata("design:paramtypes", [bar_service_1.BarService])
], BarsComponent);
exports.BarsComponent = BarsComponent;
//# sourceMappingURL=bars.component.js.map