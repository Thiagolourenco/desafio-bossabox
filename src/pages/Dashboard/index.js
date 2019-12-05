import React, { useState, useEffect } from "react";
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

import api from "../../services/api";

import Modal from "../../components/Modal";

export default function Dashboard({ history }) {
  // states de Modal
  const [visible, setVisible] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  // states Inputs
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  // Search
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState();

  useEffect(() => {
    async function loadTools() {
      const response = await api.get("/tools");

      setData(response.data);
    }
    loadTools();
  }, []);

  function handleModalVisible() {
    setVisible(true);
  }

  async function handleDeleteVisible(id) {
    setVisibleDelete(true);

    await api.delete(`/tools/${id}`);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const tools = { title, link, description, tags };
    await api
      .post("/tools", tools)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

    setVisible(false);
    setTitle("");
    setLink("");
    setDescription("");
  }

  async function handleSubmitSearch(e) {
    e.preventDefault();
    if (check) {
      const response = await api.get(`/tools?tags_like=${search}`);
      setData(response.data);
    } else {
      const response = await api.get(`/tools?q=${search}`);
      setData(response.data);
    }
  }

  function handleDelete(item) {
    setVisibleDelete(false);
  }

  return (
    <Container>
      <header>
        <p className="title">VUTTR</p>
        <p>Very Useful Tools to Remenber</p>
      </header>
      <Search>
        <form onSubmit={handleSubmitSearch}>
          <InputSearch>
            <button>
              <MdSearch size={20} color="#000" />
            </button>
            <input
              placeholder="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </InputSearch>
          <input
            className="check"
            type="checkbox"
            checked={check}
            value={check}
            onChange={e => setCheck(e.target.checked)}
          />
          <p>search in tags only</p>
        </form>
        {/* Visualizar Modal de Adicionar Tools */}
        <ButtonAdd onClick={handleModalVisible}>
          <MdAdd size={20} color="#fff" />
          ADD
        </ButtonAdd>
      </Search>

      {/* Listas das Tools */}
      <List>
        {data.map(item => (
          <li key={item.id}>
            <div>
              <a href={item.link}>{item.title}</a>
              <button onClick={() => handleDeleteVisible(item.id)}>
                <MdClose size={20} color="#000" />
                Remove
              </button>
            </div>
            <p>{item.description}</p>

            <Tags>
              {item.tags.map(tag => (
                <TagsList key={tag}> #{tag}</TagsList>
              ))}
            </Tags>
          </li>
        ))}
      </List>

      {/* Modal */}
      {visible && (
        <Modal>
          <div>
            <MdAdd size={25} color="#000" />
            <h1>Add New Tool</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="toolname">
              Tool name
              <input
                id="toolname"
                value={title}
                onChange={text => setTitle(text.target.value)}
              />
            </label>
            <label htmlFor="toollink">
              Tool link
              <input
                id="toollink"
                value={link}
                onChange={text => setLink(text.target.value)}
              />
            </label>
            <label htmlFor="tooldescriptio">
              Tool Description
              <textarea
                id="tooldescriptio"
                value={description}
                onChange={text => setDescription(text.target.value)}
              />
            </label>
            <label htmlFor="tooltags">
              Tool tags
              <input
                id="toolags"
                value={tags}
                onChange={text => setTags(text.target.value)}
              />
            </label>
            <div className="groupbutton">
              <button>Add Tool</button>
            </div>
          </form>
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
            <button className="cancel" onClick={handleDelete}>Cancel</button>
            <button onClick={handleDelete}>Yes, remove</button>
          </div>
        </Modal>
      )}
    </Container>
  );
}
