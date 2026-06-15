export class RandomData {
    /** * Generate random email*/
    static generateEmail(): string {
        const timestamp = Date.now();
        return `testuser${timestamp}@gmail.com`;
    }
    /*** Generate random username*/
    static generateUsername(): string {
        const randomNumber =
            Math.floor(Math.random() * 10000);
        return `user${randomNumber}`;
    }
    /** * Generate random password*/
    static generatePassword(
        length: number = 10
    ): string {
        const chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
        let password = '';
        for(let i = 0; i < length; i++) {
            const randomIndex =
                Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
    /*** Generate random phone number*/
    static generatePhoneNumber(): string {
        const randomNumber =
            Math.floor(
                100000000 + Math.random() * 900000000
            );
        return `04${randomNumber}`;
    }
    /*** Generate random first name*/
    static generateFirstName(): string {
        const names = [
            'John',
            'David',
            'Michael',
            'Emma',
            'Sophia',
            'Olivia'
        ];
        return names[
            Math.floor(Math.random() * names.length)
        ];
    }
    /*** Generate random order ID */
    static generateOrderId(): string {
        return `ORD-${Date.now()}`;
    }
    /** * Generate random numeric value */
    static generateRandomNumber(
        min: number,
        max: number
    ): number {
        return Math.floor(
            Math.random() * (max - min + 1)
        ) + min;
    }
}