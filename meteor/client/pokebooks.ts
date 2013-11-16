/// <reference path="../packages/typescript-libs/meteor.d.ts" />
/// <reference path="../packages/typescript-libs/ironrouter.d.ts" />
/// <reference path="../packages/typescript-libs/node.d.ts" />

/**
* Classes
*/
class NavActiveChecker {

    constructor(private flag: boolean = false) {}

    false() {
        this.flag = false;
    }

    true() {
        this.flag = true;
    }

    callFlag(): boolean {
        return this.flag;
    }

}

var homeActiveChecker = new NavActiveChecker(false);
var aboutActiveChecker = new NavActiveChecker(false);

declare var ItemsController;

/**
* Router
*/
Router.map(function() {

    this.route('home', {
        path: '/',
        layoutTemplate: 'layout',
        template: 'homeTpl',
        yieldTemplates: {
            'headerTpl': {to: 'header'},
            'asideTpl':  {to: 'aside'},
            'footerTpl': {to: 'footer'}
        },

        action: function() {
            console.log('home');
            homeActiveChecker.true();
            aboutActiveChecker.false();
            this.render();
        },

        data: {
            active: 'home'
        }

    });

    this.route('about', {
        path: '/about',
        layoutTemplate: 'layout',
        template: 'aboutTpl',
        yieldTemplates: {
            'headerTpl': {to: 'header'},
            'asideTpl':  {to: 'aside'},
            'footerTpl': {to: 'footer'}
        },

        action: function() {
            console.log('about');
            homeActiveChecker.false();
            aboutActiveChecker.true();
            this.render();
        },

        data: {
            active: 'about'
        }

    });

});


/**
* Template
*/

Template['headerTpl'].helpers({
    title: () => {
        return "Pokebooks";
    }
});

Template['asideTpl'].helpers({
    homeActive: () => {
        return homeActiveChecker.callFlag();
    },
    aboutActive: () => {
        return aboutActiveChecker.callFlag();
    }
});

Template['footerTpl'].helpers({
    copyright: () => {
        return "funnythingz";
    }
});

Template['homeTpl'].helpers({
    title: () => {
        return "Home";
    },
    description: () => {
        return "This is `my pokebooks`.";
    }
});

Template['aboutTpl'].helpers({
    title: () => {
        return "About";
    },
    description: () => {
        return "This is `my pokebooks`.";
    }
});
