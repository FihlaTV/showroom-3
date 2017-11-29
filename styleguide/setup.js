import * as React from 'react';
import * as PropTypes from 'prop-types';

import 'buildo-react-components/styleguide/setup';
import 'react-autosize-textarea/examples/examples.scss';

import 'buildo-normalize-css';
import 'react-flexview/src/flexView.scss';
import './main.scss';
import './codemirror.scss';

// monkey patch React.PropTypes
React.PropTypes = PropTypes;
