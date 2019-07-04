import respositoriesReducer, {
  Creators as RepositoriesActions
} from "../../store/ducks/repositories";

describe("Repositories Reducer", () => {
  it("shoul be able to get repositories", () => {
    const state = respositoriesReducer(
      { list: [], loading: false },
      RepositoriesActions.getRequest()
    );

    expect(state.loading).toBe(true);
  });

  it("shoul be able to get repositories success", () => {
    const state = respositoriesReducer(
      { list: [], loading: false },
      RepositoriesActions.getRequestSuccess(JSON.stringify(["repos"]))
    );

    expect(state.loading).toBe(false);
    expect(state.list).toBe(JSON.stringify(["repos"]));
  });

  it("shoul be able to get repositories failure", () => {
    const state = respositoriesReducer(
      { loading: true, error: null },
      RepositoriesActions.getFailure("Ocorreu um erro.")
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe("Ocorreu um erro.");
  });
});
