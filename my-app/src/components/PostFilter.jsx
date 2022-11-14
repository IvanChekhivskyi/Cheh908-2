import React from "react";
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/MySelect/MySelect';


const PostFilter = ({filter, setFilter, setLimit}) => {
    return(
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue="Selected"
                option={[
                    {value:'title', name:'for name'},
                    {value:'body', name:'for content'},
                ]}
            />

        </div>
        
    );

};


export default PostFilter;