import dotenv from 'dotenv';
import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
// import path from "path";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;

// ROUTES
import indexRouter from './routes/index';
import usersRouter from './routes/users';

// Initialize express
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CQRS
import { commandBus } from './cqrs';
import ChangeUserPassword from './user/commands/ChangeUserPassword';
import CreateUser from './user/commands/CreateUser';
import DeleteUser from './user/commands/DeleteUser';
import UpdateUser from './user/commands/UpdateUser';
import CreateUserHandler from './user/handlers/CreateUserHandler';

commandBus.register(CreateUser, CreateUserHandler);
commandBus.register(UpdateUser, CreateUserHandler);
commandBus.register(DeleteUser, CreateUserHandler);
commandBus.register(ChangeUserPassword, CreateUserHandler);

// END CQRS

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// app.use((err, req, res, next) => {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render("error");
// });

// Configure Express to use EJS
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
