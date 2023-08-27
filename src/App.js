import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastProvider } from "./components/ContextTodoList/ContextTost";
import TodosProvider from "./components/ContextTodoList/ContextTodo";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Cairo, sans-serif", // تطبيق الخط Cairo كخط افتراضي
    },
    palette: {
      primary: { main: "#dd2c00" },
      secondary: {
        main: "#ffffff",
      },
      sky: {
        main: "#00ff",
      },
    },
    // يمكنك إضافة المزيد من التخصيصات هنا حسب احتياجاتك
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <div
          style={{
            height: "95vh",
            display: "flex",
            alignItems: "center",
            fontFamily: "Cairo",
            fontWeight: "normal",
          }}
          className="App"
        >
          <TodosProvider>
            <TodoList />
          </TodosProvider>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
