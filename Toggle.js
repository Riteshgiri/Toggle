import React from 'react';
import PropTypes from 'prop-types';
import './styleForToggle.scss';

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.myRefCopy = React.createRef();
        this.state = {
            value: this.props.default,
        };
    }
    componentDidMount() {
        const toggle = this.myRef.current;
        const toggleContainer = this.myRefCopy.current;
        let toggleNumber = false;
        if (toggle) {
            toggle.addEventListener('click', handleToggle);
        }
        function handleToggle() {
            toggleNumber = !toggleNumber;
            if (toggleNumber) {
                toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
                toggleContainer.style.backgroundColor = '#D74046';
            } else {
                toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
                toggleContainer.style.backgroundColor = 'dodgerblue';
            }
            return toggleNumber;
        }
        if (toggleNumber) {
            this.props.onChange(this.props.textOption);
        } else {
            this.props.onChange(this.props.default);
        }
    }

    render() {
        return (
            <div id="container" ref={this.myRef}>
                <div className="inner-container">
                    <div className="toggle">
                        <p>{this.props.textOption}</p>
                    </div>
                    <div className="toggle">
                        <p>{this.props.default}</p>
                    </div>
                </div>
                <div
                    className="inner-container"
                    id="toggle-container"
                    ref={this.myRefCopy}
                >
                    <div className="toggle">
                        <p>{this.props.textOption}</p>
                    </div>
                    <div className="toggle">
                        <p>{this.props.default}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Toggle.defaultProps = {
    default: '',
    textOption: '',
};

Toggle.propTypes = {
    /** flag to show first option of toggle */
    default: PropTypes.string,

    /** flag to show second option of toggle */
    textOption: PropTypes.string,

    /** Callback function */
    onChange: PropTypes.func.isRequired,
};
