/// <reference path="../packages/typescript-libs/meteor.d.ts" />
/// <reference path="../packages/typescript-libs/ironrouter.d.ts" />
/// <reference path="../packages/typescript-libs/node.d.ts" />

/**
* DDD
*/
// Base
module DDD {

    export class Identity<T> {

        constructor(private value: T) {}

        getValue(): string {
            return this.value.toString();
        }

        getId(): T {
            return this.value;
        }

    }

    export class Entity<ID extends Identity<any>> {

        constructor(private id: ID) {}
        
        getId(): ID {
            return this.id;
        }
        
        equals(other: Entity<ID>): boolean {
            return this.getId() === other.getId();
        }
    }
}

// Domain
module Domain {

    export class Name {

        constructor(private name: string) {}

        getValue(): string {
            return this.name;
        }
    }

    export class Type {

        constructor(private type: string) {}

        getValue(): string {
            return this.type;
        }
    }

    export class Pokemon extends DDD.Entity<DDD.Identity<string>> {

        constructor(id: Domain.PokemonID = null,
                    public name: Domain.Name = null,
                    public types: Domain.Type[] = null) {

            super(id);
        }

    }

    export class PokemonID extends DDD.Identity<string> {

        constructor(value: string) {
            super(value);
        }

    }

    export class Move {

        constructor(public name: Name,
                    public pp: PowerPoint) {}

    }

    export class PowerPoint {

        constructor(private pp: string) {}

        getValue(): string {
            return this.pp;
        }
    }

    export class Abilites {

        constructor(public name: Name) {}

    }

    export class PokemonPage {

        constructor(public pokemon: Pokemon,
                    public moves: Move[],
                    public abilites: Abilites) {}
    
    }
}

// PokemonList
module PokemonList {

    export class Charizard extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リザードン'),
                  [new Domain.Type('fire'), new Domain.Type('flying')]);
        }
    }

    export class Rotom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロトム'),
                  [new Domain.Type('water'), new Domain.Type('ghost')]);
        }
    }

    export class Greninja extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゲッコウガ'),
                  [new Domain.Type('water'), new Domain.Type('dark')]);
        }
    }

}

// Factory
module Factory {

    export class PokemonFactory {

        createPokemon(hash: string,
                      pokemon_number: string): Domain.Pokemon {

            switch(pokemon_number) {
                case '006':
                    return new PokemonList.Charizard(hash);
                case '479':
                    return new PokemonList.Rotom(hash);
                case '658':
                    return new PokemonList.Rotom(hash);
            }
        }
    }
}

var pokemonFactory: Factory.PokemonFactory = new Factory.PokemonFactory();
var rotom1 = pokemonFactory.createPokemon('rotom1', '479');
var rotom2 = pokemonFactory.createPokemon('rotom2', '479');
var charizard1 = pokemonFactory.createPokemon('charizard1', '006');
var charizard2 = pokemonFactory.createPokemon('charizard2', '006');

var thunder: Domain.Move = new Domain.Move(new Domain.Name('かみなり'), new Domain.PowerPoint('10'));
var hydroPump: Domain.Move = new Domain.Move(new Domain.Name('ハイドロポンプ'), new Domain.PowerPoint('5'));
var darkPulse: Domain.Move = new Domain.Move(new Domain.Name('あくのはどう'), new Domain.PowerPoint('15'));
var discharge: Domain.Move = new Domain.Move(new Domain.Name('ほうでん'), new Domain.PowerPoint('10'));

var levitate: Domain.Abilites = new Domain.Abilites(new Domain.Name('ふゆう'));

var pokemonPage: Domain.PokemonPage = new Domain.PokemonPage(rotom1, [thunder, hydroPump, darkPulse, discharge], levitate);
console.log(pokemonPage);

console.log(rotom1);
console.log(rotom2);
console.log(charizard1);
console.log(charizard2);
console.log(rotom1.equals(rotom1));
console.log(rotom1.equals(rotom2));

/**
* Helpers
*/
module Helpers {

    export class NavActiveChecker {

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

}

var pokemonsPageActiveChecker = new Helpers.NavActiveChecker(false);
var postPageActiveChecker = new Helpers.NavActiveChecker(false);

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
