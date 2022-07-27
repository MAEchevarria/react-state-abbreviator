function DropdownSelect(props) {

    const stateList = () => {
        let elements = [];
        for (let i = 0; i < props.stateData.length; i++) {
            // added key to element
            elements.push(<option key={ i } value={ props.stateData[i]["alpha-2"] }>{ props.stateData[i]["name"] }</option>);
        }
        return elements
    }

    return (
        <div>
            {/* to pass event to event handler function need to pass event with () => to function */}
            <select onChange={ (event) => props.handleSelect(event) }>{ stateList() }</select>
        </div>
    )
}
export default DropdownSelect