// /**
//  * @copyright 2020 Adam (charrondev) Charron
//  * @license GPL-3.0-only
//  */

import { PokemonForm } from "@pokemmo/pokemon/PokemonForm"
import {
    useProjectActions,
    useProjectCount
} from "@pokemmo/projects/projectHooks"
import { IProject } from "@pokemmo/projects/projectsSlice"
import { uuidv4 } from "@pokemmo/utils"
import { Dialog } from "@reach/dialog"
import React, { useCallback, useMemo, useState } from "react"
import { useHistory } from "react-router-dom"
import { filterLoadedDexOptionsSync, getPokemon } from "../data/pokedex"

export function useForceUpdate() {
  const [, setTick] = useState(0)
  const update = useCallback(() => {
    setTick((tick) => tick + 1)
  }, [])
  return update
}

interface IProps extends React.ComponentProps<typeof Dialog> {}

export function ProjectForm(props: IProps) {
  const history = useHistory()
  const projectCount = useProjectCount()
  const { addProject } = useProjectActions()
  const projectID = useMemo(() => {
    return uuidv4()
  }, [])
  return (
    <PokemonForm
      {...props}
      isProject
      projectID={projectID}
      afterSubmit={(pokemon) => {
        const project: IProject = {
          projectID,
          projectName: `Project ${projectCount + 1}`,
          targetPokemonID: pokemon.id,
          breederPokemonIDs: [],
          breederStubs: {},
          dateCreated: new Date().toISOString(),
          dateUpdated: new Date().toISOString(),
          ivPricing: pokemon.ivs,
          averagePricing: 10_000,
          allowEvolvedAltBreeders: true,
          altBreederIdentifiers: [],
        }
        project.altBreederIdentifiers = filterLoadedDexOptionsSync(
          ({ pokedexMon }) => {
            const dexMon = getPokemon(pokemon.identifier)!!
            console.log(dexMon)
            const egg1Match = [dexMon.eggGroup1, dexMon.eggGroup2].includes(
              pokedexMon.eggGroup1,
            )
            const egg2Match = pokedexMon.eggGroup2
              ? [dexMon.eggGroup1, dexMon.eggGroup2].includes(
                  pokedexMon.eggGroup2,
                )
              : false

            return egg1Match || egg2Match
          },
        )(null).map((mon) => mon.pokedexMon.identifier)
        console.log(project.altBreederIdentifiers)
        addProject({ project })
        history.push(`/projects/${project.projectID}`)
      }}
    />
  )
}
