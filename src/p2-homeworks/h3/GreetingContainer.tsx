import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]// need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const userName = e.currentTarget.value.trim()
        if (userName) {
            setName(userName)
            setError('')
        } else {
            setName('')
            setError('please write your name')
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello  ${name}!`) // need to fix
        setName('')
    }
const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()

        }
}
    const totalUsers = users.length// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
