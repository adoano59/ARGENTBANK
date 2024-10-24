export const signIn = async (email, password) => {
    try {
        const token = await fetch('http://localhost:3001/api/v1/user/login', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            }, body:JSON.stringify( {
                "email": email,
                "password": password
            })
        })
    
        const response = await token.json()
        console.log(response)
        localStorage.setItem('token',response.body.token)
    } catch (error) {
throw new Error(error)
    }

}
export const updateProfile = async ( firstName ,lastName ) => {
    try {
        const data = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }, body:JSON.stringify( {
                "firstName": firstName,
                "lastName": lastName
            })
        })
    
        const response = await data.json()
return response
    } catch (error) {

    }

}
export const getProfile = async ( firstName ,lastName ) => {
    try {
        const data = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
    
        const response = await data.json()
return response
    } catch (error) {

    }

}

export const logout = () => {
    try {
        // Retire le token du localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        // redirection de l'utilisateur vers la page de connexion 
        window.location.href = '/sign-in'  // Ou toute autre route pertinente
    } catch (error) {
        console.error('Error during logout', error)
    }
}

