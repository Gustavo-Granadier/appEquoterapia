import React from 'react'
import "./VideoView.css"
import NavBar from '../navBar/NavBar'
import MenuBar from '../menuBar/MenuBar'

const VideoView = () => {
    return (
        <div className='view'>
            <NavBar />
            <h1 className='h1Video'>Ana Maria e Lucas Andrade </h1>
            <div className='videoView'>
                <img src="./fotosPai/video.png" alt="video" />
            </div>
            <div className='videoViewText'>
                <p>     Ana Maria sempre sonhou em ver seu filho Lucas crescer saudável, brincar com outras crianças e explorar o mundo com a mesma curiosidade que ela tinha quando era pequena. Mas, logo após o nascimento, recebeu uma notícia que mudaria completamente sua vida: Lucas nasceu com uma condição rara que afetava sua mobilidade.</p>

                <p>     No início, o choque foi devastador. Ana Maria lembra-se das lágrimas silenciosas que derramava nas madrugadas, com medo do futuro e das limitações que poderiam impedir o filho de ter uma vida plena. Porém, ao olhar para os olhos curiosos de Lucas, ela encontrou uma força que jamais imaginou possuir. Decidiu, naquele momento, que a condição do filho não seria um obstáculo intransponível, mas sim um desafio a ser enfrentado com amor, dedicação e coragem.</p>

                <p>     Os primeiros anos foram repletos de consultas médicas, fisioterapia e terapias de estimulação. Cada pequeno avanço era celebrado como uma grande vitória. Quando Lucas conseguiu ficar sentado sem apoio, Ana Maria chorou de emoção. Quando ele deu os primeiros passos com auxílio, toda a família aplaudiu como se fosse um feito olímpico.</p>

                <p>     Mas Ana Maria queria mais do que apenas ver o filho caminhar: queria que ele se sentisse parte do mundo, que tivesse a chance de descobrir talentos, paixões e, acima de tudo, confiança em si mesmo. Foi então que ouviu falar sobre atividades adaptadas e decidiu matricular Lucas em aulas de natação. No começo, o menino sentia medo da água, inseguro de que não teria força suficiente para se manter. Porém, com paciência, carinho e incentivo constante da mãe, ele começou a superar cada barreira.</p>

                <p>     Na piscina, Lucas descobriu um lugar onde sua condição não o definia. A água lhe dava liberdade de movimento, e logo ele passou a desenvolver técnicas próprias para se adaptar. Aos poucos, transformou inseguranças em conquistas: a primeira vez que nadou sozinho alguns metros foi um marco que ficou gravado para sempre na memória de Ana Maria.</p>

                <p>     Com o tempo, Lucas não apenas melhorou fisicamente, mas também ganhou autoestima. Sua determinação chamou a atenção de professores e colegas, que viam nele uma inspiração. "Se ele consegue, eu também consigo", muitos diziam. Ana Maria, emocionada, percebia que o filho estava se tornando um exemplo vivo de superação, mostrando que a verdadeira força não está apenas no corpo, mas também na mente e no coração.</p>
            </div>
            <MenuBar />
        </div>
    )
}

export default VideoView