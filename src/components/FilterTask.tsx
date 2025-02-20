import React from "react";
import { Dropdown } from "react-bootstrap";

interface IFilter {
    handleFilter : (status : boolean | null)=> void;
}

const FilterTask = React.memo(({handleFilter}:IFilter) => {
    const filterSelect = (status:boolean|null)=>{
        handleFilter(status)
    }
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-filter">
                    Filter By Status
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>{
                        filterSelect(true)
                    }}>Completed</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{
                        filterSelect(false)
                    }}>Pending</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{
                        filterSelect(null)
                    }}>All</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>

    );
});

export default FilterTask;
