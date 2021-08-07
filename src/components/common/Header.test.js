import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom"; //memory router is needed as in reladom it requires a router as parent

it("Shallow test of header", () => {
  let navLink = shallow(<Header />).find("NavLinks").length; // searchs in raw jsx as it is shallow render
  expect(navLink).toEqual(3);
});

it("Shallow test of header mount", () => {
  let navLink = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length; // searchs in realdom jsx as it is shallow render
  expect(navLink).toEqual(3);
});
