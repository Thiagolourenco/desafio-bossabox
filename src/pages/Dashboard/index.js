import React, { useState } from "react";
import { MdSearch, MdAdd, MdClose } from "react-icons/md";
import {
  Container,
  Search,
  InputSearch,
  ButtonAdd,
  List,
  Tags,
  TagsList
} from "./style";

import Modal from "../../components/Modal";

export default function Dashboard() {
  const [visible, setVisible] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  function handleModalVisible() {
    setVisible(true);
  }

  function handleDeleteVisible() {
    setVisibleDelete(true);
  }

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
        <ButtonAdd onClick={handleModalVisible}>
          <MdAdd size={20} color="#fff" />
          ADD
        </ButtonAdd>
      </Search>
      <List>
        <li>
          <div>
            <p>Notion</p>
            <button onClick={handleDeleteVisible}>
              <MdClose size={20} color="#000" />
              Remove
            </button>
          </div>
          <p>
            Descricao asdafaf afndifnaim aisfais nijfnasif naifn asijnf aisnf
            ainf finasfinas
          </p>
          <Tags>
            <TagsList># ReactJS</TagsList>
            <TagsList># ReactNative</TagsList>
            <TagsList># Google</TagsList>
          </Tags>
        </li>
        <li>
          <div>
            <p>Notion</p>
            <button>
              <MdClose size={20} color="#000" />
              Remover
            </button>
          </div>
          <p>
            Descricao asdafaf afndifnaim aisfais nijfnasif naifn asijnf aisnf
            ainf finasfinas
          </p>
          <Tags>
            <TagsList># ReactJS</TagsList>
            <TagsList># ReactNative</TagsList>
            <TagsList># Google</TagsList>
          </Tags>
        </li>
      </List>

      {/* Modal */}
      {visible && (
        <Modal>
          <div>
            <MdAdd size={25} color="#000" />
            <h1>Add New Tool</h1>
          </div>
          <label for="toolname">
            Tool name
            <input id="toolname" />
          </label>
          <label for="toolname">
            Tool link
            <input id="toolname" />
          </label>
          <label for="toolname">
            Tool Description
            <textarea id="toolname" />
          </label>
          <label for="toolname">
            Tool tags
            <input id="toolname" />
          </label>
          <div className="groupbutton">
            <button>Add Tool</button>
          </div>
        </Modal>
      )}

      {visibleDelete && (
        <Modal>
          <div>
            <MdClose size={25} color="#000" />
            <h1>Remove Tool</h1>
          </div>
          <p>
            Are you sure you want to remove <strong>hotel ?</strong>
          </p>
          <div className="groupbutton">
            <button className="cancel">Cancel</button>
            <button>Yes, remove</button>
          </div>
        </Modal>
      )}
    </Container>
  );
}
