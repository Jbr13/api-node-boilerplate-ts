import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "@shared/http/routes";
import AppError from "@shared/errors/AppError";

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
});

app.use('/v1/boilerplate/', routes);

app.listen(port, () => {
  console.log(`Server started on https://localhost:${port}`);
});


