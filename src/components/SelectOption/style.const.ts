export const selectStyle = {
    container: (provided:any, state:any) => ({
        ...provided,
        width: "100%",
    }),
    control: (provided:any, state:any) => ({
        ...provided,
        border: "3px solid #ECECEC",
        cursor: "pointer",
        borderRadius: "6px",
    }),
    indicatorSeparator: (provided:any, state:any) => ({
        ...provided,
        display: "none",
    }),
    dropdownIndicator: (provided:any, state:any) => ({
        ...provided,
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