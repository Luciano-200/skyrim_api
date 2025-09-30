import cors from "cors"
import express from "express"
import { router } from "./routes"
import { errorHandlerMiddleware } from "./middlewares/error-handler"
import swaggerUi from 'swagger-ui-express';
import { requestLogger } from "./middlewares/requestLogger";
import { logStartupInfo } from "./startupLogger";
const swaggerDocument = require('./swagger.json');

export const app = express()

logStartupInfo();

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use("/api", router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`))