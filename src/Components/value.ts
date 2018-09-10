import ClassNames from '../Config/ClassNames';
import State      from '../State/State';
import Option from "../State/Option";

const value = (state: State, classNames: ClassNames) => {
    const selectedOption: Option = state.selectedOption;
    return (`
        <div
            class="${classNames.value} ${selectedOption ? selectedOption.additionalClasses : ''}"
            data-selected="${state.selectedOption ? state.selectedOption.label : undefined}"
            data-ref="value"
            ${state.isPlaceholderShown ? `aria-placeholder="${state.humanReadableValue}"` : ''}
        >
            ${state.humanReadableValue}
        </div>
    `);
};

export default value;