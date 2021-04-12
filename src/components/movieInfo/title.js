import React from "react"
import { Link } from "react-router-dom"
import BackArrow from "../../assets/BackArrow.svg"

const Title = () => {
    return (
        <div className="row space-bottom">
            <div className="col">
                <Link to={{ pathname: "/" }}>
                    <h3 className="black-text">
                        <img src={BackArrow} alt="back arrow" className="backIcon"/>
                        <span className="grey-text">{" "}Movies:{" "}</span>Top 5</h3>
                </Link>
            </div>
        </div>
    )
}

export default Title