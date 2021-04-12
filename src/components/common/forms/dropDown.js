import React from "react"

const DropDown = props => {
    const { options, onChange } = props
    return (
        <select className="select" onChange={onChange}>
            {options.map(option => {
                return <option key={option.value} label={option.label} value={option.value} />
            })}
        </select>
    )
}

export default DropDown