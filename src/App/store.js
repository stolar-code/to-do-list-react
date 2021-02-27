import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";
import themeReducer from "./common/ThemeToggler/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        darkTheme: themeReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;