import React from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import { theme } from "./theme";
import Products from "./components/Products";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, Stack, ThemeProvider } from "@mui/material";
// Initialze the client
const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container>
          <Stack spacing={2} sx={{ mb: 5 }}>
            <Header />
            <Banner />
          </Stack>
          <Products />
        </Container>
      </ThemeProvider >
    </QueryClientProvider>
  );
}

export default App;
