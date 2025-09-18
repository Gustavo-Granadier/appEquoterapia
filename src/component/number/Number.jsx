import MenuBar from "../menuBar/MenuBar"
import NavBar from "../navBar/NavBar"
import CardNumber from "./cards/CardNumber"
import "./Number.css"

const pais = [
    {
        id: 1,
        name: "Ana Maria",
        number: "(11) 99999-9999",
        foto: "./fotosPai/foto4.png",
        descrition: "Mãe de uma criança com necessidades especiais, sempre disposta a ajudar outras famílias. Ana Maria acredita na importância da troca de experiências e costuma organizar encontros e rodas de conversa para fortalecer a rede de apoio entre pais e mães."
    },
    {
        id: 2,
        name: "João Silva",
        number: "(21) 88888-8888",
        foto: "./fotosPai/foto8.png",
        descrition: "Pai de uma criança com autismo, compartilha sua experiência e oferece apoio. João dedica parte do seu tempo a orientar novos pais que acabaram de receber o diagnóstico, trazendo informações práticas e emocionais para lidar com os desafios do dia a dia."
    },
    {
        id: 3,
        name: "Mariana Souza",
        number: "(31) 77777-7777",
        foto: "./fotosPai/foto6.png",
        descrition: "Mãe de um adolescente com deficiência, sempre em busca de recursos e informações. Mariana se dedica a pesquisar direitos, terapias e oportunidades de inclusão, compartilhando tudo com outras famílias que enfrentam desafios semelhantes."
    },
    {
        id: 4,
        name: "Carlos Pereira",
        number: "(41) 66666-6666",
        foto: "./fotosPai/foto9.png",
        descrition: "Pai de uma criança com paralisia cerebral, engajado em causas sociais. Carlos participa de projetos comunitários e campanhas de conscientização, lutando para que todas as crianças com deficiência tenham acesso a uma vida mais digna e inclusiva."
    },
    {
        id: 5,
        name: "Fernanda Lima",
        number: "(51) 55555-5555",
        foto: "./fotosPai/foto5.png",
        descrition: "Mãe de uma criança com síndrome de Down, ativa em grupos de apoio. Fernanda é conhecida por sua energia positiva e costuma organizar eventos e atividades que promovem integração, valorizando cada conquista de seu filho e dos filhos de outras famílias."
    }
];

const Number = () => {
    return (
        <div>
            <NavBar />
            <div className="numbers">
                <h1>Números de Apoio</h1>
                <h2>Aqui estão números de algumas pessoas que se disonibilizaram
                    a conversar e trocar experiencias
                </h2>
                <div className="numbers-container">
                    {pais.map((pai) => (
                        <CardNumber
                            key={pai.id}
                            name={pai.name}
                            number={pai.number}
                            foto={pai.foto}
                            descrition={pai.descrition}
                        />
                    ))}
                </div>
            </div>
            <MenuBar />
        </div>
    )
}

export default Number