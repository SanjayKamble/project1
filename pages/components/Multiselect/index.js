import React, { useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component";

const options = [
    { label: "Grapes", value: "grapes" },
    { label: "Mango", value: "mango" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Peach", value: "peach" },
    { label: "Avacados", value: "avacados" },
    { label: "Pineapple", value: "pineapple" },
    { label: "Apple", value: "apple" }
];
// let x = [{h:"hello1"}];
const MultiSelect1 = () => {
    const [selected, setSelected] = useState([]);
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data) 
                setLoading(false)
                console.log(data[0].title)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    // const hello = (e) => {
    //     // x = e;
    //     x='c'
    //     console.log(x)
    //     // setSelected(x)
    // }

    // useEffect(() => {

    //   console.log("changed");
    //   console.log(x)
    // }, [x])


    const filterOptions = (options, filter) => {
        if (!filter) {
            return options;
        }
        const re = new RegExp(filter, "i");

        return options.filter(({ value }) => value && value.match(re));
    };

    // console.log(x)
    return (
        <div className='w-full'>
            <h1>Select </h1>

            <pre>{JSON.stringify(selected)}</pre>
            {/* <pre>{JSON.stringify(x)}</pre> */}
            {/* <h1>{data}</h1> */}
       
            <MultiSelect
                options={options}
                value={selected}
                // onChange={e => hello(e)}
                onChange={e => setSelected(e)}
                // labelledBy="Select"
                // disableSearch={true}
                hasSelectAll={false}
                filterOptions={filterOptions}
            />
        </div>
    )
}

export default MultiSelect1