import { useState } from "react";

import Button from "./Button";

import styles from "./ColorPicker.module.scss";

const colors = [
    {
        name: "red",
        value: "#ff0000",
    },
    {
        name: "green",
        value: "#00ff00",
    },
    {
        name: "blue",
        value: "#0000ff",
    },
    {
        name: "yellow",
        value: "#ffff00",
    },
    {
        name: "teal",
        value: "#008080",
    },
    {
        name: "orange",
        value: "#ffa500",
    },
];

const ColorPicker = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
    <div className={styles.colorpicker}>
    <div
        className={styles.colorpicker__block}
        style={{
            backgroundColor: colors[activeIndex].value,
    }}
    >
    <h2 className={styles.colorpicker__name}>{colors[activeIndex].name}</h2>
    </div>
    {colors.map((color, index) => {
        return <Button
        key={index}
        backgroundColor={color.value}
        label={color.name}
        clickHandler={() => {
            setActiveIndex(index);
        }}
        />;
    })}
    </div>
    );
};
export default ColorPicker;