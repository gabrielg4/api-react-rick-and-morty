import { CardCharacter } from "../CardCharacter/Index";
import { ContainerApp, ContentCharacters, HeaderApp } from "./styles";

export function Application() {
    return (
        <ContainerApp>
            <HeaderApp>
                <h1>Rick and Morty</h1>
                <span>Nª de personagens: 826</span>
            </HeaderApp>
            <ContentCharacters>
                <div>
                    <CardCharacter
                        image="https://rickandmortyapi.com/api/character/avatar/441.jpeg"
                        name="Rick Sanchez"
                        genre="Male"
                        specie="Human"
                    />
                </div>
                <button>Carregar mais</button>
            </ContentCharacters>
        </ContainerApp>
    )
}