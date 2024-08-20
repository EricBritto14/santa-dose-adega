export const styleSelect = {
    container: (provided:any) => ({
        ...provided,
        width: "150px",
    }),
    control: (provided:any) => ({
        ...provided,
        border: "3px solid #f4f4f4",
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px",
        cursor: "pointer",
        height: "40px"
    }),
    singleValue: (provided:any) => ({
        ...provided,
        // padding: "0px",
        top: "6px",
        position: "absolute",
    }),
    indicatorSeparator: (provided:any) => ({
        ...provided,
        display: "none",
    }),
    dropdownIndicator: (provided:any) => ({
        ...provided,
        top: "0px",
        left: "78px",
        position: "absolute",
        color: "#71767C",
        '&:hover': {
          color: "#71767C"
        }
    }),
    option: (provided:any, state:any) => ({
        ...provided,
        backgroundColor: "#FFF",
        display: "flex",
        alignItems: "center",
        color: state.isSelected ? "#e0b439" : "#000",
        fontWeight: state.isSelected ? "700" : "400",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
            backgroundColor: "#e0b439",
            color: "#FFF",
        },
    }),
}