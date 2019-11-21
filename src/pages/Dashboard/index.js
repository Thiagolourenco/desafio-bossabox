import React from "react";
import { MdSearch } from "react-icons/md";
import { Container, Search, InputSearch, ButtonAdd } from "./style";

export default function Dashboard() {
  return (
    <Container>
      <header>
        <p className="title">VUTTR</p>
        <p>Very Useful Tools to Remenber</p>
      </header>
      <Search>
        {/* <Inputs> */}
        <InputSearch>
          <button>
            <MdSearch size={20} color="#000" />
          </button>
          <input placeholder="search" />
        </InputSearch>
        <input className="check" type="checkbox" /> <p>search in tags only</p>
        {/* </Inputs> */}
        <ButtonAdd>ADD</ButtonAdd>
      </Search>
    </Container>
  );
}
