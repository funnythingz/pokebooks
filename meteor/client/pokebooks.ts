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

var myPokemonPageActiveChecker = new NavActiveChecker(false);
var postPageActiveChecker = new NavActiveChecker(false);

declare var ItemsController;

/**
* Router
*/
Router.map(function() {

    this.route('my_pokemon', {
        path: '/',
        layoutTemplate: 'layout',
        template: 'myPokemonTpl',
        yieldTemplates: {
            'headerTpl': {to: 'header'},
            'asideTpl':  {to: 'aside'},
            'footerTpl': {to: 'footer'}
        },

        action: function() {
            myPokemonPageActiveChecker.true();
            postPageActiveChecker.false();
            this.render();
        },

        data: {
            active: 'my_pokemon'
        }

    });

    this.route('pokemon_entry', {
        path: '/pokemon_entry/:_id',
        layoutTemplate: 'layout',
        template: 'pokemonEntryTpl',
        yieldTemplates: {
            'headerTpl': {to: 'header'},
            'footerTpl': {to: 'footer'}
        }

    });

    this.route('post', {
        path: '/post',
        layoutTemplate: 'layout',
        template: 'postTpl',
        yieldTemplates: {
            'headerTpl': {to: 'header'},
            'asideTpl':  {to: 'aside'},
            'footerTpl': {to: 'footer'}
        },

        action: function() {
            console.log('post');
            myPokemonPageActiveChecker.false();
            postPageActiveChecker.true();
            this.render();
        },

        data: {
            active: 'post'
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
    myPokemonPageActive: () => {
        return myPokemonPageActiveChecker.callFlag();
    },
    postPageActive: () => {
        return postPageActiveChecker.callFlag();
    }
});

Template['footerTpl'].helpers({
    copyright: () => {
        return "funnythingz";
    }
});

Template['myPokemonTpl'].helpers({
    No: () => {
        return "479"
    }
});

Template['myPokemonTpl'].events({
    'click .hoge': () => {
        console.log('hoge');
    }
});

Template['pokemonEntryTpl'].helpers({
    title: () => {
        return "Pokemon Name";
    }
});

Template['postTpl'].helpers({
    title: () => {
        return "Post";
    }
});
