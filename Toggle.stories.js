import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Toggle from './Toggle';
import React from 'react';
import { action } from '@storybook/addon-actions';

storiesOf('ui-kit/Toggle', module).add('Component', () => (
    <Toggle
        defaultOption={text('default')}
        otherOption={text('textOption')}
        onChange={action('changed-selection-clicked')}
    />
));
