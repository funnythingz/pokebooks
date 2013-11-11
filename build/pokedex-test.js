var DDD;
(function (DDD) {
    var Entity = (function () {
        function Entity(identity) {
            this.identity = identity;
        }
        Entity.prototype.getIdentity = function () {
            return this.identity;
        };

        Entity.prototype.equals = function (other) {
            return this.getIdentity() === other.getIdentity();
        };
        return Entity;
    })();
    DDD.Entity = Entity;
})(DDD || (DDD = {}));
;var DDD;
(function (DDD) {
    var Identity = (function () {
        function Identity(value) {
            this.value = value;
        }
        Identity.prototype.getValue = function () {
            return this.value.toString();
        };

        Identity.prototype.getIdentity = function () {
            return this.value;
        };
        return Identity;
    })();
    DDD.Identity = Identity;
})(DDD || (DDD = {}));
;var POKEDEX;
(function (POKEDEX) {
    var Name = (function () {
        function Name(value) {
            this.value = value;
        }
        Name.prototype.getName = function () {
            return this.value.toString();
        };
        return Name;
    })();
    POKEDEX.Name = Name;
})(POKEDEX || (POKEDEX = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var POKEDEX;
(function (POKEDEX) {
    var Pokemon = (function (_super) {
        __extends(Pokemon, _super);
        function Pokemon(identity, name) {
            _super.call(this, identity);
            this.name = name;
        }
        Pokemon.prototype.getName = function () {
            return this.name.getName();
        };
        return Pokemon;
    })(DDD.Entity);
    POKEDEX.Pokemon = Pokemon;

    var PokemonID = (function (_super) {
        __extends(PokemonID, _super);
        function PokemonID(value) {
            _super.call(this, value);
        }
        return PokemonID;
    })(DDD.Identity);
    POKEDEX.PokemonID = PokemonID;
})(POKEDEX || (POKEDEX = {}));
;var POKEDEX;
(function (POKEDEX) {
    var expect = chai.expect;

    describe("Name", function () {
        var mewtwo = new POKEDEX.Name('ミュウツー');
        var mew = new POKEDEX.Name('ミュウ');

        it("should be mewtwo to equal `ミュウツー`", function () {
            expect(mewtwo.getName()).to.equal('ミュウツー');
        });

        it("should be mewtwo to not equal to mew", function () {
            expect(mewtwo.getName()).to.not.equal(mew.getName());
        });
    });
})(POKEDEX || (POKEDEX = {}));
;var POKEDEX;
(function (POKEDEX) {
    var expect = chai.expect;

    describe("Pokemon", function () {
        var id_150 = new POKEDEX.PokemonID('150');
        var mewtwo = new POKEDEX.Pokemon(id_150, new POKEDEX.Name('ミュウツー'));

        var id_151 = new POKEDEX.PokemonID('151');
        var mew = new POKEDEX.Pokemon(id_151, new POKEDEX.Name('ミュウ'));

        it("should be mewtwo has id_150", function () {
            expect(mewtwo.getIdentity()).to.equals(id_150);
        });

        it("should be mewtwo equals to mewtwo", function () {
            expect(mewtwo.equals(mewtwo)).to.be.true;
        });

        it("should be mewtwo not equals to mew", function () {
            expect(mewtwo.equals(mew)).to.not.be.true;
        });

        it("should be mewtwo has name `ミュウツー`", function () {
            expect(mewtwo.getName()).to.equals('ミュウツー');
        });

        it("should be mew has name `ミュウ`", function () {
            expect(mew.getName()).to.equals('ミュウ');
        });
    });
})(POKEDEX || (POKEDEX = {}));