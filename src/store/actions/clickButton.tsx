import CLICK_UPDATE_VALUE from "./actionTypes";

const clickButton = (value: string) => {
    const obj = {
        type: CLICK_UPDATE_VALUE,
        newValue: value
    }

    return obj;
}

export default clickButton;