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
                case '003':
                    return new PokemonList.MegaVenusaur(id);
                case '004':
                    return new PokemonList.Charmander(id);
                case '005':
                    return new PokemonList.Charmeleon(id);
                case '006':
                    return new PokemonList.Charizard(id);
                case '006_mega_x':
                    return new PokemonList.MegaCharizardX(id);
                case '006_mega_y':
                    return new PokemonList.MegaCharizardY(id);
                case '007':
                    return new PokemonList.Squirtle(id);
                case '008':
                    return new PokemonList.Wartortle(id);
                case '009':
                    return new PokemonList.Blastoise(id);
                case '009_mega':
                    return new PokemonList.MegaBlastoise(id);
                case '010':
                    return new PokemonList.Caterpie(id);
                case '011':
                    return new PokemonList.Metapod(id);
                case '012':
                    return new PokemonList.Butterfree(id);
                case '013':
                    return new PokemonList.Weedle(id);
                case '014':
                    return new PokemonList.Kakuna(id);
                case '015':
                    return new PokemonList.Beedrill(id);
                case '016':
                    return new PokemonList.Pidgey(id);
                case '017':
                    return new PokemonList.Pidgeotto(id);
                case '018':
                    return new PokemonList.Pidgeot(id);
                case '019':
                    return new PokemonList.Rattata(id);
                case '020':
                    return new PokemonList.Raticate(id);
                case '021':
                    return new PokemonList.Spearow(id);
                case '022':
                    return new PokemonList.Fearow(id);
                case '023':
                    return new PokemonList.Ekans(id);
                case '024':
                    return new PokemonList.Arbok(id);
                case '025':
                    return new PokemonList.Pikachu(id);
                case '026':
                    return new PokemonList.Raichu(id);
                case '027':
                    return new PokemonList.Sandshrew(id);
                case '028':
                    return new PokemonList.Sandslash(id);
                case '029':
                    return new PokemonList.NidoranFemale(id);
                case '030':
                    return new PokemonList.Nidorina(id);
                case '031':
                    return new PokemonList.Nidoqueen(id);
                case '032':
                    return new PokemonList.NidoranMale(id);
                case '033':
                    return new PokemonList.Nidorino(id);
                case '034':
                    return new PokemonList.Nidoking(id);
                case '035':
                    return new PokemonList.Clefairy(id);
                case '036':
                    return new PokemonList.Clefable(id);
                case '037':
                    return new PokemonList.Vulpix(id);
                case '038':
                    return new PokemonList.Ninetales(id);
                case '039':
                    return new PokemonList.Jigglypuff(id);
                case '040':
                    return new PokemonList.Wigglytuff(id);
                case '041':
                    return new PokemonList.Zubat(id);
                case '042':
                    return new PokemonList.Golbat(id);
                case '043':
                    return new PokemonList.Oddish(id);
                case '044':
                    return new PokemonList.Gloom(id);
                case '045':
                    return new PokemonList.Vileplume(id);
                case '046':
                    return new PokemonList.Paras(id);
                case '047':
                    return new PokemonList.Parasect(id);
                case '048':
                    return new PokemonList.Venonat(id);
                case '049':
                    return new PokemonList.Venomoth(id);
                case '050':
                    return new PokemonList.Diglett(id);
                case '051':
                    return new PokemonList.Dugtrio(id);
                case '052':
                    return new PokemonList.Meowth(id);
                case '053':
                    return new PokemonList.Persian(id);
                case '054':
                    return new PokemonList.Psyduck(id);
                case '055':
                    return new PokemonList.Golduck(id);
                case '056':
                    return new PokemonList.Mankey(id);
                case '057':
                    return new PokemonList.Primeape(id);
                case '058':
                    return new PokemonList.Growlithe(id);
                case '059':
                    return new PokemonList.Arcanine(id);
                case '060':
                    return new PokemonList.Poliwag(id);
                case '061':
                    return new PokemonList.Poliwhirl(id);
                case '062':
                    return new PokemonList.Poliwrath(id);
                case '063':
                    return new PokemonList.Abra(id);
                case '064':
                    return new PokemonList.Kadabra(id);
                case '065':
                    return new PokemonList.Alakazam(id);
                case '065_mega':
                    return new PokemonList.MegaAlakazam(id);
                case '066':
                    return new PokemonList.Machop(id);
                case '067':
                    return new PokemonList.Machoke(id);
                case '068':
                    return new PokemonList.Machamp(id);
                case '069':
                    return new PokemonList.Bellsprout(id);
                case '070':
                    return new PokemonList.Weepinbell(id);
                case '071':
                    return new PokemonList.Victreebel(id);
                case '072':
                    return new PokemonList.Tentacool(id);
                case '073':
                    return new PokemonList.Tentacruel(id);
                case '074':
                    return new PokemonList.Geodude(id);
                case '075':
                    return new PokemonList.Graveler(id);
                case '076':
                    return new PokemonList.Golem(id);
                case '077':
                    return new PokemonList.Ponyta(id);
                case '078':
                    return new PokemonList.Rapidash(id);
                case '079':
                    return new PokemonList.Slowpoke(id);
                case '080':
                    return new PokemonList.Slowbro(id);
                case '081':
                    return new PokemonList.Magnemite(id);
                case '082':
                    return new PokemonList.Magneton(id);
                case '083':
                    return new PokemonList.Farfetchd(id);
                case '084':
                    return new PokemonList.Doduo(id);
                case '085':
                    return new PokemonList.Dodrio(id);
                case '086':
                    return new PokemonList.Seel(id);
                case '087':
                    return new PokemonList.Dewgong(id);
                case '088':
                    return new PokemonList.Grimer(id);
                case '089':
                    return new PokemonList.Muk(id);
                case '090':
                    return new PokemonList.Shellder(id);
                case '091':
                    return new PokemonList.Cloyster(id);
                case '092':
                    return new PokemonList.Gastly(id);
                case '093':
                    return new PokemonList.Haunter(id);
                case '094':
                    return new PokemonList.Gengar(id);
                case '094_mega':
                    return new PokemonList.MegaGengar(id);
                case '095':
                    return new PokemonList.Onix(id);
                case '096':
                    return new PokemonList.Drowzee(id);
                case '097':
                    return new PokemonList.Hypno(id);
                case '098':
                    return new PokemonList.Krabby(id);
                case '099':
                    return new PokemonList.Kingler(id);
                case '100':
                    return new PokemonList.Voltorb(id);
                case '101':
                    return new PokemonList.Electrode(id);
                case '102':
                    return new PokemonList.Exeggcute(id);
                case '103':
                    return new PokemonList.Exeggutor(id);
                case '104':
                    return new PokemonList.Cubone(id);
                case '105':
                    return new PokemonList.Marowak(id);
                case '106':
                    return new PokemonList.Hitmonlee(id);
                case '107':
                    return new PokemonList.Hitmonchan(id);
                case '108':
                    return new PokemonList.Lickitung(id);
                case '109':
                    return new PokemonList.Koffing(id);
                case '110':
                    return new PokemonList.Weezing(id);
                case '111':
                    return new PokemonList.Rhyhorn(id);
                case '112':
                    return new PokemonList.Rhydon(id);
                case '113':
                    return new PokemonList.Chansey(id);
                case '114':
                    return new PokemonList.Tangela(id);
                case '115':
                    return new PokemonList.Kangaskhan(id);
                case '115_mega':
                    return new PokemonList.MegaKangaskhan(id);
                case '116':
                    return new PokemonList.Horsea(id);
                case '117':
                    return new PokemonList.Seadra(id);
                case '118':
                    return new PokemonList.Goldeen(id);
                case '119':
                    return new PokemonList.Seaking(id);
                case '120':
                    return new PokemonList.Staryu(id);
                case '121':
                    return new PokemonList.Starmie(id);
                case '122':
                    return new PokemonList.MrMime(id);
                case '123':
                    return new PokemonList.Scyther(id);
                case '124':
                    return new PokemonList.Jynx(id);
                case '125':
                    return new PokemonList.Electabuzz(id);
                case '126':
                    return new PokemonList.Magmar(id);
                case '127':
                    return new PokemonList.Pinsir(id);
                case '127_mega':
                    return new PokemonList.MegaPinsir(id);
                case '128':
                    return new PokemonList.Tauros(id);
                case '129':
                    return new PokemonList.Magikarp(id);
                case '130':
                    return new PokemonList.Gyarados(id);
                case '130_mega':
                    return new PokemonList.MegaGyarados(id);
                case '131':
                    return new PokemonList.Lapras(id);
                case '132':
                    return new PokemonList.Ditto(id);
                case '133':
                    return new PokemonList.Eevee(id);
                case '134':
                    return new PokemonList.Vaporeon(id);
                case '135':
                    return new PokemonList.Jolteon(id);
                case '136':
                    return new PokemonList.Flareon(id);
                case '137':
                    return new PokemonList.Porygon(id);
                case '138':
                    return new PokemonList.Omanyte(id);
                case '139':
                    return new PokemonList.Omastar(id);
                case '140':
                    return new PokemonList.Kabuto(id);
                case '141':
                    return new PokemonList.Kabutops(id);
                case '142':
                    return new PokemonList.Aerodactyl(id);
                case '142_mega':
                    return new PokemonList.MegaAerodactyl(id);
                case '143':
                    return new PokemonList.Snorlax(id);
                case '144':
                    return new PokemonList.Articuno(id);
                case '145':
                    return new PokemonList.Zapdos(id);
                case '146':
                    return new PokemonList.Moltres(id);
                case '147':
                    return new PokemonList.Dratini(id);
                case '148':
                    return new PokemonList.Dragonair(id);
                case '149':
                    return new PokemonList.Dragonite(id);
                case '150':
                    return new PokemonList.Mewtwo(id);
                case '150_mega_x':
                    return new PokemonList.MegaMewtwoX(id);
                case '150_mega_y':
                    return new PokemonList.MegaMewtwoY(id);
                case '151':
                    return new PokemonList.Mew(id);
                case '152':
                    return new PokemonList.Chikorita(id);
                case '153':
                    return new PokemonList.Bayleef(id);
                case '154':
                    return new PokemonList.Meganium(id);
                case '155':
                    return new PokemonList.Cyndaquil(id);
                case '156':
                    return new PokemonList.Quilava(id);
                case '157':
                    return new PokemonList.Typhlosion(id);
                case '158':
                    return new PokemonList.Totodile(id);
                case '159':
                    return new PokemonList.Croconaw(id);
                case '160':
                    return new PokemonList.Feraligatr(id);
                case '161':
                    return new PokemonList.Sentret(id);
                case '162':
                    return new PokemonList.Furret(id);
                case '163':
                    return new PokemonList.Hoothoot(id);
                case '164':
                    return new PokemonList.Noctowl(id);
                case '165':
                    return new PokemonList.Ledyba(id);
                case '166':
                    return new PokemonList.Ledian(id);
                case '167':
                    return new PokemonList.Spinarak(id);
                case '168':
                    return new PokemonList.Ariados(id);
                case '169':
                    return new PokemonList.Crobat(id);
                case '170':
                    return new PokemonList.Chinchou(id);
                case '171':
                    return new PokemonList.Lanturn(id);
                case '172':
                    return new PokemonList.Pichu(id);
                case '173':
                    return new PokemonList.Cleffa(id);
                case '174':
                    return new PokemonList.Igglybuff(id);
                case '175':
                    return new PokemonList.Togepi(id);
                case '176':
                    return new PokemonList.Togetic(id);
                case '177':
                    return new PokemonList.Natu(id);
                case '178':
                    return new PokemonList.Xatu(id);
                case '179':
                    return new PokemonList.Mareep(id);
                case '180':
                    return new PokemonList.Flaaffy(id);
                case '181':
                    return new PokemonList.Ampharos(id);
                case '181_mega':
                    return new PokemonList.MegaAmpharos(id);
                case '182':
                    return new PokemonList.Bellossom(id);
                case '183':
                    return new PokemonList.Marill(id);
                case '184':
                    return new PokemonList.Azumarill(id);
                case '185':
                    return new PokemonList.Sudowoodo(id);
                case '186':
                    return new PokemonList.Politoed(id);
                case '187':
                    return new PokemonList.Hoppip(id);
                case '188':
                    return new PokemonList.Skiploom(id);
                case '189':
                    return new PokemonList.Jumpluff(id);
                case '190':
                    return new PokemonList.Aipom(id);
                case '191':
                    return new PokemonList.Sunkern(id);
                case '192':
                    return new PokemonList.Sunflora(id);
                case '193':
                    return new PokemonList.Yanma(id);
                case '194':
                    return new PokemonList.Wooper(id);
                case '195':
                    return new PokemonList.Quagsire(id);
                case '196':
                    return new PokemonList.Espeon(id);
                case '197':
                    return new PokemonList.Umbreon(id);
                case '198':
                    return new PokemonList.Murkrow(id);
                case '199':
                    return new PokemonList.Slowking(id);
                case '200':
                    return new PokemonList.Misdreavus(id);
                case '201':
                    return new PokemonList.Unown(id);
                case '202':
                    return new PokemonList.Wobbuffet(id);
                case '203':
                    return new PokemonList.Girafarig(id);
                case '204':
                    return new PokemonList.Pineco(id);
                case '205':
                    return new PokemonList.Forretress(id);
                case '206':
                    return new PokemonList.Dunsparce(id);
                case '207':
                    return new PokemonList.Gligar(id);
                case '208':
                    return new PokemonList.Steelix(id);
                case '209':
                    return new PokemonList.Snubbull(id);
                case '210':
                    return new PokemonList.Granbull(id);
                case '211':
                    return new PokemonList.Qwilfish(id);
                case '212':
                    return new PokemonList.Scizor(id);
                case '212_mega':
                    return new PokemonList.MegaScizor(id);
                case '213':
                    return new PokemonList.Shuckle(id);
                case '214':
                    return new PokemonList.Heracross(id);
                case '214_mega':
                    return new PokemonList.MegaHeracross(id);
                case '215':
                    return new PokemonList.Sneasel(id);
                case '216':
                    return new PokemonList.Teddiursa(id);
                case '217':
                    return new PokemonList.Ursaring(id);
                case '218':
                    return new PokemonList.Slugma(id);
                case '219':
                    return new PokemonList.Magcargo(id);
                case '220':
                    return new PokemonList.Swinub(id);
                case '221':
                    return new PokemonList.Piloswine(id);
                case '222':
                    return new PokemonList.Corsola(id);
                case '223':
                    return new PokemonList.Remoraid(id);
                case '224':
                    return new PokemonList.Octillery(id);
                case '225':
                    return new PokemonList.Delibird(id);
                case '226':
                    return new PokemonList.Mantine(id);
                case '227':
                    return new PokemonList.Skarmory(id);
                case '228':
                    return new PokemonList.Houndour(id);
                case '229':
                    return new PokemonList.Houndoom(id);
                case '229_mega':
                    return new PokemonList.MegaHoundoom(id);
                case '230':
                    return new PokemonList.Kingdra(id);
                case '231':
                    return new PokemonList.Phanpy(id);
                case '232':
                    return new PokemonList.Donphan(id);
                case '233':
                    return new PokemonList.Porygon2(id);
                case '234':
                    return new PokemonList.Stantler(id);
                case '235':
                    return new PokemonList.Smeargle(id);
                case '236':
                    return new PokemonList.Tyrogue(id);
                case '237':
                    return new PokemonList.Hitmontop(id);
                case '238':
                    return new PokemonList.Smoochum(id);
                case '239':
                    return new PokemonList.Elekid(id);
                case '240':
                    return new PokemonList.Magby(id);
                case '241':
                    return new PokemonList.Miltank(id);
                case '242':
                    return new PokemonList.Blissey(id);
                case '243':
                    return new PokemonList.Raikou(id);
                case '244':
                    return new PokemonList.Entei(id);
                case '245':
                    return new PokemonList.Suicune(id);
                case '246':
                    return new PokemonList.Larvitar(id);
                case '247':
                    return new PokemonList.Pupitar(id);
                case '248':
                    return new PokemonList.Tyranitar(id);
                case '248_mega':
                    return new PokemonList.MegaTyranitar(id);
                case '249':
                    return new PokemonList.Lugia(id);
                case '250':
                    return new PokemonList.HoOh(id);
                case '251':
                    return new PokemonList.Celebi(id);
                case '252':
                    return new PokemonList.Treecko(id);
                case '253':
                    return new PokemonList.Grovyle(id);
                case '254':
                    return new PokemonList.Sceptile(id);
                case '255':
                    return new PokemonList.Torchic(id);
                case '256':
                    return new PokemonList.Combusken(id);
                case '257':
                    return new PokemonList.Blaziken(id);
                case '257_mega':
                    return new PokemonList.MegaBlaziken(id);
                case '258':
                    return new PokemonList.Mudkip(id);
                case '259':
                    return new PokemonList.Marshtomp(id);
                case '260':
                    return new PokemonList.Swampert(id);
                case '261':
                    return new PokemonList.Poochyena(id);
                case '262':
                    return new PokemonList.Mightyena(id);
                case '263':
                    return new PokemonList.Zigzagoon(id);
                case '264':
                    return new PokemonList.Linoone(id);
                case '265':
                    return new PokemonList.Wurmple(id);
                case '266':
                    return new PokemonList.Silcoon(id);
                case '267':
                    return new PokemonList.Beautifly(id);
                case '268':
                    return new PokemonList.Cascoon(id);
                case '269':
                    return new PokemonList.Dustox(id);
                case '270':
                    return new PokemonList.Lotad(id);
                case '271':
                    return new PokemonList.Lombre(id);
                case '272':
                    return new PokemonList.Ludicolo(id);
                case '273':
                    return new PokemonList.Seedot(id);
                case '274':
                    return new PokemonList.Nuzleaf(id);
                case '275':
                    return new PokemonList.Shiftry(id);
                case '276':
                    return new PokemonList.Taillow(id);
                case '277':
                    return new PokemonList.Swellow(id);
                case '278':
                    return new PokemonList.Wingull(id);
                case '279':
                    return new PokemonList.Pelipper(id);
                case '280':
                    return new PokemonList.Ralts(id);
                case '281':
                    return new PokemonList.Kirlia(id);
                case '282':
                    return new PokemonList.Gardevoir(id);
                case '282_mega':
                    return new PokemonList.MegaGardevoir(id);
                case '283':
                    return new PokemonList.Surskit(id);
                case '284':
                    return new PokemonList.Masquerain(id);
                case '285':
                    return new PokemonList.Shroomish(id);
                case '286':
                    return new PokemonList.Breloom(id);
                case '287':
                    return new PokemonList.Slakoth(id);
                case '288':
                    return new PokemonList.Vigoroth(id);
                case '289':
                    return new PokemonList.Slaking(id);
                case '290':
                    return new PokemonList.Nincada(id);
                case '291':
                    return new PokemonList.Ninjask(id);
                case '292':
                    return new PokemonList.Shedinja(id);
                case '293':
                    return new PokemonList.Whismur(id);
                case '294':
                    return new PokemonList.Loudred(id);
                case '295':
                    return new PokemonList.Exploud(id);
                case '296':
                    return new PokemonList.Makuhita(id);
                case '297':
                    return new PokemonList.Hariyama(id);
                case '298':
                    return new PokemonList.Azurill(id);
                case '299':
                    return new PokemonList.Nosepass(id);
                case '300':
                    return new PokemonList.Skitty(id);
                case '301':
                    return new PokemonList.Delcatty(id);
                case '302':
                    return new PokemonList.Sableye(id);
                case '303':
                    return new PokemonList.Mawile(id);
                case '303_mega':
                    return new PokemonList.MegaMawile(id);
                case '304':
                    return new PokemonList.Aron(id);
                case '305':
                    return new PokemonList.Lairon(id);
                case '306':
                    return new PokemonList.Aggron(id);
                case '306_mega':
                    return new PokemonList.MegaAggron(id);
                case '307':
                    return new PokemonList.Meditite(id);
                case '308':
                    return new PokemonList.Medicham(id);
                case '308_mega':
                    return new PokemonList.MegaMedicham(id);
                case '309':
                    return new PokemonList.Electrike(id);
                case '310':
                    return new PokemonList.Manectric(id);
                case '310_mega':
                    return new PokemonList.MegaManectric(id);
                case '311':
                    return new PokemonList.Plusle(id);
                case '312':
                    return new PokemonList.Minun(id);
                case '313':
                    return new PokemonList.Volbeat(id);
                case '314':
                    return new PokemonList.Illumise(id);
                case '315':
                    return new PokemonList.Roselia(id);
                case '316':
                    return new PokemonList.Gulpin(id);
                case '317':
                    return new PokemonList.Swalot(id);
                case '318':
                    return new PokemonList.Carvanha(id);
                case '319':
                    return new PokemonList.Sharpedo(id);
                case '320':
                    return new PokemonList.Wailmer(id);
                case '321':
                    return new PokemonList.Wailord(id);
                case '322':
                    return new PokemonList.Numel(id);
                case '323':
                    return new PokemonList.Camerupt(id);
                case '324':
                    return new PokemonList.Torkoal(id);
                case '325':
                    return new PokemonList.Spoink(id);
                case '326':
                    return new PokemonList.Grumpig(id);
                case '327':
                    return new PokemonList.Spinda(id);
                case '328':
                    return new PokemonList.Trapinch(id);
                case '329':
                    return new PokemonList.Vibrava(id);
                case '330':
                    return new PokemonList.Flygon(id);
                case '331':
                    return new PokemonList.Cacnea(id);
                case '332':
                    return new PokemonList.Cacturne(id);
                case '333':
                    return new PokemonList.Swablu(id);
                case '334':
                    return new PokemonList.Altaria(id);
                case '335':
                    return new PokemonList.Zangoose(id);
                case '336':
                    return new PokemonList.Seviper(id);
                case '337':
                    return new PokemonList.Lunatone(id);
                case '338':
                    return new PokemonList.Solrock(id);
                case '339':
                    return new PokemonList.Barboach(id);
                case '340':
                    return new PokemonList.Whiscash(id);
                case '341':
                    return new PokemonList.Corphish(id);
                case '342':
                    return new PokemonList.Crawdaunt(id);
                case '343':
                    return new PokemonList.Baltoy(id);
                case '344':
                    return new PokemonList.Claydol(id);
                case '345':
                    return new PokemonList.Lileep(id);
                case '346':
                    return new PokemonList.Cradily(id);
                case '347':
                    return new PokemonList.Anorith(id);
                case '348':
                    return new PokemonList.Armaldo(id);
                case '349':
                    return new PokemonList.Feebas(id);
                case '350':
                    return new PokemonList.Milotic(id);
                case '351':
                    return new PokemonList.Castform(id);
                case '352':
                    return new PokemonList.Kecleon(id);
                case '353':
                    return new PokemonList.Shuppet(id);
                case '354':
                    return new PokemonList.Banette(id);
                case '354_mega':
                    return new PokemonList.MegaBanette(id);
                case '355':
                    return new PokemonList.Duskull(id);
                case '356':
                    return new PokemonList.Dusclops(id);
                case '357':
                    return new PokemonList.Tropius(id);
                case '358':
                    return new PokemonList.Chimecho(id);
                case '359':
                    return new PokemonList.Absol(id);
                case '359_mega':
                    return new PokemonList.MegaAbsol(id);
                case '360':
                    return new PokemonList.Wynaut(id);
                case '361':
                    return new PokemonList.Snorunt(id);
                case '362':
                    return new PokemonList.Glalie(id);
                case '363':
                    return new PokemonList.Spheal(id);
                case '364':
                    return new PokemonList.Sealeo(id);
                case '365':
                    return new PokemonList.Walrein(id);
                case '366':
                    return new PokemonList.Clamperl(id);
                case '367':
                    return new PokemonList.Huntail(id);
                case '368':
                    return new PokemonList.Gorebyss(id);
                case '369':
                    return new PokemonList.Relicanth(id);
                case '370':
                    return new PokemonList.Luvdisc(id);
                case '371':
                    return new PokemonList.Bagon(id);
                case '372':
                    return new PokemonList.Shelgon(id);
                case '373':
                    return new PokemonList.Salamence(id);
                case '374':
                    return new PokemonList.Beldum(id);
                case '375':
                    return new PokemonList.Metang(id);
                case '376':
                    return new PokemonList.Metagross(id);
                case '377':
                    return new PokemonList.Regirock(id);
                case '378':
                    return new PokemonList.Regice(id);
                case '379':
                    return new PokemonList.Registeel(id);
                case '380':
                    return new PokemonList.Latias(id);
                case '381':
                    return new PokemonList.Latios(id);
                case '382':
                    return new PokemonList.Kyogre(id);
                case '383':
                    return new PokemonList.Groudon(id);
                case '384':
                    return new PokemonList.Rayquaza(id);
                case '385':
                    return new PokemonList.Jirachi(id);
                case '386':
                    return new PokemonList.NormalFormeDeoxys(id);
                case '386_attack':
                    return new PokemonList.AttackFormeDeoxys(id);
                case '386_defense':
                    return new PokemonList.DefenseFormeDeoxys(id);
                case '386_speed':
                    return new PokemonList.SpeedFormeDeoxys(id);
                case '387':
                    return new PokemonList.Turtwig(id);
                case '388':
                    return new PokemonList.Grotle(id);
                case '389':
                    return new PokemonList.Torterra(id);
                case '390':
                    return new PokemonList.Chimchar(id);
                case '391':
                    return new PokemonList.Monferno(id);
                case '392':
                    return new PokemonList.Infernape(id);
                case '393':
                    return new PokemonList.Piplup(id);
                case '394':
                    return new PokemonList.Prinplup(id);
                case '395':
                    return new PokemonList.Empoleon(id);
                case '396':
                    return new PokemonList.Starly(id);
                case '397':
                    return new PokemonList.Staravia(id);
                case '398':
                    return new PokemonList.Staraptor(id);
                case '399':
                    return new PokemonList.Bidoof(id);
                case '400':
                    return new PokemonList.Bibarel(id);
                case '401':
                    return new PokemonList.Kricketot(id);
                case '402':
                    return new PokemonList.Kricketune(id);
                case '403':
                    return new PokemonList.Shinx(id);
                case '404':
                    return new PokemonList.Luxio(id);
                case '405':
                    return new PokemonList.Luxray(id);
                case '406':
                    return new PokemonList.Budew(id);
                case '407':
                    return new PokemonList.Roserade(id);
                case '408':
                    return new PokemonList.Cranidos(id);
                case '409':
                    return new PokemonList.Rampardos(id);
                case '410':
                    return new PokemonList.Shieldon(id);
                case '411':
                    return new PokemonList.Bastiodon(id);
                case '412':
                    return new PokemonList.Burmy(id);
                case '413_plant':
                    return new PokemonList.PlantCloakWormadam(id);
                case '413_sandy':
                    return new PokemonList.SandyCloakWormadam(id);
                case '413_trash':
                    return new PokemonList.TrashCloakWormadam(id);
                case '414':
                    return new PokemonList.Mothim(id);
                case '415':
                    return new PokemonList.Combee(id);
                case '416':
                    return new PokemonList.Vespiquen(id);
                case '417':
                    return new PokemonList.Pachirisu(id);
                case '418':
                    return new PokemonList.Buizel(id);
                case '419':
                    return new PokemonList.Floatzel(id);
                case '420':
                    return new PokemonList.Cherubi(id);
                case '421':
                    return new PokemonList.Cherrim(id);
                case '422':
                    return new PokemonList.Shellos(id);
                case '423':
                    return new PokemonList.Gastrodon(id);
                case '424':
                    return new PokemonList.Ambipom(id);
                case '425':
                    return new PokemonList.Drifloon(id);
                case '426':
                    return new PokemonList.Drifblim(id);
                case '427':
                    return new PokemonList.Buneary(id);
                case '428':
                    return new PokemonList.Lopunny(id);
                case '429':
                    return new PokemonList.Mismagius(id);
                case '430':
                    return new PokemonList.Honchkrow(id);
                case '431':
                    return new PokemonList.Glameow(id);
                case '432':
                    return new PokemonList.Purugly(id);
                case '433':
                    return new PokemonList.Chingling(id);
                case '434':
                    return new PokemonList.Stunky(id);
                case '435':
                    return new PokemonList.Skuntank(id);
                case '436':
                    return new PokemonList.Bronzor(id);
                case '437':
                    return new PokemonList.Bronzong(id);
                case '438':
                    return new PokemonList.Bonsly(id);
                case '439':
                    return new PokemonList.MimeJr(id);
                case '440':
                    return new PokemonList.Happiny(id);
                case '441':
                    return new PokemonList.Chatot(id);
                case '442':
                    return new PokemonList.Spiritomb(id);
                case '443':
                    return new PokemonList.Gible(id);
                case '444':
                    return new PokemonList.Gabite(id);
                case '445':
                    return new PokemonList.Garchomp(id);
                case '445_mega':
                    return new PokemonList.MegaGarchomp(id);
                case '446':
                    return new PokemonList.Munchlax(id);
                case '447':
                    return new PokemonList.Riolu(id);
                case '448':
                    return new PokemonList.Lucario(id);
                case '448_mega':
                    return new PokemonList.MegaLucario(id);
                case '449':
                    return new PokemonList.Hippopotas(id);
                case '450':
                    return new PokemonList.Hippowdon(id);
                case '451':
                    return new PokemonList.Skorupi(id);
                case '452':
                    return new PokemonList.Drapion(id);
                case '453':
                    return new PokemonList.Croagunk(id);
                case '454':
                    return new PokemonList.Toxicroak(id);
                case '455':
                    return new PokemonList.Carnivine(id);
                case '456':
                    return new PokemonList.Finneon(id);
                case '457':
                    return new PokemonList.Lumineon(id);
                case '458':
                    return new PokemonList.Mantyke(id);
                case '459':
                    return new PokemonList.Snover(id);
                case '460':
                    return new PokemonList.Abomasnow(id);
                case '460_mega':
                    return new PokemonList.MegaAbomasnow(id);
                case '461':
                    return new PokemonList.Weavile(id);
                case '462':
                    return new PokemonList.Magnezone(id);
                case '463':
                    return new PokemonList.Lickilicky(id);
                case '464':
                    return new PokemonList.Rhyperior(id);
                case '465':
                    return new PokemonList.Tangrowth(id);
                case '466':
                    return new PokemonList.Electivire(id);
                case '467':
                    return new PokemonList.Magmortar(id);
                case '468':
                    return new PokemonList.Togekiss(id);
                case '469':
                    return new PokemonList.Yanmega(id);
                case '470':
                    return new PokemonList.Leafeon(id);
                case '471':
                    return new PokemonList.Glaceon(id);
                case '472':
                    return new PokemonList.Gliscor(id);
                case '473':
                    return new PokemonList.Mamoswine(id);
                case '474':
                    return new PokemonList.PorygonZ(id);
                case '475':
                    return new PokemonList.Gallade(id);
                case '476':
                    return new PokemonList.Probopass(id);
                case '477':
                    return new PokemonList.Dusknoir(id);
                case '478':
                    return new PokemonList.Froslass(id);
                case '479':
                    return new PokemonList.Rotom(id);
                case '479_heat':
                    return new PokemonList.HeatFormeRotom(id);
                case '479_wash':
                    return new PokemonList.WashFormeRotom(id);
                case '479_frost':
                    return new PokemonList.FrostFormeRotom(id);
                case '479_fan':
                    return new PokemonList.FanFormeRotom(id);
                case '479_mow':
                    return new PokemonList.MowFormeRotom(id);
                case '480':
                    return new PokemonList.Uxie(id);
                case '481':
                    return new PokemonList.Mesprit(id);
                case '482':
                    return new PokemonList.Azelf(id);
                case '483':
                    return new PokemonList.Dialga(id);
                case '484':
                    return new PokemonList.Palkia(id);
                case '485':
                    return new PokemonList.Heatran(id);
                case '486':
                    return new PokemonList.Regigigas(id);
                case '487':
                    return new PokemonList.Giratina(id);
                case '487_altered':
                    return new PokemonList.AlteredFormeGiratina(id);
                case '488':
                    return new PokemonList.Cresselia(id);
                case '489':
                    return new PokemonList.Phione(id);
                case '490':
                    return new PokemonList.Manaphy(id);
                case '491':
                    return new PokemonList.Darkrai(id);
                case '492':
                    return new PokemonList.Shaymin(id);
                case '492_sky':
                    return new PokemonList.SkyFormeShaymin(id);
                case '493':
                    return new PokemonList.Arceus(id);
                case '494':
                    return new PokemonList.Victini(id);
                case '495':
                    return new PokemonList.Snivy(id);
                case '496':
                    return new PokemonList.Servine(id);
                case '497':
                    return new PokemonList.Serperior(id);
                case '498':
                    return new PokemonList.Tepig(id);
                case '499':
                    return new PokemonList.Pignite(id);
                case '500':
                    return new PokemonList.Emboar(id);
                case '501':
                    return new PokemonList.Oshawott(id);
                case '502':
                    return new PokemonList.Dewott(id);
                case '503':
                    return new PokemonList.Samurott(id);
                case '504':
                    return new PokemonList.Patrat(id);
                case '505':
                    return new PokemonList.Watchog(id);
                case '506':
                    return new PokemonList.Lillipup(id);
                case '507':
                    return new PokemonList.Herdier(id);
                case '508':
                    return new PokemonList.Stoutland(id);
                case '509':
                    return new PokemonList.Purrloin(id);
                case '510':
                    return new PokemonList.Liepard(id);
                case '511':
                    return new PokemonList.Pansage(id);
                case '512':
                    return new PokemonList.Simisage(id);
                case '513':
                    return new PokemonList.Pansear(id);
                case '514':
                    return new PokemonList.Simisear(id);
                case '515':
                    return new PokemonList.Panpour(id);
                case '516':
                    return new PokemonList.Simipour(id);
                case '517':
                    return new PokemonList.Munna(id);
                case '518':
                    return new PokemonList.Musharna(id);
                case '519':
                    return new PokemonList.Pidove(id);
                case '520':
                    return new PokemonList.Tranquill(id);
                case '521':
                    return new PokemonList.Unfezant(id);
                case '522':
                    return new PokemonList.Blitzle(id);
                case '523':
                    return new PokemonList.Zebstrika(id);
                case '524':
                    return new PokemonList.Roggenrola(id);
                case '525':
                    return new PokemonList.Boldore(id);
                case '526':
                    return new PokemonList.Gigalith(id);
                case '527':
                    return new PokemonList.Woobat(id);
                case '528':
                    return new PokemonList.Swoobat(id);
                case '529':
                    return new PokemonList.Drilbur(id);
                case '530':
                    return new PokemonList.Excadrill(id);
                case '531':
                    return new PokemonList.Audino(id);
                case '532':
                    return new PokemonList.Timburr(id);
                case '533':
                    return new PokemonList.Gurdurr(id);
                case '534':
                    return new PokemonList.Conkeldurr(id);
                case '535':
                    return new PokemonList.Tympole(id);
                case '536':
                    return new PokemonList.Palpitoad(id);
                case '537':
                    return new PokemonList.Seismitoad(id);
                case '538':
                    return new PokemonList.Throh(id);
                case '539':
                    return new PokemonList.Sawk(id);
                case '540':
                    return new PokemonList.Sewaddle(id);
                case '541':
                    return new PokemonList.Swadloon(id);
                case '542':
                    return new PokemonList.Leavanny(id);
                case '543':
                    return new PokemonList.Venipede(id);
                case '544':
                    return new PokemonList.Whirlipede(id);
                case '545':
                    return new PokemonList.Scolipede(id);
                case '546':
                    return new PokemonList.Cottonee(id);
                case '547':
                    return new PokemonList.Whimsicott(id);
                case '548':
                    return new PokemonList.Petilil(id);
                case '549':
                    return new PokemonList.Lilligant(id);
                case '550':
                    return new PokemonList.Basculin(id);
                case '551':
                    return new PokemonList.Sandile(id);
                case '552':
                    return new PokemonList.Krokorok(id);
                case '553':
                    return new PokemonList.Krookodile(id);
                case '554':
                    return new PokemonList.Darumaka(id);
                case '555':
                    return new PokemonList.Darmanitan(id);
                case '555_zen':
                    return new PokemonList.ZenModeDarmanitan(id);
                case '556':
                    return new PokemonList.Maractus(id);
                case '557':
                    return new PokemonList.Dwebble(id);
                case '558':
                    return new PokemonList.Crustle(id);
                case '559':
                    return new PokemonList.Scraggy(id);
                case '560':
                    return new PokemonList.Scrafty(id);
                case '561':
                    return new PokemonList.Sigilyph(id);
                case '562':
                    return new PokemonList.Yamask(id);
                case '563':
                    return new PokemonList.Cofagrigus(id);
                case '564':
                    return new PokemonList.Tirtouga(id);
                case '565':
                    return new PokemonList.Carracosta(id);
                case '566':
                    return new PokemonList.Archen(id);
                case '567':
                    return new PokemonList.Archeops(id);
                case '568':
                    return new PokemonList.Trubbish(id);
                case '569':
                    return new PokemonList.Garbodor(id);
                case '570':
                    return new PokemonList.Zorua(id);
                case '571':
                    return new PokemonList.Zoroark(id);
                case '572':
                    return new PokemonList.Minccino(id);
                case '573':
                    return new PokemonList.Cinccino(id);
                case '574':
                    return new PokemonList.Gothita(id);
                case '575':
                    return new PokemonList.Gothorita(id);
                case '576':
                    return new PokemonList.Gothitelle(id);
                case '577':
                    return new PokemonList.Solosis(id);
                case '578':
                    return new PokemonList.Duosion(id);
                case '579':
                    return new PokemonList.Reuniclus(id);
                case '580':
                    return new PokemonList.Ducklett(id);
                case '581':
                    return new PokemonList.Swanna(id);
                case '582':
                    return new PokemonList.Vanillite(id);
                case '583':
                    return new PokemonList.Vanillish(id);
                case '584':
                    return new PokemonList.Vanilluxe(id);
                case '585':
                    return new PokemonList.Deerling(id);
                case '586':
                    return new PokemonList.Sawsbuck(id);
                case '587':
                    return new PokemonList.Emolga(id);
                case '588':
                    return new PokemonList.Karrablast(id);
                case '589':
                    return new PokemonList.Escavalier(id);
                case '590':
                    return new PokemonList.Foongus(id);
                case '591':
                    return new PokemonList.Amoonguss(id);
                case '592':
                    return new PokemonList.Frillish(id);
                case '593':
                    return new PokemonList.Jellicent(id);
                case '594':
                    return new PokemonList.Alomomola(id);
                case '595':
                    return new PokemonList.Joltik(id);
                case '596':
                    return new PokemonList.Galvantula(id);
                case '597':
                    return new PokemonList.Ferroseed(id);
                case '598':
                    return new PokemonList.Ferrothorn(id);
                case '599':
                    return new PokemonList.Klink(id);
                case '600':
                    return new PokemonList.Klang(id);
                case '601':
                    return new PokemonList.Klinklang(id);
                case '602':
                    return new PokemonList.Tynamo(id);
                case '603':
                    return new PokemonList.Eelektrik(id);
                case '604':
                    return new PokemonList.Eelektross(id);
                case '605':
                    return new PokemonList.Elgyem(id);
                case '606':
                    return new PokemonList.Beheeyem(id);
                case '607':
                    return new PokemonList.Litwick(id);
                case '608':
                    return new PokemonList.Lampent(id);
                case '609':
                    return new PokemonList.Chandelure(id);
                case '610':
                    return new PokemonList.Axew(id);
                case '611':
                    return new PokemonList.Fraxure(id);
                case '612':
                    return new PokemonList.Haxorus(id);
                case '613':
                    return new PokemonList.Cubchoo(id);
                case '614':
                    return new PokemonList.Beartic(id);
                case '615':
                    return new PokemonList.Cryogonal(id);
                case '616':
                    return new PokemonList.Shelmet(id);
                case '617':
                    return new PokemonList.Accelgor(id);
                case '618':
                    return new PokemonList.Stunfisk(id);
                case '619':
                    return new PokemonList.Mienfoo(id);
                case '620':
                    return new PokemonList.Mienshao(id);
                case '621':
                    return new PokemonList.Druddigon(id);
                case '622':
                    return new PokemonList.Golett(id);
                case '623':
                    return new PokemonList.Golurk(id);
                case '624':
                    return new PokemonList.Pawniard(id);
                case '625':
                    return new PokemonList.Bisharp(id);
                case '626':
                    return new PokemonList.Bouffalant(id);
                case '627':
                    return new PokemonList.Rufflet(id);
                case '628':
                    return new PokemonList.Braviary(id);
                case '629':
                    return new PokemonList.Vullaby(id);
                case '630':
                    return new PokemonList.Mandibuzz(id);
                case '631':
                    return new PokemonList.Heatmor(id);
                case '632':
                    return new PokemonList.Durant(id);
                case '633':
                    return new PokemonList.Deino(id);
                case '634':
                    return new PokemonList.Zweilous(id);
                case '635':
                    return new PokemonList.Hydreigon(id);
                case '636':
                    return new PokemonList.Larvesta(id);
                case '637':
                    return new PokemonList.Volcarona(id);
                case '638':
                    return new PokemonList.Cobalion(id);
                case '639':
                    return new PokemonList.Terrakion(id);
                case '640':
                    return new PokemonList.Virizion(id);
                case '641':
                    return new PokemonList.IncarnateFormeTornadus(id);
                case '641_therian':
                    return new PokemonList.TherianFormeTornadus(id);
                case '642':
                    return new PokemonList.IncarnateFormeThundurus(id);
                case '642_therian':
                    return new PokemonList.TherianFormeThundurus(id);
                case '643':
                    return new PokemonList.Reshiram(id);
                case '644':
                    return new PokemonList.Zekrom(id);
                case '645':
                    return new PokemonList.IncarnateFormeLandorus(id);
                case '645_therian':
                    return new PokemonList.TherianFormeLandorus(id);
                case '646':
                    return new PokemonList.Kyurem(id);
                case '646_white':
                    return new PokemonList.WhiteKyurem(id);
                case '646_black':
                    return new PokemonList.BlackKyurem(id);
                case '647':
                    return new PokemonList.Keldeo(id);
                case '647_resolute':
                    return new PokemonList.ResoluteFormeKeldeo(id);
                case '648':
                    return new PokemonList.AriaFormeMeloetta(id);
                case '648_piroutte':
                    return new PokemonList.PirouetteFormeMeloetta(id);
                case '649':
                    return new PokemonList.Genesect(id);
                case '650':
                    return new PokemonList.Chespin(id);
                case '651':
                    return new PokemonList.Quilladin(id);
                case '652':
                    return new PokemonList.Chesnaught(id);
                case '653':
                    return new PokemonList.Fennekin(id);
                case '654':
                    return new PokemonList.Braixen(id);
                case '655':
                    return new PokemonList.Delphox(id);
                case '656':
                    return new PokemonList.Froakie(id);
                case '657':
                    return new PokemonList.Frogadier(id);
                case '658':
                    return new PokemonList.Greninja(id);
                case '659':
                    return new PokemonList.Bunnelby(id);
                case '660':
                    return new PokemonList.Diggersby(id);
                case '661':
                    return new PokemonList.Fletchling(id);
                case '662':
                    return new PokemonList.Fletchinder(id);
                case '663':
                    return new PokemonList.Talonflame(id);
                case '664':
                    return new PokemonList.Scatterbug(id);
                case '665':
                    return new PokemonList.Spewpa(id);
                case '666':
                    return new PokemonList.Vivillon(id);
                case '667':
                    return new PokemonList.Litleo(id);
                case '668':
                    return new PokemonList.Pyroar(id);
                case '669':
                    return new PokemonList.Flabébé(id);
                case '670':
                    return new PokemonList.Floette(id);
                case '671':
                    return new PokemonList.Florges(id);
                case '672':
                    return new PokemonList.Skiddo(id);
                case '673':
                    return new PokemonList.Gogoat(id);
                case '674':
                    return new PokemonList.Pancham(id);
                case '675':
                    return new PokemonList.Pangoro(id);
                case '676':
                    return new PokemonList.Furfrou(id);
                case '677':
                    return new PokemonList.Espurr(id);
                case '678_male':
                    return new PokemonList.MaleMeowstic(id);
                case '678_female':
                    return new PokemonList.FemaleMeowstic(id);
                case '679':
                    return new PokemonList.Honedge(id);
                case '680':
                    return new PokemonList.Doublade(id);
                case '681_blade':
                    return new PokemonList.BladeFormeAegislash(id);
                case '681_shield':
                    return new PokemonList.ShieldFormeAegislash(id);
                case '682':
                    return new PokemonList.Spritzee(id);
                case '683':
                    return new PokemonList.Aromatisse(id);
                case '684':
                    return new PokemonList.Swirlix(id);
                case '685':
                    return new PokemonList.Slurpuff(id);
                case '686':
                    return new PokemonList.Inkay(id);
                case '687':
                    return new PokemonList.Malamar(id);
                case '688':
                    return new PokemonList.Binacle(id);
                case '689':
                    return new PokemonList.Barbaracle(id);
                case '690':
                    return new PokemonList.Skrelp(id);
                case '691':
                    return new PokemonList.Dragalge(id);
                case '692':
                    return new PokemonList.Clauncher(id);
                case '693':
                    return new PokemonList.Clawitzer(id);
                case '694':
                    return new PokemonList.Helioptile(id);
                case '695':
                    return new PokemonList.Heliolisk(id);
                case '696':
                    return new PokemonList.Tyrunt(id);
                case '697':
                    return new PokemonList.Tyrantrum(id);
                case '698':
                    return new PokemonList.Amaura(id);
                case '699':
                    return new PokemonList.Aurorus(id);
                case '700':
                    return new PokemonList.Sylveon(id);
                case '701':
                    return new PokemonList.Hawlucha(id);
                case '702':
                    return new PokemonList.Dedenne(id);
                case '703':
                    return new PokemonList.Carbink(id);
                case '704':
                    return new PokemonList.Goomy(id);
                case '705':
                    return new PokemonList.Sliggoo(id);
                case '706':
                    return new PokemonList.Goodra(id);
                case '707':
                    return new PokemonList.Klefki(id);
                case '708':
                    return new PokemonList.Phantump(id);
                case '709':
                    return new PokemonList.Trevenant(id);
                case '710':
                    return new PokemonList.AverageSizePumpkaboo(id);
                case '710_small':
                    return new PokemonList.SmallSizePumpkaboo(id);
                case '710_large':
                    return new PokemonList.LargeSizePumpkaboo(id);
                case '710_super':
                    return new PokemonList.SuperSizePumpkaboo(id);
                case '711':
                    return new PokemonList.AverageSizeGourgeist(id);
                case '711_small':
                    return new PokemonList.SmallSizeGourgeist(id);
                case '711_large':
                    return new PokemonList.LargeSizeGourgeist(id);
                case '711_super':
                    return new PokemonList.SuperSizeGourgeist(id);
                case '712':
                    return new PokemonList.Bergmite(id);
                case '713':
                    return new PokemonList.Avalugg(id);
                case '714':
                    return new PokemonList.Noibat(id);
                case '715':
                    return new PokemonList.Noivern(id);
                case '716':
                    return new PokemonList.Xerneas(id);
                case '717':
                    return new PokemonList.Yveltal(id);
                case '718':
                    return new PokemonList.Zygarde(id);
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
                case 'iceBody':
                    return AbilitesList.iceBody;
                case 'stench':
                    return AbilitesList.stench;
                case 'thickFat':
                    return AbilitesList.thickFat;
                case 'stall':
                    return AbilitesList.stall;
                case 'analytic':
                    return AbilitesList.analytic;
                case 'contrary':
                    return AbilitesList.contrary;
                case 'rainDish':
                    return AbilitesList.rainDish;
                case 'drizzle':
                    return AbilitesList.drizzle;
                case 'arenaTrap':
                    return AbilitesList.arenaTrap;
                case 'intimidate':
                    return AbilitesList.intimidate;
                case 'angerPoint':
                    return AbilitesList.angerPoint;
                case 'rockHead':
                    return AbilitesList.rockHead;
                case 'prankster':
                    return AbilitesList.prankster;
                case 'healer':
                    return AbilitesList.healer;
                case 'illusion':
                    return AbilitesList.illusion;
                case 'tintedLens':
                    return AbilitesList.tintedLens;
                case 'hydration':
                    return AbilitesList.hydration;
                case 'airLock':
                    return AbilitesList.airLock;
                case 'frisk':
                    return AbilitesList.frisk;
                case 'hyperCutter':
                    return AbilitesList.hyperCutter;
                case 'shadowTag':
                    return AbilitesList.shadowTag;
                case 'speedBoost':
                    return AbilitesList.speedBoost;
                case 'moldBreaker':
                    return AbilitesList.moldBreaker;
                case 'battleArmor':
                    return AbilitesList.battleArmor;
                case 'unburden':
                    return AbilitesList.unburden;
                case 'imposter':
                    return AbilitesList.imposter;
                case 'sturdy':
                    return AbilitesList.sturdy;
                case 'drySkin':
                    return AbilitesList.drySkin;
                case 'anticipation':
                    return AbilitesList.anticipation;
                case 'scrappy':
                    return AbilitesList.scrappy;
                case 'suctionCups':
                    return AbilitesList.suctionCups;
                case 'superLuck':
                    return AbilitesList.superLuck;
                case 'unnerve':
                    return AbilitesList.unnerve;
                case 'gluttony':
                    return AbilitesList.gluttony;
                case 'weakArmor':
                    return AbilitesList.weakArmor;
                case 'clearBody':
                    return AbilitesList.clearBody;
                case 'torrent':
                    return AbilitesList.torrent;
                case 'guts':
                    return AbilitesList.guts;
                case 'regenerator':
                    return AbilitesList.regenerator;
                case 'roughSkin':
                    return AbilitesList.roughSkin;
                case 'solarPower':
                    return AbilitesList.solarPower;
                case 'shellArmor':
                    return AbilitesList.shellArmor;
                case 'moxie':
                    return AbilitesList.moxie;
                case 'naturalCure':
                    return AbilitesList.naturalCure;
                case 'damp':
                    return AbilitesList.damp;
                case 'harvest':
                    return AbilitesList.harvest;
                case 'limber':
                    return AbilitesList.limber;
                case 'victoryStar':
                    return AbilitesList.victoryStar;
                case 'magnetPull':
                    return AbilitesList.magnetPull;
                case 'whiteSmoke':
                    return AbilitesList.whiteSmoke;
                case 'synchronize':
                    return AbilitesList.synchronize;
                case 'overgrow':
                    return AbilitesList.overgrow;
                case 'swiftSwim':
                    return AbilitesList.swiftSwim;
                case 'skillLink':
                    return AbilitesList.skillLink;
                case 'reckless':
                    return AbilitesList.reckless;
                case 'sniper':
                    return AbilitesList.sniper;
                case 'sandStream':
                    return AbilitesList.sandStream;
                case 'sandRush':
                    return AbilitesList.sandRush;
                case 'sandVeil':
                    return AbilitesList.sandVeil;
                case 'sandForce':
                    return AbilitesList.sandForce;
                case 'infiltrator':
                    return AbilitesList.infiltrator;
                case 'keenEye':
                    return AbilitesList.keenEye;
                case 'slowStart':
                    return AbilitesList.slowStart;
                case 'justified':
                    return AbilitesList.justified;
                case 'innerFocus':
                    return AbilitesList.innerFocus;
                case 'staticElectricity':
                    return AbilitesList.staticElectricity;
                case 'sapSipper':
                    return AbilitesList.sapSipper;
                case 'turboblaze':
                    return AbilitesList.turboblaze;
                case 'heatproof':
                    return AbilitesList.heatproof;
                case 'download':
                    return AbilitesList.download;
                case 'shedSkin':
                    return AbilitesList.shedSkin;
                case 'zenMode':
                    return AbilitesList.zenMode;
                case 'simple':
                    return AbilitesList.simple;
                case 'sheerForce':
                    return AbilitesList.sheerForce;
                case 'hugePower':
                    return AbilitesList.hugePower;
                case 'voltAbsorb':
                    return AbilitesList.voltAbsorb;
                case 'tangledFeet':
                    return AbilitesList.tangledFeet;
                case 'waterAbsorb':
                    return AbilitesList.waterAbsorb;
                case 'adaptability':
                    return AbilitesList.adaptability;
                case 'technician':
                    return AbilitesList.technician;
                case 'ironFist':
                    return AbilitesList.ironFist;
                case 'ironBarbs':
                    return AbilitesList.ironBarbs;
                case 'teravolt':
                    return AbilitesList.teravolt;
                case 'telepathy':
                    return AbilitesList.telepathy;
                case 'motorDrive':
                    return AbilitesList.motorDrive;
                case 'forecast':
                    return AbilitesList.forecast;
                case 'unaware':
                    return AbilitesList.unaware;
                case 'sereneGrace':
                    return AbilitesList.sereneGrace;
                case 'rivalry':
                    return AbilitesList.rivalry;
                case 'poisonTouch':
                    return AbilitesList.poisonTouch;
                case 'poisonPoint':
                    return AbilitesList.poisonPoint;
                case 'toxicBoost':
                    return AbilitesList.toxicBoost;
                case 'trace':
                    return AbilitesList.trace;
                case 'oblivious':
                    return AbilitesList.oblivious;
                case 'badDreams':
                    return AbilitesList.badDreams;
                case 'truant':
                    return AbilitesList.truant;
                case 'runAway':
                    return AbilitesList.runAway;
                case 'flareBoost':
                    return AbilitesList.flareBoost;
                case 'stickyHold':
                    return AbilitesList.stickyHold;
                case 'noGuard':
                    return AbilitesList.noGuard;
                case 'cloudNine':
                    return AbilitesList.cloudNine;
                case 'normalize':
                    return AbilitesList.normalize;
                case 'cursedBody':
                    return AbilitesList.cursedBody;
                case 'solidRock':
                    return AbilitesList.solidRock;
                case 'illuminate':
                    return AbilitesList.illuminate;
                case 'bigPecks':
                    return AbilitesList.bigPecks;
                case 'quickFeet':
                    return AbilitesList.quickFeet;
                case 'earlyBird':
                    return AbilitesList.earlyBird;
                case 'hustle':
                    return AbilitesList.hustle;
                case 'drought':
                    return AbilitesList.drought;
                case 'rattled':
                    return AbilitesList.rattled;
                case 'lightningrod':
                    return AbilitesList.lightningrod;
                case 'filter':
                    return AbilitesList.filter;
                case 'klutz':
                    return AbilitesList.klutz;
                case 'compoundeyes':
                    return AbilitesList.compoundeyes;
                case 'steadfast':
                    return AbilitesList.steadfast;
                case 'marvelScale':
                    return AbilitesList.marvelScale;
                case 'wonderGuard':
                    return AbilitesList.wonderGuard;
                case 'insomnia':
                    return AbilitesList.insomnia;
                case 'levitate':
                    return AbilitesList.levitate;
                case 'plus':
                    return AbilitesList.plus;
                case 'flowerGift':
                    return AbilitesList.flowerGift;
                case 'pressure':
                    return AbilitesList.pressure;
                case 'friendGuard':
                    return AbilitesList.friendGuard;
                case 'heavyMetal':
                    return AbilitesList.heavyMetal;
                case 'liquidOoze':
                    return AbilitesList.liquidOoze;
                case 'colorChange':
                    return AbilitesList.colorChange;
                case 'poisonHeal':
                    return AbilitesList.poisonHeal;
                case 'soundproof':
                    return AbilitesList.soundproof;
                case 'effectSpore':
                    return AbilitesList.effectSpore;
                case 'overcoat':
                    return AbilitesList.overcoat;
                case 'flameBody':
                    return AbilitesList.flameBody;
                case 'minus':
                    return AbilitesList.minus;
                case 'ownTempo':
                    return AbilitesList.ownTempo;
                case 'magmaArmor':
                    return AbilitesList.magmaArmor;
                case 'defiant':
                    return AbilitesList.defiant;
                case 'magicGuard':
                    return AbilitesList.magicGuard;
                case 'magicBounce':
                    return AbilitesList.magicBounce;
                case 'multiscale':
                    return AbilitesList.multiscale;
                case 'multitype':
                    return AbilitesList.multitype;
                case 'mummy':
                    return AbilitesList.mummy;
                case 'waterVeil':
                    return AbilitesList.waterVeil;
                case 'honeyGather':
                    return AbilitesList.honeyGather;
                case 'wonderSkin':
                    return AbilitesList.wonderSkin;
                case 'swarm':
                    return AbilitesList.swarm;
                case 'moody':
                    return AbilitesList.moody;
                case 'cuteCharm':
                    return AbilitesList.cuteCharm;
                case 'immunity':
                    return AbilitesList.immunity;
                case 'blaze':
                    return AbilitesList.blaze;
                case 'pickup':
                    return AbilitesList.pickup;
                case 'flashFire':
                    return AbilitesList.flashFire;
                case 'vitalSpirit':
                    return AbilitesList.vitalSpirit;
                case 'aftermath':
                    return AbilitesList.aftermath;
                case 'snowCloak':
                    return AbilitesList.snowCloak;
                case 'snowWarning':
                    return AbilitesList.snowWarning;
                case 'chlorophyll':
                    return AbilitesList.chlorophyll;
                case 'purePower':
                    return AbilitesList.purePower;
                case 'forewarn':
                    return AbilitesList.forewarn;
                case 'stormDrain':
                    return AbilitesList.stormDrain;
                case 'defeatist':
                    return AbilitesList.defeatist;
                case 'lightMetal':
                    return AbilitesList.lightMetal;
                case 'leafGuard':
                    return AbilitesList.leafGuard;
                case 'shieldDust':
                    return AbilitesList.shieldDust;
                case 'pickpocket':
                    return AbilitesList.pickpocket;
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

    //1
    export class Bulbasaur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フシギダネ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //2
    export class Ivysaur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フシギソウ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //3
    export class Venusaur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フシギバナ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //3
    export class MegaVenusaur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガフシギバナ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //4
    export class Charmander extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒトカゲ'),
                  [new Domain.Type('fire')]);
        }
    }

    //5
    export class Charmeleon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リザード'),
                  [new Domain.Type('fire')]);
        }
    }

    //6
    export class Charizard extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リザードン'),
                  [new Domain.Type('fire'), new Domain.Type('flying')]);
        }
    }

    //6
    export class MegaCharizardX extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガリザードンX'),
                  [new Domain.Type('fire'), new Domain.Type('dragon')]);
        }
    }

    //6
    export class MegaCharizardY extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガリザードンY'),
                  [new Domain.Type('fire'), new Domain.Type('flying')]);
        }
    }

    //7
    export class Squirtle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゼニガメ'),
                  [new Domain.Type('water')]);
        }
    }

    //8
    export class Wartortle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カメール'),
                  [new Domain.Type('water')]);
        }
    }

    //9
    export class Blastoise extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カメックス'),
                  [new Domain.Type('water')]);
        }
    }

    //9
    export class MegaBlastoise extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガカメックス'),
                  [new Domain.Type('water')]);
        }
    }

    //10
    export class Caterpie extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キャタピー'),
                  [new Domain.Type('bug')]);
        }
    }

    //11
    export class Metapod extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トランセル'),
                  [new Domain.Type('bug')]);
        }
    }

    //12
    export class Butterfree extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バタフリー'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //13
    export class Weedle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビードル'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //14
    export class Kakuna extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コクーン'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //15
    export class Beedrill extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スピアー'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //16
    export class Pidgey extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポッポ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //17
    export class Pidgeotto extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ピジョン'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //18
    export class Pidgeot extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ピジョット'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //19
    export class Rattata extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コラッタ'),
                  [new Domain.Type('normal')]);
        }
    }

    //20
    export class Raticate extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラッタ'),
                  [new Domain.Type('normal')]);
        }
    }

    //21
    export class Spearow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オニスズメ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //22
    export class Fearow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オニドリル'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //23
    export class Ekans extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アーボ'),
                  [new Domain.Type('poison')]);
        }
    }

    //24
    export class Arbok extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アーボック'),
                  [new Domain.Type('poison')]);
        }
    }

    //25
    export class Pikachu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ピカチュウ'),
                  [new Domain.Type('electric')]);
        }
    }

    //26
    export class Raichu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ライチュウ'),
                  [new Domain.Type('electric')]);
        }
    }

    //27
    export class Sandshrew extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サンド'),
                  [new Domain.Type('ground')]);
        }
    }

    //28
    export class Sandslash extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サンドパン'),
                  [new Domain.Type('ground')]);
        }
    }

    //29
    export class NidoranFemale extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニドラン♀'),
                  [new Domain.Type('poison')]);
        }
    }

    //30
    export class Nidorina extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニドリーナ'),
                  [new Domain.Type('poison')]);
        }
    }

    //31
    export class Nidoqueen extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニドクイン'),
                  [new Domain.Type('poison'), new Domain.Type('ground')]);
        }
    }

    //32
    export class NidoranMale extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニドラン♂'),
                  [new Domain.Type('poison')]);
        }
    }

    //33
    export class Nidorino extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニドリーノ'),
                  [new Domain.Type('poison')]);
        }
    }

    //34
    export class Nidoking extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニドキング'),
                  [new Domain.Type('poison'), new Domain.Type('ground')]);
        }
    }

    //35
    export class Clefairy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ピッピ'),
                  [new Domain.Type('fairy')]);
        }
    }

    //36
    export class Clefable extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ピクシー'),
                  [new Domain.Type('fairy')]);
        }
    }

    //37
    export class Vulpix extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロコン'),
                  [new Domain.Type('fire')]);
        }
    }

    //38
    export class Ninetales extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キュウコン'),
                  [new Domain.Type('fire')]);
        }
    }

    //39
    export class Jigglypuff extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('プリン'),
                  [new Domain.Type('normal'), new Domain.Type('fairy')]);
        }
    }

    //40
    export class Wigglytuff extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('プクリン'),
                  [new Domain.Type('normal'), new Domain.Type('fairy')]);
        }
    }

    //41
    export class Zubat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ズバット'),
                  [new Domain.Type('poison'), new Domain.Type('flying')]);
        }
    }

    //42
    export class Golbat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴルバット'),
                  [new Domain.Type('poison'), new Domain.Type('flying')]);
        }
    }

    //43
    export class Oddish extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ナゾノクサ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //44
    export class Gloom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クサイハナ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //45
    export class Vileplume extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラフレシア'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //46
    export class Paras extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パラス'),
                  [new Domain.Type('bug'), new Domain.Type('grass')]);
        }
    }

    //47
    export class Parasect extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パラセクト'),
                  [new Domain.Type('bug'), new Domain.Type('grass')]);
        }
    }

    //48
    export class Venonat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コンパン'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //49
    export class Venomoth extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モルフォン'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //50
    export class Diglett extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ディグダ'),
                  [new Domain.Type('ground')]);
        }
    }

    //51
    export class Dugtrio extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダグトリオ'),
                  [new Domain.Type('ground')]);
        }
    }

    //52
    export class Meowth extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニャース'),
                  [new Domain.Type('normal')]);
        }
    }

    //53
    export class Persian extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ペルシアン'),
                  [new Domain.Type('normal')]);
        }
    }

    //54
    export class Psyduck extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コダック'),
                  [new Domain.Type('water')]);
        }
    }

    //55
    export class Golduck extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴルダック'),
                  [new Domain.Type('water')]);
        }
    }

    //56
    export class Mankey extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マンキー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //57
    export class Primeape extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オコリザル'),
                  [new Domain.Type('fighting')]);
        }
    }

    //58
    export class Growlithe extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガーディ'),
                  [new Domain.Type('fire')]);
        }
    }

    //59
    export class Arcanine extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウインディ'),
                  [new Domain.Type('fire')]);
        }
    }

    //60
    export class Poliwag extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニョロモ'),
                  [new Domain.Type('water')]);
        }
    }

    //61
    export class Poliwhirl extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニョロゾ'),
                  [new Domain.Type('water')]);
        }
    }

    //62
    export class Poliwrath extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニョロボン'),
                  [new Domain.Type('water'), new Domain.Type('fighting')]);
        }
    }

    //63
    export class Abra extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケーシィ'),
                  [new Domain.Type('psychic')]);
        }
    }

    //64
    export class Kadabra extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ユンゲラー'),
                  [new Domain.Type('psychic')]);
        }
    }

    //65
    export class Alakazam extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フーディン'),
                  [new Domain.Type('psychic')]);
        }
    }

    //65
    export class MegaAlakazam extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガフーディン'),
                  [new Domain.Type('psychic')]);
        }
    }

    //66
    export class Machop extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ワンリキー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //67
    export class Machoke extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴーリキー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //68
    export class Machamp extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カイリキー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //69
    export class Bellsprout extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マダツボミ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //70
    export class Weepinbell extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウツドン'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //71
    export class Victreebel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウツボット'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //72
    export class Tentacool extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メノクラゲ'),
                  [new Domain.Type('water'), new Domain.Type('poison')]);
        }
    }

    //73
    export class Tentacruel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドククラゲ'),
                  [new Domain.Type('water'), new Domain.Type('poison')]);
        }
    }

    //74
    export class Geodude extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イシツブテ'),
                  [new Domain.Type('rock'), new Domain.Type('ground')]);
        }
    }

    //75
    export class Graveler extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴローン'),
                  [new Domain.Type('rock'), new Domain.Type('ground')]);
        }
    }

    //76
    export class Golem extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴローニャ'),
                  [new Domain.Type('rock'), new Domain.Type('ground')]);
        }
    }

    //77
    export class Ponyta extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポニータ'),
                  [new Domain.Type('fire')]);
        }
    }

    //78
    export class Rapidash extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギャロップ'),
                  [new Domain.Type('fire')]);
        }
    }

    //79
    export class Slowpoke extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤドン'),
                  [new Domain.Type('water'), new Domain.Type('psychic')]);
        }
    }

    //80
    export class Slowbro extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤドラン'),
                  [new Domain.Type('water'), new Domain.Type('psychic')]);
        }
    }

    //81
    export class Magnemite extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コイル'),
                  [new Domain.Type('electric'), new Domain.Type('steel')]);
        }
    }

    //82
    export class Magneton extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レアコイル'),
                  [new Domain.Type('electric'), new Domain.Type('steel')]);
        }
    }

    //83
    export class Farfetchd extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カモネギ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //84
    export class Doduo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドードー'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //85
    export class Dodrio extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドードリオ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //86
    export class Seel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パウワウ'),
                  [new Domain.Type('water')]);
        }
    }

    //87
    export class Dewgong extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジュゴン'),
                  [new Domain.Type('water'), new Domain.Type('ice')]);
        }
    }

    //88
    export class Grimer extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ベトベター'),
                  [new Domain.Type('poison')]);
        }
    }

    //89
    export class Muk extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ベトベトン'),
                  [new Domain.Type('poison')]);
        }
    }

    //90
    export class Shellder extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シェルダー'),
                  [new Domain.Type('water')]);
        }
    }

    //91
    export class Cloyster extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パルシェン'),
                  [new Domain.Type('water'), new Domain.Type('ice')]);
        }
    }

    //92
    export class Gastly extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴース'),
                  [new Domain.Type('ghost'), new Domain.Type('poison')]);
        }
    }

    //93
    export class Haunter extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴースト'),
                  [new Domain.Type('ghost'), new Domain.Type('poison')]);
        }
    }

    //94
    export class Gengar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゲンガー'),
                  [new Domain.Type('ghost'), new Domain.Type('poison')]);
        }
    }

    //94
    export class MegaGengar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガゲンガー'),
                  [new Domain.Type('ghost'), new Domain.Type('poison')]);
        }
    }

    //95
    export class Onix extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イワーク'),
                  [new Domain.Type('rock'), new Domain.Type('ground')]);
        }
    }

    //96
    export class Drowzee extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スリープ'),
                  [new Domain.Type('psychic')]);
        }
    }

    //97
    export class Hypno extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スリーパー'),
                  [new Domain.Type('psychic')]);
        }
    }

    //98
    export class Krabby extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クラブ'),
                  [new Domain.Type('water')]);
        }
    }

    //99
    export class Kingler extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キングラー'),
                  [new Domain.Type('water')]);
        }
    }

    //100
    export class Voltorb extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビリリダマ'),
                  [new Domain.Type('electric')]);
        }
    }

    //101
    export class Electrode extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マルマイン'),
                  [new Domain.Type('electric')]);
        }
    }

    //102
    export class Exeggcute extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タマタマ'),
                  [new Domain.Type('grass'), new Domain.Type('psychic')]);
        }
    }

    //103
    export class Exeggutor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ナッシー'),
                  [new Domain.Type('grass'), new Domain.Type('psychic')]);
        }
    }

    //104
    export class Cubone extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カラカラ'),
                  [new Domain.Type('ground')]);
        }
    }

    //105
    export class Marowak extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガラガラ'),
                  [new Domain.Type('ground')]);
        }
    }

    //106
    export class Hitmonlee extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サワムラー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //107
    export class Hitmonchan extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エビワラー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //108
    export class Lickitung extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ベロリンガ'),
                  [new Domain.Type('normal')]);
        }
    }

    //109
    export class Koffing extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドガース'),
                  [new Domain.Type('poison')]);
        }
    }

    //110
    export class Weezing extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マタドガス'),
                  [new Domain.Type('poison')]);
        }
    }

    //111
    export class Rhyhorn extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サイホーン'),
                  [new Domain.Type('ground'), new Domain.Type('rock')]);
        }
    }

    //112
    export class Rhydon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サイドン'),
                  [new Domain.Type('ground'), new Domain.Type('rock')]);
        }
    }

    //113
    export class Chansey extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラッキー'),
                  [new Domain.Type('normal')]);
        }
    }

    //114
    export class Tangela extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モンジャラ'),
                  [new Domain.Type('grass')]);
        }
    }

    //115
    export class Kangaskhan extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガルーラ'),
                  [new Domain.Type('normal')]);
        }
    }

    //115
    export class MegaKangaskhan extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガガルーラ'),
                  [new Domain.Type('normal')]);
        }
    }

    //116
    export class Horsea extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タッツー'),
                  [new Domain.Type('water')]);
        }
    }

    //117
    export class Seadra extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シードラ'),
                  [new Domain.Type('water')]);
        }
    }

    //118
    export class Goldeen extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トサキント'),
                  [new Domain.Type('water')]);
        }
    }

    //119
    export class Seaking extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アズマオウ'),
                  [new Domain.Type('water')]);
        }
    }

    //120
    export class Staryu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒトデマン'),
                  [new Domain.Type('water')]);
        }
    }

    //121
    export class Starmie extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スターミー'),
                  [new Domain.Type('water'), new Domain.Type('psychic')]);
        }
    }

    //122
    export class MrMime extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バリヤード'),
                  [new Domain.Type('psychic'), new Domain.Type('fairy')]);
        }
    }

    //123
    export class Scyther extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ストライク'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //124
    export class Jynx extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ルージュラ'),
                  [new Domain.Type('ice'), new Domain.Type('psychic')]);
        }
    }

    //125
    export class Electabuzz extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エレブー'),
                  [new Domain.Type('electric')]);
        }
    }

    //126
    export class Magmar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブーバー'),
                  [new Domain.Type('fire')]);
        }
    }

    //127
    export class Pinsir extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カイロス'),
                  [new Domain.Type('bug')]);
        }
    }

    //127
    export class MegaPinsir extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガカイロス'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //128
    export class Tauros extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケンタロス'),
                  [new Domain.Type('normal')]);
        }
    }

    //129
    export class Magikarp extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コイキング'),
                  [new Domain.Type('water')]);
        }
    }

    //130
    export class Gyarados extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギャラドス'),
                  [new Domain.Type('water'), new Domain.Type('flying')]);
        }
    }

    //130
    export class MegaGyarados extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガギャラドス'),
                  [new Domain.Type('water'), new Domain.Type('dark')]);
        }
    }

    //131
    export class Lapras extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラプラス'),
                  [new Domain.Type('water'), new Domain.Type('ice')]);
        }
    }

    //132
    export class Ditto extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メタモン'),
                  [new Domain.Type('normal')]);
        }
    }

    //133
    export class Eevee extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イーブイ'),
                  [new Domain.Type('normal')]);
        }
    }

    //134
    export class Vaporeon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シャワーズ'),
                  [new Domain.Type('water')]);
        }
    }

    //135
    export class Jolteon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サンダース'),
                  [new Domain.Type('electric')]);
        }
    }

    //136
    export class Flareon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブースター'),
                  [new Domain.Type('fire')]);
        }
    }

    //137
    export class Porygon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポリゴン'),
                  [new Domain.Type('normal')]);
        }
    }

    //138
    export class Omanyte extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オムナイト'),
                  [new Domain.Type('rock'), new Domain.Type('water')]);
        }
    }

    //139
    export class Omastar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オムスター'),
                  [new Domain.Type('rock'), new Domain.Type('water')]);
        }
    }

    //140
    export class Kabuto extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カブト'),
                  [new Domain.Type('rock'), new Domain.Type('water')]);
        }
    }

    //141
    export class Kabutops extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カブトプス'),
                  [new Domain.Type('rock'), new Domain.Type('water')]);
        }
    }

    //142
    export class Aerodactyl extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('プテラ'),
                  [new Domain.Type('rock'), new Domain.Type('flying')]);
        }
    }

    //142
    export class MegaAerodactyl extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガプテラ'),
                  [new Domain.Type('rock'), new Domain.Type('flying')]);
        }
    }

    //143
    export class Snorlax extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カビゴン'),
                  [new Domain.Type('normal')]);
        }
    }

    //144
    export class Articuno extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フリーザー'),
                  [new Domain.Type('ice'), new Domain.Type('flying')]);
        }
    }

    //145
    export class Zapdos extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サンダー'),
                  [new Domain.Type('electric'), new Domain.Type('flying')]);
        }
    }

    //146
    export class Moltres extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ファイヤー'),
                  [new Domain.Type('fire'), new Domain.Type('flying')]);
        }
    }

    //147
    export class Dratini extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミニリュウ'),
                  [new Domain.Type('dragon')]);
        }
    }

    //148
    export class Dragonair extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハクリュー'),
                  [new Domain.Type('dragon')]);
        }
    }

    //149
    export class Dragonite extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カイリュー'),
                  [new Domain.Type('dragon'), new Domain.Type('flying')]);
        }
    }

    //150
    export class Mewtwo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミュウツー'),
                  [new Domain.Type('psychic')]);
        }
    }

    //150
    export class MegaMewtwoX extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガミュウツーX'),
                  [new Domain.Type('psychic'), new Domain.Type('fighting')]);
        }
    }

    //150
    export class MegaMewtwoY extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガミュウツーY'),
                  [new Domain.Type('psychic')]);
        }
    }

    //151
    export class Mew extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミュウ'),
                  [new Domain.Type('psychic')]);
        }
    }

    //152
    export class Chikorita extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チコリータ'),
                  [new Domain.Type('grass')]);
        }
    }

    //153
    export class Bayleef extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ベイリーフ'),
                  [new Domain.Type('grass')]);
        }
    }

    //154
    export class Meganium extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガニウム'),
                  [new Domain.Type('grass')]);
        }
    }

    //155
    export class Cyndaquil extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒノアラシ'),
                  [new Domain.Type('fire')]);
        }
    }

    //156
    export class Quilava extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マグマラシ'),
                  [new Domain.Type('fire')]);
        }
    }

    //157
    export class Typhlosion extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バクフーン'),
                  [new Domain.Type('fire')]);
        }
    }

    //158
    export class Totodile extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ワニノコ'),
                  [new Domain.Type('water')]);
        }
    }

    //159
    export class Croconaw extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アリゲイツ'),
                  [new Domain.Type('water')]);
        }
    }

    //160
    export class Feraligatr extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オーダイル'),
                  [new Domain.Type('water')]);
        }
    }

    //161
    export class Sentret extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オタチ'),
                  [new Domain.Type('normal')]);
        }
    }

    //162
    export class Furret extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オオタチ'),
                  [new Domain.Type('normal')]);
        }
    }

    //163
    export class Hoothoot extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ホーホー'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //164
    export class Noctowl extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヨルノズク'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //165
    export class Ledyba extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レディバ'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //166
    export class Ledian extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レディアン'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //167
    export class Spinarak extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イトマル'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //168
    export class Ariados extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アリアドス'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //169
    export class Crobat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クロバット'),
                  [new Domain.Type('poison'), new Domain.Type('flying')]);
        }
    }

    //170
    export class Chinchou extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チョンチー'),
                  [new Domain.Type('water'), new Domain.Type('electric')]);
        }
    }

    //171
    export class Lanturn extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ランターン'),
                  [new Domain.Type('water'), new Domain.Type('electric')]);
        }
    }

    //172
    export class Pichu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ピチュー'),
                  [new Domain.Type('electric')]);
        }
    }

    //173
    export class Cleffa extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ピィ'),
                  [new Domain.Type('fairy')]);
        }
    }

    //174
    export class Igglybuff extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ププリン'),
                  [new Domain.Type('normal'), new Domain.Type('fairy')]);
        }
    }

    //175
    export class Togepi extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トゲピー'),
                  [new Domain.Type('fairy')]);
        }
    }

    //176
    export class Togetic extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トゲチック'),
                  [new Domain.Type('fairy'), new Domain.Type('flying')]);
        }
    }

    //177
    export class Natu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ネイティ'),
                  [new Domain.Type('psychic'), new Domain.Type('flying')]);
        }
    }

    //178
    export class Xatu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ネイティオ'),
                  [new Domain.Type('psychic'), new Domain.Type('flying')]);
        }
    }

    //179
    export class Mareep extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メリープ'),
                  [new Domain.Type('electric')]);
        }
    }

    //180
    export class Flaaffy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モココ'),
                  [new Domain.Type('electric')]);
        }
    }

    //181
    export class Ampharos extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デンリュウ'),
                  [new Domain.Type('electric')]);
        }
    }

    //181
    export class MegaAmpharos extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガデンリュウ'),
                  [new Domain.Type('electric'), new Domain.Type('dragon')]);
        }
    }

    //182
    export class Bellossom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キレイハナ'),
                  [new Domain.Type('grass')]);
        }
    }

    //183
    export class Marill extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マリル'),
                  [new Domain.Type('water'), new Domain.Type('fairy')]);
        }
    }

    //184
    export class Azumarill extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マリルリ'),
                  [new Domain.Type('water'), new Domain.Type('fairy')]);
        }
    }

    //185
    export class Sudowoodo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウソッキー'),
                  [new Domain.Type('rock')]);
        }
    }

    //186
    export class Politoed extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニョロトノ'),
                  [new Domain.Type('water')]);
        }
    }

    //187
    export class Hoppip extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハネッコ'),
                  [new Domain.Type('grass'), new Domain.Type('flying')]);
        }
    }

    //188
    export class Skiploom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポポッコ'),
                  [new Domain.Type('grass'), new Domain.Type('flying')]);
        }
    }

    //189
    export class Jumpluff extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ワタッコ'),
                  [new Domain.Type('grass'), new Domain.Type('flying')]);
        }
    }

    //190
    export class Aipom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エイパム'),
                  [new Domain.Type('normal')]);
        }
    }

    //191
    export class Sunkern extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒマナッツ'),
                  [new Domain.Type('grass')]);
        }
    }

    //192
    export class Sunflora extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キマワリ'),
                  [new Domain.Type('grass')]);
        }
    }

    //193
    export class Yanma extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤンヤンマ'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //194
    export class Wooper extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウパー'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //195
    export class Quagsire extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヌオー'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //196
    export class Espeon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エーフィ'),
                  [new Domain.Type('psychic')]);
        }
    }

    //197
    export class Umbreon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブラッキー'),
                  [new Domain.Type('dark')]);
        }
    }

    //198
    export class Murkrow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤミカラス'),
                  [new Domain.Type('dark'), new Domain.Type('flying')]);
        }
    }

    //199
    export class Slowking extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤドキング'),
                  [new Domain.Type('water'), new Domain.Type('psychic')]);
        }
    }

    //200
    export class Misdreavus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムウマ'),
                  [new Domain.Type('ghost')]);
        }
    }

    //201
    export class Unown extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アンノーン'),
                  [new Domain.Type('psychic')]);
        }
    }

    //202
    export class Wobbuffet extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ソーナンス'),
                  [new Domain.Type('psychic')]);
        }
    }

    //203
    export class Girafarig extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キリンリキ'),
                  [new Domain.Type('normal'), new Domain.Type('psychic')]);
        }
    }

    //204
    export class Pineco extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クヌギダマ'),
                  [new Domain.Type('bug')]);
        }
    }

    //205
    export class Forretress extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フォレトス'),
                  [new Domain.Type('bug'), new Domain.Type('steel')]);
        }
    }

    //206
    export class Dunsparce extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ノコッチ'),
                  [new Domain.Type('normal')]);
        }
    }

    //207
    export class Gligar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('グライガー'),
                  [new Domain.Type('ground'), new Domain.Type('flying')]);
        }
    }

    //208
    export class Steelix extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハガネール'),
                  [new Domain.Type('steel'), new Domain.Type('ground')]);
        }
    }

    //209
    export class Snubbull extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブルー'),
                  [new Domain.Type('fairy')]);
        }
    }

    //210
    export class Granbull extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('グランブル'),
                  [new Domain.Type('fairy')]);
        }
    }

    //211
    export class Qwilfish extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハリーセン'),
                  [new Domain.Type('water'), new Domain.Type('poison')]);
        }
    }

    //212
    export class Scizor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハッサム'),
                  [new Domain.Type('bug'), new Domain.Type('steel')]);
        }
    }

    //212
    export class MegaScizor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガハッサム'),
                  [new Domain.Type('bug'), new Domain.Type('steel')]);
        }
    }

    //213
    export class Shuckle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ツボツボ'),
                  [new Domain.Type('bug'), new Domain.Type('rock')]);
        }
    }

    //214
    export class Heracross extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヘラクロス'),
                  [new Domain.Type('bug'), new Domain.Type('fighting')]);
        }
    }

    //214
    export class MegaHeracross extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガヘラクロス'),
                  [new Domain.Type('bug'), new Domain.Type('fighting')]);
        }
    }

    //215
    export class Sneasel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニューラ'),
                  [new Domain.Type('dark'), new Domain.Type('ice')]);
        }
    }

    //216
    export class Teddiursa extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒメグマ'),
                  [new Domain.Type('normal')]);
        }
    }

    //217
    export class Ursaring extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リングマ'),
                  [new Domain.Type('normal')]);
        }
    }

    //218
    export class Slugma extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マグマッグ'),
                  [new Domain.Type('fire')]);
        }
    }

    //219
    export class Magcargo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マグカルゴ'),
                  [new Domain.Type('fire'), new Domain.Type('rock')]);
        }
    }

    //220
    export class Swinub extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウリムー'),
                  [new Domain.Type('ice'), new Domain.Type('ground')]);
        }
    }

    //221
    export class Piloswine extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イノムー'),
                  [new Domain.Type('ice'), new Domain.Type('ground')]);
        }
    }

    //222
    export class Corsola extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サニーゴ'),
                  [new Domain.Type('water'), new Domain.Type('rock')]);
        }
    }

    //223
    export class Remoraid extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('テッポウオ'),
                  [new Domain.Type('water')]);
        }
    }

    //224
    export class Octillery extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オクタン'),
                  [new Domain.Type('water')]);
        }
    }

    //225
    export class Delibird extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デリバード'),
                  [new Domain.Type('ice'), new Domain.Type('flying')]);
        }
    }

    //226
    export class Mantine extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マンタイン'),
                  [new Domain.Type('water'), new Domain.Type('flying')]);
        }
    }

    //227
    export class Skarmory extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エアームド'),
                  [new Domain.Type('steel'), new Domain.Type('flying')]);
        }
    }

    //228
    export class Houndour extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デルビル'),
                  [new Domain.Type('dark'), new Domain.Type('fire')]);
        }
    }

    //229
    export class Houndoom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヘルガー'),
                  [new Domain.Type('dark'), new Domain.Type('fire')]);
        }
    }

    //229
    export class MegaHoundoom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガヘルガー'),
                  [new Domain.Type('dark'), new Domain.Type('fire')]);
        }
    }

    //230
    export class Kingdra extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キングドラ'),
                  [new Domain.Type('water'), new Domain.Type('dragon')]);
        }
    }

    //231
    export class Phanpy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴマゾウ'),
                  [new Domain.Type('ground')]);
        }
    }

    //232
    export class Donphan extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドンファン'),
                  [new Domain.Type('ground')]);
        }
    }

    //233
    export class Porygon2 extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポリゴン2'),
                  [new Domain.Type('normal')]);
        }
    }

    //234
    export class Stantler extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オドシシ'),
                  [new Domain.Type('normal')]);
        }
    }

    //235
    export class Smeargle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドーブル'),
                  [new Domain.Type('normal')]);
        }
    }

    //236
    export class Tyrogue extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バルキー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //237
    export class Hitmontop extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カポエラー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //238
    export class Smoochum extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムチュール'),
                  [new Domain.Type('ice'), new Domain.Type('psychic')]);
        }
    }

    //239
    export class Elekid extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エレキッド'),
                  [new Domain.Type('electric')]);
        }
    }

    //240
    export class Magby extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブビィ'),
                  [new Domain.Type('fire')]);
        }
    }

    //241
    export class Miltank extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミルタンク'),
                  [new Domain.Type('normal')]);
        }
    }

    //242
    export class Blissey extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハピナス'),
                  [new Domain.Type('normal')]);
        }
    }

    //243
    export class Raikou extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ライコウ'),
                  [new Domain.Type('electric')]);
        }
    }

    //244
    export class Entei extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エンテイ'),
                  [new Domain.Type('fire')]);
        }
    }

    //245
    export class Suicune extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スイクン'),
                  [new Domain.Type('water')]);
        }
    }

    //246
    export class Larvitar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヨーギラス'),
                  [new Domain.Type('rock'), new Domain.Type('ground')]);
        }
    }

    //247
    export class Pupitar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サナギラス'),
                  [new Domain.Type('rock'), new Domain.Type('ground')]);
        }
    }

    //248
    export class Tyranitar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バンギラス'),
                  [new Domain.Type('rock'), new Domain.Type('dark')]);
        }
    }

    //248
    export class MegaTyranitar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガバンギラス'),
                  [new Domain.Type('rock'), new Domain.Type('dark')]);
        }
    }

    //249
    export class Lugia extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ルギア'),
                  [new Domain.Type('psychic'), new Domain.Type('flying')]);
        }
    }

    //250
    export class HoOh extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ホウオウ'),
                  [new Domain.Type('fire'), new Domain.Type('flying')]);
        }
    }

    //251
    export class Celebi extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('セレビィ'),
                  [new Domain.Type('psychic'), new Domain.Type('grass')]);
        }
    }

    //252
    export class Treecko extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キモリ'),
                  [new Domain.Type('grass')]);
        }
    }

    //253
    export class Grovyle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジュプトル'),
                  [new Domain.Type('grass')]);
        }
    }

    //254
    export class Sceptile extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジュカイン'),
                  [new Domain.Type('grass')]);
        }
    }

    //255
    export class Torchic extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アチャモ'),
                  [new Domain.Type('fire')]);
        }
    }

    //256
    export class Combusken extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ワカシャモ'),
                  [new Domain.Type('fire'), new Domain.Type('fighting')]);
        }
    }

    //257
    export class Blaziken extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バシャーモ'),
                  [new Domain.Type('fire'), new Domain.Type('fighting')]);
        }
    }

    //257
    export class MegaBlaziken extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガバシャーモ'),
                  [new Domain.Type('fire'), new Domain.Type('fighting')]);
        }
    }

    //258
    export class Mudkip extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミズゴロウ'),
                  [new Domain.Type('water')]);
        }
    }

    //259
    export class Marshtomp extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヌマクロー'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //260
    export class Swampert extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラグラージ'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //261
    export class Poochyena extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポチエナ'),
                  [new Domain.Type('dark')]);
        }
    }

    //262
    export class Mightyena extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('グラエナ'),
                  [new Domain.Type('dark')]);
        }
    }

    //263
    export class Zigzagoon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジグザグマ'),
                  [new Domain.Type('normal')]);
        }
    }

    //264
    export class Linoone extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マッスグマ'),
                  [new Domain.Type('normal')]);
        }
    }

    //265
    export class Wurmple extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケムッソ'),
                  [new Domain.Type('bug')]);
        }
    }

    //266
    export class Silcoon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カラサリス'),
                  [new Domain.Type('bug')]);
        }
    }

    //267
    export class Beautifly extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アゲハント'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //268
    export class Cascoon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マユルド'),
                  [new Domain.Type('bug')]);
        }
    }

    //269
    export class Dustox extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドクケイル'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //270
    export class Lotad extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハスボー'),
                  [new Domain.Type('water'), new Domain.Type('grass')]);
        }
    }

    //271
    export class Lombre extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハスブレロ'),
                  [new Domain.Type('water'), new Domain.Type('grass')]);
        }
    }

    //272
    export class Ludicolo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ルンパッパ'),
                  [new Domain.Type('water'), new Domain.Type('grass')]);
        }
    }

    //273
    export class Seedot extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タネボー'),
                  [new Domain.Type('grass')]);
        }
    }

    //274
    export class Nuzleaf extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コノハナ'),
                  [new Domain.Type('grass'), new Domain.Type('dark')]);
        }
    }

    //275
    export class Shiftry extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダーテング'),
                  [new Domain.Type('grass'), new Domain.Type('dark')]);
        }
    }

    //276
    export class Taillow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スバメ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //277
    export class Swellow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オオスバメ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //278
    export class Wingull extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キャモメ'),
                  [new Domain.Type('water'), new Domain.Type('flying')]);
        }
    }

    //279
    export class Pelipper extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ペリッパー'),
                  [new Domain.Type('water'), new Domain.Type('flying')]);
        }
    }

    //280
    export class Ralts extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラルトス'),
                  [new Domain.Type('psychic'), new Domain.Type('fairy')]);
        }
    }

    //281
    export class Kirlia extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キルリア'),
                  [new Domain.Type('psychic'), new Domain.Type('fairy')]);
        }
    }

    //282
    export class Gardevoir extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サーナイト'),
                  [new Domain.Type('psychic'), new Domain.Type('fairy')]);
        }
    }

    //282
    export class MegaGardevoir extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガサーナイト'),
                  [new Domain.Type('psychic'), new Domain.Type('fairy')]);
        }
    }

    //283
    export class Surskit extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アメタマ'),
                  [new Domain.Type('bug'), new Domain.Type('water')]);
        }
    }

    //284
    export class Masquerain extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アメモース'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //285
    export class Shroomish extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キノココ'),
                  [new Domain.Type('grass')]);
        }
    }

    //286
    export class Breloom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キノガッサ'),
                  [new Domain.Type('grass'), new Domain.Type('fighting')]);
        }
    }

    //287
    export class Slakoth extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ナマケロ'),
                  [new Domain.Type('normal')]);
        }
    }

    //288
    export class Vigoroth extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤルキモノ'),
                  [new Domain.Type('normal')]);
        }
    }

    //289
    export class Slaking extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケッキング'),
                  [new Domain.Type('normal')]);
        }
    }

    //290
    export class Nincada extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ツチニン'),
                  [new Domain.Type('bug'), new Domain.Type('ground')]);
        }
    }

    //291
    export class Ninjask extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('テッカニン'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //292
    export class Shedinja extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヌケニン'),
                  [new Domain.Type('bug'), new Domain.Type('ghost')]);
        }
    }

    //293
    export class Whismur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴニョニョ'),
                  [new Domain.Type('normal')]);
        }
    }

    //294
    export class Loudred extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドゴーム'),
                  [new Domain.Type('normal')]);
        }
    }

    //295
    export class Exploud extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バクオング'),
                  [new Domain.Type('normal')]);
        }
    }

    //296
    export class Makuhita extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マクノシタ'),
                  [new Domain.Type('fighting')]);
        }
    }

    //297
    export class Hariyama extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハリテヤマ'),
                  [new Domain.Type('fighting')]);
        }
    }

    //298
    export class Azurill extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ルリリ'),
                  [new Domain.Type('normal'), new Domain.Type('fairy')]);
        }
    }

    //299
    export class Nosepass extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ノズパス'),
                  [new Domain.Type('rock')]);
        }
    }

    //300
    export class Skitty extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エネコ'),
                  [new Domain.Type('normal')]);
        }
    }

    //301
    export class Delcatty extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エネコロロ'),
                  [new Domain.Type('normal')]);
        }
    }

    //302
    export class Sableye extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤミラミ'),
                  [new Domain.Type('dark'), new Domain.Type('ghost')]);
        }
    }

    //303
    export class Mawile extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クチート'),
                  [new Domain.Type('steel'), new Domain.Type('fairy')]);
        }
    }

    //303
    export class MegaMawile extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガクチート'),
                  [new Domain.Type('steel'), new Domain.Type('fairy')]);
        }
    }

    //304
    export class Aron extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ココドラ'),
                  [new Domain.Type('steel'), new Domain.Type('rock')]);
        }
    }

    //305
    export class Lairon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コドラ'),
                  [new Domain.Type('steel'), new Domain.Type('rock')]);
        }
    }

    //306
    export class Aggron extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ボスゴドラ'),
                  [new Domain.Type('steel'), new Domain.Type('rock')]);
        }
    }

    //306
    export class MegaAggron extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガボスゴドラ'),
                  [new Domain.Type('steel')]);
        }
    }

    //307
    export class Meditite extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アサナン'),
                  [new Domain.Type('fighting'), new Domain.Type('psychic')]);
        }
    }

    //308
    export class Medicham extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チャーレム'),
                  [new Domain.Type('fighting'), new Domain.Type('psychic')]);
        }
    }

    //308
    export class MegaMedicham extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガチャーレム'),
                  [new Domain.Type('fighting'), new Domain.Type('psychic')]);
        }
    }

    //309
    export class Electrike extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラクライ'),
                  [new Domain.Type('electric')]);
        }
    }

    //310
    export class Manectric extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ライボルト'),
                  [new Domain.Type('electric')]);
        }
    }

    //310
    export class MegaManectric extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガライボルト'),
                  [new Domain.Type('electric')]);
        }
    }

    //311
    export class Plusle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('プラスル'),
                  [new Domain.Type('electric')]);
        }
    }

    //312
    export class Minun extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マイナン'),
                  [new Domain.Type('electric')]);
        }
    }

    //313
    export class Volbeat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バルビート'),
                  [new Domain.Type('bug')]);
        }
    }

    //314
    export class Illumise extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イルミーゼ'),
                  [new Domain.Type('bug')]);
        }
    }

    //315
    export class Roselia extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロゼリア'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //316
    export class Gulpin extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴクリン'),
                  [new Domain.Type('poison')]);
        }
    }

    //317
    export class Swalot extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マルノーム'),
                  [new Domain.Type('poison')]);
        }
    }

    //318
    export class Carvanha extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キバニア'),
                  [new Domain.Type('water'), new Domain.Type('dark')]);
        }
    }

    //319
    export class Sharpedo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サメハダー'),
                  [new Domain.Type('water'), new Domain.Type('dark')]);
        }
    }

    //320
    export class Wailmer extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ホエルコ'),
                  [new Domain.Type('water')]);
        }
    }

    //321
    export class Wailord extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ホエルオー'),
                  [new Domain.Type('water')]);
        }
    }

    //322
    export class Numel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドンメル'),
                  [new Domain.Type('fire'), new Domain.Type('ground')]);
        }
    }

    //323
    export class Camerupt extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バクーダ'),
                  [new Domain.Type('fire'), new Domain.Type('ground')]);
        }
    }

    //324
    export class Torkoal extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コータス'),
                  [new Domain.Type('fire')]);
        }
    }

    //325
    export class Spoink extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バネブー'),
                  [new Domain.Type('psychic')]);
        }
    }

    //326
    export class Grumpig extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブーピッグ'),
                  [new Domain.Type('psychic')]);
        }
    }

    //327
    export class Spinda extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パッチール'),
                  [new Domain.Type('normal')]);
        }
    }

    //328
    export class Trapinch extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ナックラー'),
                  [new Domain.Type('ground')]);
        }
    }

    //329
    export class Vibrava extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビブラーバ'),
                  [new Domain.Type('ground'), new Domain.Type('dragon')]);
        }
    }

    //330
    export class Flygon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フライゴン'),
                  [new Domain.Type('ground'), new Domain.Type('dragon')]);
        }
    }

    //331
    export class Cacnea extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サボネア'),
                  [new Domain.Type('grass')]);
        }
    }

    //332
    export class Cacturne extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ノクタス'),
                  [new Domain.Type('grass'), new Domain.Type('dark')]);
        }
    }

    //333
    export class Swablu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チルット'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //334
    export class Altaria extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チルタリス'),
                  [new Domain.Type('dragon'), new Domain.Type('flying')]);
        }
    }

    //335
    export class Zangoose extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ザングース'),
                  [new Domain.Type('normal')]);
        }
    }

    //336
    export class Seviper extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハブネーク'),
                  [new Domain.Type('poison')]);
        }
    }

    //337
    export class Lunatone extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ルナトーン'),
                  [new Domain.Type('rock'), new Domain.Type('psychic')]);
        }
    }

    //338
    export class Solrock extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ソルロック'),
                  [new Domain.Type('rock'), new Domain.Type('psychic')]);
        }
    }

    //339
    export class Barboach extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドジョッチ'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //340
    export class Whiscash extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ナマズン'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //341
    export class Corphish extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヘイガニ'),
                  [new Domain.Type('water')]);
        }
    }

    //342
    export class Crawdaunt extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シザリガー'),
                  [new Domain.Type('water'), new Domain.Type('dark')]);
        }
    }

    //343
    export class Baltoy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤジロン'),
                  [new Domain.Type('ground'), new Domain.Type('psychic')]);
        }
    }

    //344
    export class Claydol extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ネンドール'),
                  [new Domain.Type('ground'), new Domain.Type('psychic')]);
        }
    }

    //345
    export class Lileep extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リリーラ'),
                  [new Domain.Type('rock'), new Domain.Type('grass')]);
        }
    }

    //346
    export class Cradily extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ユレイドル'),
                  [new Domain.Type('rock'), new Domain.Type('grass')]);
        }
    }

    //347
    export class Anorith extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アノプス'),
                  [new Domain.Type('rock'), new Domain.Type('bug')]);
        }
    }

    //348
    export class Armaldo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アーマルド'),
                  [new Domain.Type('rock'), new Domain.Type('bug')]);
        }
    }

    //349
    export class Feebas extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒンバス'),
                  [new Domain.Type('water')]);
        }
    }

    //350
    export class Milotic extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミロカロス'),
                  [new Domain.Type('water')]);
        }
    }

    //351
    export class Castform extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポワルン'),
                  [new Domain.Type('normal')]);
        }
    }

    //352
    export class Kecleon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カクレオン'),
                  [new Domain.Type('normal')]);
        }
    }

    //353
    export class Shuppet extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カゲボウズ'),
                  [new Domain.Type('ghost')]);
        }
    }

    //354
    export class Banette extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジュペッタ'),
                  [new Domain.Type('ghost')]);
        }
    }

    //354
    export class MegaBanette extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガジュペッタ'),
                  [new Domain.Type('ghost')]);
        }
    }

    //355
    export class Duskull extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヨマワル'),
                  [new Domain.Type('ghost')]);
        }
    }

    //356
    export class Dusclops extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サマヨール'),
                  [new Domain.Type('ghost')]);
        }
    }

    //357
    export class Tropius extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トロピウス'),
                  [new Domain.Type('grass'), new Domain.Type('flying')]);
        }
    }

    //358
    export class Chimecho extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チリーン'),
                  [new Domain.Type('psychic')]);
        }
    }

    //359
    export class Absol extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アブソル'),
                  [new Domain.Type('dark')]);
        }
    }

    //359
    export class MegaAbsol extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガアブソル'),
                  [new Domain.Type('dark')]);
        }
    }

    //360
    export class Wynaut extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ソーナノ'),
                  [new Domain.Type('psychic')]);
        }
    }

    //361
    export class Snorunt extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ユキワラシ'),
                  [new Domain.Type('ice')]);
        }
    }

    //362
    export class Glalie extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オニゴーリ'),
                  [new Domain.Type('ice')]);
        }
    }

    //363
    export class Spheal extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タマザラシ'),
                  [new Domain.Type('ice'), new Domain.Type('water')]);
        }
    }

    //364
    export class Sealeo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トドグラー'),
                  [new Domain.Type('ice'), new Domain.Type('water')]);
        }
    }

    //365
    export class Walrein extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トドゼルガ'),
                  [new Domain.Type('ice'), new Domain.Type('water')]);
        }
    }

    //366
    export class Clamperl extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パールル'),
                  [new Domain.Type('water')]);
        }
    }

    //367
    export class Huntail extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハンテール'),
                  [new Domain.Type('water')]);
        }
    }

    //368
    export class Gorebyss extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サクラビス'),
                  [new Domain.Type('water')]);
        }
    }

    //369
    export class Relicanth extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジーランス'),
                  [new Domain.Type('water'), new Domain.Type('rock')]);
        }
    }

    //370
    export class Luvdisc extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラブカス'),
                  [new Domain.Type('water')]);
        }
    }

    //371
    export class Bagon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タツベイ'),
                  [new Domain.Type('dragon')]);
        }
    }

    //372
    export class Shelgon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コモルー'),
                  [new Domain.Type('dragon')]);
        }
    }

    //373
    export class Salamence extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ボーマンダ'),
                  [new Domain.Type('dragon'), new Domain.Type('flying')]);
        }
    }

    //374
    export class Beldum extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダンバル'),
                  [new Domain.Type('steel'), new Domain.Type('psychic')]);
        }
    }

    //375
    export class Metang extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メタング'),
                  [new Domain.Type('steel'), new Domain.Type('psychic')]);
        }
    }

    //376
    export class Metagross extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メタグロス'),
                  [new Domain.Type('steel'), new Domain.Type('psychic')]);
        }
    }

    //377
    export class Regirock extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レジロック'),
                  [new Domain.Type('rock')]);
        }
    }

    //378
    export class Regice extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レジアイス'),
                  [new Domain.Type('ice')]);
        }
    }

    //379
    export class Registeel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レジスチル'),
                  [new Domain.Type('steel')]);
        }
    }

    //380
    export class Latias extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラティアス'),
                  [new Domain.Type('dragon'), new Domain.Type('psychic')]);
        }
    }

    //381
    export class Latios extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラティオス'),
                  [new Domain.Type('dragon'), new Domain.Type('psychic')]);
        }
    }

    //382
    export class Kyogre extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カイオーガ'),
                  [new Domain.Type('water')]);
        }
    }

    //383
    export class Groudon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('グラードン'),
                  [new Domain.Type('ground')]);
        }
    }

    //384
    export class Rayquaza extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レックウザ'),
                  [new Domain.Type('dragon'), new Domain.Type('flying')]);
        }
    }

    //385
    export class Jirachi extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジラーチ'),
                  [new Domain.Type('steel'), new Domain.Type('psychic')]);
        }
    }

    //386
    export class NormalFormeDeoxys extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デオキシス(ノーマル)'),
                  [new Domain.Type('psychic')]);
        }
    }

    //386
    export class AttackFormeDeoxys extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デオキシス(アタック)'),
                  [new Domain.Type('psychic')]);
        }
    }

    //386
    export class DefenseFormeDeoxys extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デオキシス(ディフェンス)'),
                  [new Domain.Type('psychic')]);
        }
    }

    //386
    export class SpeedFormeDeoxys extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デオキシス(スピード)'),
                  [new Domain.Type('psychic')]);
        }
    }

    //387
    export class Turtwig extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ナエトル'),
                  [new Domain.Type('grass')]);
        }
    }

    //388
    export class Grotle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハヤシガメ'),
                  [new Domain.Type('grass')]);
        }
    }

    //389
    export class Torterra extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドダイトス'),
                  [new Domain.Type('grass'), new Domain.Type('ground')]);
        }
    }

    //390
    export class Chimchar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒコザル'),
                  [new Domain.Type('fire')]);
        }
    }

    //391
    export class Monferno extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モウカザル'),
                  [new Domain.Type('fire'), new Domain.Type('fighting')]);
        }
    }

    //392
    export class Infernape extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴウカザル'),
                  [new Domain.Type('fire'), new Domain.Type('fighting')]);
        }
    }

    //393
    export class Piplup extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポッチャマ'),
                  [new Domain.Type('water')]);
        }
    }

    //394
    export class Prinplup extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポッタイシ'),
                  [new Domain.Type('water')]);
        }
    }

    //395
    export class Empoleon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エンペルト'),
                  [new Domain.Type('water'), new Domain.Type('steel')]);
        }
    }

    //396
    export class Starly extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムックル'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //397
    export class Staravia extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムクバード'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //398
    export class Staraptor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムクホーク'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //399
    export class Bidoof extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビッパ'),
                  [new Domain.Type('normal')]);
        }
    }

    //400
    export class Bibarel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビーダル'),
                  [new Domain.Type('normal'), new Domain.Type('water')]);
        }
    }

    //401
    export class Kricketot extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コロボーシ'),
                  [new Domain.Type('bug')]);
        }
    }

    //402
    export class Kricketune extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コロトック'),
                  [new Domain.Type('bug')]);
        }
    }

    //403
    export class Shinx extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コリンク'),
                  [new Domain.Type('electric')]);
        }
    }

    //404
    export class Luxio extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ルクシオ'),
                  [new Domain.Type('electric')]);
        }
    }

    //405
    export class Luxray extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レントラー'),
                  [new Domain.Type('electric')]);
        }
    }

    //406
    export class Budew extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スボミー'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //407
    export class Roserade extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロズレイド'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //408
    export class Cranidos extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ズガイドス'),
                  [new Domain.Type('rock')]);
        }
    }

    //409
    export class Rampardos extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ラムパルド'),
                  [new Domain.Type('rock')]);
        }
    }

    //410
    export class Shieldon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タテトプス'),
                  [new Domain.Type('rock'), new Domain.Type('steel')]);
        }
    }

    //411
    export class Bastiodon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トリデプス'),
                  [new Domain.Type('rock'), new Domain.Type('steel')]);
        }
    }

    //412
    export class Burmy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミノムッチ'),
                  [new Domain.Type('bug')]);
        }
    }

    //413
    export class PlantCloakWormadam extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミノマダム(くさきのミノ)'),
                  [new Domain.Type('bug'), new Domain.Type('grass')]);
        }
    }

    //413
    export class SandyCloakWormadam extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミノマダム(すなちのミノ)'),
                  [new Domain.Type('bug'), new Domain.Type('ground')]);
        }
    }

    //413
    export class TrashCloakWormadam extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミノマダム(ゴミのミノ)'),
                  [new Domain.Type('bug'), new Domain.Type('steel')]);
        }
    }

    //414
    export class Mothim extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガーメイル'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //415
    export class Combee extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミツハニー'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //416
    export class Vespiquen extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビークイン'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //417
    export class Pachirisu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パチリス'),
                  [new Domain.Type('electric')]);
        }
    }

    //418
    export class Buizel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブイゼル'),
                  [new Domain.Type('water')]);
        }
    }

    //419
    export class Floatzel extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フローゼル'),
                  [new Domain.Type('water')]);
        }
    }

    //420
    export class Cherubi extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チェリンボ'),
                  [new Domain.Type('grass')]);
        }
    }

    //421
    export class Cherrim extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チェリム'),
                  [new Domain.Type('grass')]);
        }
    }

    //422
    export class Shellos extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カラナクシ'),
                  [new Domain.Type('water')]);
        }
    }

    //423
    export class Gastrodon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トリトドン'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //424
    export class Ambipom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エテボース'),
                  [new Domain.Type('normal')]);
        }
    }

    //425
    export class Drifloon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フワンテ'),
                  [new Domain.Type('ghost'), new Domain.Type('flying')]);
        }
    }

    //426
    export class Drifblim extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フワライド'),
                  [new Domain.Type('ghost'), new Domain.Type('flying')]);
        }
    }

    //427
    export class Buneary extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミミロル'),
                  [new Domain.Type('normal')]);
        }
    }

    //428
    export class Lopunny extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミミロップ'),
                  [new Domain.Type('normal')]);
        }
    }

    //429
    export class Mismagius extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムウマージ'),
                  [new Domain.Type('ghost')]);
        }
    }

    //430
    export class Honchkrow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドンカラス'),
                  [new Domain.Type('dark'), new Domain.Type('flying')]);
        }
    }

    //431
    export class Glameow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニャルマー'),
                  [new Domain.Type('normal')]);
        }
    }

    //432
    export class Purugly extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブニャット'),
                  [new Domain.Type('normal')]);
        }
    }

    //433
    export class Chingling extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リーシャン'),
                  [new Domain.Type('psychic')]);
        }
    }

    //434
    export class Stunky extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スカンプー'),
                  [new Domain.Type('poison'), new Domain.Type('dark')]);
        }
    }

    //435
    export class Skuntank extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スカタンク'),
                  [new Domain.Type('poison'), new Domain.Type('dark')]);
        }
    }

    //436
    export class Bronzor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドーミラー'),
                  [new Domain.Type('steel'), new Domain.Type('psychic')]);
        }
    }

    //437
    export class Bronzong extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドータクン'),
                  [new Domain.Type('steel'), new Domain.Type('psychic')]);
        }
    }

    //438
    export class Bonsly extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウソハチ'),
                  [new Domain.Type('rock')]);
        }
    }

    //439
    export class MimeJr extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マネネ'),
                  [new Domain.Type('psychic'), new Domain.Type('fairy')]);
        }
    }

    //440
    export class Happiny extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ピンプク'),
                  [new Domain.Type('normal')]);
        }
    }

    //441
    export class Chatot extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ペラップ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //442
    export class Spiritomb extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミカルゲ'),
                  [new Domain.Type('ghost'), new Domain.Type('dark')]);
        }
    }

    //443
    export class Gible extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フカマル'),
                  [new Domain.Type('dragon'), new Domain.Type('ground')]);
        }
    }

    //444
    export class Gabite extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガバイト'),
                  [new Domain.Type('dragon'), new Domain.Type('ground')]);
        }
    }

    //445
    export class Garchomp extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガブリアス'),
                  [new Domain.Type('dragon'), new Domain.Type('ground')]);
        }
    }

    //445
    export class MegaGarchomp extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガガブリアス'),
                  [new Domain.Type('dragon'), new Domain.Type('ground')]);
        }
    }

    //446
    export class Munchlax extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴンベ'),
                  [new Domain.Type('normal')]);
        }
    }

    //447
    export class Riolu extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リオル'),
                  [new Domain.Type('fighting')]);
        }
    }

    //448
    export class Lucario extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ルカリオ'),
                  [new Domain.Type('fighting'), new Domain.Type('steel')]);
        }
    }

    //448
    export class MegaLucario extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガルカリオ'),
                  [new Domain.Type('fighting'), new Domain.Type('steel')]);
        }
    }

    //449
    export class Hippopotas extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒポポタス'),
                  [new Domain.Type('ground')]);
        }
    }

    //450
    export class Hippowdon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カバルドン'),
                  [new Domain.Type('ground')]);
        }
    }

    //451
    export class Skorupi extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スコルピ'),
                  [new Domain.Type('poison'), new Domain.Type('bug')]);
        }
    }

    //452
    export class Drapion extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドラピオン'),
                  [new Domain.Type('poison'), new Domain.Type('dark')]);
        }
    }

    //453
    export class Croagunk extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('グレッグル'),
                  [new Domain.Type('poison'), new Domain.Type('fighting')]);
        }
    }

    //454
    export class Toxicroak extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドクロッグ'),
                  [new Domain.Type('poison'), new Domain.Type('fighting')]);
        }
    }

    //455
    export class Carnivine extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マスキッパ'),
                  [new Domain.Type('grass')]);
        }
    }

    //456
    export class Finneon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケイコウオ'),
                  [new Domain.Type('water')]);
        }
    }

    //457
    export class Lumineon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ネオラント'),
                  [new Domain.Type('water')]);
        }
    }

    //458
    export class Mantyke extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タマンタ'),
                  [new Domain.Type('water'), new Domain.Type('flying')]);
        }
    }

    //459
    export class Snover extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ユキカブリ'),
                  [new Domain.Type('grass'), new Domain.Type('ice')]);
        }
    }

    //460
    export class Abomasnow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ユキノオー'),
                  [new Domain.Type('grass'), new Domain.Type('ice')]);
        }
    }

    //460
    export class MegaAbomasnow extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガユキノオー'),
                  [new Domain.Type('grass'), new Domain.Type('ice')]);
        }
    }

    //461
    export class Weavile extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マニューラ'),
                  [new Domain.Type('dark'), new Domain.Type('ice')]);
        }
    }

    //462
    export class Magnezone extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジバコイル'),
                  [new Domain.Type('electric'), new Domain.Type('steel')]);
        }
    }

    //463
    export class Lickilicky extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ベロベルト'),
                  [new Domain.Type('normal')]);
        }
    }

    //464
    export class Rhyperior extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドサイドン'),
                  [new Domain.Type('ground'), new Domain.Type('rock')]);
        }
    }

    //465
    export class Tangrowth extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モジャンボ'),
                  [new Domain.Type('grass')]);
        }
    }

    //466
    export class Electivire extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エレキブル'),
                  [new Domain.Type('electric')]);
        }
    }

    //467
    export class Magmortar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブーバーン'),
                  [new Domain.Type('fire')]);
        }
    }

    //468
    export class Togekiss extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トゲキッス'),
                  [new Domain.Type('fairy'), new Domain.Type('flying')]);
        }
    }

    //469
    export class Yanmega extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガヤンマ'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //470
    export class Leafeon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リーフィア'),
                  [new Domain.Type('grass')]);
        }
    }

    //471
    export class Glaceon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('グレイシア'),
                  [new Domain.Type('ice')]);
        }
    }

    //472
    export class Gliscor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('グライオン'),
                  [new Domain.Type('ground'), new Domain.Type('flying')]);
        }
    }

    //473
    export class Mamoswine extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マンムー'),
                  [new Domain.Type('ice'), new Domain.Type('ground')]);
        }
    }

    //474
    export class PorygonZ extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポリゴンZ'),
                  [new Domain.Type('normal')]);
        }
    }

    //475
    export class Gallade extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エルレイド'),
                  [new Domain.Type('psychic'), new Domain.Type('fighting')]);
        }
    }

    //476
    export class Probopass extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダイノーズ'),
                  [new Domain.Type('rock'), new Domain.Type('steel')]);
        }
    }

    //477
    export class Dusknoir extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヨノワール'),
                  [new Domain.Type('ghost')]);
        }
    }

    //478
    export class Froslass extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ユキメノコ'),
                  [new Domain.Type('ice'), new Domain.Type('ghost')]);
        }
    }

    //479
    export class Rotom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロトム'),
                  [new Domain.Type('electric'), new Domain.Type('ghost')]);
        }
    }

    //479
    export class HeatFormeRotom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロトム(ヒートフォルム)'),
                  [new Domain.Type('electric'), new Domain.Type('fire')]);
        }
    }

    //479
    export class WashFormeRotom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロトム(ウォッシュフォルム)'),
                  [new Domain.Type('electric'), new Domain.Type('water')]);
        }
    }

    //479
    export class FrostFormeRotom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロトム(フロストフォルム)'),
                  [new Domain.Type('electric'), new Domain.Type('ice')]);
        }
    }

    //479
    export class FanFormeRotom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロトム(スピンフォルム)'),
                  [new Domain.Type('electric'), new Domain.Type('flying')]);
        }
    }

    //479
    export class MowFormeRotom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ロトム(カットフォルム)'),
                  [new Domain.Type('electric'), new Domain.Type('grass')]);
        }
    }

    //480
    export class Uxie extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ユクシー'),
                  [new Domain.Type('psychic')]);
        }
    }

    //481
    export class Mesprit extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エムリット'),
                  [new Domain.Type('psychic')]);
        }
    }

    //482
    export class Azelf extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アグノム'),
                  [new Domain.Type('psychic')]);
        }
    }

    //483
    export class Dialga extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ディアルガ'),
                  [new Domain.Type('steel'), new Domain.Type('dragon')]);
        }
    }

    //484
    export class Palkia extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パルキア'),
                  [new Domain.Type('water'), new Domain.Type('dragon')]);
        }
    }

    //485
    export class Heatran extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒードラン'),
                  [new Domain.Type('fire'), new Domain.Type('steel')]);
        }
    }

    //486
    export class Regigigas extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レジギガス'),
                  [new Domain.Type('normal')]);
        }
    }

    //487
    export class Giratina extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギラティナ'),
                  [new Domain.Type('ghost'), new Domain.Type('dragon')]);
        }
    }

    //487
    export class AlteredFormeGiratina extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギラティナ(アナザー)'),
                  [new Domain.Type('ghost'), new Domain.Type('dragon')]);
        }
    }

    //488
    export class Cresselia extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クレセリア'),
                  [new Domain.Type('psychic')]);
        }
    }

    //489
    export class Phione extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フィオネ'),
                  [new Domain.Type('water')]);
        }
    }

    //490
    export class Manaphy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マナフィ'),
                  [new Domain.Type('water')]);
        }
    }

    //491
    export class Darkrai extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダークライ'),
                  [new Domain.Type('dark')]);
        }
    }

    //492
    export class Shaymin extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シェイミ'),
                  [new Domain.Type('grass')]);
        }
    }

    //492
    export class SkyFormeShaymin extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シェイミ(スカイ)'),
                  [new Domain.Type('grass'), new Domain.Type('flying')]);
        }
    }

    //493
    export class Arceus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アルセウス'),
                  [new Domain.Type('normal')]);
        }
    }

    //494
    export class Victini extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビクティニ'),
                  [new Domain.Type('psychic'), new Domain.Type('fire')]);
        }
    }

    //495
    export class Snivy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ツタージャ'),
                  [new Domain.Type('grass')]);
        }
    }

    //496
    export class Servine extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジャノビー'),
                  [new Domain.Type('grass')]);
        }
    }

    //497
    export class Serperior extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジャローダ'),
                  [new Domain.Type('grass')]);
        }
    }

    //498
    export class Tepig extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ポカブ'),
                  [new Domain.Type('fire')]);
        }
    }

    //499
    export class Pignite extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チャオブー'),
                  [new Domain.Type('fire'), new Domain.Type('fighting')]);
        }
    }

    //500
    export class Emboar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エンブオー'),
                  [new Domain.Type('fire'), new Domain.Type('fighting')]);
        }
    }

    //501
    export class Oshawott extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミジュマル'),
                  [new Domain.Type('water')]);
        }
    }

    //502
    export class Dewott extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フタチマル'),
                  [new Domain.Type('water')]);
        }
    }

    //503
    export class Samurott extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダイケンキ'),
                  [new Domain.Type('water')]);
        }
    }

    //504
    export class Patrat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミネズミ'),
                  [new Domain.Type('normal')]);
        }
    }

    //505
    export class Watchog extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ミルホッグ'),
                  [new Domain.Type('normal')]);
        }
    }

    //506
    export class Lillipup extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヨーテリー'),
                  [new Domain.Type('normal')]);
        }
    }

    //507
    export class Herdier extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハーデリア'),
                  [new Domain.Type('normal')]);
        }
    }

    //508
    export class Stoutland extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムーランド'),
                  [new Domain.Type('normal')]);
        }
    }

    //509
    export class Purrloin extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チョロネコ'),
                  [new Domain.Type('dark')]);
        }
    }

    //510
    export class Liepard extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レパルダス'),
                  [new Domain.Type('dark')]);
        }
    }

    //511
    export class Pansage extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤナップ'),
                  [new Domain.Type('grass')]);
        }
    }

    //512
    export class Simisage extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤナッキー'),
                  [new Domain.Type('grass')]);
        }
    }

    //513
    export class Pansear extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バオップ'),
                  [new Domain.Type('fire')]);
        }
    }

    //514
    export class Simisear extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バオッキー'),
                  [new Domain.Type('fire')]);
        }
    }

    //515
    export class Panpour extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒヤップ'),
                  [new Domain.Type('water')]);
        }
    }

    //516
    export class Simipour extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒヤッキー'),
                  [new Domain.Type('water')]);
        }
    }

    //517
    export class Munna extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムンナ'),
                  [new Domain.Type('psychic')]);
        }
    }

    //518
    export class Musharna extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ムシャーナ'),
                  [new Domain.Type('psychic')]);
        }
    }

    //519
    export class Pidove extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マメパト'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //520
    export class Tranquill extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハトーボー'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //521
    export class Unfezant extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケンホロウ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //522
    export class Blitzle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シママ'),
                  [new Domain.Type('electric')]);
        }
    }

    //523
    export class Zebstrika extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゼブライカ'),
                  [new Domain.Type('electric')]);
        }
    }

    //524
    export class Roggenrola extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダンゴロ'),
                  [new Domain.Type('rock')]);
        }
    }

    //525
    export class Boldore extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガントル'),
                  [new Domain.Type('rock')]);
        }
    }

    //526
    export class Gigalith extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギガイアス'),
                  [new Domain.Type('rock')]);
        }
    }

    //527
    export class Woobat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コロモリ'),
                  [new Domain.Type('psychic'), new Domain.Type('flying')]);
        }
    }

    //528
    export class Swoobat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ココロモリ'),
                  [new Domain.Type('psychic'), new Domain.Type('flying')]);
        }
    }

    //529
    export class Drilbur extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モグリュー'),
                  [new Domain.Type('ground')]);
        }
    }

    //530
    export class Excadrill extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドリュウズ'),
                  [new Domain.Type('ground'), new Domain.Type('steel')]);
        }
    }

    //531
    export class Audino extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タブンネ'),
                  [new Domain.Type('normal')]);
        }
    }

    //532
    export class Timburr extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドッコラー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //533
    export class Gurdurr extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドテッコツ'),
                  [new Domain.Type('fighting')]);
        }
    }

    //534
    export class Conkeldurr extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ローブシン'),
                  [new Domain.Type('fighting')]);
        }
    }

    //535
    export class Tympole extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オタマロ'),
                  [new Domain.Type('water')]);
        }
    }

    //536
    export class Palpitoad extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガマガル'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //537
    export class Seismitoad extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガマゲロゲ'),
                  [new Domain.Type('water'), new Domain.Type('ground')]);
        }
    }

    //538
    export class Throh extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ナゲキ'),
                  [new Domain.Type('fighting')]);
        }
    }

    //539
    export class Sawk extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダゲキ'),
                  [new Domain.Type('fighting')]);
        }
    }

    //540
    export class Sewaddle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クルミル'),
                  [new Domain.Type('bug'), new Domain.Type('grass')]);
        }
    }

    //541
    export class Swadloon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クルマユ'),
                  [new Domain.Type('bug'), new Domain.Type('grass')]);
        }
    }

    //542
    export class Leavanny extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハハコモリ'),
                  [new Domain.Type('bug'), new Domain.Type('grass')]);
        }
    }

    //543
    export class Venipede extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フシデ'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //544
    export class Whirlipede extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ホイーガ'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //545
    export class Scolipede extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ペンドラー'),
                  [new Domain.Type('bug'), new Domain.Type('poison')]);
        }
    }

    //546
    export class Cottonee extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モンメン'),
                  [new Domain.Type('grass'), new Domain.Type('fairy')]);
        }
    }

    //547
    export class Whimsicott extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エルフーン'),
                  [new Domain.Type('grass'), new Domain.Type('fairy')]);
        }
    }

    //548
    export class Petilil extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チュリネ'),
                  [new Domain.Type('grass')]);
        }
    }

    //549
    export class Lilligant extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドレディア'),
                  [new Domain.Type('grass')]);
        }
    }

    //550
    export class Basculin extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バスラオ'),
                  [new Domain.Type('water')]);
        }
    }

    //551
    export class Sandile extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メグロコ'),
                  [new Domain.Type('ground'), new Domain.Type('dark')]);
        }
    }

    //552
    export class Krokorok extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ワルビル'),
                  [new Domain.Type('ground'), new Domain.Type('dark')]);
        }
    }

    //553
    export class Krookodile extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ワルビアル'),
                  [new Domain.Type('ground'), new Domain.Type('dark')]);
        }
    }

    //554
    export class Darumaka extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダルマッカ'),
                  [new Domain.Type('fire')]);
        }
    }

    //555
    export class Darmanitan extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒヒダルマ'),
                  [new Domain.Type('fire')]);
        }
    }

    //555
    export class ZenModeDarmanitan extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒヒダルマ(ダルマモード)'),
                  [new Domain.Type('fire'), new Domain.Type('psychic')]);
        }
    }

    //556
    export class Maractus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マラカッチ'),
                  [new Domain.Type('grass')]);
        }
    }

    //557
    export class Dwebble extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イシズマイ'),
                  [new Domain.Type('bug'), new Domain.Type('rock')]);
        }
    }

    //558
    export class Crustle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イワパレス'),
                  [new Domain.Type('bug'), new Domain.Type('rock')]);
        }
    }

    //559
    export class Scraggy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ズルッグ'),
                  [new Domain.Type('dark'), new Domain.Type('fighting')]);
        }
    }

    //560
    export class Scrafty extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ズルズキン'),
                  [new Domain.Type('dark'), new Domain.Type('fighting')]);
        }
    }

    //561
    export class Sigilyph extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シンボラー'),
                  [new Domain.Type('psychic'), new Domain.Type('flying')]);
        }
    }

    //562
    export class Yamask extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デスマス'),
                  [new Domain.Type('ghost')]);
        }
    }

    //563
    export class Cofagrigus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デスカーン'),
                  [new Domain.Type('ghost')]);
        }
    }

    //564
    export class Tirtouga extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('プロトーガ'),
                  [new Domain.Type('water'), new Domain.Type('rock')]);
        }
    }

    //565
    export class Carracosta extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アバゴーラ'),
                  [new Domain.Type('water'), new Domain.Type('rock')]);
        }
    }

    //566
    export class Archen extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アーケン'),
                  [new Domain.Type('rock'), new Domain.Type('flying')]);
        }
    }

    //567
    export class Archeops extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アーケオス'),
                  [new Domain.Type('rock'), new Domain.Type('flying')]);
        }
    }

    //568
    export class Trubbish extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤブクロン'),
                  [new Domain.Type('poison')]);
        }
    }

    //569
    export class Garbodor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダストダス'),
                  [new Domain.Type('poison')]);
        }
    }

    //570
    export class Zorua extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゾロア'),
                  [new Domain.Type('dark')]);
        }
    }

    //571
    export class Zoroark extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゾロアーク'),
                  [new Domain.Type('dark')]);
        }
    }

    //572
    export class Minccino extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チラーミィ'),
                  [new Domain.Type('normal')]);
        }
    }

    //573
    export class Cinccino extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チラチーノ'),
                  [new Domain.Type('normal')]);
        }
    }

    //574
    export class Gothita extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴチム'),
                  [new Domain.Type('psychic')]);
        }
    }

    //575
    export class Gothorita extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴチミル'),
                  [new Domain.Type('psychic')]);
        }
    }

    //576
    export class Gothitelle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴチルゼル'),
                  [new Domain.Type('psychic')]);
        }
    }

    //577
    export class Solosis extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ユニラン'),
                  [new Domain.Type('psychic')]);
        }
    }

    //578
    export class Duosion extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ダブラン'),
                  [new Domain.Type('psychic')]);
        }
    }

    //579
    export class Reuniclus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ランクルス'),
                  [new Domain.Type('psychic')]);
        }
    }

    //580
    export class Ducklett extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コアルヒー'),
                  [new Domain.Type('water'), new Domain.Type('flying')]);
        }
    }

    //581
    export class Swanna extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('スワンナ'),
                  [new Domain.Type('water'), new Domain.Type('flying')]);
        }
    }

    //582
    export class Vanillite extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バニプッチ'),
                  [new Domain.Type('ice')]);
        }
    }

    //583
    export class Vanillish extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バニリッチ'),
                  [new Domain.Type('ice')]);
        }
    }

    //584
    export class Vanilluxe extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バイバニラ'),
                  [new Domain.Type('ice')]);
        }
    }

    //585
    export class Deerling extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シキジカ'),
                  [new Domain.Type('normal'), new Domain.Type('grass')]);
        }
    }

    //586
    export class Sawsbuck extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メブキジカ'),
                  [new Domain.Type('normal'), new Domain.Type('grass')]);
        }
    }

    //587
    export class Emolga extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エモンガ'),
                  [new Domain.Type('electric'), new Domain.Type('flying')]);
        }
    }

    //588
    export class Karrablast extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カブルモ'),
                  [new Domain.Type('bug')]);
        }
    }

    //589
    export class Escavalier extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シュバルゴ'),
                  [new Domain.Type('bug'), new Domain.Type('steel')]);
        }
    }

    //590
    export class Foongus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('タマゲタケ'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //591
    export class Amoonguss extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モロバレル'),
                  [new Domain.Type('grass'), new Domain.Type('poison')]);
        }
    }

    //592
    export class Frillish extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('プルリル'),
                  [new Domain.Type('water'), new Domain.Type('ghost')]);
        }
    }

    //593
    export class Jellicent extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブルンゲル'),
                  [new Domain.Type('water'), new Domain.Type('ghost')]);
        }
    }

    //594
    export class Alomomola extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ママンボウ'),
                  [new Domain.Type('water')]);
        }
    }

    //595
    export class Joltik extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バチュル'),
                  [new Domain.Type('bug'), new Domain.Type('electric')]);
        }
    }

    //596
    export class Galvantula extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デンチュラ'),
                  [new Domain.Type('bug'), new Domain.Type('electric')]);
        }
    }

    //597
    export class Ferroseed extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('テッシード'),
                  [new Domain.Type('grass'), new Domain.Type('steel')]);
        }
    }

    //598
    export class Ferrothorn extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ナットレイ'),
                  [new Domain.Type('grass'), new Domain.Type('steel')]);
        }
    }

    //599
    export class Klink extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギアル'),
                  [new Domain.Type('steel')]);
        }
    }

    //600
    export class Klang extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギギアル'),
                  [new Domain.Type('steel')]);
        }
    }

    //601
    export class Klinklang extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギギギアル'),
                  [new Domain.Type('steel')]);
        }
    }

    //602
    export class Tynamo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シビシラス'),
                  [new Domain.Type('electric')]);
        }
    }

    //603
    export class Eelektrik extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シビビール'),
                  [new Domain.Type('electric')]);
        }
    }

    //604
    export class Eelektross extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シビルドン'),
                  [new Domain.Type('electric')]);
        }
    }

    //605
    export class Elgyem extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('リグレー'),
                  [new Domain.Type('psychic')]);
        }
    }

    //606
    export class Beheeyem extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オーベム'),
                  [new Domain.Type('psychic')]);
        }
    }

    //607
    export class Litwick extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒトモシ'),
                  [new Domain.Type('ghost'), new Domain.Type('fire')]);
        }
    }

    //608
    export class Lampent extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ランプラー'),
                  [new Domain.Type('ghost'), new Domain.Type('fire')]);
        }
    }

    //609
    export class Chandelure extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シャンデラ'),
                  [new Domain.Type('ghost'), new Domain.Type('fire')]);
        }
    }

    //610
    export class Axew extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キバゴ'),
                  [new Domain.Type('dragon')]);
        }
    }

    //611
    export class Fraxure extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オノンド'),
                  [new Domain.Type('dragon')]);
        }
    }

    //612
    export class Haxorus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オノノクス'),
                  [new Domain.Type('dragon')]);
        }
    }

    //613
    export class Cubchoo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クマシュン'),
                  [new Domain.Type('ice')]);
        }
    }

    //614
    export class Beartic extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ツンベアー'),
                  [new Domain.Type('ice')]);
        }
    }

    //615
    export class Cryogonal extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フリージオ'),
                  [new Domain.Type('ice')]);
        }
    }

    //616
    export class Shelmet extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チョボマキ'),
                  [new Domain.Type('bug')]);
        }
    }

    //617
    export class Accelgor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アギルダー'),
                  [new Domain.Type('bug')]);
        }
    }

    //618
    export class Stunfisk extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マッギョ'),
                  [new Domain.Type('electric'), new Domain.Type('ground')]);
        }
    }

    //619
    export class Mienfoo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コジョフー'),
                  [new Domain.Type('fighting')]);
        }
    }

    //620
    export class Mienshao extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コジョンド'),
                  [new Domain.Type('fighting')]);
        }
    }

    //621
    export class Druddigon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クリムガン'),
                  [new Domain.Type('dragon')]);
        }
    }

    //622
    export class Golett extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴビット'),
                  [new Domain.Type('ground'), new Domain.Type('ghost')]);
        }
    }

    //623
    export class Golurk extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴルーグ'),
                  [new Domain.Type('ground'), new Domain.Type('ghost')]);
        }
    }

    //624
    export class Pawniard extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コマタナ'),
                  [new Domain.Type('dark'), new Domain.Type('steel')]);
        }
    }

    //625
    export class Bisharp extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キリキザン'),
                  [new Domain.Type('dark'), new Domain.Type('steel')]);
        }
    }

    //626
    export class Bouffalant extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バッフロン'),
                  [new Domain.Type('normal')]);
        }
    }

    //627
    export class Rufflet extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ワシボン'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //628
    export class Braviary extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウォーグル'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //629
    export class Vullaby extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バルチャイ'),
                  [new Domain.Type('dark'), new Domain.Type('flying')]);
        }
    }

    //630
    export class Mandibuzz extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バルジーナ'),
                  [new Domain.Type('dark'), new Domain.Type('flying')]);
        }
    }

    //631
    export class Heatmor extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クイタラン'),
                  [new Domain.Type('fire')]);
        }
    }

    //632
    export class Durant extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アイアント'),
                  [new Domain.Type('bug'), new Domain.Type('steel')]);
        }
    }

    //633
    export class Deino extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('モノズ'),
                  [new Domain.Type('dark'), new Domain.Type('dragon')]);
        }
    }

    //634
    export class Zweilous extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジヘッド'),
                  [new Domain.Type('dark'), new Domain.Type('dragon')]);
        }
    }

    //635
    export class Hydreigon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('サザンドラ'),
                  [new Domain.Type('dark'), new Domain.Type('dragon')]);
        }
    }

    //636
    export class Larvesta extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メラルバ'),
                  [new Domain.Type('bug'), new Domain.Type('fire')]);
        }
    }

    //637
    export class Volcarona extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウルガモス'),
                  [new Domain.Type('bug'), new Domain.Type('fire')]);
        }
    }

    //638
    export class Cobalion extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コバルオン'),
                  [new Domain.Type('steel'), new Domain.Type('fighting')]);
        }
    }

    //639
    export class Terrakion extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('テラキオン'),
                  [new Domain.Type('rock'), new Domain.Type('fighting')]);
        }
    }

    //640
    export class Virizion extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビリジオン'),
                  [new Domain.Type('grass'), new Domain.Type('fighting')]);
        }
    }

    //641
    export class IncarnateFormeTornadus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トルネロス(けしん)'),
                  [new Domain.Type('flying')]);
        }
    }

    //641
    export class TherianFormeTornadus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トルネロス(れいじゅう)'),
                  [new Domain.Type('flying')]);
        }
    }

    //642
    export class IncarnateFormeThundurus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ボルトロス(けしん)'),
                  [new Domain.Type('electric'), new Domain.Type('flying')]);
        }
    }

    //642
    export class TherianFormeThundurus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ボルトロス(れいじゅう)'),
                  [new Domain.Type('electric'), new Domain.Type('flying')]);
        }
    }

    //643
    export class Reshiram extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('レシラム'),
                  [new Domain.Type('dragon'), new Domain.Type('fire')]);
        }
    }

    //644
    export class Zekrom extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゼクロム'),
                  [new Domain.Type('dragon'), new Domain.Type('electric')]);
        }
    }

    //645
    export class IncarnateFormeLandorus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ランドロス(けしん)'),
                  [new Domain.Type('ground'), new Domain.Type('flying')]);
        }
    }

    //645
    export class TherianFormeLandorus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ランドロス(れいじゅう)'),
                  [new Domain.Type('ground'), new Domain.Type('flying')]);
        }
    }

    //646
    export class Kyurem extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('キュレム'),
                  [new Domain.Type('dragon'), new Domain.Type('ice')]);
        }
    }

    //646
    export class WhiteKyurem extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ホワイトキュレム'),
                  [new Domain.Type('dragon'), new Domain.Type('ice')]);
        }
    }

    //646
    export class BlackKyurem extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブラックキュレム'),
                  [new Domain.Type('dragon'), new Domain.Type('ice')]);
        }
    }

    //647
    export class Keldeo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケルディオ(いつものすがた)'),
                  [new Domain.Type('water'), new Domain.Type('fighting')]);
        }
    }

    //647
    export class ResoluteFormeKeldeo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケルディオ(かくごのすがた)'),
                  [new Domain.Type('water'), new Domain.Type('fighting')]);
        }
    }

    //648
    export class AriaFormeMeloetta extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メロエッタ(ボイス)'),
                  [new Domain.Type('normal'), new Domain.Type('psychic')]);
        }
    }

    //648
    export class PirouetteFormeMeloetta extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メロエッタ(ステップ)'),
                  [new Domain.Type('normal'), new Domain.Type('fighting')]);
        }
    }

    //649
    export class Genesect extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゲノセクト'),
                  [new Domain.Type('bug'), new Domain.Type('steel')]);
        }
    }

    //650
    export class Chespin extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハリマロン'),
                  [new Domain.Type('grass')]);
        }
    }

    //651
    export class Quilladin extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ハリボーグ'),
                  [new Domain.Type('grass')]);
        }
    }

    //652
    export class Chesnaught extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブリガロン'),
                  [new Domain.Type('grass'), new Domain.Type('fighting')]);
        }
    }

    //653
    export class Fennekin extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フォッコ'),
                  [new Domain.Type('fire')]);
        }
    }

    //654
    export class Braixen extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('テールナー'),
                  [new Domain.Type('fire')]);
        }
    }

    //655
    export class Delphox extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マフォクシー'),
                  [new Domain.Type('fire'), new Domain.Type('psychic')]);
        }
    }

    //656
    export class Froakie extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ケロマツ'),
                  [new Domain.Type('water')]);
        }
    }

    //657
    export class Frogadier extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゲコガシラ'),
                  [new Domain.Type('water')]);
        }
    }

    //658
    export class Greninja extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゲッコウガ'),
                  [new Domain.Type('water'), new Domain.Type('dark')]);
        }
    }

    //659
    export class Bunnelby extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ホルビー'),
                  [new Domain.Type('normal')]);
        }
    }

    //660
    export class Diggersby extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ホルード'),
                  [new Domain.Type('normal'), new Domain.Type('ground')]);
        }
    }

    //661
    export class Fletchling extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤヤコマ'),
                  [new Domain.Type('normal'), new Domain.Type('flying')]);
        }
    }

    //662
    export class Fletchinder extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒノヤコマ'),
                  [new Domain.Type('fire'), new Domain.Type('flying')]);
        }
    }

    //663
    export class Talonflame extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ファイアロー'),
                  [new Domain.Type('fire'), new Domain.Type('flying')]);
        }
    }

    //664
    export class Scatterbug extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コフキムシ'),
                  [new Domain.Type('bug')]);
        }
    }

    //665
    export class Spewpa extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('コフーライ'),
                  [new Domain.Type('bug')]);
        }
    }

    //666
    export class Vivillon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ビビヨン'),
                  [new Domain.Type('bug'), new Domain.Type('flying')]);
        }
    }

    //667
    export class Litleo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シシコ'),
                  [new Domain.Type('fire'), new Domain.Type('normal')]);
        }
    }

    //668
    export class Pyroar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カエンジシ'),
                  [new Domain.Type('fire'), new Domain.Type('normal')]);
        }
    }

    //669
    export class Flabébé extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フラベベ'),
                  [new Domain.Type('fairy')]);
        }
    }

    //670
    export class Floette extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フラエッテ'),
                  [new Domain.Type('fairy')]);
        }
    }

    //671
    export class Florges extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フラージェス'),
                  [new Domain.Type('fairy')]);
        }
    }

    //672
    export class Skiddo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メェークル'),
                  [new Domain.Type('grass')]);
        }
    }

    //673
    export class Gogoat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴーゴート'),
                  [new Domain.Type('grass')]);
        }
    }

    //674
    export class Pancham extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヤンチャム'),
                  [new Domain.Type('fighting')]);
        }
    }

    //675
    export class Pangoro extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゴロンダ'),
                  [new Domain.Type('fighting'), new Domain.Type('dark')]);
        }
    }

    //676
    export class Furfrou extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('トリミアン'),
                  [new Domain.Type('normal')]);
        }
    }

    //677
    export class Espurr extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニャスパー'),
                  [new Domain.Type('psychic')]);
        }
    }

    //678
    export class MaleMeowstic extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニャオニクス(オスのすがた)'),
                  [new Domain.Type('psychic')]);
        }
    }

    //678
    export class FemaleMeowstic extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニャオニクス(メスのすがた)'),
                  [new Domain.Type('psychic')]);
        }
    }

    //679
    export class Honedge extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヒトツキ'),
                  [new Domain.Type('steel'), new Domain.Type('ghost')]);
        }
    }

    //680
    export class Doublade extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニダンギル'),
                  [new Domain.Type('steel'), new Domain.Type('ghost')]);
        }
    }

    //681
    export class BladeFormeAegislash extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ギルガルド(ブレード)'),
                  [new Domain.Type('steel'), new Domain.Type('ghost')]);
        }
    }

    //681
    export class ShieldFormeAegislash extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メガギルガルド(シールド)'),
                  [new Domain.Type('steel'), new Domain.Type('ghost')]);
        }
    }

    //682
    export class Spritzee extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('シュシュプ'),
                  [new Domain.Type('fairy')]);
        }
    }

    //683
    export class Aromatisse extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('フレフワン'),
                  [new Domain.Type('fairy')]);
        }
    }

    //684
    export class Swirlix extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ペロッパフ'),
                  [new Domain.Type('fairy')]);
        }
    }

    //685
    export class Slurpuff extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ペロリーム'),
                  [new Domain.Type('fairy')]);
        }
    }

    //686
    export class Inkay extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('デデンネ'),
                  [new Domain.Type('dark'), new Domain.Type('psychic')]);
        }
    }

    //687
    export class Malamar extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('マーイーカ'),
                  [new Domain.Type('dark'), new Domain.Type('psychic')]);
        }
    }

    //688
    export class Binacle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カラマネロ'),
                  [new Domain.Type('rock'), new Domain.Type('water')]);
        }
    }

    //689
    export class Barbaracle extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カメテテ'),
                  [new Domain.Type('rock'), new Domain.Type('water')]);
        }
    }

    //690
    export class Skrelp extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガメノデス'),
                  [new Domain.Type('poison'), new Domain.Type('water')]);
        }
    }

    //691
    export class Dragalge extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クズモー'),
                  [new Domain.Type('poison'), new Domain.Type('dragon')]);
        }
    }

    //692
    export class Clauncher extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ドラミドロ'),
                  [new Domain.Type('water')]);
        }
    }

    //693
    export class Clawitzer extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ウデッポウ'),
                  [new Domain.Type('water')]);
        }
    }

    //694
    export class Helioptile extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ブロスター'),
                  [new Domain.Type('electric'), new Domain.Type('normal')]);
        }
    }

    //695
    export class Heliolisk extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エリキテル'),
                  [new Domain.Type('electric'), new Domain.Type('normal')]);
        }
    }

    //696
    export class Tyrunt extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('エレザード'),
                  [new Domain.Type('rock'), new Domain.Type('dragon')]);
        }
    }

    //697
    export class Tyrantrum extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('チゴラス'),
                  [new Domain.Type('rock'), new Domain.Type('dragon')]);
        }
    }

    //698
    export class Amaura extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ガチゴラス'),
                  [new Domain.Type('rock'), new Domain.Type('ice')]);
        }
    }

    //699
    export class Aurorus extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アマルス'),
                  [new Domain.Type('rock'), new Domain.Type('ice')]);
        }
    }

    //700
    export class Sylveon extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('アマルルガ'),
                  [new Domain.Type('fairy')]);
        }
    }

    //701
    export class Hawlucha extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ニンフィア'),
                  [new Domain.Type('fighting'), new Domain.Type('flying')]);
        }
    }

    //702
    export class Dedenne extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ルチャブル'),
                  [new Domain.Type('electric'), new Domain.Type('fairy')]);
        }
    }

    //703
    export class Carbink extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('メレシー'),
                  [new Domain.Type('rock'), new Domain.Type('fairy')]);
        }
    }

    //704
    export class Goomy extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヌメラ'),
                  [new Domain.Type('dragon')]);
        }
    }

    //705
    export class Sliggoo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヌメイル'),
                  [new Domain.Type('dragon')]);
        }
    }

    //706
    export class Goodra extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ヌメルゴン'),
                  [new Domain.Type('dragon')]);
        }
    }

    //707
    export class Klefki extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クレッフィ'),
                  [new Domain.Type('steel'), new Domain.Type('fairy')]);
        }
    }

    //708
    export class Phantump extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ボクレー'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //709
    export class Trevenant extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オーロット'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //710
    export class AverageSizePumpkaboo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バケッチャ(ふつう)'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //710
    export class SmallSizePumpkaboo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バケッチャ(ちいさい)'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //710
    export class LargeSizePumpkaboo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バケッチャ(おおきい)'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //710
    export class SuperSizePumpkaboo extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('バケッチャ(とくだい)'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //711
    export class AverageSizeGourgeist extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パンプジン(ふつう)'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //711
    export class SmallSizeGourgeist extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パンプジン(ちいさい)'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //711
    export class LargeSizeGourgeist extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パンプジン(おおきい)'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //711
    export class SuperSizeGourgeist extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('パンプジン(とくだい)'),
                  [new Domain.Type('ghost'), new Domain.Type('grass')]);
        }
    }

    //712
    export class Bergmite extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('カチコール'),
                  [new Domain.Type('ice')]);
        }
    }

    //713
    export class Avalugg extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('クレベース'),
                  [new Domain.Type('ice')]);
        }
    }

    //714
    export class Noibat extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オンバット'),
                  [new Domain.Type('flying'), new Domain.Type('dragon')]);
        }
    }

    //715
    export class Noivern extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('オンバーン'),
                  [new Domain.Type('flying'), new Domain.Type('dragon')]);
        }
    }

    //716
    export class Xerneas extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ゼルネアス'),
                  [new Domain.Type('fairy')]);
        }
    }

    //717
    export class Yveltal extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('イベルタル'),
                  [new Domain.Type('dark'), new Domain.Type('flying')]);
        }
    }

    //718
    export class Zygarde extends Domain.Pokemon {
        constructor(id: string) {
            super(new Domain.PokemonID(id),
                  new Domain.Name('ジガルデ'),
                  [new Domain.Type('dragon'), new Domain.Type('ground')]);
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

    export var iceBody: Domain.Abilites = new Domain.Abilites(new Domain.Name('アイスボディ'));
    export var stench: Domain.Abilites = new Domain.Abilites(new Domain.Name('あくしゅう'));
    export var thickFat: Domain.Abilites = new Domain.Abilites(new Domain.Name('あついしぼう'));
    export var stall: Domain.Abilites = new Domain.Abilites(new Domain.Name('あとだし'));
    export var analytic: Domain.Abilites = new Domain.Abilites(new Domain.Name('アナライズ'));
    export var contrary: Domain.Abilites = new Domain.Abilites(new Domain.Name('あまのじゃく'));
    export var rainDish: Domain.Abilites = new Domain.Abilites(new Domain.Name('あめうけざら'));
    export var drizzle: Domain.Abilites = new Domain.Abilites(new Domain.Name('あめふらし'));
    export var arenaTrap: Domain.Abilites = new Domain.Abilites(new Domain.Name('ありじごく'));
    export var intimidate: Domain.Abilites = new Domain.Abilites(new Domain.Name('いかく'));
    export var angerPoint: Domain.Abilites = new Domain.Abilites(new Domain.Name('いかりのつぼ'));
    export var rockHead: Domain.Abilites = new Domain.Abilites(new Domain.Name('いしあたま'));
    export var prankster: Domain.Abilites = new Domain.Abilites(new Domain.Name('いたずらごころ'));
    export var healer: Domain.Abilites = new Domain.Abilites(new Domain.Name('いやしのこころ'));
    export var illusion: Domain.Abilites = new Domain.Abilites(new Domain.Name('イリュージョン'));
    export var tintedLens: Domain.Abilites = new Domain.Abilites(new Domain.Name('いろめがね'));
    export var hydration: Domain.Abilites = new Domain.Abilites(new Domain.Name('うるおいボディ'));
    export var airLock: Domain.Abilites = new Domain.Abilites(new Domain.Name('エアロック'));
    export var frisk: Domain.Abilites = new Domain.Abilites(new Domain.Name('おみとおし'));
    export var hyperCutter: Domain.Abilites = new Domain.Abilites(new Domain.Name('かいりきバサミ'));
    export var shadowTag: Domain.Abilites = new Domain.Abilites(new Domain.Name('かげふみ'));
    export var speedBoost: Domain.Abilites = new Domain.Abilites(new Domain.Name('かそく'));
    export var moldBreaker: Domain.Abilites = new Domain.Abilites(new Domain.Name('かたやぶり'));
    export var battleArmor: Domain.Abilites = new Domain.Abilites(new Domain.Name('カブトアーマー'));
    export var unburden: Domain.Abilites = new Domain.Abilites(new Domain.Name('かるわざ'));
    export var imposter: Domain.Abilites = new Domain.Abilites(new Domain.Name('かわりもの'));
    export var sturdy: Domain.Abilites = new Domain.Abilites(new Domain.Name('がんじょう　'));
    export var drySkin: Domain.Abilites = new Domain.Abilites(new Domain.Name('かんそうはだ'));
    export var anticipation: Domain.Abilites = new Domain.Abilites(new Domain.Name('きけんよち'));
    export var scrappy: Domain.Abilites = new Domain.Abilites(new Domain.Name('きもったま'));
    export var suctionCups: Domain.Abilites = new Domain.Abilites(new Domain.Name('きゅうばん'));
    export var superLuck: Domain.Abilites = new Domain.Abilites(new Domain.Name('きょううん'));
    export var unnerve: Domain.Abilites = new Domain.Abilites(new Domain.Name('きんちょうかん'));
    export var gluttony: Domain.Abilites = new Domain.Abilites(new Domain.Name('くいしんぼう'));
    export var weakArmor: Domain.Abilites = new Domain.Abilites(new Domain.Name('くだけるよろい'));
    export var clearBody: Domain.Abilites = new Domain.Abilites(new Domain.Name('クリアボディ'));
    export var torrent: Domain.Abilites = new Domain.Abilites(new Domain.Name('げきりゅう'));
    export var guts: Domain.Abilites = new Domain.Abilites(new Domain.Name('こんじょう'));
    export var regenerator: Domain.Abilites = new Domain.Abilites(new Domain.Name('さいせいりょく'));
    export var roughSkin: Domain.Abilites = new Domain.Abilites(new Domain.Name('さめはだ'));
    export var solarPower: Domain.Abilites = new Domain.Abilites(new Domain.Name('サンパワー'));
    export var shellArmor: Domain.Abilites = new Domain.Abilites(new Domain.Name('シェルアーマー　'));
    export var moxie: Domain.Abilites = new Domain.Abilites(new Domain.Name('じしんかじょう'));
    export var naturalCure: Domain.Abilites = new Domain.Abilites(new Domain.Name('しぜんかいふく'));
    export var damp: Domain.Abilites = new Domain.Abilites(new Domain.Name('しめりけ'));
    export var harvest: Domain.Abilites = new Domain.Abilites(new Domain.Name('しゅうかく'));
    export var limber: Domain.Abilites = new Domain.Abilites(new Domain.Name('じゅうなん'));
    export var victoryStar: Domain.Abilites = new Domain.Abilites(new Domain.Name('しょうりのほし'));
    export var magnetPull: Domain.Abilites = new Domain.Abilites(new Domain.Name('じりょく'));
    export var whiteSmoke: Domain.Abilites = new Domain.Abilites(new Domain.Name('しろいけむり'));
    export var synchronize: Domain.Abilites = new Domain.Abilites(new Domain.Name('シンクロ'));
    export var overgrow: Domain.Abilites = new Domain.Abilites(new Domain.Name('しんりょく'));
    export var swiftSwim: Domain.Abilites = new Domain.Abilites(new Domain.Name('すいすい'));
    export var skillLink: Domain.Abilites = new Domain.Abilites(new Domain.Name('スキルリンク'));
    export var reckless: Domain.Abilites = new Domain.Abilites(new Domain.Name('すてみ'));
    export var sniper: Domain.Abilites = new Domain.Abilites(new Domain.Name('スナイパー'));
    export var sandStream: Domain.Abilites = new Domain.Abilites(new Domain.Name('すなおこし'));
    export var sandRush: Domain.Abilites = new Domain.Abilites(new Domain.Name('すなかき'));
    export var sandVeil: Domain.Abilites = new Domain.Abilites(new Domain.Name('すながくれ'));
    export var sandForce: Domain.Abilites = new Domain.Abilites(new Domain.Name('すなのちから'));
    export var infiltrator: Domain.Abilites = new Domain.Abilites(new Domain.Name('すりぬけ'));
    export var keenEye: Domain.Abilites = new Domain.Abilites(new Domain.Name('するどいめ'));
    export var slowStart: Domain.Abilites = new Domain.Abilites(new Domain.Name('スロースタート'));
    export var justified: Domain.Abilites = new Domain.Abilites(new Domain.Name('せいぎのこころ'));
    export var innerFocus: Domain.Abilites = new Domain.Abilites(new Domain.Name('せいしんりょく'));
    export var staticElectricity: Domain.Abilites = new Domain.Abilites(new Domain.Name('せいでんき'));
    export var sapSipper: Domain.Abilites = new Domain.Abilites(new Domain.Name('そうしょく'));
    export var turboblaze: Domain.Abilites = new Domain.Abilites(new Domain.Name('ターボブレイズ'));
    export var heatproof: Domain.Abilites = new Domain.Abilites(new Domain.Name('たいねつ'));
    export var download: Domain.Abilites = new Domain.Abilites(new Domain.Name('ダウンロード'));
    export var shedSkin: Domain.Abilites = new Domain.Abilites(new Domain.Name('だっぴ'));
    export var zenMode: Domain.Abilites = new Domain.Abilites(new Domain.Name('ダルマモード'));
    export var simple: Domain.Abilites = new Domain.Abilites(new Domain.Name('たんじゅん'));
    export var sheerForce: Domain.Abilites = new Domain.Abilites(new Domain.Name('ちからずく'));
    export var hugePower: Domain.Abilites = new Domain.Abilites(new Domain.Name('ちからもち'));
    export var voltAbsorb: Domain.Abilites = new Domain.Abilites(new Domain.Name('ちくでん'));
    export var tangledFeet: Domain.Abilites = new Domain.Abilites(new Domain.Name('ちどりあし'));
    export var waterAbsorb: Domain.Abilites = new Domain.Abilites(new Domain.Name('ちょすい'));
    export var adaptability: Domain.Abilites = new Domain.Abilites(new Domain.Name('てきおうりょく'));
    export var technician: Domain.Abilites = new Domain.Abilites(new Domain.Name('テクニシャン'));
    export var ironFist: Domain.Abilites = new Domain.Abilites(new Domain.Name('てつのこぶし'));
    export var ironBarbs: Domain.Abilites = new Domain.Abilites(new Domain.Name('てつのトゲ'));
    export var teravolt: Domain.Abilites = new Domain.Abilites(new Domain.Name('テラボルテージ'));
    export var telepathy: Domain.Abilites = new Domain.Abilites(new Domain.Name('テレパシー'));
    export var motorDrive: Domain.Abilites = new Domain.Abilites(new Domain.Name('でんきエンジン'));
    export var forecast: Domain.Abilites = new Domain.Abilites(new Domain.Name('てんきや'));
    export var unaware: Domain.Abilites = new Domain.Abilites(new Domain.Name('てんねん'));
    export var sereneGrace: Domain.Abilites = new Domain.Abilites(new Domain.Name('てんのめぐみ'));
    export var rivalry: Domain.Abilites = new Domain.Abilites(new Domain.Name('とうそうしん'));
    export var poisonTouch: Domain.Abilites = new Domain.Abilites(new Domain.Name('どくしゅ'));
    export var poisonPoint: Domain.Abilites = new Domain.Abilites(new Domain.Name('どくのトゲ'));
    export var toxicBoost: Domain.Abilites = new Domain.Abilites(new Domain.Name('どくぼうそう'));
    export var trace: Domain.Abilites = new Domain.Abilites(new Domain.Name('トレース'));
    export var oblivious: Domain.Abilites = new Domain.Abilites(new Domain.Name('どんかん'));
    export var badDreams: Domain.Abilites = new Domain.Abilites(new Domain.Name('ナイトメア'));
    export var truant: Domain.Abilites = new Domain.Abilites(new Domain.Name('なまけ'));
    export var runAway: Domain.Abilites = new Domain.Abilites(new Domain.Name('にげあし'));
    export var flareBoost: Domain.Abilites = new Domain.Abilites(new Domain.Name('ねつぼうそう'));
    export var stickyHold: Domain.Abilites = new Domain.Abilites(new Domain.Name('ねんちゃく'));
    export var noGuard: Domain.Abilites = new Domain.Abilites(new Domain.Name('ノーガード'));
    export var cloudNine: Domain.Abilites = new Domain.Abilites(new Domain.Name('ノーてんき'));
    export var normalize: Domain.Abilites = new Domain.Abilites(new Domain.Name('ノーマルスキン'));
    export var cursedBody: Domain.Abilites = new Domain.Abilites(new Domain.Name('のろわれボディ'));
    export var solidRock: Domain.Abilites = new Domain.Abilites(new Domain.Name('ハードロック'));
    export var illuminate: Domain.Abilites = new Domain.Abilites(new Domain.Name('はっこう'));
    export var bigPecks: Domain.Abilites = new Domain.Abilites(new Domain.Name('はとむね'));
    export var quickFeet: Domain.Abilites = new Domain.Abilites(new Domain.Name('はやあし'));
    export var earlyBird: Domain.Abilites = new Domain.Abilites(new Domain.Name('はやおき'));
    export var hustle: Domain.Abilites = new Domain.Abilites(new Domain.Name('はりきり'));
    export var drought: Domain.Abilites = new Domain.Abilites(new Domain.Name('ひでり'));
    export var rattled: Domain.Abilites = new Domain.Abilites(new Domain.Name('びびり'));
    export var lightningrod: Domain.Abilites = new Domain.Abilites(new Domain.Name('ひらいしん　'));
    export var filter: Domain.Abilites = new Domain.Abilites(new Domain.Name('フィルター'));
    export var klutz: Domain.Abilites = new Domain.Abilites(new Domain.Name('ぶきよう'));
    export var compoundeyes: Domain.Abilites = new Domain.Abilites(new Domain.Name('ふくがん'));
    export var steadfast: Domain.Abilites = new Domain.Abilites(new Domain.Name('ふくつのこころ'));
    export var marvelScale: Domain.Abilites = new Domain.Abilites(new Domain.Name('ふしぎなうろこ'));
    export var wonderGuard: Domain.Abilites = new Domain.Abilites(new Domain.Name('ふしぎなまもり'));
    export var insomnia: Domain.Abilites = new Domain.Abilites(new Domain.Name('ふみん'));
    export var levitate: Domain.Abilites = new Domain.Abilites(new Domain.Name('ふゆう'));
    export var plus: Domain.Abilites = new Domain.Abilites(new Domain.Name('プラス'));
    export var flowerGift: Domain.Abilites = new Domain.Abilites(new Domain.Name('フラワーギフト'));
    export var pressure: Domain.Abilites = new Domain.Abilites(new Domain.Name('プレッシャー'));
    export var friendGuard: Domain.Abilites = new Domain.Abilites(new Domain.Name('フレンドガード'));
    export var heavyMetal: Domain.Abilites = new Domain.Abilites(new Domain.Name('ヘヴィメタル'));
    export var liquidOoze: Domain.Abilites = new Domain.Abilites(new Domain.Name('ヘドロ液'));
    export var colorChange: Domain.Abilites = new Domain.Abilites(new Domain.Name('へんしょく'));
    export var poisonHeal: Domain.Abilites = new Domain.Abilites(new Domain.Name('ポイズンヒール'));
    export var soundproof: Domain.Abilites = new Domain.Abilites(new Domain.Name('ぼうおん'));
    export var effectSpore: Domain.Abilites = new Domain.Abilites(new Domain.Name('ほうし'));
    export var overcoat: Domain.Abilites = new Domain.Abilites(new Domain.Name('ぼうじん'));
    export var flameBody: Domain.Abilites = new Domain.Abilites(new Domain.Name('ほのおのからだ'));
    export var minus: Domain.Abilites = new Domain.Abilites(new Domain.Name('マイナス'));
    export var ownTempo: Domain.Abilites = new Domain.Abilites(new Domain.Name('マイペース　'));
    export var magmaArmor: Domain.Abilites = new Domain.Abilites(new Domain.Name('マグマのよろい'));
    export var defiant: Domain.Abilites = new Domain.Abilites(new Domain.Name('まけんき'));
    export var magicGuard: Domain.Abilites = new Domain.Abilites(new Domain.Name('マジックガード'));
    export var magicBounce: Domain.Abilites = new Domain.Abilites(new Domain.Name('マジックミラー'));
    export var multiscale: Domain.Abilites = new Domain.Abilites(new Domain.Name('マルチスケイル'));
    export var multitype: Domain.Abilites = new Domain.Abilites(new Domain.Name('マルチタイプ'));
    export var mummy: Domain.Abilites = new Domain.Abilites(new Domain.Name('ミイラ'));
    export var waterVeil: Domain.Abilites = new Domain.Abilites(new Domain.Name('みずのベール'));
    export var honeyGather: Domain.Abilites = new Domain.Abilites(new Domain.Name('みつあつめ'));
    export var wonderSkin: Domain.Abilites = new Domain.Abilites(new Domain.Name('ミラクルスキン'));
    export var swarm: Domain.Abilites = new Domain.Abilites(new Domain.Name('むしのしらせ'));
    export var moody: Domain.Abilites = new Domain.Abilites(new Domain.Name('ムラっけ'));
    export var cuteCharm: Domain.Abilites = new Domain.Abilites(new Domain.Name('メロメロボディ'));
    export var immunity: Domain.Abilites = new Domain.Abilites(new Domain.Name('めんえき'));
    export var blaze: Domain.Abilites = new Domain.Abilites(new Domain.Name('もうか'));
    export var pickup: Domain.Abilites = new Domain.Abilites(new Domain.Name('ものひろい'));
    export var flashFire: Domain.Abilites = new Domain.Abilites(new Domain.Name('もらいび'));
    export var vitalSpirit: Domain.Abilites = new Domain.Abilites(new Domain.Name('やるき'));
    export var aftermath: Domain.Abilites = new Domain.Abilites(new Domain.Name('ゆうばく'));
    export var snowCloak: Domain.Abilites = new Domain.Abilites(new Domain.Name('ゆきがくれ'));
    export var snowWarning: Domain.Abilites = new Domain.Abilites(new Domain.Name('ゆきふらし'));
    export var chlorophyll: Domain.Abilites = new Domain.Abilites(new Domain.Name('ようりょくそ'));
    export var purePower: Domain.Abilites = new Domain.Abilites(new Domain.Name('ヨガパワー'));
    export var forewarn: Domain.Abilites = new Domain.Abilites(new Domain.Name('よちむ'));
    export var stormDrain: Domain.Abilites = new Domain.Abilites(new Domain.Name('よびみず'));
    export var defeatist: Domain.Abilites = new Domain.Abilites(new Domain.Name('よわき'));
    export var lightMetal: Domain.Abilites = new Domain.Abilites(new Domain.Name('ライトメタル'));
    export var leafGuard: Domain.Abilites = new Domain.Abilites(new Domain.Name('リーフガード'));
    export var shieldDust: Domain.Abilites = new Domain.Abilites(new Domain.Name('りんぷん'));
    export var pickpocket: Domain.Abilites = new Domain.Abilites(new Domain.Name('わるいてぐせ'));

}

/**
* Dictionary
*/
module Dictionary {

    // FIXME: `メガ`進化するポケモンはとりあえず選択肢から外しておく
    export var pokemons = [
        {pokemon_name: 'アーケオス', pokemon_id: '567'},
        {pokemon_name: 'アーケン', pokemon_id: '566'},
        {pokemon_name: 'アーボ', pokemon_id: '023'},
        {pokemon_name: 'アーボック', pokemon_id: '024'},
        {pokemon_name: 'アーマルド', pokemon_id: '348'},
        {pokemon_name: 'アイアント', pokemon_id: '632'},
        {pokemon_name: 'アギルダー', pokemon_id: '617'},
        {pokemon_name: 'アグノム', pokemon_id: '482'},
        {pokemon_name: 'アゲハント', pokemon_id: '267'},
        {pokemon_name: 'アサナン', pokemon_id: '307'},
        {pokemon_name: 'アズマオウ', pokemon_id: '119'},
        {pokemon_name: 'アチャモ', pokemon_id: '255'},
        {pokemon_name: 'アノプス', pokemon_id: '347'},
        {pokemon_name: 'アバゴーラ', pokemon_id: '565'},
        {pokemon_name: 'アブソル', pokemon_id: '359'},
        {pokemon_name: 'アマルス', pokemon_id: '699'},
        {pokemon_name: 'アマルルガ', pokemon_id: '700'},
        {pokemon_name: 'アメタマ', pokemon_id: '283'},
        {pokemon_name: 'アメモース', pokemon_id: '284'},
        {pokemon_name: 'アリアドス', pokemon_id: '168'},
        {pokemon_name: 'アリゲイツ', pokemon_id: '159'},
        {pokemon_name: 'アルセウス', pokemon_id: '493'},
        {pokemon_name: 'アンノーン', pokemon_id: '201'},
        {pokemon_name: 'イーブイ', pokemon_id: '133'},
        {pokemon_name: 'イシズマイ', pokemon_id: '557'},
        {pokemon_name: 'イシツブテ', pokemon_id: '074'},
        {pokemon_name: 'イトマル', pokemon_id: '167'},
        {pokemon_name: 'イノムー', pokemon_id: '221'},
        {pokemon_name: 'イベルタル', pokemon_id: '717'},
        {pokemon_name: 'イルミーゼ', pokemon_id: '314'},
        {pokemon_name: 'イワーク', pokemon_id: '095'},
        {pokemon_name: 'イワパレス', pokemon_id: '558'},
        {pokemon_name: 'ウインディ', pokemon_id: '059'},
        {pokemon_name: 'ウォーグル', pokemon_id: '628'},
        {pokemon_name: 'ウソッキー', pokemon_id: '185'},
        {pokemon_name: 'ウソハチ', pokemon_id: '438'},
        {pokemon_name: 'ウツドン', pokemon_id: '070'},
        {pokemon_name: 'ウツボット', pokemon_id: '071'},
        {pokemon_name: 'ウデッポウ', pokemon_id: '693'},
        {pokemon_name: 'ウパー', pokemon_id: '194'},
        {pokemon_name: 'ウリムー', pokemon_id: '220'},
        {pokemon_name: 'ウルガモス', pokemon_id: '637'},
        {pokemon_name: 'エーフィ', pokemon_id: '196'},
        {pokemon_name: 'エアームド', pokemon_id: '227'},
        {pokemon_name: 'エイパム', pokemon_id: '190'},
        {pokemon_name: 'エテボース', pokemon_id: '424'},
        {pokemon_name: 'エネコ', pokemon_id: '300'},
        {pokemon_name: 'エネコロロ', pokemon_id: '301'},
        {pokemon_name: 'エビワラー', pokemon_id: '107'},
        {pokemon_name: 'エムリット', pokemon_id: '481'},
        {pokemon_name: 'エモンガ', pokemon_id: '587'},
        {pokemon_name: 'エリキテル', pokemon_id: '695'},
        {pokemon_name: 'エルフーン', pokemon_id: '547'},
        {pokemon_name: 'エルレイド', pokemon_id: '475'},
        {pokemon_name: 'エレキッド', pokemon_id: '239'},
        {pokemon_name: 'エレキブル', pokemon_id: '466'},
        {pokemon_name: 'エレザード', pokemon_id: '696'},
        {pokemon_name: 'エレブー', pokemon_id: '125'},
        {pokemon_name: 'エンテイ', pokemon_id: '244'},
        {pokemon_name: 'エンブオー', pokemon_id: '500'},
        {pokemon_name: 'エンペルト', pokemon_id: '395'},
        {pokemon_name: 'オーダイル', pokemon_id: '160'},
        {pokemon_name: 'オーベム', pokemon_id: '606'},
        {pokemon_name: 'オーロット', pokemon_id: '709'},
        {pokemon_name: 'オオスバメ', pokemon_id: '277'},
        {pokemon_name: 'オオタチ', pokemon_id: '162'},
        {pokemon_name: 'オクタン', pokemon_id: '224'},
        {pokemon_name: 'オコリザル', pokemon_id: '057'},
        {pokemon_name: 'オタチ', pokemon_id: '161'},
        {pokemon_name: 'オタマロ', pokemon_id: '535'},
        {pokemon_name: 'オドシシ', pokemon_id: '234'},
        {pokemon_name: 'オニゴーリ', pokemon_id: '362'},
        {pokemon_name: 'オニスズメ', pokemon_id: '021'},
        {pokemon_name: 'オニドリル', pokemon_id: '022'},
        {pokemon_name: 'オノノクス', pokemon_id: '612'},
        {pokemon_name: 'オノンド', pokemon_id: '611'},
        {pokemon_name: 'オムスター', pokemon_id: '139'},
        {pokemon_name: 'オムナイト', pokemon_id: '138'},
        {pokemon_name: 'オンバーン', pokemon_id: '715'},
        {pokemon_name: 'オンバット', pokemon_id: '714'},
        {pokemon_name: 'ガーディ', pokemon_id: '058'},
        {pokemon_name: 'ガーメイル', pokemon_id: '414'},
        {pokemon_name: 'カイオーガ', pokemon_id: '382'},
        {pokemon_name: 'カイリキー', pokemon_id: '068'},
        {pokemon_name: 'カイリュー', pokemon_id: '149'},
        {pokemon_name: 'カイロス', pokemon_id: '127'},
        {pokemon_name: 'カエンジシ', pokemon_id: '668'},
        {pokemon_name: 'カクレオン', pokemon_id: '352'},
        {pokemon_name: 'カゲボウズ', pokemon_id: '353'},
        {pokemon_name: 'カチコール', pokemon_id: '712'},
        {pokemon_name: 'ガチゴラス', pokemon_id: '698'},
        {pokemon_name: 'ガバイト', pokemon_id: '444'},
        {pokemon_name: 'カバルドン', pokemon_id: '450'},
        {pokemon_name: 'カビゴン', pokemon_id: '143'},
        {pokemon_name: 'カブト', pokemon_id: '140'},
        {pokemon_name: 'カブトプス', pokemon_id: '141'},
        {pokemon_name: 'ガブリアス', pokemon_id: '445'},
        {pokemon_name: 'カブルモ', pokemon_id: '588'},
        {pokemon_name: 'カポエラー', pokemon_id: '237'},
        {pokemon_name: 'ガマガル', pokemon_id: '536'},
        {pokemon_name: 'ガマゲロゲ', pokemon_id: '537'},
        {pokemon_name: 'カメール', pokemon_id: '008'},
        {pokemon_name: 'カメックス', pokemon_id: '009'},
        {pokemon_name: 'カメテテ', pokemon_id: '689'},
        {pokemon_name: 'ガメノデス', pokemon_id: '690'},
        {pokemon_name: 'カモネギ', pokemon_id: '083'},
        {pokemon_name: 'カラカラ', pokemon_id: '104'},
        {pokemon_name: 'ガラガラ', pokemon_id: '105'},
        {pokemon_name: 'カラサリス', pokemon_id: '266'},
        {pokemon_name: 'カラナクシ', pokemon_id: '422'},
        {pokemon_name: 'カラマネロ', pokemon_id: '688'},
        {pokemon_name: 'ガルーラ', pokemon_id: '115'},
        {pokemon_name: 'ガントル', pokemon_id: '525'},
        {pokemon_name: 'ギアル', pokemon_id: '599'},
        {pokemon_name: 'ギガイアス', pokemon_id: '526'},
        {pokemon_name: 'ギギアル', pokemon_id: '600'},
        {pokemon_name: 'ギギギアル', pokemon_id: '601'},
        {pokemon_name: 'キノガッサ', pokemon_id: '286'},
        {pokemon_name: 'キノココ', pokemon_id: '285'},
        {pokemon_name: 'キバゴ', pokemon_id: '610'},
        {pokemon_name: 'キバニア', pokemon_id: '318'},
        {pokemon_name: 'キマワリ', pokemon_id: '192'},
        {pokemon_name: 'キモリ', pokemon_id: '252'},
        {pokemon_name: 'キャタピー', pokemon_id: '010'},
        {pokemon_name: 'キャモメ', pokemon_id: '278'},
        {pokemon_name: 'ギャラドス', pokemon_id: '130'},
        {pokemon_name: 'ギャロップ', pokemon_id: '078'},
        {pokemon_name: 'キュウコン', pokemon_id: '038'},
        {pokemon_name: 'キュレム', pokemon_id: '646'},
        {pokemon_name: 'ギラティナ', pokemon_id: '487'},
        {pokemon_name: 'ギラティナ(アナザーフォルム)', pokemon_id: '487_altered'},
        {pokemon_name: 'キリキザン', pokemon_id: '625'},
        {pokemon_name: 'キリンリキ', pokemon_id: '203'},
        {pokemon_name: 'ギルガルド(シールドフォルム)', pokemon_id: '681_shield'},
        {pokemon_name: 'ギルガルド(ブレードフォルム)', pokemon_id: '681_blade'},
        {pokemon_name: 'キルリア', pokemon_id: '281'},
        {pokemon_name: 'キレイハナ', pokemon_id: '182'},
        {pokemon_name: 'キングドラ', pokemon_id: '230'},
        {pokemon_name: 'キングラー', pokemon_id: '099'},
        {pokemon_name: 'クイタラン', pokemon_id: '631'},
        {pokemon_name: 'クサイハナ', pokemon_id: '044'},
        {pokemon_name: 'クズモー', pokemon_id: '691'},
        {pokemon_name: 'クチート', pokemon_id: '303'},
        {pokemon_name: 'クヌギダマ', pokemon_id: '204'},
        {pokemon_name: 'クマシュン', pokemon_id: '613'},
        {pokemon_name: 'グラードン', pokemon_id: '383'},
        {pokemon_name: 'グライオン', pokemon_id: '472'},
        {pokemon_name: 'グライガー', pokemon_id: '207'},
        {pokemon_name: 'グラエナ', pokemon_id: '262'},
        {pokemon_name: 'クラブ', pokemon_id: '098'},
        {pokemon_name: 'グランブル', pokemon_id: '210'},
        {pokemon_name: 'クリムガン', pokemon_id: '621'},
        {pokemon_name: 'クルマユ', pokemon_id: '541'},
        {pokemon_name: 'クルミル', pokemon_id: '540'},
        {pokemon_name: 'グレイシア', pokemon_id: '471'},
        {pokemon_name: 'クレセリア', pokemon_id: '488'},
        {pokemon_name: 'グレッグル', pokemon_id: '453'},
        {pokemon_name: 'クレッフィ', pokemon_id: '707'},
        {pokemon_name: 'クレベース', pokemon_id: '713'},
        {pokemon_name: 'クロバット', pokemon_id: '169'},
        {pokemon_name: 'ケーシィ', pokemon_id: '063'},
        {pokemon_name: 'ケイコウオ', pokemon_id: '456'},
        {pokemon_name: 'ゲコガシラ', pokemon_id: '657'},
        {pokemon_name: 'ケッキング', pokemon_id: '289'},
        {pokemon_name: 'ゲッコウガ', pokemon_id: '658'},
        {pokemon_name: 'ゲノセクト', pokemon_id: '649'},
        {pokemon_name: 'ケムッソ', pokemon_id: '265'},
        {pokemon_name: 'ケルディオ', pokemon_id: '647'},
        {pokemon_name: 'ケルディオ(かくごのすがた)', pokemon_id: '647_resolute'},
        {pokemon_name: 'ケロマツ', pokemon_id: '656'},
        {pokemon_name: 'ゲンガー', pokemon_id: '094'},
        {pokemon_name: 'ケンタロス', pokemon_id: '128'},
        {pokemon_name: 'ケンホロウ', pokemon_id: '521'},
        {pokemon_name: 'ゴーゴート', pokemon_id: '673'},
        {pokemon_name: 'ゴース', pokemon_id: '092'},
        {pokemon_name: 'ゴースト', pokemon_id: '093'},
        {pokemon_name: 'コータス', pokemon_id: '324'},
        {pokemon_name: 'ゴーリキー', pokemon_id: '067'},
        {pokemon_name: 'コアルヒー', pokemon_id: '580'},
        {pokemon_name: 'コイキング', pokemon_id: '129'},
        {pokemon_name: 'コイル', pokemon_id: '081'},
        {pokemon_name: 'ゴウカザル', pokemon_id: '392'},
        {pokemon_name: 'コクーン', pokemon_id: '014'},
        {pokemon_name: 'ゴクリン', pokemon_id: '316'},
        {pokemon_name: 'ココドラ', pokemon_id: '304'},
        {pokemon_name: 'ココロモリ', pokemon_id: '528'},
        {pokemon_name: 'コジョフー', pokemon_id: '619'},
        {pokemon_name: 'コジョンド', pokemon_id: '620'},
        {pokemon_name: 'コダック', pokemon_id: '054'},
        {pokemon_name: 'ゴチミル', pokemon_id: '575'},
        {pokemon_name: 'ゴチム', pokemon_id: '574'},
        {pokemon_name: 'ゴチルゼル', pokemon_id: '576'},
        {pokemon_name: 'コドラ', pokemon_id: '305'},
        {pokemon_name: 'ゴニョニョ', pokemon_id: '293'},
        {pokemon_name: 'コノハナ', pokemon_id: '274'},
        {pokemon_name: 'コバルオン', pokemon_id: '638'},
        {pokemon_name: 'ゴビット', pokemon_id: '622'},
        {pokemon_name: 'コフーライ', pokemon_id: '665'},
        {pokemon_name: 'コフキムシ', pokemon_id: '664'},
        {pokemon_name: 'ゴマゾウ', pokemon_id: '231'},
        {pokemon_name: 'コマタナ', pokemon_id: '624'},
        {pokemon_name: 'コモルー', pokemon_id: '372'},
        {pokemon_name: 'コラッタ', pokemon_id: '019'},
        {pokemon_name: 'コリンク', pokemon_id: '403'},
        {pokemon_name: 'ゴルーグ', pokemon_id: '623'},
        {pokemon_name: 'ゴルダック', pokemon_id: '055'},
        {pokemon_name: 'ゴルバット', pokemon_id: '042'},
        {pokemon_name: 'ゴローニャ', pokemon_id: '076'},
        {pokemon_name: 'ゴローン', pokemon_id: '075'},
        {pokemon_name: 'コロトック', pokemon_id: '402'},
        {pokemon_name: 'コロボーシ', pokemon_id: '401'},
        {pokemon_name: 'コロモリ', pokemon_id: '527'},
        {pokemon_name: 'ゴロンダ', pokemon_id: '675'},
        {pokemon_name: 'コンパン', pokemon_id: '048'},
        {pokemon_name: 'ゴンベ', pokemon_id: '446'},
        {pokemon_name: 'サーナイト', pokemon_id: '282'},
        {pokemon_name: 'サイドン', pokemon_id: '112'},
        {pokemon_name: 'サイホーン', pokemon_id: '111'},
        {pokemon_name: 'サクラビス', pokemon_id: '368'},
        {pokemon_name: 'サザンドラ', pokemon_id: '635'},
        {pokemon_name: 'サナギラス', pokemon_id: '247'},
        {pokemon_name: 'サニーゴ', pokemon_id: '222'},
        {pokemon_name: 'サボネア', pokemon_id: '331'},
        {pokemon_name: 'サマヨール', pokemon_id: '356'},
        {pokemon_name: 'サメハダー', pokemon_id: '319'},
        {pokemon_name: 'サワムラー', pokemon_id: '106'},
        {pokemon_name: 'ザングース', pokemon_id: '335'},
        {pokemon_name: 'サンダー', pokemon_id: '145'},
        {pokemon_name: 'サンダース', pokemon_id: '135'},
        {pokemon_name: 'サンド', pokemon_id: '027'},
        {pokemon_name: 'サンドパン', pokemon_id: '028'},
        {pokemon_name: 'シードラ', pokemon_id: '117'},
        {pokemon_name: 'ジーランス', pokemon_id: '369'},
        {pokemon_name: 'シェイミ', pokemon_id: '492'},
        {pokemon_name: 'シェイミ(スカイフォルム)', pokemon_id: '492_sky'},
        {pokemon_name: 'シェルダー', pokemon_id: '090'},
        {pokemon_name: 'ジガルデ', pokemon_id: '718'},
        {pokemon_name: 'シキジカ', pokemon_id: '585'},
        {pokemon_name: 'ジグザグマ', pokemon_id: '263'},
        {pokemon_name: 'シザリガー', pokemon_id: '342'},
        {pokemon_name: 'シシコ', pokemon_id: '667'},
        {pokemon_name: 'ジバコイル', pokemon_id: '462'},
        {pokemon_name: 'シビシラス', pokemon_id: '602'},
        {pokemon_name: 'シビビール', pokemon_id: '603'},
        {pokemon_name: 'シビルドン', pokemon_id: '604'},
        {pokemon_name: 'ジヘッド', pokemon_id: '634'},
        {pokemon_name: 'シママ', pokemon_id: '522'},
        {pokemon_name: 'ジャノビー', pokemon_id: '496'},
        {pokemon_name: 'ジャローダ', pokemon_id: '497'},
        {pokemon_name: 'シャワーズ', pokemon_id: '134'},
        {pokemon_name: 'シャンデラ', pokemon_id: '609'},
        {pokemon_name: 'ジュカイン', pokemon_id: '254'},
        {pokemon_name: 'ジュゴン', pokemon_id: '087'},
        {pokemon_name: 'シュシュプ', pokemon_id: '682'},
        {pokemon_name: 'シュバルゴ', pokemon_id: '589'},
        {pokemon_name: 'ジュプトル', pokemon_id: '253'},
        {pokemon_name: 'ジュペッタ', pokemon_id: '354'},
        {pokemon_name: 'ジラーチ', pokemon_id: '385'},
        {pokemon_name: 'シンボラー', pokemon_id: '561'},
        {pokemon_name: 'スイクン', pokemon_id: '245'},
        {pokemon_name: 'ズガイドス', pokemon_id: '408'},
        {pokemon_name: 'スカタンク', pokemon_id: '435'},
        {pokemon_name: 'スカンプー', pokemon_id: '434'},
        {pokemon_name: 'スコルピ', pokemon_id: '451'},
        {pokemon_name: 'スターミー', pokemon_id: '121'},
        {pokemon_name: 'ストライク', pokemon_id: '123'},
        {pokemon_name: 'ズバット', pokemon_id: '041'},
        {pokemon_name: 'スバメ', pokemon_id: '276'},
        {pokemon_name: 'スピアー', pokemon_id: '015'},
        {pokemon_name: 'スボミー', pokemon_id: '406'},
        {pokemon_name: 'スリーパー', pokemon_id: '097'},
        {pokemon_name: 'スリープ', pokemon_id: '096'},
        {pokemon_name: 'ズルズキン', pokemon_id: '560'},
        {pokemon_name: 'ズルッグ', pokemon_id: '559'},
        {pokemon_name: 'スワンナ', pokemon_id: '581'},
        {pokemon_name: 'ゼクロム', pokemon_id: '644'},
        {pokemon_name: 'ゼニガメ', pokemon_id: '007'},
        {pokemon_name: 'ゼブライカ', pokemon_id: '523'},
        {pokemon_name: 'ゼルネアス', pokemon_id: '716'},
        {pokemon_name: 'セレビィ', pokemon_id: '251'},
        {pokemon_name: 'ソーナノ', pokemon_id: '360'},
        {pokemon_name: 'ソーナンス', pokemon_id: '202'},
        {pokemon_name: 'ソルロック', pokemon_id: '338'},
        {pokemon_name: 'ゾロア', pokemon_id: '570'},
        {pokemon_name: 'ゾロアーク', pokemon_id: '571'},
        {pokemon_name: 'ダークライ', pokemon_id: '491'},
        {pokemon_name: 'ダーテング', pokemon_id: '275'},
        {pokemon_name: 'ダイケンキ', pokemon_id: '503'},
        {pokemon_name: 'ダイノーズ', pokemon_id: '476'},
        {pokemon_name: 'ダグトリオ', pokemon_id: '051'},
        {pokemon_name: 'ダゲキ', pokemon_id: '539'},
        {pokemon_name: 'ダストダス', pokemon_id: '569'},
        {pokemon_name: 'タッツー', pokemon_id: '116'},
        {pokemon_name: 'タツベイ', pokemon_id: '371'},
        {pokemon_name: 'タテトプス', pokemon_id: '410'},
        {pokemon_name: 'タネボー', pokemon_id: '273'},
        {pokemon_name: 'ダブラン', pokemon_id: '578'},
        {pokemon_name: 'タブンネ', pokemon_id: '531'},
        {pokemon_name: 'タマゲタケ', pokemon_id: '590'},
        {pokemon_name: 'タマザラシ', pokemon_id: '363'},
        {pokemon_name: 'タマタマ', pokemon_id: '102'},
        {pokemon_name: 'タマンタ', pokemon_id: '458'},
        {pokemon_name: 'ダルマッカ', pokemon_id: '554'},
        {pokemon_name: 'ダンゴロ', pokemon_id: '524'},
        {pokemon_name: 'ダンバル', pokemon_id: '374'},
        {pokemon_name: 'チェリム', pokemon_id: '421'},
        {pokemon_name: 'チェリンボ', pokemon_id: '420'},
        {pokemon_name: 'チゴラス', pokemon_id: '697'},
        {pokemon_name: 'チコリータ', pokemon_id: '152'},
        {pokemon_name: 'チャーレム', pokemon_id: '308'},
        {pokemon_name: 'チャオブー', pokemon_id: '499'},
        {pokemon_name: 'チュリネ', pokemon_id: '548'},
        {pokemon_name: 'チョボマキ', pokemon_id: '616'},
        {pokemon_name: 'チョロネコ', pokemon_id: '509'},
        {pokemon_name: 'チョンチー', pokemon_id: '170'},
        {pokemon_name: 'チラーミィ', pokemon_id: '572'},
        {pokemon_name: 'チラチーノ', pokemon_id: '573'},
        {pokemon_name: 'チリーン', pokemon_id: '358'},
        {pokemon_name: 'チルタリス', pokemon_id: '334'},
        {pokemon_name: 'チルット', pokemon_id: '333'},
        {pokemon_name: 'ツタージャ', pokemon_id: '495'},
        {pokemon_name: 'ツチニン', pokemon_id: '290'},
        {pokemon_name: 'ツボツボ', pokemon_id: '213'},
        {pokemon_name: 'ツンベアー', pokemon_id: '614'},
        {pokemon_name: 'テールナー', pokemon_id: '654'},
        {pokemon_name: 'ディアルガ', pokemon_id: '483'},
        {pokemon_name: 'ディグダ', pokemon_id: '050'},
        {pokemon_name: 'デオキシス', pokemon_id: '386'},
        {pokemon_name: 'デオキシス(アタックフォルム)', pokemon_id: '386_attack'},
        {pokemon_name: 'デオキシス(スピードフォルム)', pokemon_id: '386_speed'},
        {pokemon_name: 'デオキシス(ディフェンスフォルム)', pokemon_id: '386_defense'},
        {pokemon_name: 'デスカーン', pokemon_id: '563'},
        {pokemon_name: 'デスマス', pokemon_id: '562'},
        {pokemon_name: 'テッカニン', pokemon_id: '291'},
        {pokemon_name: 'テッシード', pokemon_id: '597'},
        {pokemon_name: 'テッポウオ', pokemon_id: '223'},
        {pokemon_name: 'デデンネ', pokemon_id: '686'},
        {pokemon_name: 'テラキオン', pokemon_id: '639'},
        {pokemon_name: 'デリバード', pokemon_id: '225'},
        {pokemon_name: 'デルビル', pokemon_id: '228'},
        {pokemon_name: 'デンチュラ', pokemon_id: '596'},
        {pokemon_name: 'デンリュウ', pokemon_id: '181'},
        {pokemon_name: 'ドータクン', pokemon_id: '437'},
        {pokemon_name: 'ドードー', pokemon_id: '084'},
        {pokemon_name: 'ドードリオ', pokemon_id: '085'},
        {pokemon_name: 'ドーブル', pokemon_id: '235'},
        {pokemon_name: 'ドーミラー', pokemon_id: '436'},
        {pokemon_name: 'ドガース', pokemon_id: '109'},
        {pokemon_name: 'ドククラゲ', pokemon_id: '073'},
        {pokemon_name: 'ドクケイル', pokemon_id: '269'},
        {pokemon_name: 'ドクロッグ', pokemon_id: '454'},
        {pokemon_name: 'トゲキッス', pokemon_id: '468'},
        {pokemon_name: 'トゲチック', pokemon_id: '176'},
        {pokemon_name: 'トゲピー', pokemon_id: '175'},
        {pokemon_name: 'ドゴーム', pokemon_id: '294'},
        {pokemon_name: 'ドサイドン', pokemon_id: '464'},
        {pokemon_name: 'トサキント', pokemon_id: '118'},
        {pokemon_name: 'ドジョッチ', pokemon_id: '339'},
        {pokemon_name: 'ドダイトス', pokemon_id: '389'},
        {pokemon_name: 'ドッコラー', pokemon_id: '532'},
        {pokemon_name: 'ドテッコツ', pokemon_id: '533'},
        {pokemon_name: 'トドグラー', pokemon_id: '364'},
        {pokemon_name: 'トドゼルガ', pokemon_id: '365'},
        {pokemon_name: 'ドラピオン', pokemon_id: '452'},
        {pokemon_name: 'ドラミドロ', pokemon_id: '692'},
        {pokemon_name: 'トランセル', pokemon_id: '011'},
        {pokemon_name: 'トリデプス', pokemon_id: '411'},
        {pokemon_name: 'トリトドン', pokemon_id: '423'},
        {pokemon_name: 'トリミアン', pokemon_id: '676'},
        {pokemon_name: 'ドリュウズ', pokemon_id: '530'},
        {pokemon_name: 'トルネロス(けしんフォルム)', pokemon_id: '641'},
        {pokemon_name: 'トルネロス(れいじゅうフォルム)', pokemon_id: '641_therian'},
        {pokemon_name: 'ドレディア', pokemon_id: '549'},
        {pokemon_name: 'トロピウス', pokemon_id: '357'},
        {pokemon_name: 'ドンカラス', pokemon_id: '430'},
        {pokemon_name: 'ドンファン', pokemon_id: '232'},
        {pokemon_name: 'ドンメル', pokemon_id: '322'},
        {pokemon_name: 'ナエトル', pokemon_id: '387'},
        {pokemon_name: 'ナゲキ', pokemon_id: '538'},
        {pokemon_name: 'ナゾノクサ', pokemon_id: '043'},
        {pokemon_name: 'ナックラー', pokemon_id: '328'},
        {pokemon_name: 'ナッシー', pokemon_id: '103'},
        {pokemon_name: 'ナットレイ', pokemon_id: '598'},
        {pokemon_name: 'ナマケロ', pokemon_id: '287'},
        {pokemon_name: 'ナマズン', pokemon_id: '340'},
        {pokemon_name: 'ニダンギル', pokemon_id: '680'},
        {pokemon_name: 'ニドキング', pokemon_id: '034'},
        {pokemon_name: 'ニドクイン', pokemon_id: '031'},
        {pokemon_name: 'ニドラン♀', pokemon_id: '029'},
        {pokemon_name: 'ニドラン♂', pokemon_id: '032'},
        {pokemon_name: 'ニドリーナ', pokemon_id: '030'},
        {pokemon_name: 'ニドリーノ', pokemon_id: '033'},
        {pokemon_name: 'ニャース', pokemon_id: '052'},
        {pokemon_name: 'ニャオニクス(オスのすがた)', pokemon_id: '678_male'},
        {pokemon_name: 'ニャオニクス(メスのすがた)', pokemon_id: '678_female'},
        {pokemon_name: 'ニャスパー', pokemon_id: '677'},
        {pokemon_name: 'ニャルマー', pokemon_id: '431'},
        {pokemon_name: 'ニューラ', pokemon_id: '215'},
        {pokemon_name: 'ニョロゾ', pokemon_id: '061'},
        {pokemon_name: 'ニョロトノ', pokemon_id: '186'},
        {pokemon_name: 'ニョロボン', pokemon_id: '062'},
        {pokemon_name: 'ニョロモ', pokemon_id: '060'},
        {pokemon_name: 'ニンフィア', pokemon_id: '701'},
        {pokemon_name: 'ヌオー', pokemon_id: '195'},
        {pokemon_name: 'ヌケニン', pokemon_id: '292'},
        {pokemon_name: 'ヌマクロー', pokemon_id: '259'},
        {pokemon_name: 'ヌメイル', pokemon_id: '705'},
        {pokemon_name: 'ヌメラ', pokemon_id: '704'},
        {pokemon_name: 'ヌメルゴン', pokemon_id: '706'},
        {pokemon_name: 'ネイティ', pokemon_id: '177'},
        {pokemon_name: 'ネイティオ', pokemon_id: '178'},
        {pokemon_name: 'ネオラント', pokemon_id: '457'},
        {pokemon_name: 'ネンドール', pokemon_id: '344'},
        {pokemon_name: 'ノクタス', pokemon_id: '332'},
        {pokemon_name: 'ノコッチ', pokemon_id: '206'},
        {pokemon_name: 'ノズパス', pokemon_id: '299'},
        {pokemon_name: 'ハーデリア', pokemon_id: '507'},
        {pokemon_name: 'パールル', pokemon_id: '366'},
        {pokemon_name: 'バイバニラ', pokemon_id: '584'},
        {pokemon_name: 'パウワウ', pokemon_id: '086'},
        {pokemon_name: 'バオッキー', pokemon_id: '514'},
        {pokemon_name: 'バオップ', pokemon_id: '513'},
        {pokemon_name: 'ハガネール', pokemon_id: '208'},
        {pokemon_name: 'バクーダ', pokemon_id: '323'},
        {pokemon_name: 'バクオング', pokemon_id: '295'},
        {pokemon_name: 'バクフーン', pokemon_id: '157'},
        {pokemon_name: 'ハクリュー', pokemon_id: '148'},
        {pokemon_name: 'バケッチャ(おおきいサイズ)', pokemon_id: '710_large'},
        {pokemon_name: 'バケッチャ(ちいさいサイズ)', pokemon_id: '710_small'},
        {pokemon_name: 'バケッチャ(とくだいサイズ)', pokemon_id: '710_super'},
        {pokemon_name: 'バケッチャ(ふつうサイズ)', pokemon_id: '710'},
        {pokemon_name: 'バシャーモ', pokemon_id: '257'},
        {pokemon_name: 'ハスブレロ', pokemon_id: '271'},
        {pokemon_name: 'ハスボー', pokemon_id: '270'},
        {pokemon_name: 'バスラオ', pokemon_id: '550'},
        {pokemon_name: 'バタフリー', pokemon_id: '012'},
        {pokemon_name: 'バチュル', pokemon_id: '595'},
        {pokemon_name: 'パチリス', pokemon_id: '417'},
        {pokemon_name: 'ハッサム', pokemon_id: '212'},
        {pokemon_name: 'パッチール', pokemon_id: '327'},
        {pokemon_name: 'バッフロン', pokemon_id: '626'},
        {pokemon_name: 'ハトーボー', pokemon_id: '520'},
        {pokemon_name: 'バニプッチ', pokemon_id: '582'},
        {pokemon_name: 'バニリッチ', pokemon_id: '583'},
        {pokemon_name: 'ハネッコ', pokemon_id: '187'},
        {pokemon_name: 'バネブー', pokemon_id: '325'},
        {pokemon_name: 'ハハコモリ', pokemon_id: '542'},
        {pokemon_name: 'ハピナス', pokemon_id: '242'},
        {pokemon_name: 'ハブネーク', pokemon_id: '336'},
        {pokemon_name: 'ハヤシガメ', pokemon_id: '388'},
        {pokemon_name: 'パラス', pokemon_id: '046'},
        {pokemon_name: 'パラセクト', pokemon_id: '047'},
        {pokemon_name: 'ハリーセン', pokemon_id: '211'},
        {pokemon_name: 'ハリテヤマ', pokemon_id: '297'},
        {pokemon_name: 'ハリボーグ', pokemon_id: '651'},
        {pokemon_name: 'ハリマロン', pokemon_id: '650'},
        {pokemon_name: 'バリヤード', pokemon_id: '122'},
        {pokemon_name: 'バルキー', pokemon_id: '236'},
        {pokemon_name: 'パルキア', pokemon_id: '484'},
        {pokemon_name: 'バルジーナ', pokemon_id: '630'},
        {pokemon_name: 'パルシェン', pokemon_id: '091'},
        {pokemon_name: 'バルチャイ', pokemon_id: '629'},
        {pokemon_name: 'バルビート', pokemon_id: '313'},
        {pokemon_name: 'バンギラス', pokemon_id: '248'},
        {pokemon_name: 'ハンテール', pokemon_id: '367'},
        {pokemon_name: 'パンプジン(おおきいサイズ)', pokemon_id: '711_large'},
        {pokemon_name: 'パンプジン(ちいさいサイズ)', pokemon_id: '711_small'},
        {pokemon_name: 'パンプジン(とくだいサイズ)', pokemon_id: '711_super'},
        {pokemon_name: 'パンプジン(ふつうサイズ)', pokemon_id: '711'},
        {pokemon_name: 'ビークイン', pokemon_id: '416'},
        {pokemon_name: 'ビーダル', pokemon_id: '400'},
        {pokemon_name: 'ヒードラン', pokemon_id: '485'},
        {pokemon_name: 'ビードル', pokemon_id: '013'},
        {pokemon_name: 'ピィ', pokemon_id: '173'},
        {pokemon_name: 'ピカチュウ', pokemon_id: '025'},
        {pokemon_name: 'ピクシー', pokemon_id: '036'},
        {pokemon_name: 'ビクティニ', pokemon_id: '494'},
        {pokemon_name: 'ヒコザル', pokemon_id: '390'},
        {pokemon_name: 'ピジョット', pokemon_id: '018'},
        {pokemon_name: 'ピジョン', pokemon_id: '017'},
        {pokemon_name: 'ピチュー', pokemon_id: '172'},
        {pokemon_name: 'ビッパ', pokemon_id: '399'},
        {pokemon_name: 'ピッピ', pokemon_id: '035'},
        {pokemon_name: 'ヒトカゲ', pokemon_id: '004'},
        {pokemon_name: 'ヒトツキ', pokemon_id: '679'},
        {pokemon_name: 'ヒトデマン', pokemon_id: '120'},
        {pokemon_name: 'ヒトモシ', pokemon_id: '607'},
        {pokemon_name: 'ヒノアラシ', pokemon_id: '155'},
        {pokemon_name: 'ヒノヤコマ', pokemon_id: '662'},
        {pokemon_name: 'ヒヒダルマ', pokemon_id: '555'},
        {pokemon_name: 'ヒヒダルマ(ダルマモード)', pokemon_id: '555_zen'},
        {pokemon_name: 'ビビヨン', pokemon_id: '666'},
        {pokemon_name: 'ビブラーバ', pokemon_id: '329'},
        {pokemon_name: 'ヒポポタス', pokemon_id: '449'},
        {pokemon_name: 'ヒマナッツ', pokemon_id: '191'},
        {pokemon_name: 'ヒメグマ', pokemon_id: '216'},
        {pokemon_name: 'ヒヤッキー', pokemon_id: '516'},
        {pokemon_name: 'ヒヤップ', pokemon_id: '515'},
        {pokemon_name: 'ビリジオン', pokemon_id: '640'},
        {pokemon_name: 'ビリリダマ', pokemon_id: '100'},
        {pokemon_name: 'ヒンバス', pokemon_id: '349'},
        {pokemon_name: 'ピンプク', pokemon_id: '440'},
        {pokemon_name: 'ブースター', pokemon_id: '136'},
        {pokemon_name: 'フーディン', pokemon_id: '065'},
        {pokemon_name: 'ブーバー', pokemon_id: '126'},
        {pokemon_name: 'ブーバーン', pokemon_id: '467'},
        {pokemon_name: 'ブーピッグ', pokemon_id: '326'},
        {pokemon_name: 'ファイアロー', pokemon_id: '663'},
        {pokemon_name: 'ファイヤー', pokemon_id: '146'},
        {pokemon_name: 'フィオネ', pokemon_id: '489'},
        {pokemon_name: 'ブイゼル', pokemon_id: '418'},
        {pokemon_name: 'フォッコ', pokemon_id: '653'},
        {pokemon_name: 'フォレトス', pokemon_id: '205'},
        {pokemon_name: 'フカマル', pokemon_id: '443'},
        {pokemon_name: 'プクリン', pokemon_id: '040'},
        {pokemon_name: 'フシギソウ', pokemon_id: '002'},
        {pokemon_name: 'フシギダネ', pokemon_id: '001'},
        {pokemon_name: 'フシギバナ', pokemon_id: '003'},
        {pokemon_name: 'フシデ', pokemon_id: '543'},
        {pokemon_name: 'フタチマル', pokemon_id: '502'},
        {pokemon_name: 'プテラ', pokemon_id: '142'},
        {pokemon_name: 'ブニャット', pokemon_id: '432'},
        {pokemon_name: 'ブビィ', pokemon_id: '240'},
        {pokemon_name: 'ププリン', pokemon_id: '174'},
        {pokemon_name: 'フラージェス', pokemon_id: '671'},
        {pokemon_name: 'フライゴン', pokemon_id: '330'},
        {pokemon_name: 'フラエッテ', pokemon_id: '670'},
        {pokemon_name: 'プラスル', pokemon_id: '311'},
        {pokemon_name: 'ブラッキー', pokemon_id: '197'},
        {pokemon_name: 'ブラックキュレム', pokemon_id: '646_black'},
        {pokemon_name: 'フラベベ', pokemon_id: '669'},
        {pokemon_name: 'フリーザー', pokemon_id: '144'},
        {pokemon_name: 'フリージオ', pokemon_id: '615'},
        {pokemon_name: 'ブリガロン', pokemon_id: '652'},
        {pokemon_name: 'プリン', pokemon_id: '039'},
        {pokemon_name: 'ブルー', pokemon_id: '209'},
        {pokemon_name: 'プルリル', pokemon_id: '592'},
        {pokemon_name: 'ブルンゲル', pokemon_id: '593'},
        {pokemon_name: 'フレフワン', pokemon_id: '683'},
        {pokemon_name: 'フローゼル', pokemon_id: '419'},
        {pokemon_name: 'ブロスター', pokemon_id: '694'},
        {pokemon_name: 'プロトーガ', pokemon_id: '564'},
        {pokemon_name: 'フワライド', pokemon_id: '426'},
        {pokemon_name: 'フワンテ', pokemon_id: '425'},
        {pokemon_name: 'ヘイガニ', pokemon_id: '341'},
        {pokemon_name: 'ベイリーフ', pokemon_id: '153'},
        {pokemon_name: 'ベトベター', pokemon_id: '088'},
        {pokemon_name: 'ベトベトン', pokemon_id: '089'},
        {pokemon_name: 'ヘラクロス', pokemon_id: '214'},
        {pokemon_name: 'ペラップ', pokemon_id: '441'},
        {pokemon_name: 'ペリッパー', pokemon_id: '279'},
        {pokemon_name: 'ヘルガー', pokemon_id: '229'},
        {pokemon_name: 'ペルシアン', pokemon_id: '053'},
        {pokemon_name: 'ペロッパフ', pokemon_id: '684'},
        {pokemon_name: 'ベロベルト', pokemon_id: '463'},
        {pokemon_name: 'ペロリーム', pokemon_id: '685'},
        {pokemon_name: 'ベロリンガ', pokemon_id: '108'},
        {pokemon_name: 'ペンドラー', pokemon_id: '545'},
        {pokemon_name: 'ホーホー', pokemon_id: '163'},
        {pokemon_name: 'ボーマンダ', pokemon_id: '373'},
        {pokemon_name: 'ホイーガ', pokemon_id: '544'},
        {pokemon_name: 'ホウオウ', pokemon_id: '250'},
        {pokemon_name: 'ホエルオー', pokemon_id: '321'},
        {pokemon_name: 'ホエルコ', pokemon_id: '320'},
        {pokemon_name: 'ポカブ', pokemon_id: '498'},
        {pokemon_name: 'ボクレー', pokemon_id: '708'},
        {pokemon_name: 'ボスゴドラ', pokemon_id: '306'},
        {pokemon_name: 'ポチエナ', pokemon_id: '261'},
        {pokemon_name: 'ポッタイシ', pokemon_id: '394'},
        {pokemon_name: 'ポッチャマ', pokemon_id: '393'},
        {pokemon_name: 'ポッポ', pokemon_id: '016'},
        {pokemon_name: 'ポニータ', pokemon_id: '077'},
        {pokemon_name: 'ポポッコ', pokemon_id: '188'},
        {pokemon_name: 'ポリゴン', pokemon_id: '137'},
        {pokemon_name: 'ポリゴン2', pokemon_id: '233'},
        {pokemon_name: 'ポリゴンZ', pokemon_id: '474'},
        {pokemon_name: 'ホルード', pokemon_id: '660'},
        {pokemon_name: 'ボルトロス(けしんフォルム)', pokemon_id: '642'},
        {pokemon_name: 'ボルトロス(れいじゅうフォルム)', pokemon_id: '642_therian'},
        {pokemon_name: 'ホルビー', pokemon_id: '659'},
        {pokemon_name: 'ホワイトキュレム', pokemon_id: '646_white'},
        {pokemon_name: 'ポワルン', pokemon_id: '351'},
        {pokemon_name: 'マーイーカ', pokemon_id: '687'},
        {pokemon_name: 'マイナン', pokemon_id: '312'},
        {pokemon_name: 'マグカルゴ', pokemon_id: '219'},
        {pokemon_name: 'マクノシタ', pokemon_id: '296'},
        {pokemon_name: 'マグマッグ', pokemon_id: '218'},
        {pokemon_name: 'マグマラシ', pokemon_id: '156'},
        {pokemon_name: 'マスキッパ', pokemon_id: '455'},
        {pokemon_name: 'マダツボミ', pokemon_id: '069'},
        {pokemon_name: 'マタドガス', pokemon_id: '110'},
        {pokemon_name: 'マッギョ', pokemon_id: '618'},
        {pokemon_name: 'マッスグマ', pokemon_id: '264'},
        {pokemon_name: 'マナフィ', pokemon_id: '490'},
        {pokemon_name: 'マニューラ', pokemon_id: '461'},
        {pokemon_name: 'マネネ', pokemon_id: '439'},
        {pokemon_name: 'マフォクシー', pokemon_id: '655'},
        {pokemon_name: 'ママンボウ', pokemon_id: '594'},
        {pokemon_name: 'マメパト', pokemon_id: '519'},
        {pokemon_name: 'マユルド', pokemon_id: '268'},
        {pokemon_name: 'マラカッチ', pokemon_id: '556'},
        {pokemon_name: 'マリル', pokemon_id: '183'},
        {pokemon_name: 'マリルリ', pokemon_id: '184'},
        {pokemon_name: 'マルノーム', pokemon_id: '317'},
        {pokemon_name: 'マルマイン', pokemon_id: '101'},
        {pokemon_name: 'マンキー', pokemon_id: '056'},
        {pokemon_name: 'マンタイン', pokemon_id: '226'},
        {pokemon_name: 'マンムー', pokemon_id: '473'},
        {pokemon_name: 'ミカルゲ', pokemon_id: '442'},
        {pokemon_name: 'ミジュマル', pokemon_id: '501'},
        {pokemon_name: 'ミズゴロウ', pokemon_id: '258'},
        {pokemon_name: 'ミツハニー', pokemon_id: '415'},
        {pokemon_name: 'ミニリュウ', pokemon_id: '147'},
        {pokemon_name: 'ミネズミ', pokemon_id: '504'},
        {pokemon_name: 'ミノマダム(くさきのミノ)', pokemon_id: '413_plant'},
        {pokemon_name: 'ミノマダム(ゴミのミノ)', pokemon_id: '413_trash'},
        {pokemon_name: 'ミノマダム(すなちのミノ)', pokemon_id: '413_sandy'},
        {pokemon_name: 'ミノムッチ', pokemon_id: '412'},
        {pokemon_name: 'ミミロップ', pokemon_id: '428'},
        {pokemon_name: 'ミミロル', pokemon_id: '427'},
        {pokemon_name: 'ミュウ', pokemon_id: '151'},
        {pokemon_name: 'ミュウツー', pokemon_id: '150'},
        {pokemon_name: 'ミルタンク', pokemon_id: '241'},
        {pokemon_name: 'ミルホッグ', pokemon_id: '505'},
        {pokemon_name: 'ミロカロス', pokemon_id: '350'},
        {pokemon_name: 'ムーランド', pokemon_id: '508'},
        {pokemon_name: 'ムウマ', pokemon_id: '200'},
        {pokemon_name: 'ムウマージ', pokemon_id: '429'},
        {pokemon_name: 'ムクバード', pokemon_id: '397'},
        {pokemon_name: 'ムクホーク', pokemon_id: '398'},
        {pokemon_name: 'ムシャーナ', pokemon_id: '518'},
        {pokemon_name: 'ムチュール', pokemon_id: '238'},
        {pokemon_name: 'ムックル', pokemon_id: '396'},
        {pokemon_name: 'ムンナ', pokemon_id: '517'},
        {pokemon_name: 'メェークル', pokemon_id: '672'},
        {pokemon_name: 'メガニウム', pokemon_id: '154'},
        {pokemon_name: 'メガヤンマ', pokemon_id: '469'},
        {pokemon_name: 'メグロコ', pokemon_id: '551'},
        {pokemon_name: 'メタグロス', pokemon_id: '376'},
        {pokemon_name: 'メタモン', pokemon_id: '132'},
        {pokemon_name: 'メタング', pokemon_id: '375'},
        {pokemon_name: 'メノクラゲ', pokemon_id: '072'},
        {pokemon_name: 'メブキジカ', pokemon_id: '586'},
        {pokemon_name: 'メラルバ', pokemon_id: '636'},
        {pokemon_name: 'メリープ', pokemon_id: '179'},
        {pokemon_name: 'メレシー', pokemon_id: '703'},
        {pokemon_name: 'メロエッタ(ステップフォルム)', pokemon_id: '648_piroutte'},
        {pokemon_name: 'メロエッタ(ボイスフォルム)', pokemon_id: '648'},
        {pokemon_name: 'モウカザル', pokemon_id: '391'},
        {pokemon_name: 'モグリュー', pokemon_id: '529'},
        {pokemon_name: 'モココ', pokemon_id: '180'},
        {pokemon_name: 'モジャンボ', pokemon_id: '465'},
        {pokemon_name: 'モノズ', pokemon_id: '633'},
        {pokemon_name: 'モルフォン', pokemon_id: '049'},
        {pokemon_name: 'モロバレル', pokemon_id: '591'},
        {pokemon_name: 'モンジャラ', pokemon_id: '114'},
        {pokemon_name: 'モンメン', pokemon_id: '546'},
        {pokemon_name: 'ヤジロン', pokemon_id: '343'},
        {pokemon_name: 'ヤドキング', pokemon_id: '199'},
        {pokemon_name: 'ヤドラン', pokemon_id: '080'},
        {pokemon_name: 'ヤドン', pokemon_id: '079'},
        {pokemon_name: 'ヤナッキー', pokemon_id: '512'},
        {pokemon_name: 'ヤナップ', pokemon_id: '511'},
        {pokemon_name: 'ヤブクロン', pokemon_id: '568'},
        {pokemon_name: 'ヤミカラス', pokemon_id: '198'},
        {pokemon_name: 'ヤミラミ', pokemon_id: '302'},
        {pokemon_name: 'ヤヤコマ', pokemon_id: '661'},
        {pokemon_name: 'ヤルキモノ', pokemon_id: '288'},
        {pokemon_name: 'ヤンチャム', pokemon_id: '674'},
        {pokemon_name: 'ヤンヤンマ', pokemon_id: '193'},
        {pokemon_name: 'ユキカブリ', pokemon_id: '459'},
        {pokemon_name: 'ユキノオー', pokemon_id: '460'},
        {pokemon_name: 'ユキメノコ', pokemon_id: '478'},
        {pokemon_name: 'ユキワラシ', pokemon_id: '361'},
        {pokemon_name: 'ユクシー', pokemon_id: '480'},
        {pokemon_name: 'ユニラン', pokemon_id: '577'},
        {pokemon_name: 'ユレイドル', pokemon_id: '346'},
        {pokemon_name: 'ユンゲラー', pokemon_id: '064'},
        {pokemon_name: 'ヨーギラス', pokemon_id: '246'},
        {pokemon_name: 'ヨーテリー', pokemon_id: '506'},
        {pokemon_name: 'ヨノワール', pokemon_id: '477'},
        {pokemon_name: 'ヨマワル', pokemon_id: '355'},
        {pokemon_name: 'ヨルノズク', pokemon_id: '164'},
        {pokemon_name: 'ライコウ', pokemon_id: '243'},
        {pokemon_name: 'ライチュウ', pokemon_id: '026'},
        {pokemon_name: 'ライボルト', pokemon_id: '310'},
        {pokemon_name: 'ラグラージ', pokemon_id: '260'},
        {pokemon_name: 'ラクライ', pokemon_id: '309'},
        {pokemon_name: 'ラッキー', pokemon_id: '113'},
        {pokemon_name: 'ラッタ', pokemon_id: '020'},
        {pokemon_name: 'ラティアス', pokemon_id: '380'},
        {pokemon_name: 'ラティオス', pokemon_id: '381'},
        {pokemon_name: 'ラブカス', pokemon_id: '370'},
        {pokemon_name: 'ラプラス', pokemon_id: '131'},
        {pokemon_name: 'ラフレシア', pokemon_id: '045'},
        {pokemon_name: 'ラムパルド', pokemon_id: '409'},
        {pokemon_name: 'ラルトス', pokemon_id: '280'},
        {pokemon_name: 'ランクルス', pokemon_id: '579'},
        {pokemon_name: 'ランターン', pokemon_id: '171'},
        {pokemon_name: 'ランドロス(けしんフォルム)', pokemon_id: '645'},
        {pokemon_name: 'ランドロス(れいじゅうフォルム)', pokemon_id: '645_therian'},
        {pokemon_name: 'ランプラー', pokemon_id: '608'},
        {pokemon_name: 'リーシャン', pokemon_id: '433'},
        {pokemon_name: 'リーフィア', pokemon_id: '470'},
        {pokemon_name: 'リオル', pokemon_id: '447'},
        {pokemon_name: 'リグレー', pokemon_id: '605'},
        {pokemon_name: 'リザード', pokemon_id: '005'},
        {pokemon_name: 'リザードン', pokemon_id: '006'},
        {pokemon_name: 'リリーラ', pokemon_id: '345'},
        {pokemon_name: 'リングマ', pokemon_id: '217'},
        {pokemon_name: 'ルージュラ', pokemon_id: '124'},
        {pokemon_name: 'ルカリオ', pokemon_id: '448'},
        {pokemon_name: 'ルギア', pokemon_id: '249'},
        {pokemon_name: 'ルクシオ', pokemon_id: '404'},
        {pokemon_name: 'ルチャブル', pokemon_id: '702'},
        {pokemon_name: 'ルナトーン', pokemon_id: '337'},
        {pokemon_name: 'ルリリ', pokemon_id: '298'},
        {pokemon_name: 'ルンパッパ', pokemon_id: '272'},
        {pokemon_name: 'レアコイル', pokemon_id: '082'},
        {pokemon_name: 'レジアイス', pokemon_id: '378'},
        {pokemon_name: 'レジギガス', pokemon_id: '486'},
        {pokemon_name: 'レジスチル', pokemon_id: '379'},
        {pokemon_name: 'レシラム', pokemon_id: '643'},
        {pokemon_name: 'レジロック', pokemon_id: '377'},
        {pokemon_name: 'レックウザ', pokemon_id: '384'},
        {pokemon_name: 'レディアン', pokemon_id: '166'},
        {pokemon_name: 'レディバ', pokemon_id: '165'},
        {pokemon_name: 'レパルダス', pokemon_id: '510'},
        {pokemon_name: 'レントラー', pokemon_id: '405'},
        {pokemon_name: 'ローブシン', pokemon_id: '534'},
        {pokemon_name: 'ロコン', pokemon_id: '037'},
        {pokemon_name: 'ロズレイド', pokemon_id: '407'},
        {pokemon_name: 'ロゼリア', pokemon_id: '315'},
        {pokemon_name: 'ロトム', pokemon_id: '479'},
        {pokemon_name: 'ロトム(ウォッシュフォルム)', pokemon_id: '479_wash'},
        {pokemon_name: 'ロトム(カットフォルム)', pokemon_id: '479_mow'},
        {pokemon_name: 'ロトム(スピンフォルム)', pokemon_id: '479_fan'},
        {pokemon_name: 'ロトム(ヒートフォルム)', pokemon_id: '479_heat'},
        {pokemon_name: 'ロトム(フロストフォルム)', pokemon_id: '479_frost'},
        {pokemon_name: 'ワカシャモ', pokemon_id: '256'},
        {pokemon_name: 'ワシボン', pokemon_id: '627'},
        {pokemon_name: 'ワタッコ', pokemon_id: '189'},
        {pokemon_name: 'ワニノコ', pokemon_id: '158'},
        {pokemon_name: 'ワルビアル', pokemon_id: '553'},
        {pokemon_name: 'ワルビル', pokemon_id: '552'},
        {pokemon_name: 'ワンリキー', pokemon_id: '066'}
        //{pokemon_name: 'メガアブソル', pokemon_id: '359_mega'},
        //{pokemon_name: 'メガカイロス', pokemon_id: '127_mega'},
        //{pokemon_name: 'メガガブリアス', pokemon_id: '445_mega'},
        //{pokemon_name: 'メガカメックス', pokemon_id: '009_mega'},
        //{pokemon_name: 'メガガルーラ', pokemon_id: '115_mega'},
        //{pokemon_name: 'メガギャラドス', pokemon_id: '130_mega'},
        //{pokemon_name: 'メガクチート', pokemon_id: '303_mega'},
        //{pokemon_name: 'メガゲンガー', pokemon_id: '094_mega'},
        //{pokemon_name: 'メガサーナイト', pokemon_id: '282_mega'},
        //{pokemon_name: 'メガジュペッタ', pokemon_id: '354_mega'},
        //{pokemon_name: 'メガチャーレム', pokemon_id: '308_mega'},
        //{pokemon_name: 'メガデンリュウ', pokemon_id: '181_mega'},
        //{pokemon_name: 'メガバシャーモ', pokemon_id: '257_mega'},
        //{pokemon_name: 'メガハッサム', pokemon_id: '212_mega'},
        //{pokemon_name: 'メガバンギラス', pokemon_id: '248_mega'},
        //{pokemon_name: 'メガフーディン', pokemon_id: '065_mega'},
        //{pokemon_name: 'メガフシギバナ', pokemon_id: '003_mega'},
        //{pokemon_name: 'メガプテラ', pokemon_id: '142_mega'},
        //{pokemon_name: 'メガヘラクロス', pokemon_id: '214_mega'},
        //{pokemon_name: 'メガヘルガー', pokemon_id: '229_mega'},
        //{pokemon_name: 'メガボスゴドラ', pokemon_id: '306_mega'},
        //{pokemon_name: 'メガミュウツーX', pokemon_id: '150_mega_x'},
        //{pokemon_name: 'メガミュウツーY', pokemon_id: '150_mega_y'},
        //{pokemon_name: 'メガユキノオー', pokemon_id: '460_mega'},
        //{pokemon_name: 'メガライボルト', pokemon_id: '310_mega'},
        //{pokemon_name: 'メガリザードンX', pokemon_id: '006_mega_x'},
        //{pokemon_name: 'メガリザードンY', pokemon_id: '006_mega_y'},
        //{pokemon_name: 'メガルカリオ', pokemon_id: '448_mega'},
    ];

    export var moves = [
        {move_name: 'かみなり', move_id: 'thunder'},
        {move_name: 'ハイドロポンプ', move_id: 'hydroPump'},
        {move_name: 'あくのはどう', move_id: 'darkPulse'},
        {move_name: 'ほうでん', move_id: 'discharge'}
    ];

    export var abilites = [
        {abilites_name: 'アイスボディ', abilites_id: 'iceBody'},
        {abilites_name: 'あくしゅう', abilites_id: 'stench'},
        {abilites_name: 'あついしぼう', abilites_id: 'thickFat'},
        {abilites_name: 'あとだし', abilites_id: 'stall'},
        {abilites_name: 'アナライズ', abilites_id: 'analytic'},
        {abilites_name: 'あまのじゃく', abilites_id: 'contrary'},
        {abilites_name: 'あめうけざら', abilites_id: 'rainDish'},
        {abilites_name: 'あめふらし', abilites_id: 'drizzle'},
        {abilites_name: 'ありじごく', abilites_id: 'arenaTrap'},
        {abilites_name: 'いかく', abilites_id: 'intimidate'},
        {abilites_name: 'いかりのつぼ', abilites_id: 'angerPoint'},
        {abilites_name: 'いしあたま', abilites_id: 'rockHead'},
        {abilites_name: 'いたずらごころ', abilites_id: 'prankster'},
        {abilites_name: 'いやしのこころ', abilites_id: 'healer'},
        {abilites_name: 'イリュージョン', abilites_id: 'illusion'},
        {abilites_name: 'いろめがね', abilites_id: 'tintedLens'},
        {abilites_name: 'うるおいボディ', abilites_id: 'hydration'},
        {abilites_name: 'エアロック', abilites_id: 'airLock'},
        {abilites_name: 'おみとおし', abilites_id: 'frisk'},
        {abilites_name: 'かいりきバサミ', abilites_id: 'hyperCutter'},
        {abilites_name: 'かげふみ', abilites_id: 'shadowTag'},
        {abilites_name: 'かそく', abilites_id: 'speedBoost'},
        {abilites_name: 'かたやぶり', abilites_id: 'moldBreaker'},
        {abilites_name: 'カブトアーマー', abilites_id: 'battleArmor'},
        {abilites_name: 'かるわざ', abilites_id: 'unburden'},
        {abilites_name: 'かわりもの', abilites_id: 'imposter'},
        {abilites_name: 'がんじょう　', abilites_id: 'sturdy'},
        {abilites_name: 'かんそうはだ', abilites_id: 'drySkin'},
        {abilites_name: 'きけんよち', abilites_id: 'anticipation'},
        {abilites_name: 'きもったま', abilites_id: 'scrappy'},
        {abilites_name: 'きゅうばん', abilites_id: 'suctionCups'},
        {abilites_name: 'きょううん', abilites_id: 'superLuck'},
        {abilites_name: 'きんちょうかん', abilites_id: 'unnerve'},
        {abilites_name: 'くいしんぼう', abilites_id: 'gluttony'},
        {abilites_name: 'くだけるよろい', abilites_id: 'weakArmor'},
        {abilites_name: 'クリアボディ', abilites_id: 'clearBody'},
        {abilites_name: 'げきりゅう', abilites_id: 'torrent'},
        {abilites_name: 'こんじょう', abilites_id: 'guts'},
        {abilites_name: 'さいせいりょく', abilites_id: 'regenerator'},
        {abilites_name: 'さめはだ', abilites_id: 'roughSkin'},
        {abilites_name: 'サンパワー', abilites_id: 'solarPower'},
        {abilites_name: 'シェルアーマー　', abilites_id: 'shellArmor'},
        {abilites_name: 'じしんかじょう', abilites_id: 'moxie'},
        {abilites_name: 'しぜんかいふく', abilites_id: 'naturalCure'},
        {abilites_name: 'しめりけ', abilites_id: 'damp'},
        {abilites_name: 'しゅうかく', abilites_id: 'harvest'},
        {abilites_name: 'じゅうなん', abilites_id: 'limber'},
        {abilites_name: 'しょうりのほし', abilites_id: 'victoryStar'},
        {abilites_name: 'じりょく', abilites_id: 'magnetPull'},
        {abilites_name: 'しろいけむり', abilites_id: 'whiteSmoke'},
        {abilites_name: 'シンクロ', abilites_id: 'synchronize'},
        {abilites_name: 'しんりょく', abilites_id: 'overgrow'},
        {abilites_name: 'すいすい', abilites_id: 'swiftSwim'},
        {abilites_name: 'スキルリンク', abilites_id: 'skillLink'},
        {abilites_name: 'すてみ', abilites_id: 'reckless'},
        {abilites_name: 'スナイパー', abilites_id: 'sniper'},
        {abilites_name: 'すなおこし', abilites_id: 'sandStream'},
        {abilites_name: 'すなかき', abilites_id: 'sandRush'},
        {abilites_name: 'すながくれ', abilites_id: 'sandVeil'},
        {abilites_name: 'すなのちから', abilites_id: 'sandForce'},
        {abilites_name: 'すりぬけ', abilites_id: 'infiltrator'},
        {abilites_name: 'するどいめ', abilites_id: 'keenEye'},
        {abilites_name: 'スロースタート', abilites_id: 'slowStart'},
        {abilites_name: 'せいぎのこころ', abilites_id: 'justified'},
        {abilites_name: 'せいしんりょく', abilites_id: 'innerFocus'},
        {abilites_name: 'せいでんき', abilites_id: 'staticElectricity'},
        {abilites_name: 'そうしょく', abilites_id: 'sapSipper'},
        {abilites_name: 'ターボブレイズ', abilites_id: 'turboblaze'},
        {abilites_name: 'たいねつ', abilites_id: 'heatproof'},
        {abilites_name: 'ダウンロード', abilites_id: 'download'},
        {abilites_name: 'だっぴ', abilites_id: 'shedSkin'},
        {abilites_name: 'ダルマモード', abilites_id: 'zenMode'},
        {abilites_name: 'たんじゅん', abilites_id: 'simple'},
        {abilites_name: 'ちからずく', abilites_id: 'sheerForce'},
        {abilites_name: 'ちからもち', abilites_id: 'hugePower'},
        {abilites_name: 'ちくでん', abilites_id: 'voltAbsorb'},
        {abilites_name: 'ちどりあし', abilites_id: 'tangledFeet'},
        {abilites_name: 'ちょすい', abilites_id: 'waterAbsorb'},
        {abilites_name: 'てきおうりょく', abilites_id: 'adaptability'},
        {abilites_name: 'テクニシャン', abilites_id: 'technician'},
        {abilites_name: 'てつのこぶし', abilites_id: 'ironFist'},
        {abilites_name: 'てつのトゲ', abilites_id: 'ironBarbs'},
        {abilites_name: 'テラボルテージ', abilites_id: 'teravolt'},
        {abilites_name: 'テレパシー', abilites_id: 'telepathy'},
        {abilites_name: 'でんきエンジン', abilites_id: 'motorDrive'},
        {abilites_name: 'てんきや', abilites_id: 'forecast'},
        {abilites_name: 'てんねん', abilites_id: 'unaware'},
        {abilites_name: 'てんのめぐみ', abilites_id: 'sereneGrace'},
        {abilites_name: 'とうそうしん', abilites_id: 'rivalry'},
        {abilites_name: 'どくしゅ', abilites_id: 'poisonTouch'},
        {abilites_name: 'どくのトゲ', abilites_id: 'poisonPoint'},
        {abilites_name: 'どくぼうそう', abilites_id: 'toxicBoost'},
        {abilites_name: 'トレース', abilites_id: 'trace'},
        {abilites_name: 'どんかん', abilites_id: 'oblivious'},
        {abilites_name: 'ナイトメア', abilites_id: 'badDreams'},
        {abilites_name: 'なまけ', abilites_id: 'truant'},
        {abilites_name: 'にげあし', abilites_id: 'runAway'},
        {abilites_name: 'ねつぼうそう', abilites_id: 'flareBoost'},
        {abilites_name: 'ねんちゃく', abilites_id: 'stickyHold'},
        {abilites_name: 'ノーガード', abilites_id: 'noGuard'},
        {abilites_name: 'ノーてんき', abilites_id: 'cloudNine'},
        {abilites_name: 'ノーマルスキン', abilites_id: 'normalize'},
        {abilites_name: 'のろわれボディ', abilites_id: 'cursedBody'},
        {abilites_name: 'ハードロック', abilites_id: 'solidRock'},
        {abilites_name: 'はっこう', abilites_id: 'illuminate'},
        {abilites_name: 'はとむね', abilites_id: 'bigPecks'},
        {abilites_name: 'はやあし', abilites_id: 'quickFeet'},
        {abilites_name: 'はやおき', abilites_id: 'earlyBird'},
        {abilites_name: 'はりきり', abilites_id: 'hustle'},
        {abilites_name: 'ひでり', abilites_id: 'drought'},
        {abilites_name: 'びびり', abilites_id: 'rattled'},
        {abilites_name: 'ひらいしん　', abilites_id: 'lightningrod'},
        {abilites_name: 'フィルター', abilites_id: 'filter'},
        {abilites_name: 'ぶきよう', abilites_id: 'klutz'},
        {abilites_name: 'ふくがん', abilites_id: 'compoundeyes'},
        {abilites_name: 'ふくつのこころ', abilites_id: 'steadfast'},
        {abilites_name: 'ふしぎなうろこ', abilites_id: 'marvelScale'},
        {abilites_name: 'ふしぎなまもり', abilites_id: 'wonderGuard'},
        {abilites_name: 'ふみん', abilites_id: 'insomnia'},
        {abilites_name: 'ふゆう', abilites_id: 'levitate'},
        {abilites_name: 'プラス', abilites_id: 'plus'},
        {abilites_name: 'フラワーギフト', abilites_id: 'flowerGift'},
        {abilites_name: 'プレッシャー', abilites_id: 'pressure'},
        {abilites_name: 'フレンドガード', abilites_id: 'friendGuard'},
        {abilites_name: 'ヘヴィメタル', abilites_id: 'heavyMetal'},
        {abilites_name: 'ヘドロ液', abilites_id: 'liquidOoze'},
        {abilites_name: 'へんしょく', abilites_id: 'colorChange'},
        {abilites_name: 'ポイズンヒール', abilites_id: 'poisonHeal'},
        {abilites_name: 'ぼうおん', abilites_id: 'soundproof'},
        {abilites_name: 'ほうし', abilites_id: 'effectSpore'},
        {abilites_name: 'ぼうじん', abilites_id: 'overcoat'},
        {abilites_name: 'ほのおのからだ', abilites_id: 'flameBody'},
        {abilites_name: 'マイナス', abilites_id: 'minus'},
        {abilites_name: 'マイペース　', abilites_id: 'ownTempo'},
        {abilites_name: 'マグマのよろい', abilites_id: 'magmaArmor'},
        {abilites_name: 'まけんき', abilites_id: 'defiant'},
        {abilites_name: 'マジックガード', abilites_id: 'magicGuard'},
        {abilites_name: 'マジックミラー', abilites_id: 'magicBounce'},
        {abilites_name: 'マルチスケイル', abilites_id: 'multiscale'},
        {abilites_name: 'マルチタイプ', abilites_id: 'multitype'},
        {abilites_name: 'ミイラ', abilites_id: 'mummy'},
        {abilites_name: 'みずのベール', abilites_id: 'waterVeil'},
        {abilites_name: 'みつあつめ', abilites_id: 'honeyGather'},
        {abilites_name: 'ミラクルスキン', abilites_id: 'wonderSkin'},
        {abilites_name: 'むしのしらせ', abilites_id: 'swarm'},
        {abilites_name: 'ムラっけ', abilites_id: 'moody'},
        {abilites_name: 'メロメロボディ', abilites_id: 'cuteCharm'},
        {abilites_name: 'めんえき', abilites_id: 'immunity'},
        {abilites_name: 'もうか', abilites_id: 'blaze'},
        {abilites_name: 'ものひろい', abilites_id: 'pickup'},
        {abilites_name: 'もらいび', abilites_id: 'flashFire'},
        {abilites_name: 'やるき', abilites_id: 'vitalSpirit'},
        {abilites_name: 'ゆうばく', abilites_id: 'aftermath'},
        {abilites_name: 'ゆきがくれ', abilites_id: 'snowCloak'},
        {abilites_name: 'ゆきふらし', abilites_id: 'snowWarning'},
        {abilites_name: 'ようりょくそ', abilites_id: 'chlorophyll'},
        {abilites_name: 'ヨガパワー', abilites_id: 'purePower'},
        {abilites_name: 'よちむ', abilites_id: 'forewarn'},
        {abilites_name: 'よびみず', abilites_id: 'stormDrain'},
        {abilites_name: 'よわき', abilites_id: 'defeatist'},
        {abilites_name: 'ライトメタル', abilites_id: 'lightMetal'},
        {abilites_name: 'リーフガード', abilites_id: 'leafGuard'},
        {abilites_name: 'りんぷん', abilites_id: 'shieldDust'},
        {abilites_name: 'わるいてぐせ', abilites_id: 'pickpocket'}
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
}
