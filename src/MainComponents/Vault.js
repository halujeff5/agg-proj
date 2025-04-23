import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import ArticleCard from '../Cards/ArticleCard'
import VaultCard from '../Cards/VaultCard'
import ToolBar from './ToolBar'

const Vault = () => {
    
    const [getVault, setGetVault] = useState([])
    const username = localStorage.getItem('user')
    async function getDataFromVault() {

        let options = {
            method: 'GET',
            url : `http://0.0.0.0:3001/vault`,
            params : {
                username: username
            }
        }
        try {
        let ans = await axios.request(options)
        console.log('ANS', ans.data)
        setGetVault(ans.data)
    }catch(e){
        console.log(e)
    }
}
    useEffect(() => {
        getDataFromVault();
    }, [])


    return (
        <>
        <ToolBar />
        <h1 className= 'welcome-2'>Vault Articles</h1>
        {getVault.map(c => (
            <VaultCard title={c.title}
            url = {c.url}
            description = {c.description}
            author = {c.author}
            image = {c.image}
            published_at = {c.published_at}
            />
        ))};
    </>
    )
}

export default Vault