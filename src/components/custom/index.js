import styled, { css } from 'styled-components';
import { colors, fonts, styles } from '@themes';

const flexConfig = (justify = 'center', align = 'center') => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
`;
const spaceConfig = ({ top, right, bottom, left}) => css`
    margin: ${top} ${right} ${bottom} ${left} 
`;
export const Space = styled.div`
    ${props => spaceConfig({ top: props.top, right: props.right, bottom: props.bottom,  left: props.left })}
`;
export const Container = styled.div`
    max-width: ${styles.maxWidth};
    margin: 0 auto;
    padding: 0 1em;
`;
export const FlexBetween = styled.div`
    ${flexConfig('space-between', 'center')};
`;
export const FlexCenter = styled.div`
    ${flexConfig()};
`;
export const Card = styled.div`
    padding: 1.5em;
    background-color: ${colors.white};
    border-radius: ${styles.borderRadius};
    box-shadow: ${styles.boxShadow};
`;

export const BorderedCard = styled(Card)`
    box-shadow: initial;
    border: 2px solid ${colors.greyLight};
`;

export const Input = styled.input`
    width: 100%;
    padding: 1em 1.3em;
    border: none;
    border-bottom: 2px solid ${colors.greyLight};
    background-color: ${colors.secondary};
    outline: none;
    transition: all .2s;
    &:focus {
        border-bottom: 2px solid ${colors.primary};
    }
`;

export const Line = styled.div`
    height: 2px;
    background-color: ${colors.greyLight};
`;

export const Title = styled.h3`
    margin-bottom: .3em;
`;
export const Subtitle = styled.h6`
    color: ${colors.grey};
`;

export const Button = styled.button`
    padding: 1em 1.3em;
    border: none;
    outline: none;
    background-color: ${colors.primary};
    color: ${colors.white};
    font-weight: ${fonts.weight.bold};
    border-radius: ${styles.borderRadius};
    cursor: pointer;
    transition: all .2s;
    box-shadow: ${styles.boxShadow};
    &:hover {
        background-color: ${colors.primaryDark};
    }
    &:disabled {
        background-color: ${colors.greyLight};
        color: ${colors.grey};
        cursor: not-allowed;
    }
`;