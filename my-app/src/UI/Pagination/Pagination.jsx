import React from 'react';
import {createArr} from "../utils/pages";

const Pagination = ({page, totalPages, setPage}) => {
    let pageArray = createArr(totalPages);

    return (
        <div style={{marginTop: 30}}>
            {pageArray.map(p =>
                <button className={page===p ? 'numbPgBtn numbPgBtnClick' : 'numbPgBtnClick'} onClick={() => setPage(p)}>
                    {p}
                </button>
            )}
        </div>
    );
};

export default Pagination;