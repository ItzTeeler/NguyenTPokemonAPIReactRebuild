import React from 'react'
import pichuPic from '../assets/pichuEvo.png'
import pikachuPic from '../assets/PokedexPikaChuPh.png'
import raichuPic from '../assets/raichuevo.png'
import pokeballIcon from '../assets/Pokeballicon.png'
import unFavHeart from '../assets/Unfav.png'
import pokeImg from '../assets/PokedexPikaChuPh.png'

const PokedexPageComponent = () => {
  return (

    <div class=" grid grid-cols-12">
        <div class=" col-span-12 lg:col-span-7 order-2 lg:order-1 bg-[#616161] drop-shadow-lg max-h-full pt-[3.125rem]">
            <div class="grid xl:flex xl:justify-between mx-[2.5rem] 2xl:mx-[5.125rem] lg:mb-[3.125rem]">

                <p class="hidden lg:block font-[Orbitron-Bold] text-[3.125rem] md:text-[4rem] lg:text-[6.25rem]">
                    <span class="text-[#FF0000] textStroke">Poke</span><span class="text-white textStroke">Dex</span>
                </p>

                <button id="randomPokemon"
                    class="hidden lg:block font-[Orbitron-Bold] text-[1.875rem] md:text-[3rem] bg-[#FF1C1C] rounded-[10px] my-5 p-5 text-white">Random
                </button>


            </div>
            <div class="mx-[82px]">
                <p class="font-[Orbitron-Bold] text-[1.875rem] md:text-[2.5rem] mb-[50px]"><span id="abilityColor"
                        class="textStroke text-[#F8D030]">Abilities : </span>
                    <span id="abilitiesText" class="text-white"> Static; Lightning Rod</span>
                </p>
                <p
                    class="font-[Orbitron-Bold] text-[1.875rem] md:text-[2.5rem] overflow-y-scroll max-h-[200px] mb-[50px]">
                    <span id="movesColor" class="textStroke text-[#F8D030]">Moves :
                    </span> <span id="movesText" class="text-white"> [The standard chunk of Lorem Ipsum used since the
                        1500s is
                        reproduced below
                        for those interested. Sections]</span>
                </p>
                <p class="font-[Orbitron-Bold] text-[1.875rem] md:text-[2.5rem] mb-[50px]"><span id="locationColor"
                        class="textStroke text-[#F8D030]">Location : </span>
                    <span class="text-white" id="locationText"> Sinnoh, Trophy Gargen</span>
                </p>
            </div>
            <div class="px-[82px]">
                <p id="evolutionColors"
                    class="font-[Orbitron-Bold] text-[1.875rem] md:text-[2.5rem] textStroke text-[#F8D030] mb-[32px]">
                    Evolutions :</p>
                <div class="overflow-y-scroll max-w-[923px] max-h-[874px] lg:max-h-[320px] mx-auto">
                    <div class="grid grid-cols-3 justify-evenly" id="evolutionDiv">
                        <div class="col-span-3 lg:col-span-1 grid justify-center mb-[30px]">
                            <img src={pichuPic} alt="Pichu Picture"
                                class="rounded-[200px] border-white border-[5px] w-[200px] h-[200px] drop-shadow-lg"/>
                            <div class="flex contents-center lg:flex-row">

                                <p class="font-[Orbitron-Bold] text-[1.875rem] text-center text-white">Pichu</p>
                                <p class="font-[Orbitron-Bold] text-[1.875rem] text-center text-[#A4ACAF]">#172</p>
                            </div>
                        </div>
                        <div class="col-span-3 lg:col-span-1 grid justify-center mb-[30px]">
                            <img src={pikachuPic} alt="Pikachu Picture"
                                class="rounded-[200px] border-white border-[5px] w-[200px] h-[200px] drop-shadow-lg"/>
                            <div class="flex contents-center lg:flex-row">

                                <p class="font-[Orbitron-Bold] text-[1.875rem] text-center text-white">Pikachu</p>
                                <p class="font-[Orbitron-Bold] text-[1.875rem] text-center text-[#A4ACAF]">#25</p>
                            </div>
                        </div>
                        <div class="col-span-3 lg:col-span-1 grid justify-center mb-[30px]">
                            <img src={raichuPic} alt="Raichu Picture"
                                class="rounded-[200px] border-white border-[5px] w-[200px] h-[200px] drop-shadow-lg"/>

                            <div class="flex contents-center lg:flex-row">
                                <p class="font-[Orbitron-Bold] text-[1.875rem] text-center text-white">Raichu</p>
                                <p class="font-[Orbitron-Bold] text-[1.875rem] text-center text-[#A4ACAF]">#26</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid justify-center">
                    <button id="randomPokemonTwo"
                        class="block lg:hidden font-[Orbitron-Bold] text-[1.875rem] md:text-[3.125rem] bg-[#FF1C1C] rounded-[10px] my-5 p-5 text-white">Random
                    </button>
                </div>
            </div>
        </div>

        <div id="pokemonColorBack" class="col-span-12 lg:col-span-5 order-1 lg:order-2 bg-[#F8D030] max-h-full">
            <p
                class="block lg:hidden font-[Orbitron-Bold] text-[3.125rem] text-center md:text-[6.25rem] lg:text-[6.25rem] pt-[1.875rem]">
                <span class="text-[#FF0000] textStroke">Poke</span><span class="text-white textStroke">Dex</span>
            </p>
            <div class="flex justify-center mt-[50px]">

                <input type="text" id="userSearchInput"
                    class="font-[Orbitron-Bold] text-[1.25rem] min-h-[63px]  md:text-[1.875rem] text-black rounded-[10px] w-full mx-[3.5625rem] lg:mx-[6.875rem]"
                    placeholder="Search Name or ID"/>
            </div>
            <div class="flex justify-center items-center mt-[23px]">
                <img src={pokeballIcon} class="mx-2 h-[50px] w-[50px] md:h-[70px] md:w-[70px]" alt="Pokeball Icon"/>
                <p id="pokemonId" class="mx-2 font-[Orbitron-Bold] text-[1.875rem] md:text-[3.125rem]">#25</p>
                <img id="pokemonFavorite" src={unFavHeart} class="mx-2 h-[40px] w-[40px] cursor-pointer" alt="UnFav Heart"/>
            </div>
            <div class="flex justify-center">
                <p id="pokemonName"
                    class="font-[Orbitron-Bold] text-center text-[1.875rem] md:text-[3.125rem] mt-[17px]">Pikachu</p>
            </div>
            <div class="flex justify-center">
                <p class="font-[Orbitron-Bold] text-[1.25rem] p-0 m-0">Click Picture for Shiny</p>
            </div>
            <div class="flex justify-center drop-shadow-lg">
                <img id="pokemonImg" src={pokeImg}
                    class="h-[250px] w-[250px] md:h-[500px] md:w-[500px] mx-5 cursorImg bg-white rounded-[500px] mt-[5px]"
                    alt="Pokemon Image"/>
            </div>
            <div class="flex justify-center">
                <p id="elementType" class="font-[Orbitron-Bold] text-[1.875rem] md:text-[3.125rem] mt-[30px]">Type :
                    Electric</p>
            </div>
            <div class="flex justify-center mt-[30px]">
                {/* <!-- drawer init and show --> */}
                <div class="text-center mb-[40px]">
                    <button id="getFavoriteBtn"
                        class="text-white text-[Orbitron-Bold] bg-[#FF1C1C] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[10px] text-[1.875rem] lg:text-[3.125rem] px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
                        aria-controls="drawer-navigation">
                        Open Favorite
                    </button>
                </div>

                {/* <!-- drawer component --> */}
                <div id="drawer-navigation"
                    class="fixed top-0 bg-[#A4ACAF] left-0 z-40 w-full lg:w-[420px] h-screen p-4 overflow-y-auto transition-transform -translate-x-full dark:bg-gray-800"
                    tabindex="-1" aria-labelledby="drawer-navigation-label">
                    <p id="drawer-navigation-label" class="text-white font-[Orbitron-Bold] text-[2.8rem] uppercase">
                        Favorite</p>
                    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
                        class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-6 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-[50px] h-[50px] grid" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close menu</span>
                    </button>
                    <div class="py-4 overflow-y-auto ">
                        <div id="getFavoritesDiv">
                        </div>
                    </div>

                    <div id="conModal" class="modalBox">
                        <div class="modalText">
                            <p>Are you sure you want to remove this Pokemon from favorites?</p>
                            <div class="modal-buttons">
                                <button id="confirmBtn" class="greenBtn">Confirm</button>
                                <button id="cancelBtn" class="redBtn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default PokedexPageComponent
