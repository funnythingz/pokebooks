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

var pokemonsPageActiveChecker = new NavActiveChecker(false);
var postPageActiveChecker = new NavActiveChecker(false);

declare var ItemsController;

/**
* Router
*/
Router.map(function() {

    this.route('pokemons', {
        path: '/',
        layoutTemplate: 'layout',
        template: 'pokemonsTpl',
        yieldTemplates: {
            'headerTpl': {to: 'header'},
            'asideTpl':  {to: 'aside'},
            'footerTpl': {to: 'footer'}
        },

        action: function() {
            pokemonsPageActiveChecker.true();
            postPageActiveChecker.false();
            this.render();
        },

        data: {
            active: 'pokemons'
        }

    });

    this.route('pokemon', {
        path: '/pokemon',
        layoutTemplate: 'layout',
        template: 'pokemonTpl',
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
            pokemonsPageActiveChecker.false();
            postPageActiveChecker.true();
            this.render();
        },

        data: {
            active: 'post'
        }

    });

});

Router.routes['pokemon'].path({_id: 1});

/**
* Template
*/

Template['headerTpl'].helpers({
    title: () => {
        return "Pokebooks";
    }
});

Template['asideTpl'].helpers({
    pokemonsPageActive: () => {
        return pokemonsPageActiveChecker.callFlag();
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

Template['pokemonsTpl'].helpers({
    pokemons: () => {
        return [
            {id: 'pokemon1', No: '479', Lv: '10', name: 'ロトム', type: [{name: 'electric'}, {name: 'water'}], ability: 'ふゆう'},
            {id: 'pokemon2', No: '479', Lv: '10', name: 'ロトム', type: [{name: 'electric'}, {name: 'water'}], ability: 'ふゆう'},
            {id: 'pokemon3', No: '479', Lv: '10', name: 'ロトム', type: [{name: 'electric'}, {name: 'water'}], ability: 'ふゆう'},
            {id: 'pokemon4', No: '479', Lv: '10', name: 'ロトム', type: [{name: 'electric'}, {name: 'water'}], ability: 'ふゆう'}
        ];
    }
});
Template['pokemonsTpl'].events({
    'click .hoge': () => {
        console.log('hoge');
    }
});

Template['pokemonTpl'].helpers({
    id: () => {
        return 'pokemon1';
    },

    No: () => {
        return '479';
    },

    Lv: () => {
        return '10';
    },

    name: () => {
        return 'ロトム';
    },

    types: () => {
        return [{type: 'electric'}, {type: 'water'}];
    },

    ability: () => {
        return 'ふゆう';
    },
});
Template['moveTpl'].helpers({
    moves: () => {
        return [
            {id: 'move1', type: 'electric', moveType: 'physical', name: 'かみなり'},
            {id: 'move1', type: 'water', moveType: 'special', name: 'ハイドロポンプ'},
            {id: 'move1', type: 'dark', moveType: 'special', name: 'あくのはどう'},
            {id: 'move1', type: 'electric', moveType: 'status', name: 'ほうでん'}
        ];
    }
});

Template['postTpl'].helpers({
    title: () => {
        return "Post";
    }
});
