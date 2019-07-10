import React from 'react'

const Paginantion = ({ itemsPerPage, totalItem, paginate, props }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItem / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (<div className="">
        <nav className="pagination_nav">
            <ul className="pagination justify-content-left">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    )
}
export default Paginantion;