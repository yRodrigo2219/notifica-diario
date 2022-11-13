import React from "react";
import Routes from "./Routes";
import { ModalsProvider } from "@mantine/modals";

export default function App() {
  return (
    <ModalsProvider>
      <Routes />
    </ModalsProvider>
  );
}
