const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../auth/context/AuthContext");
const { AppRouter } = require("../../router/AppRouter");
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <Approuter /><", () => {
  test("debe de mostrar el login si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Login").length).toBe(2);
    // screen.debug();
  });

  test("debe de mostrar el componente de Marvel si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Adolfo Aldana",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
    // screen.debug();
  });
});
