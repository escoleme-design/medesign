import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Button from '../Button';
import {IButtonProps} from '../Button.types';
import docs from './Button.docs.mdx';
import dedent from 'dedent'
import Wrapper from '../../../../../../.storybook/components/Wrapper';
import { CodeOutlined } from '@escoleme/meicons-react';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
  parameters: {
    docs: { 
      page: docs,
    }
  },
  argTypes: {
    size: {
      options: ['small', 'normal', 'large', 'big'],
      control: { type: 'select'},
      description: "Defina o tamanho do botão, o padrão é normal.",
      table: {
        defaultValue: { summary: '"normal"' },
      }
    },
    uppercase: {
      options: [false, true],
      description: "Defina se o botão vai ter texto uppercase, o padrão é false.",
      table: {
        defaultValue: { summary: false },
      }
    },
    block: {
      options: [false, true],
      description: "Define a largura do botão em 100% do elemento parent.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    success: {
      options: [false, true],
      description: "Define se o botão vai ter estado de bem-sucedido",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    disabled: {
      options: [false, true],
      description: "Desativa o botão visualmente e funcionamente.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    loading: {
      options: [false, true],
      description: "Torna o botão inativo apenas visuamente e mostra um loading spinner.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    danger: {
      options: [false, true],
      description: "Muda a cor do botão para vermelho para sinalizar ao usuário que a ação é irreversível ou perigosa.",
      table: {
        defaultValue: { summary: "" },
      }
    },
    target: {
      options: ['', '_black', '_self', '_parent', '_top'],
      control: { type: 'select'},
      description: "Define como o navegador deve redirecionar o link",
      table: {
        defaultValue: { summary: "" },
      }
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: 'select'},
      description: "Defina 4 tipos de botões, o padrão é contained.",
      table: {
        defaultValue: { summary: '"contained"' },
      }
    },
    children: {
      description: "Defina o conteúdo do botão.",
    },
    onClick: {
      description: "Define a função do botão quando for clicado.",
      table: {
        defaultValue: { summary: "Function" },
      }
    },
    className: {
      description: "Defina a class (html) do botão.",
    },
    id: {
      description: "Defina o id (html) do botão.",
    },
    type: {
      description: "Tipo HTML do botão.",
    },
    href: {
      description: "Defina a URL para navegar quando o botão é clicado.",
    },
  }
} as ComponentMeta<any>;

export const Base: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />

Base.args = {
  onClick: () => alert("oi"),
  label: 'Click me',
  variant: 'filled',
}

export const Variants = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      variant="tonal"
      label="Filled Tonal"
    />
    <Button
      {...args}
      variant="outlined"
      label="Outlined"
    />
    <Button
      {...args}
      variant="text"
      label="Text"
    />
  </> 
);

Variants.parameters = {
  docs: {
    source: {
      code: dedent(`
      <Button {...args} variant="filled">
        Contained
      </Button>
    
      <Button {...args} variant="outlined">
        Outlined
      </Button>
    
      <Button {...args} variant="text">
        Text
      </Button>
      `),
      language: 'jsx'
    }
  }
};

export const Danger = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      variant="filled"
      danger
      label="Filled"
    />
    <Button
      {...args}
      variant="tonal"
      danger
      label="Filled Tonal"
    />
    <Button
      {...args}
      variant="outlined"
      danger
      label="Outlined"
    />
    <Button
      {...args}
      variant="text"
      danger
      label="Text"
    />
  </>
);

export const Size = (args: IButtonProps) => (
  <>
  </>
);

export const Block = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      block
      label="block"
    />
  </>
);

export const Ellipse = (args: IButtonProps) => (
  <div style={{
    width: '30%',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <Button
      {...args}
      block
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    />
  </div>
);

export const Disable = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      disabled
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      disabled
      variant="tonal"
      label="Filled tonal"
    />
    <Button
      {...args}
      disabled
      variant="outlined"
      label="Outlined"
    />
    <Button
      {...args}
      disabled
      variant="text"
      label="Text"
    />
  </>
);

export const Loading = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      loading
      rtl
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      loading
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      loading
      variant="tonal"
      label="Filled tonal"
    />
    <Button
      {...args}
      loading
      variant="outlined"
      label="Outlined"
    />
    <Button
      {...args}
      loading
      variant="text"
      label="Text"
    />
  </>
);

export const Success = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      success
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      success
      variant="tonal"
      label="Filled tonal"
    />
    <Button
      {...args}
      success
      variant="outlined"
      label="Outlined"
    />
    <Button
      {...args}
      success
      variant="text"
      label="Text"
    />
  </>
);

export const Icon = (args: IButtonProps) => (
  <>
    <div>
      <>
      <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        iconAlign="left"
        label="Icon align to left"
        variant="filled"
      />
      <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        iconAlign="right"
        label="Icon align to right"
        variant="filled"
      />
    </>
    </div>
    <div>
      <>
      <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        rtl
        iconAlign="left"
        label="Icon align to left rtl"
        variant="filled"
      />
      <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        rtl
        iconAlign="right"
        label="Icon align to right rtl"
        variant="filled"
      />
    </>
    </div>
  </>
);

export const RTL = (args: IButtonProps) => (
  <>
  </>
);

export const LoadingLabel = (args: IButtonProps) => (
  <>
  </>
);

export const OnlyIcon = (args: IButtonProps) => (
  <>
    <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        iconAlign="left"
        variant="filled"
      />
  </>
);

export const Type = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      type="submit"
      label="Filled"
      variant="filled"
    />
    <Button
      {...args}
      type="submit"
      label="Outlined"
      variant="outlined"
    />
    <Button
      {...args}
      type="submit"
      label="Text"
      variant="text"
    />
    <Button
      {...args}
      type="submit"
      label="Filled tonal"
      variant="tonal"
    />
  </>
);

export const Href = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      href="#"
      label="Filled"
      variant="filled"
    />
    <Button
      {...args}
      href="#"
      label="Outlined"
      variant="outlined"
    />
    <Button
      {...args}
      href="#"
      label="Text"
      variant="text"
    />
    <Button
      {...args}
      href="#"
      label="Filled tonal"
      variant="tonal"
    />
  </>
);