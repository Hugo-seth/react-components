import styled, { css } from 'styled-components';

import Icon from 'src/components/Icon';
import Card from 'src/components/Radio/Card';
import { inlineBlockWithVerticalMixin } from 'src/style';
import addDefaultThemeProps from 'src/components/ThemeProvider/addDefaultThemeProps';
import config from 'src/config';

const { prefixCls: _prefixCls } = config;
const prefixCls = _prefixCls + '-checkbox';

export const CheckboxIcon = styled(Icon).attrs({
    className: prefixCls + '-icon'
})`
    margin-right: 8px;
    font-size: 14px;
    vertical-align: middle;
`;

const propsMixin = ({ theme: { Height, colorMap, fontSize }, size, disabled, checked }) => css`
    min-height: ${Height[size]};
    font-size: ${fontSize};

    ${disabled &&
        css`
            color: ${colorMap.disabled.text};
            cursor: not-allowed;
        `};

    ${/*sc-sel */ CheckboxIcon} {
        line-height: ${Height[size]};
        color: ${disabled ? colorMap.disabled.icon : checked ? colorMap.active.icon : colorMap.default.border};
    }
`;

export const CheckboxWrap = styled.span.attrs({
    className: prefixCls
})`
    cursor: pointer;
    position: relative;

    ${inlineBlockWithVerticalMixin};
    ${propsMixin};
`;

export const CheckboxContentWrap = styled.div.attrs({
    className: prefixCls + '-content'
})`
    ${inlineBlockWithVerticalMixin};
`;

export const CheckboxCardWrap = styled(Card)`
    /* empty */
`;
export const CheckboxGroupWrap = styled.div.attrs({
    className: prefixCls + '-group'
})`
    ${/* sc-sel */ CheckboxWrap}, ${CheckboxCardWrap} {
        margin-right: 8px;

        &:last-child {
            margin-right: 0;
        }
    }
`;

addDefaultThemeProps(CheckboxWrap);
