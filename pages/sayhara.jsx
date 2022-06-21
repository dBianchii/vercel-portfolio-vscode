import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/Sayhara.module.css';

const ProjectsPage = () => {
    async function JogoDaSayh() {
        var jogador1
        var jogador2
        var jogada = ['pedra',
            'papel',
            'tesoura']

        jogador1 = prompt('Escolha a sua jogada')
        jogador2 = prompt('Jogador 2, escolha a sua jogada')

        if (jogador1 === 'pedra') {

            if (jogador2 === 'pedra') {
                alert('Empate')
            }


        }

        if (jogador1 === 'papel') {

            if (jogador2 === 'papel') {
                alert('empate')

            }
        }

        if (jogador1 === 'tesoura') {


            if (jogador2 === 'tesoura') {
                alert('empate')
            }
        }

        if (jogador1 === 'papel') {


            if (jogador2 === 'tesoura') {
                alert('jogador 2 ganhou')
            }
        }

        if (jogador1 === 'pedra') {


            if (jogador2 === 'papel') {
                alert('jogador 2 ganhou')
            }
        }

        if (jogador1 === 'pedra') {


            if (jogador2 === 'tesoura') {
                alert('jogador 1 ganhou')
            }
        }

        if (jogador1 === 'papel') {


            if (jogador2 === 'pedra') {
                alert('jogador 1 ganhou')
            }
        }

        if (jogador1 === 'papel') {


            if (jogador2 === 'tesoura') {
                alert('jogador 2 ganhou')
            }
        }

        if (jogador1 === 'tesoura') {


            if (jogador2 === 'pedra') {
                alert('jogador 2 ganhou')
            }
        }

        if (jogador1 === 'tesoura') {


            if (jogador2 === 'papel') {
                alert('jogador 1 ganhou')
            }
        }
    }
    return (
        <>
            <h3>Jogo Da Sayh</h3>
            <div className={styles.container}>
                <button className={styles.button} onClick={(() => JogoDaSayh())}>Jogar Pedra papel tesoura</button>

            </div>
        </>


    );


};





export default ProjectsPage;