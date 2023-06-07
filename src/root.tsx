// @refresh reload

import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./css/tailwind.css";

export default function Root() {
  return (
    <Html lang="ar" class="h-full">
      <Head>
        <Title>The Way To Germany</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="h-full">
          <Routes>
            <FileRoutes />
          </Routes>      
      </Body>
    </Html>
  );
}
