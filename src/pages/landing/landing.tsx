// import './App.css'
import * as C from './landingStyle';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header/header';
import { InitialContent } from '../../components/InitialContent/InitialContent'
import { BenefitArea } from '../../components/benefitArea/benefitArea';
import { Card } from '../../components/cardPlans/card';
import { Credits } from '../../components/CreaditArea/credit';

import * as Text from './utils/helpers/texts';
import CineBackground from './utils/img/backgroundCine.jpg';
import DonwloadImage from './utils/img/download.svg';
import PlatformImage from './utils/img/platform.svg';
import Soccer from './utils/img/soccer.svg';
import { List } from '../../components/listFooter/List';


export const Landing = () => {
  const navigate = useNavigate();

  const navigateToPageLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <C.MainContainer>
        <Header />
        <C.InitialArea img={CineBackground} />
        <InitialContent />
      </C.MainContainer>

      <BenefitArea 
        title='Seu conforto é prioridade'
        text='Assista na plataforma que preferir, disponível para smartphone, smartv, tablet, computadores e consoles.'
        image={PlatformImage}
        descriptionImage='Imagem de dispositivos móveis' textDirection='left'
        typeColumn={true}
      />

      <BenefitArea
        title='Assista onde quiser'
        text='Baixe todas as suas séries e filmes para assistir offline de onde estiver.'
        image={DonwloadImage}
        descriptionImage='ïcone de download'
        textDirection='right'
        typeColumn={false}
      />

      <BenefitArea
        title='Futebol ao vivo'
        text='Acompanhe todos os jogos da copa sul americana e da copa do brasil.'
        image={Soccer}
        descriptionImage='Bola de futebol'
        textDirection="left"
        typeColumn={true}
      />

      <C.PlansContainer id='plans'>
        <C.TitlePlans>Planos</C.TitlePlans>
        <C.AreaPlans>
          <Card
            backgroundGradient1='#242424'
            backgroundGradient2='#242424'
            title='FCS Films Trial'
            price='Free'
            listInfo={Text.listFreePlan}
            textBtn='Acessar'
            gradientBtn1='#29A117'
            gradientBtn2='#0E6701' 
            handleNewPage={navigateToPageLogin}
          />

          <Card
            backgroundGradient1='#29A117'
            backgroundGradient2='#0E6701'
            title='Família'
            price='R$ 29,90/mês'
            listInfo={Text.listFamilyPlan}
            textBtn='Assinar'
            gradientBtn1='#131313'
            gradientBtn2='#242424'
          />
        </C.AreaPlans>
      </C.PlansContainer>

      <C.Footer>
        <C.ContainerInfos>
            <List 
                itemList={Text.ListFooterOne}
            />
            <List 
                itemList={Text.ListFooterTwo}
            />
            <List 
                itemList={Text.ListFooterThree}
            />
        </C.ContainerInfos>
        <Credits />
      </C.Footer>
    </>
  )
}
