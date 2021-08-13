import axios from 'axios';
// import useInput from './hooks/useInput';
// import Hover from './components/Hover';
// import List from './components/List';
// import useDebounce from './hooks/useDebounce';

import useRequest from './hooks/useRequest';

function App() {
    // useInput custom HOOK
    // const username = useInput('');
    // const password = useInput('');
    //
    // return (
    //     <div>
    //         <input { ...username } type="text" placeholder="username"/>
    //         <input { ...password } type="password" placeholder="password"/>
    //         <button onClick={() => console.log(username.value, password.value)}>submit</button>
    //     </div>
    // );

    // useHover custom HOOK
    // return (
    //     <div>
    //         <Hover />
    //     </div>
    // );

    // useInfinitePagination HOOK
    // return (
    //     <div>
    //         <List />
    //     </div>
    // );

    // useDebounce HOOK
    // const [value, setValue] = useState('');
    // const debouncedSearch = useDebounce(search, 500);
    //
    // function search(query) {
    //     fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //         });
    // }
    //
    // const onChange = e => {
    //     const value = e.target.value;
    //     setValue(value);
    //     debouncedSearch(value)
    // }
    //
    // return (
    //     <div>
    //         <input
    //             type="text"
    //             value={value}
    //             onChange={onChange}
    //         />
    //     </div>
    // )

    // useRequest
    const getTodos = axios.get('https://jsonplaceholder.typicode.com/todos');

    const [todos, loading, error] = useRequest(getTodos);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error occured</h1>
    }

    return (
        <div>
            {
                todos.map(todo =>
                    <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                        {todo.id}. {todo.title}
                    </div>
                )
            }
        </div>
    )
}

export default App;
