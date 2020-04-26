//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional
// React Helmet
import { Helmet } from "react-helmet";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { signInAnonymous } from "../../../store/actions/authActions.js";

//> Components
// Sections
import {
	Hero,
	ContactForm,
	Services,
	CallToAction,
	Trusted,
} from "../../organisms/sections";

//> CSS
// All organisms use their own scss implementation

class HomePage extends React.Component {
	componentDidMount = () => {
		this.props.signInAnonymous();
	};

	render() {
		const { globalProps } = this.props;

		if (globalProps) {
			return (
				<>
					<Helmet>
						<title>Werbeagentur Christian Aichner - Ihr Partner</title>
						<meta
							name="description"
							content="Unsere kostenlose Analyse zeigt Dir den aktuellen Stand Deiner gesamten Online-Präsenz und
              liefert individuelle und unkomplizierte Lösungen."
						/>
					</Helmet>
					<Hero darkMode={globalProps.darkMode} />
					<Services darkMode={globalProps.darkMode} />
					<Trusted darkmode={globalProps.darkMode} />
					<CallToAction darkMode={globalProps.darkMode} />
					<ContactForm darkMode={globalProps.darkMode} />
				</>
			);
		} else {
			return null;
		}
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signInAnonymous: () => dispatch(signInAnonymous()),
	};
};

export default connect(null, mapDispatchToProps)(HomePage);

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */