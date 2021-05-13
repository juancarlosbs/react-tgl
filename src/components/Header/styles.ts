import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.h1`
    margin-left: 11px;
    font-size: 44px;
    color: #707070
`

export const Menu = styled.div`
    display: flex;
`

export const TextMenu = styled.h2`
    font-size: 20px;
    color: #707070;
    cursor: pointer;

`

export const TextMenuFirst = styled(TextMenu)`
    margin-right: 57px;
`

export const Divider = styled.hr`
    margin-left: -130px;
    display: flex;
    justify-content: center;
    width: 150%;
    border: 1px solid #EBEBEB;
`

export const Subline = styled.hr`
    margin-top: -4px;
    width: 95px;
    border: 3px solid #b5c401;
    border-radius: 6px;
`