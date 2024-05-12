const PrimaryInput = (props) => {

    const { titel, styles } = props;


    const styling = {
        color: 'black',
        fontSize: '20px',
        width: 200,
        borderRadius: '20px'
    };

    const mergedstyles = { ...styles, ...styling }

    return (
        <input placeholder={titel} style={mergedstyles} />
    )
 };



export default PrimaryInput;