import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
})

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'User',
        email: ''
    });
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    // Tambahkan log untuk melihat perubahan user
    const updateUser = (newUser) => {
        console.log("Updating user context:", newUser);
        setUser(newUser);
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser: updateUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
