import type { Product } from '../types/Product';
import notebookImg from '../images/VisComputer.jpeg';
import mouseImg from '../images/VisMouse.png';
import tecladoImg from '../images/VisTeclado.png';
import headsetImg from '../images/visHeadset.png';
import tabletImg from '../images/VisTab.png';
import mousePadImg from '../images/VisPad.png';

export const products: Product[] = [
  {
    id: 1,
    name: 'Notebook Gamer',
    description: 'Desperte o máximo da sua performance com o Notebook Gamer, a máquina ideal para quem exige alto desempenho tanto nos jogos quanto no trabalho. Equipado com hardware de última geração, este notebook une velocidade, gráficos incríveis e fluidez em um design moderno e robusto. Seja enfrentando batalhas épicas nos seus games favoritos ou lidando com tarefas pesadas como edição de vídeos, modelagem 3D e programação, ele entrega resultados sem travar.',
    price: 4999.99,
    image: notebookImg,
  },
  {
    id: 2,
    name: 'Mouse Wireless',
    description: 'Experimente uma nova forma de navegar com o Mouse Wireless, o equilíbrio perfeito entre design ergonômico e desempenho sem fio. Desenvolvido para proporcionar conforto durante longas horas de uso, ele se adapta perfeitamente à sua mão, reduzindo a fadiga e aumentando a produtividade.',
    price: 199.99,
    image: mouseImg,
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    description: 'Descubra uma nova experiência de digitação com o Teclado Mecânico, equipado com switches incríveis que oferecem resposta tátil precisa e um clique audível satisfatório a cada toque. Ideal para gamers, programadores e digitadores exigentes, ele combina performance profissional com durabilidade excepcional.',
    price: 349.99,
    image: tecladoImg,
  },
  {
    id: 4,
    name: 'Headset',
    description: 'Mergulhe no som com o Headset ideal para jogos, chamadas e entretenimento. Com áudio de alta qualidade, ele entrega graves potentes e agudos nítidos, proporcionando uma experiência sonora imersiva, seja em batalhas virtuais ou em videoconferências importantes.',
    price: 149.99,
    image: headsetImg,
  },
  {
    id: 5,
    name: 'Teblet Gamer',
    description: 'Desafie os limites do entretenimento com o Tablet Gamer, um dispositivo poderoso que combina mobilidade, desempenho e imersão em uma só tela. Equipado com processador de alta performance e gráficos avançados, ele roda seus jogos favoritos com fluidez e riqueza de detalhes, onde quer que você esteja.',
    price: 3299.99,
    image: tabletImg,
  },
  {
    id: 6,
    name: 'MousePad',
    description: 'Aprimore sua experiência com o computador usando o MousePad ideal para produtividade e jogos. Com superfície lisa e textura otimizada, ele garante um deslizamento suave e movimentos precisos, seja em tarefas do dia a dia ou em partidas competitivas.',
    price: 39.99,
    image: mousePadImg,
  }
];
