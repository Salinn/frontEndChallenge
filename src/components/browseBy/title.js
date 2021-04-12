import React from "react"
import { Link } from "react-router-dom"
import DropDown from "components/common/forms/dropDown"
import { useTitleProps } from "./hooks"
import BackArrow from "../../assets/BackArrow.svg"

const Title = (props) => {
    const { genre, sortTypes, sortByChanged } = useTitleProps(props)

    return (
        <div className="row space-bottom">
            <div className="col">
                <Link to={{ pathname: "/" }}>
                    <h3 className="black-text">
                        <img src={BackArrow} alt="back arrow" className="backIcon"/>
                        <span className="grey-text">{" "}Movies:{" "}</span>{genre}</h3>
                </Link>
            </div>
            <div className="col align-br">
                <DropDown label="Sort by" options={sortTypes} onChange={sortByChanged} />
            </div>
        </div>
    )
}

export default Title