/// <reference path="../packages/typescript-libs/meteor.d.ts" />
/// <reference path="../packages/typescript-libs/ironrouter.d.ts" />
/// <reference path="../packages/typescript-libs/node.d.ts" />

/**/

var id_a:  POKEDEX.PokemonID = new POKEDEX.PokemonID('12345');
var mew_a: POKEDEX.Pokemon =   new POKEDEX.Pokemon(id_a, new POKEDEX.Name('ミュウツー'));

var id_b:  POKEDEX.PokemonID = new POKEDEX.PokemonID('67890');
var mew_b: POKEDEX.Pokemon =   new POKEDEX.Pokemon(id_b, new POKEDEX.Name('ミュウツー'));
/**/

declare var ItemsController;

Router.configure({
    layout: 'layout'
});

Router.map(function() {

    this.route('home', {
        path: '/',
        template: 'header'
    });

});

Template['header'].helpers({

    title: () => {
        return "Pokebooks";
    },

    description: () => {
        return "This is `my pokebooks`.";
    }

});

Template['body'].helpers({

    greeting: () => {
        return "ahya";
    }

});

Template['body'].events({

    'click .hoge' : (event) => {
        event.preventDefault();
        console.log("hoge");
    }

});

Template['footer'].helpers({

    copyright: () => {
        return "funnythingz";
    }

});
