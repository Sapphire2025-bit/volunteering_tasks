"use client"
import { jwtDecode } from 'jwt-decode';

export function getUserRoleFromCookies(): string | null {
    // Check if running on the client-side
    if (typeof window === 'undefined') {
        return null;
    }
    // Get the token from cookies
    const cookie = document.cookie.split('; ').find(row => row.startsWith('token='));
    const token = cookie?.split('=')[1];
    if (!token) return null;
    try {
        // Decode the token to get the payload
        const decoded: { role: string } = jwtDecode(token);
        return decoded.role || null;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}

//remove token - for debugging?
export const removeToken = () => {
    // Set the cookie with an expired date to delete it
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
};
