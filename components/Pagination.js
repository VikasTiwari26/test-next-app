import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Card from './common/Card';

const Pagination = (props) => {
    const { itemsPerPage, items, listStyle } = props
    const router = useRouter()
    const [itemsOnPage, setItemsOnPage] = useState([])
    const [numberOfPages, setNumberOfPages] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    // const [startIndex, setStartIndex] = useState(0)
    // const [lastIndex, setLastIndex] = useState(null)

    const calculateStartAndLastindex = (pageNumber) => {
        let allItems = JSON.parse(JSON.stringify(items))
        let totalNumberOfPage = Math.ceil(items.length / itemsPerPage)
        let startingIndex = itemsPerPage * (pageNumber - 1)
        let lastItemIndex = (itemsPerPage * pageNumber)
        let filteredItems = allItems.slice(startingIndex, lastItemIndex)
        if (currentPage == numberOfPages) {
            filteredItems = allItems.slice(startingIndex)
        }
        setNumberOfPages(totalNumberOfPage)
        setItemsOnPage(filteredItems)
    }
    useEffect(() => {
        calculateStartAndLastindex(currentPage)
    }, [])
    useEffect(() => {
        calculateStartAndLastindex(currentPage)
    }, [currentPage, itemsPerPage])

    const handlePaginationButtons = (direction) => {
        if (direction == 'next') {
            let nextPage = currentPage + 1
            if (nextPage > numberOfPages) return
            setCurrentPage(nextPage)
        }
        if (direction == 'prev') {
            let prevPage = currentPage - 1
            if (prevPage < 1) return
            setCurrentPage(prevPage)
        }
    }

    const handlePageNumberClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <>
            <div className="col-md-12 ">
                {/* <div id="list-type" className={"proerty-th"}> */}
                <div id="list-type" className={listStyle == 'list' ? "proerty-th-list" : "proerty-th"}>
                    {
                        itemsOnPage.length > 0 && itemsOnPage.map((item, index) => {
                            const { propertyId, title, actualAmt, area, description, propertyName, bedrooms, bathrooms, garages } = item
                            return <Card
                                key={index}
                                keyValue={propertyId}
                                title={`${propertyId}. ${propertyName}`}
                                id={propertyId}
                                area={area}
                                price={`$ ${actualAmt}`}
                                description={description}
                                bedrooms={bedrooms}
                                bathrooms={bathrooms}
                                garages={garages}
                            />
                        })
                    }
                </div>
            </div>
            {/* <div className="col-md-12">
                <div className="pull-right">
                    <div className="pagination">
                        <ul>
                            <li onClick={() => handlePaginationButtons('prev')} ><a >Prev</a></li>
                            {
                                Array.from({ length: numberOfPages }, (_, i) => i + 1).map((page) => (
                                    <li className={currentPage == page ? 'active' : ''} key={page} onClick={() => handlePageNumberClick(page)} ><a>{page}</a></li>
                                ))
                            }
                            <li onClick={() => handlePaginationButtons('next')} ><a>Next</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Pagination;