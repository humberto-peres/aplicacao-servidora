import dotenv from 'dotenv-safe'
dotenv.config()
import jwt from 'jsonwebtoken'

// Realiza o login do usuário para liberar o token
export const login = async (req, res) => {
    if ((req.body.user === 'estudante') && (req.body.pwd === '123')) {
        const id = 1
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 500
        })
        return res.json({ auth: true, token: token })
    }
    res.status(500).json({ message: "Login Inválido" })

}

// Realiza a verificação do token, para permitir que a rota seja acessada apenas se o token for informado
export function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    if (!token) return res.status(401).json({ auth: false, message: "Não há token" })

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: "Erro com a autenticação do Token" })

        req.userId = decoded.id
        next();
    })

}