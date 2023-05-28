import img01 from '../assets/img-01.png';
import img02 from '../assets/img-02.png';
import img03 from '../assets/img-03.png';
import img04 from '../assets/img-04.png';
import img05 from '../assets/img-05.png';
import img06 from '../assets/img-06.png';
import img07 from '../assets/img-07.png';
import img08 from '../assets/img-08.png';
import img09 from '../assets/img-09.png';

export interface IBlocks {
  img: string;
  title: string;
  description: string;
  local: string;
}

export const blocksData = [
  {
    img: img01,
    title: 'O Python do vovô não sobe mais',
    description:
      'Uma explosão de energia e alegria com ritmos contagiantes para animar o seu carnaval!',
    local: 'São Paulo - SP',
  },
  {
    img: img02,
    title: 'Todo mundo null',
    description:
      'Uma experiência única que vai te transportar para um mundo de fantasia e diversão!',
    local: 'Florianópolis - SC',
  },
  {
    img: img03,
    title: 'Hoje dou exception',
    description:
      'Um bloco imperdível que vai agitar as ruas da cidade com muito som e animação!',
    local: 'Curitiba - PR',
  },
  {
    img: img04,
    title: 'Manda Node',
    description:
      'Um carnaval repleto de música e dança para os amantes da tecnologia!',
    local: 'Salvador - BA',
  },
  {
    img: img05,
    title: 'Só no back-end',
    description:
      'O bloco perfeito para quem curte uma folia intensa e cheia de surpresas!',
    local: 'São Paulo - SP',
  },
  {
    img: img06,
    title: 'Esse anel não é de Ruby',
    description:
      'Um bloco que une diversão, alegria e muita música boa. Venha se divertir!',
    local: 'São Paulo - SP',
  },
  {
    img: img07,
    title: 'Pimenta no C# dos outros é refresco',
    description:
      'Prepare-se para uma explosão de cores, ritmos e emoções. Esse bloco vai agitar o seu carnaval!',
    local: 'Rio de Janeiro - RJ',
  },
  {
    img: img08,
    title: 'EnCACHE aqui',
    description:
      'Um bloco que vai te envolver em uma atmosfera mágica e vibrante!',
    local: 'Porto Alegre - RS',
  },
  {
    img: img09,
    title: 'Não valho nada mas JAVA li',
    description: 'Uma celebração épica com muita animação e descontração!',
    local: 'São Paulo - SP',
  },
];
