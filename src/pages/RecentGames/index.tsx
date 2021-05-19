import React, { Fragment } from 'react'
import Header from '../../components/Header'

import { Container, RecentGamesHeader, RecentGamesFilter, TitlePageBold, Filters, LabelFilter,  NewBetLink, Items } from './styles'
import RecentGame from '../../components/RecentGame'

const RecentGames = () => {
    return (
        <Fragment>
            <Header />
        <Container>
            
            <div className="content">
                <RecentGamesHeader>
                    <RecentGamesFilter>
                    <TitlePageBold>RECENT GAMES</TitlePageBold>
                        <Filters>
                            <LabelFilter>Filters</LabelFilter>
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