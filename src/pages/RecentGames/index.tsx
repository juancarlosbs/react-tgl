import React, { Fragment, useState } from 'react'
import Header from '../../components/Header'

import { Container, RecentGamesHeader, RecentGamesFilter, TitlePage, TitlePageBold, Filters, LabelFilter,  NewBetLink, Items } from './styles'
import RecentGame from '../../components/RecentGame'
import CheckFilter from '../../components/CheckFilter'
import { useSelector } from 'react-redux'

const DUMMY_GAMES = [
    {
      "type": "Lotofácil",
      "description": "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
      "range": 25,
      "price": 2.5,
      "max-number": 15,
      "color": "#7F3992",
      "min-cart-value": 30
    },
    {
      "type": "Mega-Sena",
      "description": "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
      "range": 60,
      "price": 4.5,
      "max-number": 6,
      "color": "#01AC66",
      "min-cart-value": 30
    },
    {
      "type": "Quina",
      "description": "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
      "range": 80,
      "price": 2,
      "max-number": 5,
      "color": "#F79C31",
      "min-cart-value": 30
    }
]

const RecentGames = () => {
    const { games } = useSelector((state: any ) => state.recentGames)

    const [game, setGame] = useState<number>(-1)

    function handleGame(gameValue: number) {
        selectGame(gameValue)
    }
    function selectGame(props: number){
        setGame(props)
    }


    return (
        <Fragment>
            <Header />
        <Container>
            
            <div className="content">
                <RecentGamesHeader>
                    <RecentGamesFilter>
                    <TitlePageBold>RECENT GAMES</TitlePageBold>
                    <TitlePage>Filters</TitlePage>
                        <Filters>
                            {DUMMY_GAMES.map((product, index) =>{ 
                                if (index === game) {
                                    return <CheckFilter selectFilter={handleGame} value={index} firstColor={product.color} secondColor={'#fff'}>{product.type}</CheckFilter>
                                } else {
                                    return <CheckFilter selectFilter={handleGame} value={index} firstColor={'#fff'} secondColor={product.color}>{product.type}</CheckFilter>
                                }
                            }
                            )}
                        </Filters>
                    </RecentGamesFilter>
                    <NewBetLink to='/new-bet'> New Bet ❯</NewBetLink>
                </RecentGamesHeader>
            </div>
            <Items>
            </Items>
        </Container>
        </Fragment>

    )
}

export default RecentGames