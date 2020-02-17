/**
 * @copyright 2020 Adam (charrondev) Charron
 * @license MIT
 */

import React from "react";
import styled from "styled-components";
import { getPokemon, makeSpriteUrl } from "../data/pokedex";

interface IProps {
    pokemonIdentifier: string;
}

const Root = styled.div`
    display: flex;
    align-items: center;
`;

const MetaList = styled.ul``;

const MetaItem = styled.li`
    list-style: none;
`;

export function PokemonSpriteAndInfo(props: IProps) {
    const dexMon = getPokemon(props.pokemonIdentifier);
    if (!dexMon) {
        return null;
    }

    return (
        <Root>
            <img
                src={makeSpriteUrl(dexMon, true)}
                alt={dexMon.displayName + " sprite"}
            />
            <MetaList>
                <MetaItem>
                    <strong>Name :</strong> {dexMon.displayName}
                </MetaItem>
                <MetaItem>
                    <strong>Egg Group 1:</strong> {dexMon.eggGroup1}
                </MetaItem>
                {dexMon.eggGroup2 && (
                    <MetaItem>
                        <strong>Egg Group 2:</strong> {dexMon.eggGroup2}
                    </MetaItem>
                )}
                <MetaItem>
                    <strong>Percentage Male:</strong> {dexMon.percentageMale}%
                </MetaItem>
            </MetaList>
        </Root>
    );
}
