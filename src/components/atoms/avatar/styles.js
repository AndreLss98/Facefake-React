import styled from 'styled-components';

import { DEFAULT_SIZE } from './constants';

export const ImgContainer = styled.div.attrs(props => ({
    className: [`${ props.size? 'bordered-'.concat(props.size) : 'bordered-small'}`, props.size || 'small']
}))`
    background: url(${props => props.src}) center no-repeat;
    background-size: cover;

    &.small {
        width: ${DEFAULT_SIZE}px;
        height: ${DEFAULT_SIZE}px;
    }

    &.medium {
        width: ${DEFAULT_SIZE * 2}px;
        height: ${DEFAULT_SIZE * 2}px;
    }

    &.large {
        width: ${DEFAULT_SIZE * 4}px;
        height: ${DEFAULT_SIZE * 4}px;
    }
`;