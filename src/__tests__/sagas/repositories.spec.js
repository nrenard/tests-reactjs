import { runSaga } from "redux-saga";

import apiMock from "../../__mocks__/api";

import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    apiMock.onGet("users/nrenard/repos").reply(200, true);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getRequestSuccess(true)
    );
  });

  it("should be able to fetch repositories failure", async () => {
    const dispatched = [];

    apiMock.onGet("users/nrenard/repos").reply(500, "Ocorreu um erro.");

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getFailure("Ocorreu um erro.")
    );
  });
});
