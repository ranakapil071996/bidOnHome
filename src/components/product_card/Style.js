export const Style = theme => ({
    container: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        boxShadow: "10px 10px 6px -9px rgba(0,0,0,0.75)",
        background: "#fff",
        display: "flex"
    },
    productImg: {
        width: 150,
        height: 150,
        marginRight: 10
    },
    name: {
        marginTop: 2,
        marginBottom: 4
    },
    description: {
        marginBottom: 4,
        width: 100,
        overflow:"hidden",
        cursor: "pointer",
        whiteSpace:"nowrap",
        textOverflow: "ellipsis"
    }
})