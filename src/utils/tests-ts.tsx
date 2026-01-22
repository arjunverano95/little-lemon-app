import "@testing-library/jest-dom";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/chakra-theme";

type CustomRenderProps = Omit<RenderOptions, "queries">;

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <BrowserRouter basename="/">
      <ChakraProvider theme={theme}>
        {ui}
      </ChakraProvider>
    </BrowserRouter>,
    renderOptions
  );

export * from "@testing-library/react";
export { customRender as render };
