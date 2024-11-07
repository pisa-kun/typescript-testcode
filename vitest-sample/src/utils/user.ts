// src/user.ts
export interface User {
    id: number
    name: string
}  
let users: User[] = []

export function addUser(name: string): User {
    const newUser = { id: users.length + 1, name }
    users.push(newUser)
    return newUser
}  
export function getUser(id: number): User | undefined {
    return users.find(user => user.id === id)
} 
export function getAllUsers(): User[] {
    return users
}  
export function clearUsers() {
    users = []
}