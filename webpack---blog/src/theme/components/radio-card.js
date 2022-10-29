import React from "react";

export default {
    baseStyle: {
        borderRadius: "md",
        borderWidth: "1px",
        cursor: "pointer",
        py: 1.5,
        textAlign: "center",
        height: "100%",
    },
    variants: {
        electricBlue: {
            _checked: {
                bg: "electricBlue.100",
                color: "white",
                borderColor: "electricBlue.100",
            },
            _hover: {
                bg: "electricBlue.100",
                color: "white",
                borderColor: "electricBlue.100",
            },
            _focus: {
                boxShadow: "outline",
            },
            _invalid: {
                bg: "critical.100",
                color: "white",
            },
            bg: "darkBlue.8",
        },
        darkBlue: {
            _checked: {
                bg: "darkBlue.100",
                color: "white",
                borderColor: "darkBlue.100",
            },
            _focus: {
                boxShadow: "outline",
            },
            _hover: {
                borderColor: "darkBlue.100",
            },
            _invalid: {
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "critical.100",
            },
            bg: "white",
            borderColor: "darkBlue.8",
            fontWeight: 500,
        },
    },
};