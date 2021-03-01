import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksStateInLocalStorage } from "./tasksStateLocalStorage";
import { fetchExampleTasks, selectTasksState, setTasks, setLoadingExampleTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield put(setLoadingExampleTasks(true));
        yield delay(350);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Something went wrong!")
    } finally {
        yield put(setLoadingExampleTasks(false));
    };
};

function* saveTasksStateInLocalStorageHandler() {
    const { tasks, hideDone } = yield select(selectTasksState);
    yield call(saveTasksStateInLocalStorage, tasks, hideDone);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksStateInLocalStorageHandler);
};