import { Trans } from '@lingui/macro';
import React from 'react';

type ExtraSmallTextProps = {
    color: string,
    children: any;
    extendedClassNames: any;
}

const ExtraSmallText: React.FC<ExtraSmallTextProps> = ({ color, children, extendedClassNames }) => {
    return (
        <p
            className={`${extendedClassNames} text-xs text-${color}-400 font-medium`}
        >
            <Trans>
                {children}
            </Trans>
        </p>
    );
};

export default ExtraSmallText;