import React from 'react';
import iconsSprite from './../../img/icons-sprite.svg'

type IconPropsType = {
    iconId?: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = ({iconId, width, height, viewBox}: IconPropsType) => {
    return (
        <svg width={`${width || '50'}`} height={`${height || '50'}`} viewBox={`${viewBox || '0 0 50 50'}`}
        >
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </svg>
    );
};

