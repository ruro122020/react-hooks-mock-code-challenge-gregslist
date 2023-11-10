import React, { useState } from 'react'

const ItemForm = ({ onAddNewItem }) => {
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const addItem = {
            image: image,
            description: description,
            location: location
        }
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(newItem => onAddNewItem(newItem))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Image
                <input name='image' value={image} onChange={(e) => setImage(e.target.value)} />
            </label>
            <label>
                Description
                <input name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Location
                <input name='location' value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ItemForm
