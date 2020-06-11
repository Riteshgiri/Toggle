import React from 'react';
import PropTypes from 'prop-types';
import './styleForToggle.scss';

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.myRefCopy = React.createRef();
        this.RefForPTags = React.createRef();
        this.RefForDefaultTags = React.createRef();
        this.state = {
            value: this.props.defaultOption,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const toggle = this.myRef.current;
        const toggleContainer = this.myRefCopy.current;
        const defaultTag = this.RefForDefaultTags.current;
        const OptionTag = this.RefForPTags.current;
        let toggleNumber = false;
        defaultTag.style.color = '#e9e9e9';
        if (toggle) {
            toggle.addEventListener('click', handleToggle);
        }
        function handleToggle() {
            toggleNumber = !toggleNumber;
            if (toggleNumber) {
                toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
                OptionTag.style.color = '#e9e9e9';
            } else {
                toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
                defaultTag.style.color = '#e9e9e9';
            }
            return toggleNumber;
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.value !== this.state.value) {
            this.props.onChange(this.state.value);
        }
    }

    handleClick() {
        this.setState({
            value:
                this.state.value === this.props.defaultOption
                    ? this.props.otherOption
                    : this.props.defaultOption,
        });
    }

    render() {
        return (
            <button type="button" id="container" onClick={this.handleClick} ref={this.myRef}>
                <div className="inner-container">
                    <div className="toggle">
                        <p>{this.props.otherOption}</p>
                    </div>
                    <div className="toggle">
                        <p>{this.props.defaultOption}</p>
                    </div>
                </div>
                <div
                    className="inner-container"
                    id="toggle-container"
                    ref={this.myRefCopy}
                >
                    <div className="toggle">
                        <p ref={this.RefForPTags}>{this.props.otherOption}</p>
                    </div>
                    <div className="toggle">
                        <p ref={this.RefForDefaultTags}>
                            {this.props.defaultOption}
                        </p>
                    </div>
                </div>
            </button>
        );
    }
}

Toggle.defaultProps = {
    defaultOption: '',
    otherOption: '',
};

Toggle.propTypes = {
    /** flag to show first option of toggle */
    defaultOption: PropTypes.string,

    /** flag to show second option of toggle */
    otherOption: PropTypes.string,

    /** Callback function */
    onChange: PropTypes.func.isRequired,
};
