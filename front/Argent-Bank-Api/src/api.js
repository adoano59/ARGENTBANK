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
        await localStorage.setItem('token',response.body.token)
    } catch (error) 
    {console.log(error)
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


