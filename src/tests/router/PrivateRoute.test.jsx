const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../auth/context/AuthContext");
const { PrivateRoute } = require("../../router/PrivateRoute");

describe("Pruebas en el <PrivateRoute />", () => {
  test("debe de mostrar el children si está autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Adolfo Aldana",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initalEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByAltText("Ruta Privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
  });
});
