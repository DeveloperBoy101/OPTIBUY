import jwt from 'jsonwebtoken';

const adminAuth = async(req, res, next) => {
    try {
        console.log("=== ADMIN AUTH MIDDLEWARE ===");
        
        const { token } = req.headers;
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token not provided.",
            });
        }

        console.log("🔑 Token:", token.substring(0, 50) + "...");
        
        // ✅ Try to verify as JWT
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("✅ JWT Decoded:", decoded);
            
            // Check if it has admin properties
            if (decoded.isAdmin === true || decoded.role === "admin" || 
                decoded.email === process.env.ADMIN_EMAIL) {
                req.user = decoded;
                console.log("✅ Admin verified via JWT");
                return next();
            }
        } catch (jwtError) {
            console.log("❌ JWT verification failed:", jwtError.message);
        }
        
        // ✅ If JWT fails, check if it's the old format string
        try {
            // Try to decode base64
            const tokenParts = token.split('.');
            if (tokenParts.length === 3) {
                // It might be a JWT but with wrong format
                const payloadBase64 = tokenParts[1];
                const payloadStr = Buffer.from(payloadBase64, 'base64').toString();
                console.log("🔍 Base64 decoded:", payloadStr);
                
                // Check if it contains admin credentials
                if (payloadStr.includes(process.env.ADMIN_EMAIL) && 
                    payloadStr.includes(process.env.ADMIN_PASSWORD)) {
                    console.log("⚠️ Old format token detected");
                    // Create user object
                    req.user = {
                        email: process.env.ADMIN_EMAIL,
                        isAdmin: true,
                        role: "admin"
                    };
                    return next();
                }
            }
        } catch (base64Error) {
            console.log("❌ Base64 decode failed");
        }
        
        // ✅ Final fallback: check if token is the plain concatenated string
        if (token === process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            console.log("⚠️ Plain string token detected");
            req.user = {
                email: process.env.ADMIN_EMAIL,
                isAdmin: true,
                role: "admin"
            };
            return next();
        }
        
        console.log("❌ All authentication methods failed");
        return res.status(403).json({
            success: false,
            message: "Access denied. Admin only.",
        });
        
    } catch (error) {
        console.log("❌ Auth Error:", error);
        return res.status(500).json({
            success: false,
            message: "Authentication failed.",
        });
    }
};

export default adminAuth;