/// <reference path="./packages/typescript-libs/meteor.d.ts" />
/// <reference path="./packages/typescript-libs/ironrouter.d.ts" />
/// <reference path="./packages/typescript-libs/node.d.ts" />
/// <reference path="./packages/typescript-libs/jquery.d.ts" />

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

        constructor(public value: string) {}

    }

    export class Type {

        constructor(public value: string) {}

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

    export class PokedexNumber {

        constructor(public value: string) {}

    }

    export class Level {

        constructor(public value: string) {}

    }

    export class Move {

        constructor(public name: Name,
                    public type: Type,
                    public moveType: MoveType,
                    public pp: PowerPoint) {}

    }

    export class MoveType {

        constructor(public value: string) {}

    }

    export class PowerPoint {

        constructor(public pp: string) {}

    }

    export class Abilites {

        constructor(public name: Name) {}

    }

    export class PokemonPage {

        constructor(public pokemon: Pokemon,
                    public pokedexNumber: PokedexNumber,
                    public level: Level,
                    public abilites: Abilites,
                    public moves: Move[]) {}
    
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

    export class MoveFactory {

        createMove(move: string): Domain.Move {
            switch(move) {
                case 'thunder':
                    return MoveList.thunder;
                case 'hydroPump':
                    return MoveList.hydroPump;
                case 'darkPulse':
                    return MoveList.darkPulse;
                case 'discharge':
                    return MoveList.discharge;
            }
        }
    
    }

    export class AbilitesFactory {

        createAbilites(abilites: string): Domain.Abilites {
            switch(abilites) {
                case 'levitate':
                    return AbilitesList.levitate;
            }
        }
    
    }

    export class PokemonListFactory {

        createPokemonList(responseFromPokebookCollection: any): Domain.PokemonPage[] {

            var pokemonPages: Domain.PokemonPage[] = [];
            var pokemonFactory = new Factory.PokemonFactory();
            var abilitesFactory = new Factory.AbilitesFactory();
            var moveFactory = new Factory.MoveFactory();

            responseFromPokebookCollection.forEach((pokebookCollection) => {
                var pokemon = pokemonFactory.createPokemon(pokebookCollection._id, pokebookCollection.pokedexNumber);
                var pokedexNumber = new Domain.PokedexNumber(pokebookCollection.pokedexNumber);
                var level = new Domain.Level(pokebookCollection.level);
                var abilites = abilitesFactory.createAbilites(pokebookCollection.abilites);
                var moves: Domain.Move[] = $.map(pokebookCollection.moves, (val, i) => {
                    return moveFactory.createMove(val);
                });
                pokemonPages.push(new Domain.PokemonPage(pokemon, pokedexNumber, level, abilites, moves));
            });
            return pokemonPages;
        }
    }

    export class PokemonPageFactory {

        createPokemonPage(pokebookCollection: any): Domain.PokemonPage {
            if(typeof pokebookCollection === 'undefined') {
                return null;
            }

            var pokemonFactory = new Factory.PokemonFactory();
            var abilitesFactory = new Factory.AbilitesFactory();
            var moveFactory = new Factory.MoveFactory();

            var pokemon = pokemonFactory.createPokemon(pokebookCollection._id, pokebookCollection.pokedexNumber);
            var pokedexNumber = new Domain.PokedexNumber(pokebookCollection.pokedexNumber);
            var level = new Domain.Level(pokebookCollection.level);
            var abilites = abilitesFactory.createAbilites(pokebookCollection.abilites);
            var moves: Domain.Move[] = $.map(pokebookCollection.moves, (val, i) => {
                return moveFactory.createMove(val);
            });

            return new Domain.PokemonPage(pokemon, pokedexNumber, level, abilites, moves)
        }
    }
}

// Move
module MoveList {
/**
            {type: 'electric', moveType: 'physical', name: 'かみなり'},
            {type: 'water', moveType: 'special', name: 'ハイドロポンプ'},
            {type: 'dark', moveType: 'special', name: 'あくのはどう'},
            {type: 'electric', moveType: 'status', name: 'ほうでん'}
/**/
    export var thunder: Domain.Move = new Domain.Move(new Domain.Name('かみなり'),
                                                      new Domain.Type('electric'),
                                                      new Domain.MoveType('special'),
                                                      new Domain.PowerPoint('10'));

    export var hydroPump: Domain.Move = new Domain.Move(new Domain.Name('ハイドロポンプ'),
                                                        new Domain.Type('water'),
                                                        new Domain.MoveType('special'),
                                                        new Domain.PowerPoint('5'));

    export var darkPulse: Domain.Move = new Domain.Move(new Domain.Name('あくのはどう'),
                                                        new Domain.Type('dark'),
                                                        new Domain.MoveType('special'),
                                                        new Domain.PowerPoint('15'));

    export var discharge: Domain.Move = new Domain.Move(new Domain.Name('ほうでん'),
                                                        new Domain.Type('electric'),
                                                        new Domain.MoveType('special'),
                                                        new Domain.PowerPoint('10'));

}

// Abilites
module AbilitesList {

    export var levitate: Domain.Abilites = new Domain.Abilites(new Domain.Name('ふゆう'));

}

/**
* Test
*/
/**
var pokemonFactory: Factory.PokemonFactory = new Factory.PokemonFactory();
var rotom1 = pokemonFactory.createPokemon('rotom1', '479');
var rotom2 = pokemonFactory.createPokemon('rotom2', '479');
var charizard1 = pokemonFactory.createPokemon('charizard1', '006');
var charizard2 = pokemonFactory.createPokemon('charizard2', '006');
var pokedexNumber = new Domain.PokedexNumber('479');
var level = new Domain.Level('69');

var pokemonPage: Domain.PokemonPage = new Domain.PokemonPage(rotom1,
                                                             pokedexNumber,
                                                             level,
                                                             AbilitesList.levitate,
                                                             [MoveList.thunder, MoveList.hydroPump, MoveList.darkPulse, MoveList.discharge]);

console.log(pokemonPage);

console.log(rotom1);
console.log(rotom2);
console.log(charizard1);
console.log(charizard2);
console.log(rotom1.equals(rotom1));
console.log(rotom1.equals(rotom2));
/**/

/**
* Dictionary
*/
module Dictionary {

    export var pokemons = [
        {pokemon_name: 'リザードン', pokemon_id: '006'},
        {pokemon_name: 'ロトム', pokemon_id: '479'},
        {pokemon_name: 'ゲッコウガ', pokemon_id: '658'}
    ];

    export var moves = [
        {move_name: 'かみなり', move_id: 'thunder'},
        {move_name: 'ハイドロポンプ', move_id: 'hydroPump'},
        {move_name: 'あくのはどう', move_id: 'darkPulse'},
        {move_name: 'ほうでん', move_id: 'discharge'}
    ];

    export var abilites = [
        {abilites_name: 'ふゆう', abilites_id: 'levitate'}
    ];

}

module Collections {

    export interface IPokemonPage {
        _id?: string;
        pokemon?: string;
        abilites?: string;
        moves?: string[];
        created_at?: any;
    }

    export var PokebookCollection = new Meteor.Collection<IPokemonPage>('pokebook');
}


/**
* Helpers
*/
module Helpers {

    export class ArrayUtil {

        static uniq(array: any[]): any[] {
            var o = {}, i: number, l: number = array.length, r: any[] = [];

            for(i = 0; i < l; i += 1) {
                o[array[i]] = array[i];
            }

            for(var k in o) {
                r.push(o[k]);
            }

            return r;
        }
    
    }
    
}

declare var ItemsController;


/**
* Client
*/
if(Meteor.isClient) {

// Router
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

        data: () => {

            var datas = {

                postFlag: true,

                pokemonList: () => {
                    var pokebook = Collections.PokebookCollection.find({}, {sort: {created_at: -1}});
                    var pokemonListFactory = new Factory.PokemonListFactory();

                    return pokemonListFactory.createPokemonList(pokebook);
                }

            }

            return datas;
        }
    });

    this.route('pokemon', {
        path: '/pokemon/:_id',
        layoutTemplate: 'layout',
        template: 'pokemonTpl',
        yieldTemplates: {
            'headerTpl': {to: 'header'},
            'asideTpl':  {to: 'aside'},
            'footerTpl': {to: 'footer'}
        },

        data: () => {
            
            var datas = {
                postFlag: false
            }

            return datas;
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

        data: () => {
            return {
                postFlag: false
            }
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
});

Template['footerTpl'].helpers({
    copyright: () => {
        return "funnythingz";
    }
});

Template['pokemonTpl'].helpers({
    pokemonPage: () => {
        location.pathname.match(/\/pokemon\/(.*?)$/);
        var _id = RegExp.$1;

        var pokebook = Collections.PokebookCollection.findOne({_id: _id});
        var pokemonPageFactory = new Factory.PokemonPageFactory();
        var pokemonPage = pokemonPageFactory.createPokemonPage(pokebook);

        return pokemonPage;
    }
});

Template['postTpl'].helpers({

    pokemons: () => {
        return Dictionary.pokemons;
    },

    levels: () => {
        var levelList: number[] = [];
        for(var i = 1; i <= 100; i++) {
            levelList.push(i);
        }
        return levelList;
    },

    abilites: () => {
        return Dictionary.abilites;
    },

    moves: () => {
        return Dictionary.moves;
    }

});
Template['postTpl'].events({

    'click #addPokepage': () => {

        var selectedPokemon: string =  $('#selectPokemon').val();
        var selectedLevel: string = $('#selectLevel').val();
        var selectedAbilites: string = $('#selectAbilites').val();

        var selectedMoves: string[] = Helpers.ArrayUtil.uniq([$('#selectMove1').val(),
                                                              $('#selectMove2').val(),
                                                              $('#selectMove3').val(),
                                                              $('#selectMove4').val()]);

        Collections.PokebookCollection.insert({
            pokedexNumber: selectedPokemon,
            level: selectedLevel,
            abilites: selectedAbilites,
            moves: selectedMoves,
            created_at: (new Date()).getTime()
        });

    }

});

/* end: Client */
}
