// import './App.css'
import React, { MutableRefObject } from 'react';
import * as C from './landingStyle';

import { useNavigate } from 'react-router-dom';
import useTransition from '../../Hooks/useTransition';

import { Button } from '../../components/Button/ButtonStyle';
import {Question} from '../../components/Questions/Question';
import {Logo} from '../../components/Logo/Logo';

import MainBanner from './utils/img/MainBanner.jpeg';
import smartphone from './utils/img/smartphone.svg';
import tv from './utils/img/tv.svg';
import computer from './utils/img/computer.svg';
import joystick from './utils/img/joystick.svg';
import gmailLogo from './utils/img/gmailLogo.svg';
import githubLogo from './utils/img/githubLogo.svg';
import linkedinLogo from './utils/img/linkedinLogo.svg';

import useFetch from '../../Hooks/useFetch';

export const Landing = () => {
  const navigate = useNavigate();
  
  const readToRef = React.useRef(null);
  const btntoSignRef = React.useRef(null);
  const btnLoginRef = React.useRef(null);
  const textRef = React.useRef(null);
  const btnRescueNowRef = React.useRef(null);
  const deviceSmartphoneRef = React.useRef(null);
  const deviceTvRef = React.useRef(null);
  const deviceComputerRef = React.useRef(null);
  const deviceJoystickRef = React.useRef(null);
  const textSmartphoneRef = React.useRef(null);
  const textTvRef = React.useRef(null);
  const textComputerRef = React.useRef(null);
  const textJoystickRef = React.useRef(null);
  const titlePlanRef = React.useRef(null);
  const cardsPlanRef = React.useRef(null);
  const titleQuestionRef = React.useRef(null);

  const refTransitionX = [readToRef, btnLoginRef, btnRescueNowRef, btntoSignRef, textRef, deviceSmartphoneRef, deviceTvRef, deviceComputerRef, deviceJoystickRef, cardsPlanRef];
  const refTransitionY = [textSmartphoneRef, textTvRef, textComputerRef, textJoystickRef, titlePlanRef, titleQuestionRef];


  const navigateToPageLogin = () => {
    navigate('/login');
  };

  useTransition(refTransitionX, "transition--animationX");
  useTransition(refTransitionY, "transition--animationY");



  return (
    <>
      <C.Header >
        <Logo effects={"transition--animationX"}>FCS MOVIES</Logo>
        <div>
          <Button ref={btntoSignRef} onClick={navigateToPageLogin} border={false} fontSize={'2.4rem'} fontWeight={'600'} height={'5.6rem'} width={'12.5rem'} background={'#B6A100, #FFFF00'} color={'#5F5400'} isGradient={true}>ASSINAR</Button>
          <Button ref={btnLoginRef} onClick={navigateToPageLogin} border={true} fontSize={'2.4rem'} fontWeight={'600'} height={'5.6rem'} width={'9.5rem'} background={'none'} color='#FEE100'>Entrar</Button>
        </div>
      </C.Header>

      <C.Main img={MainBanner}>
        <h1 ref={textRef}>Aproveite agora o período de teste e tenha filmes e séries ilimitados</h1>
        <Button ref={btnRescueNowRef} onClick={navigateToPageLogin} border={false} fontSize={'3.2rem'} fontWeight={'700'} height={'6.8rem'} width={'32rem'} background={'#B6A100, #FFFF00'} color={'#5F5400'} isGradient={true}>
          RESGATAR OFERTA
        </Button>
      </C.Main>
      
      <C.SectionReadyUse>
        <h1 ref={readToRef} >Disponível Para</h1>
        <C.SectionDevices>
          <C.DeviceItem>
            <img ref={deviceSmartphoneRef} src={smartphone} />
            <div ref={textSmartphoneRef}>
              <h2>Celulares</h2>
              <p>Iphone e Ipad</p>
              <p>Tablets</p>
              <p>Celulares Android</p>
            </div>
          </C.DeviceItem>

          <C.DeviceItem>
            <img ref={deviceTvRef} src={tv} />
            <div ref={textTvRef}>
              <h2>TV</h2>
              <p>Android TV</p>
              <p>Apple TV</p>
              <p>Chromecast</p>
              <p>Amazon Fire TV</p>
              <p>TV Samsung</p>
              <p>TV's LG</p>
            </div>
          </C.DeviceItem>

          <C.DeviceItem>
            <img ref={deviceComputerRef} src={computer} />
            <div ref={textComputerRef}>
              <h2>Computador</h2>
              <p>MacOs</p>
              <p>PC Windows</p>
            </div>
          </C.DeviceItem>

          <C.DeviceItem>
            <img ref={deviceJoystickRef} src={joystick} />
            <div ref={textJoystickRef}>
              <h2>Videogames</h2>
              <p>PS4</p>
              <p>PS5</p>
              <p>Xbox One</p>
              <p>Xbos Séries S/X</p>
            </div>
          </C.DeviceItem>
        </C.SectionDevices>
      </C.SectionReadyUse>

      <C.SectionPlans>
        <h1 ref={titlePlanRef}>Planos</h1>
        <C.ContainerPlans ref={cardsPlanRef}>
          <C.ContainerCardPlan  heightCard={'40rem'} afterInfo={false}>
            <C.TitlePlanArea>
              <h3>Básico</h3>
              <span>Grátis</span>
            </C.TitlePlanArea>
            <C.listBenefit>
              <li title='Acesso gratuito a uma seleção limitada de filmes e séries.'>Acesso Limitado</li>
              <li title='Reprodução de vídeo em definição padrão (SD).'>Qualidade SD</li>
              <li title='Inclui anúncios durante a reprodução do conteúdo.'>Anúncios</li>
              <li title='Permite assistir em apenas uma tela por vez.'>Uma Tela</li>
            </C.listBenefit>
            <Button onClick={navigateToPageLogin} border={false} fontSize={'2.4rem'} fontWeight={'600'} height={'5rem'} width={'17rem'} background={'#B6A100, #FFFF00'} color={'#5F5400'} isGradient={true}>Assinar</Button>
          </C.ContainerCardPlan>

          <C.ContainerCardPlan  heightCard={'40rem'} afterInfo={false}>
            <C.TitlePlanArea>
              <h3>Standard</h3>
              <span>R$ 24,90/mês</span>
            </C.TitlePlanArea>
            <C.listBenefit>
              <li title='Acesso ilimitado a todos os filmes e séries disponíveis na plataforma.'>Acesso Completo ao Catálogo</li>
              <li title='Reprodução de vídeo em alta definição (HD).'>Qualidade HD</li>
              <li title='Experiência de visualização sem interrupções de anúncios.'>Sem Anúncios</li>
              <li title='Permite assistir em até duas telas ao mesmo tempo.'>Duas Telas Simultâneas</li>
              <li title='Opção de baixar conteúdos para assistir offline em até dois dispositivos.'>Download Offline</li>
            </C.listBenefit>
            <Button onClick={navigateToPageLogin} border={false} fontSize={'2.4rem'} fontWeight={'600'} height={'5rem'} width={'17rem'} background={'#B6A100, #FFFF00'} color={'#5F5400'} isGradient={true}>Assinar</Button>
          </C.ContainerCardPlan>

          <C.ContainerCardPlan heightCard={'50rem'} afterInfo={true}>
            <C.TitlePlanArea>
              <h3>Premium</h3>
              <span>R$ 49,90/mês</span>
            </C.TitlePlanArea>
            <C.listBenefit>
              <li title='Acesso ilimitado a todos os filmes e séries disponíveis na plataforma.'>Acesso Completo ao Catálogo</li>
              <li title='Reprodução de vídeo em ultra alta definição (4K) e High Dynamic Range (HDR).'>Qualidade 4K e HDR</li>
              <li title='Experiência de visualização sem interrupções de anúncios.'>Sem Anúncios</li>
              <li title='Permite assistir em até quatro telas ao mesmo tempo.'>Quatro Telas Simultâneas</li>
              <li title='Opção de baixar conteúdos para assistir offline em até quatro dispositivos.'>Download Offline</li>
              <li title='Acesso antecipado a lançamentos e conteúdos exclusivos da plataforma.'>Acesso a Conteúdo Exclusivo</li>
              <li title='Criação de até cinco perfis personalizados, cada um com suas próprias recomendações e histórico de visualização.'>Perfis Personalizados</li>
            </C.listBenefit>
            <Button onClick={navigateToPageLogin} border={false} fontSize={'2.4rem'} fontWeight={'600'} height={'5rem'} width={'17rem'} background={'#B6A100, #FFFF00'} color={'#5F5400'} isGradient={true}>Assinar</Button>
          </C.ContainerCardPlan>
        </C.ContainerPlans>
      </C.SectionPlans>

      <C.SectionFooter>
        <h1 ref={titleQuestionRef}>Dúvidas? Elas acabam agora!</h1>
        <Question
          question='O que é o FCS MOVIES?'
          answer='O FCS MOVIES é um projeto pessoal que criei com o objetivo de ser um serviço fictício de streaming de filmes. Ele simula uma plataforma onde os usuários podem explorar e assistir a diversos conteúdos de entretenimento, além de obter informações reais como por exemplo sinopse, onde assistir e duração do filme.'
        />
        <Question
          question='Como Acessar o catálogo de filmes?'
          answer='Selecione a opção "Assinar" ou "Entrar" na página inicial, insira seu login ou selecione criar nova conta e realize o login em seguida. Assim, você terá acesso completo ao nosso catálogo de filmes com diversas informações a respeito.'
        />
        <Question
          question='Quais tecnologias foram aplicadas no projeto?'
          answer='No desenvolvimento do FCS MOVIES, utilizei várias tecnologias, incluindo React, React Router, Styled components, Firebase e Axios. Além disso, fiz uso de diversos hooks para gerenciar o estado, requisições e os efeitos dentro da aplicação, proporcionando uma experiência de usuário dinâmica e interativa.'
        />
      </C.SectionFooter>

      <C.ContainerExtraInfo>
        <div>
          <p>Privacidade</p>
          <p>Termos de uso</p>
          <p>Preferências</p>
        </div>
        <div>
          <p>Acessibilidade</p>
          <p>Ajuda</p>
          <p>Contato</p>
        </div>
        <div>
          <p>Trabalhe conosco</p>
          <p>Sobre</p>
        </div>
      </C.ContainerExtraInfo>

      <C.ContainerInfoDeveloper>
        <p>Desenvolvido Por Fabiano Cavalcante</p>
        <div>
          <a href={'mailto:7fabiano.silva@gmail.com'} target='_blank'>
            <img src={gmailLogo} alt="logo do gmail" />
          </a>
          <a href={'https://github.com/DevFabianoCavalcante'} target='_blank'>
            <img src={githubLogo} alt="logo do github" />
          </a>
          <a href={'https://www.linkedin.com/in/fabiano-cavalcante-99811221a/'} target='_blank'>
            <img src={linkedinLogo} alt="logo do linkedin" />
          </a>
        </div>
      </C.ContainerInfoDeveloper>
    </>
  )
}
