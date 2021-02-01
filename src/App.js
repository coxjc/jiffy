import React, {useContext, useEffect, useState} from "react";
import './App.css';
import poweredByGiphy from './powered-by-giphy.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Grid,
    SearchBar,
    SearchContext,
    SearchContextManager
} from '@giphy/react-components'

const API_KEY = process.env.REACT_APP_GIPHY_SDK_KEY;


const Components = (props) => {
    const {fetchGifs, searchKey} = useContext(SearchContext);
    return (
        <>
            <SearchBar className='search-bar' />
            <Grid width={400} fetchGifs={fetchGifs} columns={3} key={searchKey} onGifClick={(gif, event) => {
                event.preventDefault();
                props.onClick(gif)
            }}/>
        </>
    )
}



const SearchExperience = (props) => (
    <SearchContextManager apiKey={API_KEY} theme='light'>
        <Components onClick={props.onClick}/>
    </SearchContextManager>
)

function App() {
    const [url, setUrl] = useState(null)


    const buildMdUrl = (gif) => (
        `![${gif.title} – Posted from Jifhub](${gif.images.downsized_medium.url})`
    )

    const onGClick = (gif) => {
        setUrl(buildMdUrl(gif))
    }

    const notifyUrlCopied = () => toast("Markdown-formatted GIF copied!", {autoClose: 2000})

    const copyUrl = () => {
        const copyFrom = document.createElement("textarea");
        copyFrom.textContent = url;
        document.body.appendChild(copyFrom);
        copyFrom.select();
        document.execCommand('copy');
        copyFrom.blur();
        document.body.removeChild(copyFrom);
        setUrl(null);
        notifyUrlCopied();
    };

    useEffect(() => {
        if (url?.length > 0) {
            copyUrl();
            setTimeout(() => window.close(), 2000);
        }
    }, [copyUrl, url])

    return (
        <div className="App">
            <div className="app-ctr">
            <SearchExperience onClick={(s) => onGClick(s)}/>
            <img src={poweredByGiphy} alt="Powered by Giphy" width={200} id="attribution" />
            <ToastContainer />
            </div>
        </div>
    );
}

export default App;
