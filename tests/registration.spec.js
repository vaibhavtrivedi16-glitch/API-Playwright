const {request,expect,test}= require('@playwright/test')

test('Valdate registration API', async ({request})=>{
    const response = await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/register', {
        data: {
            "email": "vaibhav.esprit+4@gmail.com",
            "password": "Vibhu@990"
        }
    
})
console.log("Response status:", response.status());
await expect(response.status()).toBe(201);
const responseBody = await response.json()
console.log(responseBody);
//expect(responseBody.error).toBe('Email already registered')
})