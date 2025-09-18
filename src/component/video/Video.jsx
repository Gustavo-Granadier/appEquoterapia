import React from 'react'
import MenuBar from '../menuBar/MenuBar'
import NavBar from '../navBar/NavBar'
import VideoCard from './videoCard/VideoCard'
import "./Video.css"

const historias = [
  {
    id: 1,
    name: "Ana Maria",
    praticante: "Lucas Andrade",
    foto: "./fotosPai/foto4.png",
    descrition: "Lucas nasceu com uma condição rara que afetava sua mobilidade, mas com o apoio da mãe, Ana Maria, superou inúmeras barreiras. Hoje, pratica natação adaptada e inspira outras crianças mostrando que a força de vontade pode transformar limites em conquistas."
  },
  {
    id: 2,
    name: "João Silva",
    praticante: "Pedro Silva",
    foto: "./fotosPai/foto8.png",
    descrition: "Pedro recebeu o diagnóstico de autismo aos 3 anos e enfrentou grandes desafios na comunicação. Com amor e dedicação do pai, João, encontrou na música uma forma de expressão. Hoje, toca violão em pequenas apresentações, enchendo de orgulho sua família."
  },
  {
    id: 3,
    name: "Mariana Souza",
    praticante: "Gabriel Souza",
    foto: "./fotosPai/foto6.png",
    descrition: "Gabriel, adolescente com deficiência intelectual, sempre teve dificuldade em se adaptar à escola. Mariana, sua mãe, nunca desistiu de buscar apoio. Com terapias e incentivo, ele desenvolveu habilidades artísticas e hoje expõe seus desenhos em feiras culturais locais."
  },
  {
    id: 4,
    name: "Carlos Pereira",
    praticante: "Rafael Pereira",
    foto: "./fotosPai/foto9.png",
    descrition: "Rafael nasceu com paralisia cerebral e os médicos chegaram a duvidar de sua independência. Mas com perseverança e o apoio incansável de seu pai, Carlos, aprendeu a usar tecnologia assistiva e hoje estuda informática, sonhando em trabalhar com inclusão digital."
  },
  {
    id: 5,
    name: "Fernanda Lima",
    praticante: "Sofia Lima",
    foto: "./fotosPai/foto5.png",
    descrition: "Sofia, que nasceu com síndrome de Down, encontrou no esporte um caminho para sua autoconfiança. Com incentivo da mãe, Fernanda, participa de competições de atletismo e se tornou exemplo de superação e alegria para todos ao seu redor."
  }
];

const Video = () => {
  return (
    <div>
      <NavBar />
      <div className="video">
        <h1>Depoimentos de nossos praticantes</h1>
        <h2>Aqui estão algumas histórias de superação de nossos praticantes</h2>
        <div className="numbers-container">
          {historias.map((historias) => (
            <CardNumber
              key={historias.id}
              name={historias.name}
              praticante={historias.praticante}
              foto={historias.foto}
              descrition={historias.descrition}
            />
          ))}
        </div>
      </div>
      <MenuBar />
    </div>
  )
}

export default Video