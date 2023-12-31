import './Recipe.css'
import {useParams} from 'react-router-dom'
import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
    const {id} = useParams()
    const {mode} = useTheme()
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [recipe, setRecipe] = useState(null)
    
    useEffect(() => {
      setIsPending(true)
  
      projectFirestore.collection('recipe').doc(id).get().then(doc => {
        if (doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError(`Could not find that recipe`)
        }
      })
  
    }, [id])
    return (
    <div className={`recipe ${mode}`}
    >{error && <p className="error">{error}</p>}
    {isPending && <p className="loading">Loading...</p>}
    {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>ing</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}
