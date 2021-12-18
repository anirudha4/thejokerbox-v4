import styled, { css } from 'styled-components';
import { colors, fonts, styles } from '@themes';
import { Menu, Tabs } from 'antd';

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
export const Flex = styled.div`
    display: flex;
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
    border: 2px solid ${colors.greyLight};
    border-radius: ${styles.borderRadius};
    outline: none;
    transition: all .2s;
    &:focus {
        border: 2px solid ${colors.primary};
        background-color: ${colors.white};
    }
`;
export const Field = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 1em 0;
    label {
        margin-bottom: 6px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8em 1em;
    border: none;
    outline: none;
    background-color: ${props => props.type && colors[props.type]};
    color: ${colors.white};
    font-weight: ${fonts.weight.bold};
    border-radius: ${styles.borderRadius};
    cursor: pointer;
    transition: all .2s;
    width: ${props => props.width};
    font-size: ${props => fonts[props.size]};
    &:hover {
        background-color: ${props => props.type && colors[`${props.type}Dark`]};
    }
    &:disabled {
        background-color: ${colors.greyLight};
        color: ${colors.grey};
        cursor: not-allowed;
    }
`;

export const Text = styled.p`
    margin: 0;
    font-size: ${props => props.fontSize && fonts[props.fontSize]};
    font-weight: ${props => props.fontWeight && fonts.weight[fontWeight]};
    color: ${props => props.color && props.color};
`;

export const CustomTabs = styled(Tabs)`
    && {
        .ant-tabs-tab:hover {
            color: ${colors.primary};
        }
        .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
            color: ${colors.primary};
            &:hover {
                color: ${colors.primary};
            }
        }
        .ant-tabs-ink-bar {
            background: ${colors.primary};
        }
    }
`;

export const MenuItem = styled(Menu.Item)`  
    padding: .8em 1em;
    margin: .3em;
    font-weight: ${fonts.weight.bold};
    border-radius: ${styles.borderRadius};
    font-size: 1.2em;
    &:hover {
        background-color: ${props => props.danger ? colors.dangerLight : colors.primaryLight};
        color: ${props => props.danger ? colors.danger : colors.primary};
    }
`;