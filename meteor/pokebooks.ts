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

        constructor(id: Domain.PokemonID,
                    public name: Domain.Name,
                    public types: Domain.Type[]) {

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

    export class PokemonMemo {

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
    
}

// ViewModel
module ViewModel {

    export class PokemonPage {

        constructor(public pokemon: Domain.Pokemon,
                    public pokedexNumber: Domain.PokedexNumber,
                    public abilites: Domain.Abilites,
                    public moves: Domain.Move[],
                    public pokemonMemo: Domain.PokemonMemo) {}
    
    }
}


// Factory
module Factory {

    export class PokemonFactory {

        createPokemon(id: string,
                      pokemon_number: string): Domain.Pokemon {

            switch(pokemon_number) {
                case '001':
                    return new PokemonList.Bulbasaur(id);
                case '002':
                    return new PokemonList.Ivysaur(id);
                case '003':
                    return new PokemonList.Venusaur(id);
                case '004':
                    return new PokemonList.Charmander(id);
                case '005':
                    return new PokemonList.Charmeleon(id);
                case '006':
                    return new PokemonList.Charizard(id);
                case '479':
                    return new PokemonList.Rotom(id);
                case '484':
                    return new PokemonList.Palkia(id);
                case '649':
                    return new PokemonList.Genesect(id);
                case '658':
                    return new PokemonList.Greninja(id);
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

        createPokemonList(responseFromPokebookCollection: any): ViewModel.PokemonPage[] {

            var pokemonPages: ViewModel.PokemonPage[] = [];
            var pokemonFactory = new Factory.PokemonFactory();
            var abilitesFactory = new Factory.AbilitesFactory();
            var moveFactory = new Factory.MoveFactory();

            responseFromPokebookCollection.forEach((pokebookCollection) => {

                var pokemon = pokemonFactory.createPokemon(pokebookCollection._id,
                                                           pokebookCollection.pokedexNumber);

                var pokedexNumber = new Domain.PokedexNumber(pokebookCollection.pokedexNumber);

                var abilites = abilitesFactory.createAbilites(pokebookCollection.abilites);

                var moves: Domain.Move[] = $.map(pokebookCollection.moves, (val, i) => {
                    return moveFactory.createMove(val);
                });

                var pokemonMemo = new Domain.PokemonMemo(pokebookCollection.pokemonMemo);

                pokemonPages.push(new ViewModel.PokemonPage(pokemon,
                                                            pokedexNumber,
                                                            abilites,
                                                            moves,
                                                            pokemonMemo));
            });

            return pokemonPages;
        }
    }

    export class PokemonPageFactory {

        createPokemonPage(pokebookCollection: any): ViewModel.PokemonPage {

            if(typeof pokebookCollection === 'undefined') {
                return null;
            }

            var pokemonFactory = new Factory.PokemonFactory();

            var abilitesFactory = new Factory.AbilitesFactory();

            var moveFactory = new Factory.MoveFactory();

            var pokemon = pokemonFactory.createPokemon(pokebookCollection._id,
                                                       pokebookCollection.pokedexNumber);

            var pokedexNumber = new Domain.PokedexNumber(pokebookCollection.pokedexNumber);

            var abilites = abilitesFactory.createAbilites(pokebookCollection.abilites);

            var moves: Domain.Move[] = $.map(pokebookCollection.moves, (val, i) => {
                return moveFactory.createMove(val);
            });

            var pokemonMemo = new Domain.PokemonMemo(pokebookCollection.pokemonMemo);

            return new ViewModel.PokemonPage(pokemon, pokedexNumber, abilites, moves, pokemonMemo)

        }
    }
}


// Repository
module Repository {

    export class PokemonRepository {

        static findOne(id: string) {
            return Collections.PokebookCollection.findOne({_id: id});
        }

        static remove(id: string) {
            return Collections.PokebookCollection.remove({_id: id});
        }
    }

}


// PokemonList
module PokemonList {

    export class Bulbasaur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フシギダネ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    export class Ivysaur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フシギソウ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    export class Venusaur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フシギバナ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    export class Charmander extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒトカゲ'),
                  [new Domain.Type('fire')]);
        }
    }

    export class Charmeleon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リザード'),
                  [new Domain.Type('fire')]);
        }
    }

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

    export class Palkia extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パルキア'),
                  [new Domain.Type('water'), new Domain.Type('dragon')]);
        }
    }

    export class Genesect extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゲノセクト'),
                  [new Domain.Type('bug'), new Domain.Type('steel')]);
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

// Move
module MoveList {
/**
* moveType list
*
物理: 'physical'
特殊: 'special'
変化: 'status'
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
* Dictionary
*/
module Dictionary {

    export var pokemons = [
        {pokemon_name: 'フシギダネ', pokemon_id: '001'},
        {pokemon_name: 'フシギソウ', pokemon_id: '002'},
        {pokemon_name: 'フシギバナ', pokemon_id: '003'},
        {pokemon_name: 'ヒトカゲ', pokemon_id: '004'},
        {pokemon_name: 'リザード', pokemon_id: '005'},
        {pokemon_name: 'リザードン', pokemon_id: '006'},
        {pokemon_name: 'ロトム', pokemon_id: '479'},
        {pokemon_name: 'パルキア', pokemon_id: '484'},
        {pokemon_name: 'ゲノセクト', pokemon_id: '649'},
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
        pokemonMemo?: string[];
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

// Definitions
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
        template: 'pokemonListTpl',
        yieldTemplates: {
            'headerTpl': {to: 'header'},
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

Template['footerTpl'].helpers({
    copyright: () => {
        return "funnythingz";
    }
});

Template['pokemonTpl'].helpers({
    pokemonPage: () => {
        // FIXME: `this.params._id` がTypeScriptだととれないっぽい？ので仕方なくこの対応
        location.pathname.match(/\/pokemon\/(.*?)$/);
        var _id = RegExp.$1;
        var pokemonPageFactory = new Factory.PokemonPageFactory();
        var pokemonPage = pokemonPageFactory.createPokemonPage(Repository.PokemonRepository.findOne(_id));

        return pokemonPage;
    }
});
Template['pokemonTpl'].events({

    'click .remove-pokemon': (event) => {
        if(confirm('このポケモンを削除しますか？')) {
            var _id = $('.pokemon-detail-container').attr('id');
            Repository.PokemonRepository.remove(_id);
        } else {
            event.preventDefault();
        }
    }

});

Template['postTpl'].helpers({

    pokemons: () => {
        return Dictionary.pokemons;
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
        var selectedAbilites: string = $('#selectAbilites').val();

        var selectedMoves: string[] = Helpers.ArrayUtil.uniq([$('#selectMove1').val(),
                                                              $('#selectMove2').val(),
                                                              $('#selectMove3').val(),
                                                              $('#selectMove4').val()]);

        var pokemonMemo: string = $('#pokemonMemo').val();

        Collections.PokebookCollection.insert({
            pokedexNumber: selectedPokemon,
            abilites: selectedAbilites,
            moves: selectedMoves,
            pokemonMemo: pokemonMemo,
            created_at: (new Date()).getTime()
        });

    }

});

/* end: Client */

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

var pokemonPage: Domain.PokemonPage = new ViewModel.PokemonPage(rotom1,
                                                                pokedexNumber,
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
}
