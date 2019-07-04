import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { Creators as RepositoriesActions } from "../../ducks/repositories";

export function* getRepositories() {
  try {
    const { data } = yield call(api.get, "users/nrenard/repos");

    yield put(RepositoriesActions.getRequestSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(RepositoriesActions.getFailure(err.response.data));
  }
}
