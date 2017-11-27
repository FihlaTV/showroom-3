import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import FlexView from 'react-flexview';
import * as faker from 'faker';
import * as find from 'lodash/find';
import * as reject from 'lodash/reject';
import * as partial from 'lodash/partial';
import * as sortBy from 'lodash/sortBy';

import 'buildo-normalize-css';
import 'react-flexview/src/flexView.scss';
import './main.scss';
import './codemirror.scss';

// monkey patch React.PropTypes
React.PropTypes = PropTypes;

const getRandomRow = () => {
  return {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    city: faker.address.city(),
    email: faker.internet.email(),
    company: faker.company.companyName()
  };
};

const tabloData = Array.apply(null, Array(1000)).reduce(acc => [...acc, getRandomRow()], []);

// available in examples
global.ReactDOM = ReactDOM;
global.FlexView = FlexView;
global.tabloData = tabloData;
global.find = find;
global.partial = partial;
global.reject = reject;
global.sortBy = sortBy;

// require.context('buildo-react-components/src', true, /\.scss$/);
import 'buildo-react-components/src/Button/button.scss';
import 'buildo-react-components/src/Divider/divider.scss';
import 'buildo-react-components/src/DropdownMenu/dropdownMenu.scss';
import 'buildo-react-components/src/DropdownMenu/menu.scss';
import 'buildo-react-components/src/Panel/tabbedPanel.scss';
import 'buildo-react-components/src/CollapsibleSection/collapsibleSection.scss';
import 'buildo-react-components/src/MoreOrLess/moreOrLess.scss';
import 'buildo-react-components/src/LoadingSpinner/loadingSpinner.scss';
import 'buildo-react-components/src/Dropdown/dropdown.scss';
import 'buildo-react-components/src/ConfirmationInput/confirmationInput.scss';
import 'buildo-react-components/src/Badge/badge.scss';
import 'buildo-react-components/src/Toggle/toggle.scss';
import 'buildo-react-components/src/Tooltip/tooltip.scss';
import 'buildo-react-components/src/Panel/panel.scss';
import 'buildo-react-components/src/Panel/tabbedPanel.scss';
import 'buildo-react-components/src/Meter/meter.scss';
import 'buildo-react-components/src/Modal/modal.scss';
import 'buildo-react-components/src/ScrollView/scrollView.scss';
import 'buildo-react-components/src/Tablo/tablo.scss';
import 'buildo-react-components/src/KitchenSink/style.scss';
import 'buildo-react-components/src/AsyncStatusIndicator/asyncStatusIndicator.scss';
import 'buildo-react-components/src/DatePicker/datePicker.scss';
import 'buildo-react-components/src/DateField/dateField.scss';


// examples sass and resources
import '../sections/components/Modal/transition.scss';

import '../sections/components/MoreOrLess/default.scss';

import '../sections/components/Panel/default.scss';

import '../sections/components/CollapsibleSection/collapsibleSection.scss';

import '../sections/components/BackgroundDimmer/backgroundDimmer.scss';

import '../sections/components/NavBar/navBar.scss';

import '../sections/components/DropdownMenu/userMenu.scss';

import '../sections/components/Dropdown/dropdown.scss';

import '../sections/components/Meter/meter.scss';

import '../sections/components/Popover/popover.scss';
import '../sections/components/Popover/popover.scss';

import '../sections/components/BrowserDetector/browserDetector.scss';

// import 'buildo-react-components/src/InputChildren/examples/inputChildren.scss';
