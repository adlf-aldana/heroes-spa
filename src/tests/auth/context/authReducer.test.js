import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth/types/types";

describe("Pruebas authReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const initialState = [
      {
        logged: false,
      },
    ];
    const state = authReducer(initialState, {});
    expect(state).toBe(initialState);
  });

  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    const action = {
      types: types.login,
      logged: false,
      payload: {
        id: "123",
        name: "Adolfo Aldana",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: {
        id: "123",
        name: "Adolfo Aldana",
      },
    };
    const action = {
      types: types.logout,
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({
      logged: false,
    });
  });
});
