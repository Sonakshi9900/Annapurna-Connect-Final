import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_development";

export interface DecodedToken {
    userId: string;
    role: string;
    iat: number;
    exp: number;
}

export function verifyToken(authHeader: string | null): DecodedToken | null {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null;
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
        return decoded;
    } catch {
        return null;
    }
}
