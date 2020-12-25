import React from 'react';

import { Container, Content, Image } from './Add-new-pizza.styles';
import key from '../../utils/api-comunication/key';
import ImagePicker from '../UI/Image-picker';

interface ViewType {
  state: {
    selectetImage: string | null;
    isSelectImageContainerOpen: boolean;
    images: string[];
  };
  handlers: {
    handleImageSelectContainer: VoidFunction;
    handleSelectImage: (selectedImage: string) => void;
  };
}

const View: React.FunctionComponent<ViewType> = (p) => {
  return (
    <Container>
      <h1>Add new pizza</h1>
      <Content>
        <Image
          src={
            p.state.selectetImage
              ? `${key}/images/pizzas/${p.state.selectetImage}`
              : `${key}/images/pizzas/pngegg-1.png`
          }
          isSelected={p.state.selectetImage ? true : false}
          onClick={p.handlers.handleImageSelectContainer}
        />
        {p.state.isSelectImageContainerOpen && (
          <ImagePicker
            images={p.state.images}
            callback={p.handlers.handleSelectImage}
            mode="pizzas"
          />
        )}
      </Content>
    </Container>
  );
};

export default View;
