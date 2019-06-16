import React from "react";
import { Button, Icon, Modal, Input } from "semantic-ui-react";

import s from "../style.scss";

export default ({
  inputChange,
  email,
  password,
  closeModal,
  onSubmit,
  authError
}) => (
  <>
    <Modal.Content>
      <div className={s.content}>
        <div className={s.title}>
          <Icon name="user" />
          <p>Let us know who yo are!</p>
        </div>
        <Input
          onChange={inputChange}
          name="email"
          type="text"
          value={email}
          className={s.input}
          placeholder="Email"
        />
        <Input
          onChange={inputChange}
          name="password"
          type="password"
          value={password}
          className={s.input}
          placeholder="Password"
        />
        <p className={s.error}>{authError}</p>
      </div>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color="violet" inverted onClick={onSubmit}>
        <Icon name="send" />
        LOG IN
      </Button>
      <Button basic color="red" inverted onClick={closeModal}>
        <Icon name="cancel" />
        CANCEL
      </Button>
    </Modal.Actions>
  </>
);
