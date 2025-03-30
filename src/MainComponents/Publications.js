import React, { useState, useEffect } from 'react'
import '../App.css'
import ArticleCard from '../Cards/ArticleCard'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { cleanData } from '../hooks/utils'

const Publications = () => {
    const [checkboxes, setCheckboxes] = useState([])
    const [articles, setArticles] = useState([])

    const handleCheckboxChange = (event) => {
        event.preventDefault()
        console.log('EVENT', event.target.value)
        if (event.target.checked === true);
        setCheckboxes([...checkboxes, event.target.value]);

        if (event.target.checked === false)
        setCheckboxes(checkboxes.filter(topic => topic !== event.target.value))
        console.log('TEST', checkboxes)
      };
      localStorage.setItem('pubs', checkboxes)

    }