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

        getIdentity(): T {
            return this.value;
        }

    }

    export class Entity<ID extends Identity<any>> {

        constructor(private identity: ID) {}
        
        getIdentity(): ID {
            return this.identity;
        }
        
        equals(other: Entity<ID>): boolean {
            return this.getIdentity() === other.getIdentity();
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

        constructor(private typeName: string) {}

        getValue(): string {
            return this.typeName;
        }
    }

    export class Pokemon extends DDD.Entity<DDD.Identity<string>> {

        constructor(identity: DDD.Identity<string>) {
            super(identity);
        }

    }

    export class PokemonID extends DDD.Identity<string> {

        constructor(value: string) {
            super(value);
        }

    }
}

// Factory
module Factory {

    export class AbstractPokemon {

        public pokemon: Domain.Pokemon;

        constructor(public id: Domain.PokemonID = null,
                    public name: Domain.Name = null,
                    public types: Domain.Type[] = null) {

            this.pokemon = new Domain.Pokemon(this.id);
        }

        actual(): Domain.Pokemon {
            return this.pokemon;
        }

        getTypes(): Domain.Type[] {
            return this.types;
        }
    }

    export class Charizard extends AbstractPokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id), new Domain.Name('リザードン'), [new Domain.Type('fire'), new Domain.Type('flying')]);
        }
    }

    export class Rotom extends AbstractPokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id), new Domain.Name('ロトム'), [new Domain.Type('water'), new Domain.Type('dark')]);
        }
    }

    export class PokemonFactory {

        createPokemon(hash: string,
                      pokemon_number: string): AbstractPokemon {

            switch(pokemon_number) {
                case '006':
                    return new Charizard(hash);
                case '479':
                    return new Rotom(hash);
            }
        }
    }
}

var pokemonFactory: Factory.PokemonFactory = new Factory.PokemonFactory();
var rotom1 = pokemonFactory.createPokemon('rotom1', '479');
var rotom2 = pokemonFactory.createPokemon('rotom2', '479');
var charizard1 = pokemonFactory.createPokemon('charizard1', '006');
var charizard2 = pokemonFactory.createPokemon('charizard2', '006');

console.log(rotom1);
console.log(rotom2);
console.log(charizard1);
console.log(charizard2);
console.log(rotom1.actual().equals(rotom2.actual()));

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
