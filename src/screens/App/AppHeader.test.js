import React from "react";
import AppHeader from "./AppHeader";
import { create } from "react-test-renderer";

describe("AppHeader", () => {
  const testRenderer = create(<AppHeader />);
  it("renders", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
